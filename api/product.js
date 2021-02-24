import request from '~/service';

export function getProduct() {
    return request.get('/product');
}

export function getProductId(id) {
    return request.get(`/product/${id}`);
}
