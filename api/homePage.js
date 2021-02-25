import request from '~/service';

export function getHomePageData() {
    return request.post('/home.do');
}
