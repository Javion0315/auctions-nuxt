import request from '~/service';

export function getBidList(data) {
    return request.post('/auction/myBidList.do', data);
}
