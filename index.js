//Bai 1

// function allLongestStrings(inputArray) {
//     let maxArr = inputArray[0].length;
//     let ans = inputArray[0];
//     for(let i = 0; i < inputArray.length; i++){
//         let maxI = inputArray[i].length;
//         if(maxI > maxArr){
//             ans = inputArray[i];
//             maxArr = maxI;
//         }
//     }
//     return ans;
// }

// console.log(allLongestStrings(["BINH", "HUNG", "PHUOC", "CAO", "KHANH"]))

//Bai 3
let container = document.querySelector(".container");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let gradientColor = document.querySelector(".gradientColor");
let randomGradient = document.getElementById("randomGradient");

function randomColor(){
    const random = Math.floor(Math.random() * 16777215).toString(16);
    return random;
}

function setGradient(){
    document.body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
}

function generateRandomColor(){
    document.body.style.backgroundColor = "#" + randomColor();
    document.getElementById("color").innerHTML = "#" + randomColor();
}

function generateRandomGradient(){
    color1.value = "#" + randomColor();
    color2.value = "#" + randomColor();
    setGradient();
}

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);
randomGradient.addEventListener("click", generateRandomGradient);



