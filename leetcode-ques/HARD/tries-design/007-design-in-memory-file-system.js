/*
    Problem: Design In-Memory File System
    Difficulty: Hard
    Companies: Google, Amazon, Meta, Microsoft, Apple

    Problem Statement:
    Design an in-memory file system to simulate the following two operations:
    - ls(path): Lists all files and directories in the given path (or file itself if it's a file). The path is a string starting with '/'. If it's a file, return the file name.
    - mkdir(path): Makes a new directory according to the given path. The given path does not exist. The middle directory names should also be created.
    - addContentToFile(filePath, content): First creates the file if it does not exist, or appends content to the existing file. filePath is a string representing the path of the file.
    - readContentFromFile(filePath): Returns the content of the file at filePath.

    Example 1:
    Input: ["FileSystem","ls","mkdir","ls","addContentToFile","readContentFromFile","ls","readContentFromFile"]
           [[],["/"],["/a/b/c"],["/"],["/a/b/c/d","hello"],["/a/b/c/d"],["/a/b/c"],["/a/b/c/d"]]
    Output: [null,[],null,["a"],null,null,["d"],null,"hello"]
*/

/*
    Hinglish Explanation (Detailed Logic):

    Yeh problem ek file system simulate karti hai. Hum Trie-like structure use karenge
    jahan har node ek file ya folder represent karega.

    TrieNode class:
    - children: Map of child name -> TrieNode (folders aur files)
    - content: String (sirf files ka content, folders ke liye empty)
    - isFile: Boolean (kya yeh file hai ya folder)

    ls(path):
    - Path ko split karo '/' se.
    - Root se shuru karke path follow karo.
    - Agar path kisi file pe end hota hai, toh sirf file name return karo.
    - Agar path kisi folder pe end hota hai, toh uske saare children (names) sorted return karo.

    mkdir(path):
    - Path ko split karo '/' se.
    - Root se shuru karke har directory create karo agar exist nahi karti.
    - Sirf directories create hoti hain, files nahi.

    addContentToFile(filePath, content):
    - filePath ko split karo. Last part file name hai, baaki directories hain.
    - Saari directories create karo (agar nahi hain).
    - File create karo ya existing file mein content append karo.

    readContentFromFile(filePath):
    - Path follow karo aur file node pe pahuncho.
    - Uska content return karo.

    Trie structure isliye best hai kyunki:
    - Path traversal O(L) hoti hai (L = path length)
    - Har operation efficient hota hai
    - Nested folders naturally represent hote hain
*/

class TrieNode {
    constructor() {
        this.children = new Map(); // name -> TrieNode
        this.content = '';         // File content (empty for directories)
        this.isFile = false;       // Is this node a file?
    }
}

class FileSystem {
    constructor() {
        this.root = new TrieNode();
    }

    // Helper: Navigate to the last node in path
    _navigate(path) {
        const parts = path.split('/').filter(part => part !== '');
        let node = this.root;

        for (const part of parts) {
            if (!node.children.has(part)) {
                return null; // Path doesn't exist
            }
            node = node.children.get(part);
        }

        return node;
    }

    ls(path) {
        const node = this._navigate(path);

        if (!node) {
            return [];
        }

        // If it's a file, return just the filename
        if (node.isFile) {
            const parts = path.split('/').filter(part => part !== '');
            return [parts[parts.length - 1]];
        }

        // If it's a directory, return sorted list of children
        return Array.from(node.children.keys()).sort();
    }

    mkdir(path) {
        const parts = path.split('/').filter(part => part !== '');
        let node = this.root;

        for (const part of parts) {
            if (!node.children.has(part)) {
                node.children.set(part, new TrieNode());
            }
            node = node.children.get(part);
        }
    }

    addContentToFile(filePath, content) {
        const parts = filePath.split('/').filter(part => part !== '');
        let node = this.root;

        // Navigate/create directories
        for (let i = 0; i < parts.length - 1; i++) {
            if (!node.children.has(parts[i])) {
                node.children.set(parts[i], new TrieNode());
            }
            node = node.children.get(parts[i]);
        }

        // Create file if doesn't exist, or append content
        const fileName = parts[parts.length - 1];
        if (!node.children.has(fileName)) {
            const fileNode = new TrieNode();
            fileNode.isFile = true;
            node.children.set(fileName, fileNode);
        }

        const fileNode = node.children.get(fileName);
        fileNode.content += content;
    }

    readContentFromFile(filePath) {
        const node = this._navigate(filePath);

        if (!node || !node.isFile) {
            return '';
        }

        return node.content;
    }
}

/*
    Time Complexity:
        - ls: O(L + K log K) where L = path parts, K = number of children
        - mkdir: O(L) where L = path parts
        - addContentToFile: O(L + C) where L = path parts, C = content length
        - readContentFromFile: O(L) where L = path parts

    Space Complexity: O(N * L)
        - N = total number of files and directories
        - L = average path length
        - Each node stores children map and optional content
*/

// Test Cases
console.log("Test Case 1: Basic filesystem operations");
const fs1 = new FileSystem();
fs1.mkdir("/a/b/c");
console.log("ls('/') -> Expected: ['a'], Actual:", fs1.ls("/"));
fs1.addContentToFile("/a/b/c/d", "hello");
console.log("readContentFromFile('/a/b/c/d') -> Expected: 'hello', Actual:", fs1.readContentFromFile("/a/b/c/d"));
console.log("ls('/a/b/c') -> Expected: ['d'], Actual:", fs1.ls("/a/b/c"));
console.log("---");

console.log("Test Case 2: Multiple files and directories");
const fs2 = new FileSystem();
fs2.mkdir("/a/b/c");
fs2.mkdir("/a/b/d");
fs2.addContentToFile("/a/b/c/file1.txt", "content1");
fs2.addContentToFile("/a/b/d/file2.txt", "content2");
console.log("ls('/a/b') -> Expected: ['c', 'd'], Actual:", fs2.ls("/a/b"));
console.log("ls('/a/b/c') -> Expected: ['file1.txt'], Actual:", fs2.ls("/a/b/c"));
console.log("---");

console.log("Test Case 3: Append content to existing file");
const fs3 = new FileSystem();
fs3.addContentToFile("/file.txt", "Hello");
fs3.addContentToFile("/file.txt", " World");
console.log("readContentFromFile('/file.txt') -> Expected: 'Hello World', Actual:", fs3.readContentFromFile("/file.txt"));
console.log("---");

console.log("Test Case 4: Read non-existent file");
const fs4 = new FileSystem();
console.log("readContentFromFile('/notexist') -> Expected: '', Actual:", fs4.readContentFromFile("/notexist"));
console.log("ls('/notexist') -> Expected: [], Actual:", fs4.ls("/notexist"));
console.log("---");

module.exports = FileSystem;
