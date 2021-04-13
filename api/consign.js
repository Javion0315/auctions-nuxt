import request from '~/service';

export function uploadImg(data) {
    return request.post('/auction/uploadConsignImage.do', data);
}
