import http from 'k6/http';
import { check } from 'k6';

export default function () {
    const jar = http.cookieJar();
    jar.set('https://httpbin.org/cookies', 'my_cookie', 'hello world');

    const cookies = {
        my_cookie: {
            value: 'hello world 2',
            replace: true,
        },
    };

    const res = http.get('https://httpbin.org/cookies', {
        cookies,
    });

    check(res, {
        'cookie has correct value': (r) => r.cookies.my_cookie[0].value === 'hello world 2',
    });
}
