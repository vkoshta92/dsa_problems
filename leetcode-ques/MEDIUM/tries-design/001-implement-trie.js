/* Implement Trie (Prefix Tree) | Medium
 * Company: Amazon, Google, Microsoft, Meta, Apple, Bloomberg
 * Hinglish: Har character ek node edge hai. Word end par isWord flag mark
 * karo; prefix search traversal complete hone par true dega.
 */
class TrieNode {
  constructor() { this.children = new Map(); this.isWord = false; }
}

class Trie {
  constructor() { this.root = new TrieNode(); }
  insert(word) {
    let node = this.root;
    for (const character of word) {
      if (!node.children.has(character)) node.children.set(character, new TrieNode());
      node = node.children.get(character);
    }
    node.isWord = true;
  }
  find(prefix) {
    let node = this.root;
    for (const character of prefix) {
      node = node.children.get(character);
      if (!node) return null;
    }
    return node;
  }
  search(word) { return this.find(word)?.isWord === true; }
  startsWith(prefix) { return this.find(prefix) !== null; }
}

const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple"), trie.search("app"), trie.startsWith("app")); // true false true
// insert/search/prefix: O(word length), Space: O(total inserted characters).
module.exports = { Trie, TrieNode };
