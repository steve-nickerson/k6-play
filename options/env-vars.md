# Environment Variables Example Options

_Bash_
```shell
K6_NO_CONNECTION_REUSE=true K6_USER_AGENT="MyK6UserAgentString/1.0" k6 run script.js

k6 run --no-connection-reuse --user-agent "MyK6UserAgentString/1.0" script.js
```

_Windows CMD_
```shell
C:\k6> set "K6_NO_CONNECTION_REUSE=true" && set "K6_USER_AGENT=MyK6UserAgentString/1.0" && k6 run script.js

C:\k6> k6 run --no-connection-reuse --user-agent "MyK6UserAgentString/1.0" script.js
```

_Windows Powershell_
```shell
PS C:\k6> $env:K6_NO_CONNECTION_REUSE=true; $env:K6_USER_AGENT="MyK6UserAgentString/1.0"; k6 run script.js

PS C:\k6> k6 run --no-connection-reuse --user-agent "MyK6UserAgentString/1.0" script.js
```

## Useful options

### DiscardResponseBodies
> Lessens the amount of memory required and the amount of GC - reducing the load on the testing machine, and probably producing more reliable test results.
> Default value is false

```javascript
export const options = {
  discardResponseBodies: true,
};
```

### VUS & Duration

```javascript
export const options = {
  vus: 100,
  duration: '3m',
};
```

### Hosts

> An object with overrides to DNS resolution. 
> Use similar to hosts file for redirects. Does not change
> actual hosts.

```javascript
export const options = {
  hosts: {
    'test.k6.io': '1.2.3.4',
    'test.k6.io:443': '1.2.3.4:8443',
  },
};
```

### LogOutput

```shell
$ k6 run --log-output=stdout script.js
```

### LogFormat

```shell
$ k6 run --logformat raw test.js
```

### ResultsOutput

```shell
$ k6 run --out influxdb=http://localhost:8086/k6 script.js
```

### Scenarios

```javascript
export const options = {
  scenarios: {
    my_api_scenario: {
      // arbitrary scenario name
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '5s', target: 100 },
        { duration: '5s', target: 0 },
      ],
      gracefulRampDown: '10s',
      env: { MYVAR: 'example' },
      tags: { my_tag: 'example' },
    },
  },
};
```

### Stages

```javascript
// The following config would have k6 ramping up from 1 to 10 VUs for 3 minutes,
// then staying flat at 10 VUs for 5 minutes, then ramping up from 10 to 35 VUs
// over the next 10 minutes before finally ramping down to 0 VUs for another
// 3 minutes.

export const options = {
  stages: [
    { duration: '3m', target: 10 },
    { duration: '5m', target: 10 },
    { duration: '10m', target: 35 },
    { duration: '3m', target: 0 },
  ],
};
```

```shell
$ k6 run --stage 5s:10,5m:20,10s:5 script.js

# or...

$ K6_STAGES="5s:10,5m:20,10s:5" k6 run script.js
```

```shell
C:\k6> k6 run --stage 5s:10,5m:20,10s:5 script.js

# or...

C:\k6> $env:K6_STAGES="5s:10,5m:20,10s:5"; k6 run script.js
```

### Thresholds

```javascript
export const options = {
  thresholds: {
    'http_req_duration': ['avg<100', 'p(95)<200'],
    'http_req_connecting{cdnAsset:true}': ['p(95)<100'],
  },
};
```

### TLSVersion

```javascript
export let options = {
  tlsVersion: 'tls1.2',
};

// or...

options = {
  tlsVersion: {
    min: 'ssl3.0',
    max: 'tls1.2',
  },
};
```

### VUS

```javascript
export const options = {
  vus: 10,
  duration: '1h',
};
```

### Skip Setup & Teardown

```shell
$ k6 run --no-setup --no-teardown ...
```
