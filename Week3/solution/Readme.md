# Node.js and Testing with Jest

## Learning Objectives

By the end of this lesson, you should be able to:

- Explain what Node.js is and why it’s useful for running JavaScript outside the browser.
- Understand what NPM is and how to manage dependencies.
- Install and configure Jest for unit testing.
- Write simple Jest test suites and interpret their results.
- Describe the purpose of CI/CD pipelines and how automated testing fits into them.

---

## Node.js

JavaScript used to be limited to browser-based applications, but in **2009**, Ryan Dahl created Node.js — a runtime built on Chrome’s **V8 engine** that allows JavaScript applications to run on your local machine or server.

---

## NPM (Node Package Manager)

**NPM** is a repository of packages for JavaScript applications.  
Packages are collections of code written by the community that provide tools, libraries, and services to make development faster and easier.

---

## Installing Node

[Download Node.js](https://nodejs.org/en/download)

Node packages are managed with a `package.json` file that tracks dependencies your app needs to initialize.

Run either of the following in your terminal:

```
npm init
```

or

```
npm init -y
```

The first command walks you through creating the file step by step.  
The second one auto-generates it with default values.

---

## Installing Jest

We’ll install our first package — a testing framework called **Jest**.

Instead of building our own testing tools from scratch, we can use existing packages and focus on writing code.

```
npm install --save-dev jest
```

> The `--save-dev` flag marks Jest as a **development dependency**, meaning it’s only needed during development and testing, not when your app is deployed.

---

## CI/CD Pipeline

![CI/CD](images/cicd.png)

<figcaption>Golubev, A. (2025, April 5). What is CI/CD? testRigor AI-Based Automated Testing Tool. https://testrigor.com/blog/what-is-cicd/</figcaption>

<br/>

**CI/CD** stands for **Continuous Integration** and **Continuous Deployment/Delivery** — the process that code takes from development to production.

In **Continuous Integration**, developers frequently merge code into a shared repository. Automated tests run to catch errors early and prevent bad code from reaching production.

Automated testing ensures that new features don’t break existing functionality, avoiding painful merge conflicts and production outages.

---

## Types of Tests

There are many types of software tests:

- Integration
- System
- Regression  
  …but we’ll focus on **unit tests**.

**Unit tests** check small, isolated parts of code (like a single function).  
They make debugging easier by narrowing down where problems occur.

---

## Creating Tests with Jest

Jest test files are named:

```
[what-you-are-testing].test.js
```

We group related tests with **describe blocks** (test suites), and write individual **test cases** for specific functionality.

We use **assertions** (built-in functions) to verify that our code behaves as expected.

Common assertions include:

- `.toBe()`
- `.toEqual()`
- `.toHaveBeenCalled()`
- `.toHaveLength(number)`
- `.toBeFalsy()`
- `.toBeNull()`
- `.arrayContaining(array)`
- `.stringContaining(string)`

More here: [Jest Assertions](https://jestjs.io/docs/expect)

Example:

```javascript
describe("Module or function you're testing", () => {
  test("specific functionality being tested", () => {
    const result = yourFunction();
    expect(result).toEqual(expectedValue);
  });
});
```

---

## What Do You Test?

Try to cover as many aspects as possible:

- **Happy path**: expected, common inputs
- **Edge cases**: rare but valid inputs
- **All model parts**: every function or module
- **Error handling**: invalid inputs or unexpected behavior
- **Properties**: the function’s invariants remain true
- **Performance tests**: runs efficiently under load

---

## Running Jest

Update your `package.json` to add a test script:

```json
"scripts": {
  "test": "jest --coverage"
}
```

Then run:

```
npm run test
```

This command executes all test files and displays a coverage report showing which parts of your code were tested.
