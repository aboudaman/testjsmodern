import fetch from "node-fetch";

console.log("================");
console.log("Modern JavaScript");
console.log("================");
// let firstName = "Abou";
// console.log(firstName.padEnd(8, "$"))
// console.log(firstName.padStart(8, "$"))

let api_key = "917BCA0849B10B91CABACE32BECB152F";
let game_id = "440";

// let house_properties = {
//   color: "white",
//   size: 200,
//   roof_type: "metal sheet",
// };

// console.log(house_properties['size'])
// console.log(house_properties.roof_type)
// const result = (num1, num2, num3=4) => {
//     return num1+num2+num3
// }
// const val = result(2,3)
// console.log(val)

// const promise = new Promise((resolve, reject) => {
//   let a = 5;
//   if (a == 51) {
//     resolve("Promise is resolved SUCCESSFULLY !!!");
//   } else {
//     reject("Promise has been rejected FAILURE!!!");
//   }
// });

// promise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((message) => {
//     console.log(message);
//   });

// function cal1(n1, n2) {
//     return n1+n2
// }
// const val1 = cal1(3, 5)
// console.log (val1)

// async function cal2(n1, n2) {
//     const resp = await n1 + n2
//     return resp
// }
// const val2 = cal2(1, 3)
// console.log(val2)
class Achievement {
    constructor(name, percentage) {
        this.name = name
        this.percentage = percentage
    }

    printValues() {
        console.log(`The achievement ${this.name} has a percentage of ${this.percentage}`)
    }
}
const url =
//   "https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=440";
  "https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=440"

//   try {
//         const data = await fetch(url);
//         const dataJSON = await data.json();
//         printData(dataJSON)   
//   } catch (error) {
//       console.log(error)
      
//   }

function printData(jsonData) {
    let jsonObject = jsonData['achievementpercentages']
    let allAchievements = jsonObject['achievements']
    let achievementArray = []
    for (let achievement of allAchievements) {
        let name = achievement['name']
        let percentage = achievement['percent']
        let newAchievement = new Achievement(name, percentage)
        achievementArray.push(newAchievement)
        // newAchievement.printValues()
    }
    // console.log(achievementArray)
    // for (let n of achievementArray) {
    //     console.log(n['name'])
    // }
}

let nums = [1, 3, 4, 4]
let nums2 = [1, 3, 4, 4]
let cars = [
    {model: 'audi', price: 10000},
    {model: 'mercedex', price: 20000},
    {model: 'lamborghini', price: 30000},
]
cars.map((model, price) => {
    model.price += 1
})
// console.log(cars)
let numsWithReturnMap = nums.map((number, index) => {
    return number += 1 
})

let numsWithReturnForEach = nums2.forEach((number) => {
    return number += 1
})

console.log(nums)
console.log(numsWithReturnMap)
console.log(nums2)
console.log(numsWithReturnForEach)
console.log(nums2)
console.log(`null == undefined ==> ${null == undefined}`)
console.log(`null === undefined ==> ${null === undefined}`)
console.log(typeof null)
console.log(typeof undefined)

// console.log(cars)