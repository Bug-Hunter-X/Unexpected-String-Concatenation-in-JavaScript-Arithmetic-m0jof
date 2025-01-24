# Unexpected String Concatenation in JavaScript Arithmetic

This repository demonstrates a common JavaScript bug involving unexpected string concatenation when performing arithmetic operations on variables of different types.

## The Bug

The `add` function attempts to add two numbers, but the input `'5'` is a string. JavaScript performs implicit type coercion, resulting in string concatenation instead of numerical addition. This can lead to unexpected results and logic errors in larger applications.

## The Solution

The solution ensures that both inputs are numbers before performing the addition.  This can be done using the `Number()` function or stricter type checking.