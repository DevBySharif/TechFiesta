<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: The correct answer is B: ReferenceError: greetign is not defined.

<i>In this code, there is a typo in the variable name. It should be greeting, but it is written as greetign. As a result, when you try to assign an empty object to greetign, it will throw a ReferenceError because greetign is not defined.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: The correct answer is A: NaN.

<i>In the sum function, the parameters a and b are expected to be numbers, but when you call sum(1, "2"), you are trying to add a number and a string. JavaScript performs type coercion and tries to convert the string to a number, but since it is not a valid number, the result is NaN (Not-a-Number).</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: The correct answer is A: ['🍕', '🍫', '🥑', '🍔'].

<i>Initially, the info.favoriteFood property is assigned the value "🍕". However, later in the code, it is reassigned the value "🍝". This does not affect the food array, so food still contains ['🍕', '🍫', '🥑', '🍔'].</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: The correct answer is B: Hi there, undefined.

<i>The sayHi function expects a name parameter, but when you call sayHi() without passing any argument, the name parameter is undefined. The function still executes and concatenates "Hi there, " with undefined, resulting in "Hi there, undefined".</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: The correct answer is C: 3.

<i>The forEach method iterates through the nums array and increments the count variable for each truthy value. In JavaScript, 0 is considered falsy, and all other numbers are truthy. So, the loop increments count for the values 1, 2, and 3, resulting in a final count of 3.</i>

</p>
</details>
