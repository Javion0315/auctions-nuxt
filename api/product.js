import request from '~/service';

// 產品資訊
export function getProductInfo(data) {
    return request.post('/auction/goodsInfo.do', data);
}

// 手動出價
export function bidGoods(data) {
    return request.post('/auction/bidGoods.do', data);
}

// 自動出價
export function autoBidGoods(data) {
    return request.post('/auction/autoBidGoods.do', data);
}

// 取消自動出價
export function cancelAutoBidGoods(data) {
    return request.post('/auction/cancelAutoBidGoods.do', data);
}

// 出價紀錄
export function bidRecordList(data) {
    return request.post('/auction/bidRecordList.do', data);
}