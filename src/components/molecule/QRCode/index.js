import React from "react";
import QRCode from "react-qr-code";

function GenerateQRCode({ QRString }) {
  console.log(QRString);
  return (
    <div>
      <QRCode
        size={256}
        style={{ height: "auto", width: "auto" }}
        value={QRString ? QRString : "L"}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
}

export default GenerateQRCode;
