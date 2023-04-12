/*------------------------------//
Fazer download do banner
//-------------------------------*/

var Sitename = "Loadio"
//Download buttom
function downloadbutton() {
var codedownload = "downloadImage('"+sessionStorage.getItem('linkbanner')+"','loadio_youtube_banner_fullhd.jpeg')"
var myWindow = window.open("", "");
    myWindow.document.write('<html style="background-color:black;"><link rel="stylesheet" href="https://loadio.github.io/home/css/loadio.css"><head><title>Banner ' + sessionStorage.getItem('nomecanal') + ' | '+ Sitename +'</title></head>');
    myWindow.document.write('<body style="display:flex;justify-content:center;align-items:center;align-content:center;"><div class="Ld_loading"><div></div><div></div><div></div></div><button style="visibility: hidden;" id="Ld_bannerImg_581615846" onclick="'+codedownload+'" ></button><script>setTimeout(function() {document.getElementById("Ld_bannerImg_581615846").click()},1000)</script><script src="https://loadio.github.io/home/Pages/Tools/LD-90021/Js/getbanner.js"></script>');
    myWindow.document.write('</body></html>');
    setTimeout(function() {
        myWindow.close()
    }, 3000)
}
function downloadImage(url, name){
      fetch(url)
        .then(resp => resp.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = name;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        })
        .catch(() => alert('An error sorry'))
}