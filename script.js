function generateQRCode() {
    var linkInput = document.getElementById("linkInput").value;
    var qrCodeDiv = document.getElementById("qr-code");

    // Clear previous QR code
    qrCodeDiv.innerHTML = "";

    // Generate new QR code
    var qrcode = new QRCode(qrCodeDiv, {
        text: linkInput,
        width: 128,
        height: 128
    });
}

window.addEventListener("DOMContentLoaded",()=>{
    function control(e) {
        if(e.keyCode === 13) {
            generateQRCode();
        }
    }
    document.addEventListener('keydown', control)
})