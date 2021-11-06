import http from 'k6/http';

export default function () {
    const jar = http.cookieJar();
    jar.set('https://httpbin.org/cookies', 'my_cookie', 'hello world');
    http.get('https://httpbin.org/cookies');
}
