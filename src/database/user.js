import {API_URL} from './index';

export function getImageSource(photoId,token,callback){
    var oReq = new XMLHttpRequest();
    oReq.open("GET", `http://api.loopcake.com/download?_id=${photoId}`, true);
    oReq.setRequestHeader("Authorization", `Bearer ${token}`);
    // use multiple setRequestHeader calls to set multiple values
    oReq.responseType = "arraybuffer";
    oReq.onload = function (oEvent) {
    var arrayBuffer = oReq.response;
    console.log("oReq",oReq);
    // Note: not oReq.responseText
    if (arrayBuffer) {
        var u8 = new Uint8Array(arrayBuffer);
        var b64encoded = btoa(String.fromCharCode.apply(null, u8));
        var mimetype="image/png"; // or whatever your image mime type is
        //document.getElementById("yourimageidhere").src="data:"+mimetype+";base64,"+b64encoded;
        callback("data:"+mimetype+";base64,"+b64encoded);
        }
    };
    oReq.send(null);
}