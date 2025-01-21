import QRCode from 'react-qr-code';

export default function QRCodePage() {
    return (
        <div className="d-flex flex-column vh-100 p-3">
            <h4 className="f-600">QR Code</h4>
            <div className="text-center mt-4 p-3">
                <QRCode
                    value="upi://pay?pa=sample@sample&pn=Ramesh Alagumalai"
                    bgColor="#ffffff"
                    fgColor="#000000"
                />
                <p className="mt-5">Ramesh Alagumalai</p>
                <p className="text-secondary small-text mt-1">rameshalagumalai23@gmail.com</p>
            </div>
        </div>
    );
}