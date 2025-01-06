import Html5QrCodePlugin from "./Html5QrCodePlugin.jsx";

export default function ScanQR({ setIsManual, setPayeeName }) {

    const onNewScanResult = (decodedText, decodedResult) => {
        if(decodedText.startsWith("upi")) {
            const urlObj = URL.parse(decodedText);
            setPayeeName(urlObj.searchParams.get("pn"));
            setIsManual(false);
            document.getElementById("html5-qrcode-button-camera-stop").click();
            document.getElementById("new-transaction-button").click();
        } else {
            alert("Invalid QR")
        }
    };

    return (
        <div className="bg-dark vh-100 d-flex flex-column p-3">
            <Html5QrCodePlugin
                fps={10}
                qrbox={250}
                disableFlip={false}
                qrCodeSuccessCallback={onNewScanResult} />
        </div>
    );
}