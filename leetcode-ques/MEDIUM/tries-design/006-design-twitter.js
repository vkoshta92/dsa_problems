/*
    Problem: Design Twitter
    Difficulty: Medium
    Companies: Amazon, Google, Meta, Microsoft, Apple

    Problem Statement:
    Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and is able to see the 10 most recent tweets in the user's news feed.
    Implement the Twitter class:
    - Twitter() Initializes your twitter object.
    - void postTweet(int userId, int tweetId) Composes a new tweet with ID tweetId by the user userId. Each call to this function will be made with a unique tweetId.
    - List<Integer> getNewsFeed(int userId) Retrieves the 10 most recent tweet IDs in the user's news feed. Each item in the news feed must be posted by users who the user is following or by the user themselves. Tweets should be ordered from most recent to least recent.
    - void follow(int followerId, int followeeId) The user with ID followerId started following the user with ID followeeId.
    - void unfollow(int followerId, int followeeId) The user with ID followerId started unfollowing the user with ID followeeId.

    Example 1:
    Input: ["Twitter","postTweet","getNewsFeed","follow","postTweet","getNewsFeed","unfollow","getNewsFeed"]
           [[],[1,5],[1],[1,2],[2,6],[1],[1,2],[1]]
    Output: [null,null,[5],null,null,[6,5],null,[5]]
*/

/*
    Hinglish Explanation (Detailed Logic):

    Twitter design mein hume teen main cheezein track karni hain:
    1. Tweets - Kaun sa user ne kya tweet kiya aur kab
    2. Follows - Kaun kisko follow kar raha hai
    3. News Feed - 10 sabse latest tweets dikhana

    Data Structures:
    - tweetsMap: userId -> [{tweetId, timestamp}] (har user ke tweets)
    - followMap: userId -> Set of followeeIds (har kiske followers hain)
    - timestamp: counter jo har operation pe badhta hai (ordering ke liye)

    postTweet(userId, tweetId):
    - tweetsMap mein userId ke list mein naya tweet add karo with current timestamp.
    - Timestamp badha do.

    follow(followerId, followeeId):
    - followMap mein follower ki following list mein followeeId add karo.
    - Apne aap ko follow karne se bacho!

    unfollow(followerId, followeeId):
    - followMap mein follower ki following list se followeeId hatao.

    getNewsFeed(userId):
    - Yeh sabse complex operation hai. Humne 10 sabse latest tweets find karni hain
      from: userId's own tweets + all followees' tweets.
    - Approach:
      1. Saare relevant tweets (own + followees') collect karo.
      2. Timestamp ke basis pe sort karo (most recent first).
      3. Top 10 return karo.
    - Optimized approach: Min-Heap use kar sakte hain lekin for simplicity
      yahan pe sort approach use kiya hai.

    Timestamp ka fayda: Har tweet uniquely ordered hota hai,
    isliye ties resolve karte waqt koi confusion nahi hota.
*/

class Twitter {
    constructor() {
        this.tweetsMap = new Map(); // userId -> [{tweetId, timestamp}]
        this.followMap = new Map(); // userId -> Set of followeeIds
        this.timestamp = 0;
    }

    postTweet(userId, tweetId) {
        if (!this.tweetsMap.has(userId)) {
            this.tweetsMap.set(userId, []);
        }
        this.tweetsMap.get(userId).push({
            tweetId: tweetId,
            timestamp: this.timestamp++
        });
    }

    follow(followerId, followeeId) {
        if (followerId === followeeId) return; // Can't follow yourself

        if (!this.followMap.has(followerId)) {
            this.followMap.set(followerId, new Set());
        }
        this.followMap.get(followerId).add(followeeId);
    }

    unfollow(followerId, followeeId) {
        if (this.followMap.has(followerId)) {
            this.followMap.get(followerId).delete(followeeId);
        }
    }

    getNewsFeed(userId) {
        // Collect all relevant tweets (own + followees')
        let allTweets = [];

        // Add own tweets
        if (this.tweetsMap.has(userId)) {
            allTweets = allTweets.concat(this.tweetsMap.get(userId));
        }

        // Add followees' tweets
        if (this.followMap.has(userId)) {
            for (const followeeId of this.followMap.get(userId)) {
                if (this.tweetsMap.has(followeeId)) {
                    allTweets = allTweets.concat(this.tweetsMap.get(followeeId));
                }
            }
        }

        // Sort by timestamp descending (most recent first)
        allTweets.sort((a, b) => b.timestamp - a.timestamp);

        // Return top 10 tweet IDs
        return allTweets.slice(0, 10).map(tweet => tweet.tweetId);
    }
}

/*
    Time Complexity:
        - postTweet: O(1) - append to list
        - follow: O(1) - set insert
        - unfollow: O(1) - set delete
        - getNewsFeed: O(N log N) where N = total tweets from user + followees
          (due to sorting). Can be optimized to O(N * 10) using min-heap.

    Space Complexity: O(T + F)
        - T = total tweets stored across all users
        - F = total follow relationships
*/

// Test Cases
console.log("Test Case 1: Basic operations");
const twitter1 = new Twitter();
twitter1.postTweet(1, 5);
console.log("getNewsFeed(1) -> Expected: [5], Actual:", twitter1.getNewsFeed(1));
twitter1.follow(1, 2);
twitter1.postTweet(2, 6);
console.log("getNewsFeed(1) -> Expected: [6, 5], Actual:", twitter1.getNewsFeed(1));
twitter1.unfollow(1, 2);
console.log("getNewsFeed(1) -> Expected: [5], Actual:", twitter1.getNewsFeed(1));
console.log("---");

console.log("Test Case 2: Multiple users and tweets");
const twitter2 = new Twitter();
twitter2.postTweet(1, 100);
twitter2.postTweet(2, 200);
twitter2.follow(1, 2);
console.log("getNewsFeed(1) -> Expected: [200, 100], Actual:", twitter2.getNewsFeed(1));
console.log("getNewsFeed(2) -> Expected: [200], Actual:", twitter2.getNewsFeed(2));
console.log("---");

console.log("Test Case 3: More than 10 tweets");
const twitter3 = new Twitter();
for (let i = 1; i <= 15; i++) {
    twitter3.postTweet(1, i);
}
const feed = twitter3.getNewsFeed(1);
console.log("getNewsFeed(1) -> Expected: [15,14,13,12,11,10,9,8,7,6], Actual:", feed);
console.log("---");

console.log("Test Case 4: Self follow prevention");
const twitter4 = new Twitter();
twitter4.follow(1, 1); // Should be ignored
twitter4.postTweet(1, 10);
console.log("getNewsFeed(1) -> Expected: [10], Actual:", twitter4.getNewsFeed(1));
console.log("---");

module.exports = Twitter;
