import request from '~/service';

export function getAuctionData(data) {
    return request.post('/auction/list.do', data);
}
