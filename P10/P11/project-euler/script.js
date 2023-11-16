'use strict'
// Please don't delete the 'use strict' line above

function fibonacci(num) {
	if (num <= 1) {
		return num;
	}
	return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(3));//3

function evenSum(limit) {
	let a = 1, b = 2;
	let evenSum = 0;

	while (a <= limit) {
			if (a % 2 === 0) {
					evenSum += a;
			}
			[a, b] = [b, a + b];
	}

	return evenSum;
}

console.log(evenSum(4000000));

function largest(number) {
	let factor = 2;

	while (factor <= number) {
			if (number % factor === 0) {
					number /= factor;
			} else {
					factor++;
			}
	}

	return factor;
}

console.log(largest(600851475143));

function Smallest(range) {
    let s = 1;

    for (let i = 2; i <= range; i++) {
        s = lcm(s, i);
    }

    return s;
}

// 最大公約数
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

// 最小公倍数
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

console.log(Smallest(20));