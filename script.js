const qrInput = document.getElementById('qr-input');
const qrContainer = document.getElementById('qrcode');
let qrInstance = null;

// Initialize with a default value
function initQR() {
    qrInstance = new QRCode(qrContainer, {
        text: "https://systemaix.dev",
        width: 180,
        height: 180,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}

function generateQR() {
    const value = qrInput.value.trim();
    
    if (value) {
        // Clear previous and make new one
        qrInstance.clear();
        qrInstance.makeCode(value);
        
        // Add a "pop" animation
        qrContainer.style.transform = 'scale(1.05)';
        setTimeout(() => qrContainer.style.transform = 'scale(1)', 200);
    }
}

// Optional: Live generation as you type
qrInput.addEventListener('input', () => {
    if (qrInput.value.length > 0) {
        generateQR();
    }
});

initQR();
feather.replace();
