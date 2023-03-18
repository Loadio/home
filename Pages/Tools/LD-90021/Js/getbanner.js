var Sitename = "Loadio"
//Download buttom
function downloadbutton() {
let  linkbanner2 = sessionStorage.getItem("linkbanner")
let canalNome = sessionStorage.getItem("nomecanal")
    var myWindow = window.open("", "");
    myWindow.document.write('<html style="background-color:black;"><link rel="stylesheet" href="https://loadio.github.io/home/css/loadio.css"><head><title>Banner ' + sessionStorage.getItem('nomecanal') + ' | '+ Sitename +'</title></head>');
    myWindow.document.write('<body style="display:flex;justify-content:center;align-items:center;align-content:center;"><div class="Ld_loading"><div></div><div></div><div></div></div><a id="Ld_bannerImg_581615846" href="' + linkbanner2 + '" download="' + Sitename + '_youtube_banner_fullhd.jpeg"></a><script>setTimeout(function() {document.getElementById("Ld_bannerImg_581615846").click()}, 2000)</script>');
    myWindow.document.write('</body></html>');
    setTimeout(function() {
        myWindow.close()
    }, 2000)
}
