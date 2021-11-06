import { group, check } from 'k6';
import http from 'k6/http';

const id = 5;

// reconsider this type of code
group('get post', function () {
    http.get(`http://example.com/posts/${id}`);
});
group('list posts', function () {
    const res = http.get(`http://example.com/posts`);
    check(res, {
        'is status 200': (r) => r.status === 200,
    });
});

/*
If your code looks like the example above, consider the following alternatives to write cleaner code:
For dynamic URLs, use the URL grouping feature.
- To provide a meaningful name to your request, set the value of tags.name.
- To reuse common logic or organize your code better, group logic in functions or create a local Javascript module and import it into the test script.
- If you need to model advanced user patterns, check out Scenarios.
*/
