const secretKey = 'StOpTHeFaKE1975#1234';

const applyXOR = (data:any, key:any) => {
    let output = '';
    for (let i = 0; i < data.length; i++) {
        let charCode = data.charCodeAt(i) ^ key.charCodeAt(i % key.length);
        output += String.fromCharCode(charCode);
    }
    return output;
};

export const encryptData = (key:any, data:any) => {
    const encryptedData = applyXOR(data, secretKey);
    localStorage.setItem(key, window.btoa(encryptedData));
};

export const decryptData = (key:any) => {
    const data = localStorage.getItem(key);
    if (data) {
        const decodedData = window.atob(data);
        const decryptedData = applyXOR(decodedData, secretKey);
        return decryptedData;
    }
    return null;
};
