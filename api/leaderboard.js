import request from '~/service';

export function getLeaderboard(series, param) {
    return request.get(`/leaderboard/${series}/${param}`);
}