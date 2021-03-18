import request from '~/service';

// 產品資訊
export function getProductInfo(data) {
    return request.post('/auction/goodsInfo.do', data);
}
