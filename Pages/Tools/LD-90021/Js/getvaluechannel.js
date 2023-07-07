/*------------------------------//
Coleta os dados do canal do youtube
//-------------------------------*/


//Check link YT --- Para verificar se é um link do youtube
function checklink(){
var checklink = document.getElementById('SearchBanner')
checklink = checklink.value.replace('','')
if (checklink.includes("https://www.youtube.com/")) {
  searchBannerLink()
}else{
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 500000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }})
  Toast.fire({
    icon: 'error',
    title: 'Link invalido! Adicione o link do Youtube:3'
  })}}

//Botão enter é usado para pesquisa
var input_S = document.getElementById('SearchBanner')
input_S.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); 
    document.getElementById("Button_search").click();
  }})

//Começar a pesquisa do canal(Botão de pesquisa clicado!)
function searchBannerLink() {
document.getElementById('content').style.cssText = 'display:flex;height:0px;margin-bottom:0px;'
document.querySelector('.itens-content').style.cssText = 'display:none;'
document.querySelector('.Aviso-error').style.cssText = 'display:none;'
document.getElementById('info-download').style.cssText = 'display:none;'
document.querySelector('.content-elements').style.cssText = 'display:none;'
setTimeout(function(){
document.getElementById('content').style.cssText = 'display:flex;height:250px;margin-bottom:0px;'
document.getElementById('preloader').style.cssText = 'display:flex;height:20%;'
},600)
//Checa se é ID ou Identificador(@Atm)
let valorinput = document.getElementById('SearchBanner')
valorinput = valorinput.value.replace('','')
if (valorinput.includes("https://www.youtube.com/@")) {
    putBannerLink_handle()
}else{
  putBannerLink_id()
}
}
//Identificador: @Atm, irá pegar o id do canal --- Procura o identificador do canal e trocará para o id do canal
function putBannerLink_handle() {
  console.log("Identificador!!!")
  var handlechannel = document.getElementById('SearchBanner').value;
  var idcanal = handlechannel.replace('https://www.youtube.com/','')
  //Coleta o id do canal pelo '@Atm' Identificador
  $.getJSON("https://yt.lemnoslife.com/channels?handle="+ idcanal +"&type=channel&key=AIzaSyBd1BCa2WQyAtEsC5wPAqETsJF8XbHvmxo", (data) => {
    const idcanal_get = data.items
    .map((idcanal) => `${idcanal.id}`)
    .join("");
    const idcanal_out = $("<ul />").html(idcanal_get); //Coletar o Id do canal
    var idcanal_handle = idcanal_out.html()
    sessionStorage.setItem("idcanal", idcanal_handle) //Gardar o nome do canal
  putidcanal()
  });
  //id do canal --- Colocar id do canal nas info ao lado do banner
  function putidcanal() {
  var idcanal = sessionStorage.getItem("idcanal")
  document.getElementById('YtInfo').innerText = idcanal;
  document.getElementById('ID').innerText = idcanal;
  searchidchannel()
  }}  

//ID do canal --- Procura o id do canal
function putBannerLink_id() {
var idcanal_valueinput = document.getElementById('SearchBanner').value;
var idcanal = idcanal_valueinput.replace('https://www.youtube.com/channel/','')
sessionStorage.setItem("idcanal", idcanal)
document.getElementById('ID').innerText = idcanal
searchidchannel()
}
//Procurar o ID do canal informado no imput de pesquisa
function searchidchannel(){
 //Coleta o id do canal
 sessionStorage.setItem('etp1',true)
 checkept()
 $('.Error-cusntom').remove();//Remover custom error
var idcanal = sessionStorage.getItem("idcanal")
$.getJSON("https://www.googleapis.com/youtube/v3/channels?part=brandingSettings&id="+ idcanal +"&key=AIzaSyBd1BCa2WQyAtEsC5wPAqETsJF8XbHvmxo", (data) => {
  const bannerlink_get = data.items
  .map((bannerlink) => `${bannerlink.brandingSettings.image.bannerExternalUrl}`)
  .join("");
  const nomedocanal_get = data.items
  .map((nome) => `${nome.brandingSettings.channel.title}`)
  .join("");
  const bannerlink_out = $("<ul />").html(bannerlink_get); //Coletar o banner link
  let bannerlink = bannerlink_out.html()
  const nomecanal_out = $("<ul />").html(nomedocanal_get); //Coletar o nome do canal
  var nomecanal = nomecanal_out.html()
  sessionStorage.setItem("nomecanal", nomecanal) //Gardar o nome do canal
  var linkbanner_resultado = bannerlink + "=w1138-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
  sessionStorage.setItem('linkbanner',linkbanner_resultado)
  document.getElementById('BannerResult').src = linkbanner_resultado;
  //Colocar link do canal nas info ao lado do banner
  var idcanal_valueinput = document.getElementById('SearchBanner').value
  document.getElementById('LINK').innerText = idcanal_valueinput
  document.getElementById('LINK').href = idcanal_valueinput
  document.getElementById('LINK').setAttribute('target', '_blank')
  sessionStorage.setItem('etp2',true);
})
}

//nome do canal --- Colocar nome do canal nas info ao lado do banner
function putnamechannel(){
var nomecanal = sessionStorage.getItem("nomecanal")
document.getElementById('titleinfo').innerText = "Aqui está o banner do canal: " + nomecanal
document.getElementById('NOME').innerText = nomecanal
setTimeout(function(){
  document.getElementById('content').style.cssText = 'display:flex;height:550px;margin-bottom:0px;'
  document.getElementById('preloader').style.cssText = 'display:flex;height:100%;'
setTimeout(function(){
  document.getElementById('content').style.cssText = 'display:flex;'
  $('#status').fadeOut(); // primeiro desaparecerá a animação de carregamento
  $('#preloader').delay(250).fadeOut('slow'); // desaparecerá o DIV branco que cobre o site.
  $('#preloader').css('display','none')
document.querySelector('.itens-content').style.cssText = 'display:flex;'
document.querySelector('.content-elements').style.cssText = 'display:flex;height:auto;'
document.getElementById('info-download').style.display = "flex"
document.querySelector('.Aviso-error').style.cssText = 'display:flex;'}, 4550)
},2000)}


/*
//Username/snnipet
function userCH(){
var usuario = document.getElementById('user') 
function idcanal() {
var storedText2;
fetch('https://youtube.googleapis.com/youtube/v3/search?part=id%2Csnippet&maxResults=10&q='+usuario.value+'&type=channel&key=AIzaSyBd1BCa2WQyAtEsC5wPAqETsJF8XbHvmxo')
  .then(function(response) {
    response.text().then(function(text) {
      IdChannel = text;
      done2();
    });
  });
function done2() {
  document.getElementById('Id_channel').innerText = IdChannel;
  putIdChannel()
}
function putIdChannel(){
var filter = IdChannel.split('"channelId":').pop().split('","title').shift().trim();
console.log(filter)
}}}*/


