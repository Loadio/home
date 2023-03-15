//Funcionalidade do site//
//Sem suporte resolução
if ($(window).width() < 310) {
    document.body.innerHTML = '<style>body{background:white;}.Ld_loading div{background-color:black;}}</style><div style="width: 100%;height: 100%;display: flex;justify-content: center;align-items: center;position: absolute;flex-direction: column;"><p style="font-weight:600;padding: 10px;text-align: center;">A Loadio não suporta esta resolução, por favor aumente a resolução do seu aparelho, e recarrege a página!!</p><div class="Ld_loading"><div></div><div></div><div></div></div></div>';
 }

//Duplicador toos area auto
window.addEventListener("load", function() {
let tool = 0 //Aquantidade de ferramentas
var cloneCount = 1
var $div = $('.tools-recomend_151756 ul a:last');
const interval = setInterval(() => { //Ativa loop temporario
$('.tools-recomend_151756 ul a:last').clone().prop('class', 'Tools-item-'+ cloneCount++).appendTo('.tools-recomend_151756 ul') //Clona o elemento q está a ferramenta(Clona a div)
$('.tools-recomend_151756 ul a:last .description-tool').html('<li>Item '+cloneCount+'</li>')//Muda o texto da div clonada
$('.tools-recomend_151756 ul a:last').prop('class', 'item'+ cloneCount)//muda a chasse da div mudada
},100)
setTimeout(() => clearInterval(interval),  tool + '00')//desativa loop temporario
})

//Search
var searchLTF = true
document.querySelector('.plus-menu-itens a').addEventListener('click', function(){ //OPEN SEARCH PAINEL
    if (searchLTF) {
        document.querySelector('.logo-footer_56497 a').click() //click footer img
        setTimeout( function(){
        document.querySelector('.search-menu').style.display = "block"
        document.querySelector('.plus-menu-itens').style.cssText = "background-color:var(--global-pallet-color-black-secondary);"
        document.body.style.cssText = "overflow: hidden;"
        document.querySelector('.menu-phone_13670').style.cssText = "content-visibility: hidden;"
        if (mb1 === false) { 
        document.querySelector('.dropdown').click() 
        document.querySelector('.bars').click()
        }
        searchLTF = false;
    },100)
    }})
document.querySelector('.header-search-painel div').addEventListener('click', function(){ //CLOSE SEARCH PAINEL
    if (searchLTF !== true) {
        document.querySelector('.search-menu').style.cssText= " "
        document.querySelector('.plus-menu-itens').style.cssText = " "
        document.querySelector('.menu-phone_13670').style.cssText = " "
        document.querySelector('.Ldhome_itens-header_54094 .logo_66831').style.cssText = " "
        searchLTF = true;
        document.body.style.cssText = " "
    }})


//Menu mobile
function menumobile(x){
    x.classList.toggle("change")
}
    const mqmobile = window.matchMedia( "(max-width: 900px)" );
if (mqmobile.matches) {
    var mb1 = true
let mbiconmenu = document.querySelector('.menu-phone-item')
mbiconmenu.addEventListener("click", function(){
  let mbicon = document.querySelector('.itens-menu')
  if (mb1) {
    document.querySelector('.logo-footer_56497 a').click() //click footer img
    setTimeout( function(){
    mbicon.style.cssText = "display:flex;"
    document.querySelector(".menu-phone_13670").style.cssText = "background-color:black;"
    document.querySelector(".bar1").style.cssText = "background-color:white;"
    document.querySelector(".bar2").style.cssText = "background-color:white;"
    document.querySelector(".bar3").style.cssText = "background-color:white;"
    document.querySelector('.plus-menu').style.cssText = "visibility: hidden;"
    document.body.style.cssText = "overflow: hidden;"
    mb1 = false  
    mb3 = true 
},10)
}else{
    document.querySelector('.dropdown-content').style.cssText = "display:none;"
    document.querySelector(".bar1").style.cssText = ""
    document.querySelector(".bar2").style.cssText = ""
    document.querySelector(".bar3").style.cssText = ""
    document.querySelector('.plus-menu').style.cssText = ""
    document.querySelector('.Ldhome_itens-header_54094 .logo_66831').style.cssText = ""
    document.body.style.cssText = " "
    mbicon.style.cssText = ""
    document.querySelector('.icon-dropdown').style.cssText = ""
    mb1 = true
    mb3 = true
    document.querySelector(".menu-phone_13670").style.cssText = ""
}
})
//Dropdown icon 
let mb3 = true
document.querySelector('.dropdown').addEventListener("click",function (){
let mb2 = document.querySelector('.dropdown-content');
let mbarrow = document.querySelector('.icon-dropdown');
    if (mb3) {
    mb2.style.cssText = "display:flex;position: relative;top:0;"
    mbarrow.style.cssText = "rotate: 180deg;"
    mb3 = false  
} else {
    mb2.style.cssText = "animation:dropdown-height-out 250ms;position: relative;top:0;"
    setTimeout(function(){mb2.style.cssText = "display:none;"}, 200)
    mbarrow.style.cssText = ""
    mb3 = true
  }
 }
)
} else {
  /*Não é celular*/
   }
//Criar div para discord incon parceria
if (!$('.discord-icon').html()){
    $('<div class="discord-icon"><i class="fa-brands fa-discord"></i></div>').appendTo('.Ldhome_Parceria-element_23926 .discord')
}
$('.button-form button-main').addEventListener("click" ,function(){
$('.form-element input').val("")
$('.form-element textarea').val("")
})

//Quando for clicado em um item do menu mobile
$('.itens-menu a').addEventListener('click', $('.menu-phone_13670').click())


