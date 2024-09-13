var qrcode = new QRCode(document.getElementById("qrcode"), {
    text: "http://jindo.dev.naver.com/collie",
    width: 128,
    height: 128,
});

document.getElementById("url").addEventListener("input", function() {
    var url = this.value;
    qrcode.clear();
    qrcode.makeCode(url);
});
