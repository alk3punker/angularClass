import {Friend} from './Friend';

let FriendList : Friend[] = [ new Friend("Tim",35,'TimmyR@gmail.com',false),
new Friend('Kevin',38,'Ksteel@gmail.com',true),
new Friend("Jake",29,'JakeMan@gmail.com',false),
new Friend("Ben",37,"BenNerd@gmail.com",false),
new Friend("Adam",39,"AHardw@gmail.com",false)
];

console.log("Name\tAge\tEmail\t\t\tBest");

for (let friend of FriendList)
{
    let bestYN :string = "No";
    if (friend.BestFriend)
        {
            bestYN = "Yes";
        }
    console.log(`${friend.fullName}\t${friend.age}\t${friend.email}\t${bestYN}`);
}
