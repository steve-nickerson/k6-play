import http from 'k6/http';

export function setup() {
    const res = http.get('https://httpbin.org/get');
    return { data: res.json() };
}

export function teardown(data) {
    console.log(JSON.stringify(data));
}

export default function (data) {
    console.log(JSON.stringify(data));
}
