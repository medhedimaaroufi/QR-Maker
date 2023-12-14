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