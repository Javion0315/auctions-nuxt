import request from '~/service';

// 專場頁列表
export function getAuctionData(data) {
    return request.post('/auction/list.do', data);
}

// 目前專場頁
export function getcurrentAuctionData(data) {
    return request.post('/auction/currentSpecialList.do', data);
}

// 即將舉行專場頁
export function getUpcomingAuctionData(data) {
    return request.post('/auction/upcomingSpecialList.do', data);
}

// 已完成專場頁
export function getFinishAuctionData(data) {
    return request.post('/auction/finishSpecialList.do', data);
}

