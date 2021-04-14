import request from '~/service';

// 圖片base64上傳取得路徑
export function uploadImg(data) {
    return request.post('/auction/uploadConsignImage.do', data);
}

export function submitConsignData(data) {
    return request.post('/auction/submitConsignData.do', data);
}

// account 頁面的 consign 列表
export function consignList(data) {
    return request.post('/auction/consignList.do', data);
}
