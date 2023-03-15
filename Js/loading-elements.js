//Elementos da pagina da loadio principal//

//Nome ferramenta e do site para nome projeto
var tool_name = location.pathname.split(/(\\|\/)/g).pop().split('.html')
document.title = tool_name[0].replaceAll('-',' ') + " | Loadio";
$("head title").text(function(i, text) { //Colocar primeira letra como maiuscula do title head
  return text.substr(0,1).toUpperCase() + text.substr(1);
});

  //Sem suporte resolução
if ($(window).width() < 310) {
  document.body.innerHTML = '<style>body{background:white;}.Ld_loading div{background-color:black;}}</style><div style="width: 100%;height: 100%;display: flex;justify-content: center;align-items: center;position: absolute;flex-direction: column;"><p style="font-weight:600;padding: 10px;text-align: center;">A Loadio não suporta esta resolução, por favor aumente a resolução do seu aparelho, e recarrege a página!!</p><div class="Ld_loading"><div></div><div></div><div></div></div></div>';
}

//Import elements
var shortcut_icon_export = localStorage.getItem('shortcut-icon')
$('<link rel="shortcut icon" href="'+shortcut_icon_export+'" type="image/x-icon">').appendTo("head");
var header_export = localStorage.getItem('header-ld')
$("#loadio-header-element-export").html(header_export); //Import header
var footer_export = localStorage.getItem('footer-ld')
$("#loadio-footer-element-export").html(footer_export); //Import footer
var loading_dots_animation = localStorage.getItem('loading_dots_animation_loadio')
$('#preloader .loader').html(loading_dots_animation)

//Verifica se tem um erro nas 'etp' e Criar elemento (Error cunstom)
function checkept(){
    setTimeout( function (){
    let etp1 = sessionStorage.getItem('etp1');
    let etp2 = sessionStorage.getItem('etp2');
    if (etp1 == etp2) { //Checagem das etp 1,2 derão true(Funcionanram)
      putnamechannel();
      $('.Error-cusntom').remove();
      sessionStorage.removeItem('etp1')
      sessionStorage.removeItem('etp2')
    } else { //Checagem das etp 1,2 derão false(Não funcionanram)
      let loadio_error_images_found = "/Img/error/error-found-laodio01.png"
$('<div class="Error-cusntom"><div class="Error-custom-element"><h2>Nada foi encontrado!</h2><p>Este canal não existe, ou não foi encontrado, por favor verifique se o link do canal está correto!</p></div></div>').appendTo("#content")
$('#content').css('transition', 'all 0.5s ease-out 0s');
$('#content').css('background-color', 'var(--global-pallet-color-blue-error-bg)');
$('#content').css('display', 'flex');
$('#content').css('height', '0px');
$('#content').css('height', '460px');
$('#preloader').css('display', 'none');
      console.log("Deu error!!!")
      sessionStorage.removeItem('etp1')
      sessionStorage.removeItem('etp2')
    }},5500)
    }
