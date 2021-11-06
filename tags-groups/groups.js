import { group } from 'k6';

export default function () {
    group('visit product listing page', function () {
        // ...
    });
    group('add several products to the shopping cart', function () {
        // ...
    });
    group('visit login page', function () {
        // ...
    });
    group('authenticate', function () {
        // ...
    });
    group('checkout process', function () {
        // ...
    });
}
