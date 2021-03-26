import request from '~/service';

// 驗證代碼
export function getcode(data) {
    return request.post('/user/smscode.do', data);
}

// 登入
export function login(data) {
    return request.post('/user/phonelogin.do', data);
}