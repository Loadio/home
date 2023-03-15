
//Download buttom
var Sitename = "Loadio"
var urlHost = location.host
var canalNome;
var linkbanner2;

function downloadbutton() {
function toDataURL(src, callback) {
    var image = new Image();
    image.crossOrigin = 'Anonymous';
    image.onload = function() {
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        canvas.height = this.naturalHeight;
        canvas.width = this.naturalWidth;
        context.drawImage(this, 0, 0);
        var dataURL = canvas.toDataURL('image/jpeg');
        callback(dataURL);
    };
    image.src = src;
}
linkbanner2 = sessionStorage.getItem("linkbanner")
canalNome = sessionStorage.getItem("nomecanal")
toDataURL(linkbanner2, function(dataURL) {
    var myWindow = window.open('https://loadio.github.io/home', "");
    myWindow.document.write('<html style="background-color:black;"><link rel="stylesheet" href="https://loadio.github.io/home/css/loadio.css"><head><title>Banner ' + canalNome + ' | '+ Sitename +'</title></head>');
    myWindow.document.write('<body style="display:flex;justify-content:center;align-items:center;align-content:center;"><div class="Ld_loading"><div></div><div></div><div></div></div><a id="Ld_bannerImg_581615846" href="' + dataURL + '" download="' + Sitename + '_youtube_banner_fullhd.jpeg"></a><script>setTimeout(function() {document.getElementById("Ld_bannerImg_581615846").click()}, 2000)</script>');
    myWindow.document.write('</body></html>');
    setTimeout(function() {
        myWindow.close()
    }, 2000)
})}
