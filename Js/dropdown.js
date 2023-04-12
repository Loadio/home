/*
const mqpc = window.matchMedia( "(max-width: 1024px)" );
document.querySelector('.itens-menu').addEventListener("click", (evt) =>{
const testessss = document.querySelector('#contents')
let pcc = evt.target
console.log(pcc)
    if (pcc === testessss) {
        console.log('Apertou dentro')
    } else {
        console.log('Apertou fora')
    }
})

    pc1 = true
if (mqpc.matches) {
    document.querySelector('.dropdown').addEventListener("click",function(){
    if (pc1 === true) {
        document.querySelector('.dropdown-content').style.cssText = "animation:dropdown-height 250ms;height:150px;display:flex;"
        pc1 = false
    } else {
            document.querySelector('.dropdown-content').style.cssText = "animation:dropdown-height-out 250ms;height:150px;display:flex;"
            document.querySelector('.dropdown-content').style.cssText = "animation:dropdown-height-out 250ms;height:0px;display:flex;"
            pc1 = true
            close_dropdown()
            function close_dropdown(){
                setTimeout(function(){
            document.querySelector('.dropdown-content').style.cssText = " "
        },280)}
        }})
}
else(
    console.log("testre")
)

//Tablet responsive
/*
document.querySelector('.dropdown').addEventListener("click",function(){
const mq = window.matchMedia( "(max-width: 768px)" );
if (mq.matches) {
    document.querySelector('.dropdown-content').style.cssText = "animation:dropdown-height-tablet 250ms;display:flex;"
    document.querySelector('.dropdown-content').style.cssText = "animation:dropdown-height-out-tablet 250ms;height:0px;display:flex;"
} else {
   
   }
})*/
