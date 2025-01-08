const itemList = document.querySelectorAll(".item")
console.log(itemList);
let mainContainer = document.querySelector("main")
let mainContainerinner = document.querySelector(".main-container")

itemList.forEach(function(item){
    console.log(item);
    console.log(item.id);

    item.addEventListener("click",(clicked)=>{
        console.log(clicked.target)
        let bgColor =window.getComputedStyle(clicked.target).backgroundColor
        console.log(bgColor);
        mainContainer.style.backgroundColor = `${bgColor}`
        mainContainerinner.style.backgroundColor = `${bgColor}`
    })
})