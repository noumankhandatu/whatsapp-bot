import React from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

function GenerateQRCode() {
  return (
    <div>
      <QRCode
        size={256}
        style={{ height: "auto", width: "auto" }}
        value={
          "2@x8As5kVcsJGREe1C0rAEfMP0YFMmJY//6N0JlhWAssgt98F57DdZ6VF03fzc2+tHtOUngoQG49ppDQ==,j+oz3hcCzovJjC3v4ql2E1+3V74JilpjVQMHYhNoyFA=,d9k/V65fRKe9UtBRfT5Ntz5ZSxOW+FQPtukU67+ZyGA=,+pF2Nu4Go5uA95rX//ETxTM7P68iWh6t6XPic5pOcYw="
        }
        viewBox={`0 0 256 256`}
      />
    </div>
  );
}

export default GenerateQRCode;
