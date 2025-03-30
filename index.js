const list = document.getElementById("list")
const navList = document.getElementById("navlist")
console.log(navList);


function listShow(){
    if(navList.style.right === "-10px"){
        navList.style.right = "-200px"
    } else{
        navList.style.right = "-10px"
    }
    
}
