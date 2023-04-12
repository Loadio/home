
/*------------------------------//
Funcionalidade do site
//-------------------------------*/





//Sem suporte resolução
const widthTeste = window.matchMedia("(max-width: 225px)");
if (widthTeste.matches) {
    document.body.innerHTML = '<style>body{background:white;}.Ld_loading div{background-color:black;}}</style><div style="width: 100%;height: 100%;display: flex;justify-content: center;align-items: center;position: absolute;flex-direction: column;"><p style="font-weight:600;padding: 10px;text-align: center;">A Loadio não suporta esta resolução, por favor aumente a resolução do seu aparelho, e recarrege a página!!</p><div class="Ld_loading"><div></div><div></div><div></div></div></div>';
}
if (window.width < 340) {
    document.body.innerHTML = '<style>body{background:white;}.Ld_loading div{background-color:black;}}</style><div style="width: 100%;height: 100%;display: flex;justify-content: center;align-items: center;position: absolute;flex-direction: column;"><p style="font-weight:600;padding: 10px;text-align: center;">A Loadio não suporta esta resolução, por favor aumente a resolução do seu aparelho, e recarrege a página!!</p><div class="Ld_loading"><div></div><div></div><div></div></div></div>';
 }

// //Search
// var searchLTF = true
// document.querySelector('.plus-menu-itens a').addEventListener //OPEN SEARCH PAINEL
// ('click', function(){
//     if (searchLTF) {
//         document.querySelector('.logo-footer_56497 a').click() //click footer img
//         setTimeout( function(){
//         document.querySelector('.search-menu').style.display = "block"
//         document.querySelector('.plus-menu-itens').style.cssText = "background-color:var(--global-pallet-color-black-secondary);"
//         document.body.style.cssText = "overflow: hidden;"
//         document.querySelector('.menu-phone_13670').style.cssText = "content-visibility: hidden;"
//         if (mb1 === false) { 
//         document.querySelector('.dropdown').click() 
//         document.querySelector('.bars').click()
//         }
//         searchLTF = false;
//     },100)
//     }})
// document.querySelector('.header-search-painel div').addEventListener //CLOSE SEARCH PAINEL
// ('click', function(){
//     if (searchLTF !== true) {
//         document.querySelector('.search-menu').style.cssText= " "
//         document.querySelector('.plus-menu-itens').style.cssText = " "
//         document.querySelector('.menu-phone_13670').style.cssText = " "
//         document.querySelector('.Ldhome_itens-header_54094 .logo_66831').style.cssText = " "
//         searchLTF = true;
//         document.body.style.cssText = " "
//     }})

// document.querySelector('.logo_66831 .logo-img svg').addEventListener('click',() =>{
//   window.location.href = "http://" + window.location.host + "";
// })



let icon = document.querySelector(".menu_icon");

icon.addEventListener("click", () => {
  icon.classList.toggle("clicked");
  document.querySelector('.navbar-menu_').classList.toggle("clicked");
  $('main').toggleClass("menu-active");
});


function alinkclick(item){
  if (item == 1) {
    document.querySelector('.control:nth-child(1)>a').click()
  } else {
    document.querySelector('.control:nth-child(2)>a').click()
  }
}