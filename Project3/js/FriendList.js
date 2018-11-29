"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Friend_1 = require("./Friend");
var FriendList = [new Friend_1.Friend("Tim", 35, 'TimmyR@gmail.com', false),
    new Friend_1.Friend('Kevin', 38, 'Ksteel@gmail.com', true),
    new Friend_1.Friend("Jake", 29, 'JakeMan@gmail.com', false),
    new Friend_1.Friend("Ben", 37, "BenNerd@gmail.com", false),
    new Friend_1.Friend("Adam", 39, "AHardw@gmail.com", false)
];
console.log("Name\tAge\tEmail\t\t\tBest");
for (var _i = 0, FriendList_1 = FriendList; _i < FriendList_1.length; _i++) {
    var friend = FriendList_1[_i];
    var bestYN = "No";
    if (friend.BestFriend) {
        bestYN = "Yes";
    }
    console.log(friend.fullName + "\t" + friend.age + "\t" + friend.email + "\t" + bestYN);
}
