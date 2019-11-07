"use strict";

const fibonacci = function *(len, nums = [0,1]) {
    let num1 = nums[0],
        num2 = nums[1],
        next,
        cnt = 2;

    while (cnt < len) {
        next = num1 + num2;
        num1 = num2;
        num2 = next;
        nums.push(next);
        cnt++;
        yield nums;
    }

    return nums;
};

var fib = fibonacci(1000);