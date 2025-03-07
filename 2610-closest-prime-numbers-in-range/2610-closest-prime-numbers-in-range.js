var isPrime = function (num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

var closestPrimes = function (left, right) {
    const primes = [];

    for (let i = left; i <= right; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    if (primes.length < 2) return [-1, -1];

    // Find the closest prime pair
    let minDiff = Infinity;
    let ans = [-1, -1];

    for (let i = 0; i < primes.length - 1; i++) {
        let diff = primes[i + 1] - primes[i];
        if (diff < minDiff) {
            minDiff = diff;
            ans = [primes[i], primes[i + 1]];
        }
    }

    return ans;
};


