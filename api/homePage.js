import request from '~/service';

export function getHomePageData() {
    return request.get('/homePage');
}
