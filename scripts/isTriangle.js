const angle1 = document.querySelector("#angle1")
const angle2 = document.querySelector("#angle2")
const angle3 = document.querySelector("#angle3")
const isTriangleButton = document.querySelector("#btn-isTriangle")
const isTriangleOutput = document.querySelector("#output-is-triangle")

isTriangleButton.addEventListener("click", function isTriangleHandler() {
    console.log(navigator.userAgentData.brands);
    isTriangleOutput.innerText = angle1 + " " + angle2 + " " + angle3;
})
