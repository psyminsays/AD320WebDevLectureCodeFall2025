# Intro to JavaScript

## Learning Goals

By the end of this lesson, you should be able to:

- Explain what JavaScript
- Identify and describe JavaScript's primitive data types.
- Declare variables using `let`, `const`, and (historically) `var`.
- Define and call functions in JavaScript.
- Recognize built-in JavaScript methods

---

## Overview

JavaScript was developed in about 10 days by Brendan Eich in 1995 for Netscape Navigator, which at the time was the major web browser.
Eich's goal was to make the web more interactive than what was possible with just HTML and CSS.

Today, JavaScript is one of the three core pillars of web development, alongside HTML and CSS, and is used on roughly 99% of websites worldwide.  
Originally designed for the browser, it can now also run locally thanks to the invention of **Node.js**, allowing developers to build software that runs both **inside and outside the browser**.

You already know Java, so throughout this class, we will compare and contrast Java and JavaScript.
Despite the name, the two languages have no direct relationship. JavaScript was named mainly for marketing reasons.

---

## Printing Values

To display output or debug information in JavaScript, we use the console:

    console.log("Hello world!");

This is similar to Java:

    System.out.println("Hello world!");

---

## JavaScript Primitive Data Types

| Type      | Example                                 | Description                                      |
| --------- | --------------------------------------- | ------------------------------------------------ |
| Number    | `1`, `3.14`                             | Integers and floating-point numbers              |
| String    | `'cat'`, `"cat"`, or `` `cat` ``        | Text data, defined with quotes or backticks      |
| Boolean   | `true` or `false`                       | Logical values                                   |
| BigInt    | `999999999999999999999999999999999999n` | Very large integers beyond Number's safe range   |
| Symbol    | `Symbol()`                              | Unique, immutable identifier used as object keys |
| Undefined | `undefined`                             | Declared variable without an assigned value      |
| Null      | `null`                                  | Intentional absence of value                     |

---

## Variables

Variables are containers for storing data.

In Java, variables must declare a data type:

    int num = 10;

In JavaScript, the language is loosely typed, so you do not need to specify the type. It is inferred automatically.

JavaScript uses three keywords for declaring variables:

    let cat = "Rose";          // Reassignable variable
    const bestCat = "Rose";    // Constant (cannot be reassigned)
    var oldWay = "Legacy var"; // Older keyword, avoid in modern code

Note: `var` is function-scoped and can cause unexpected behavior. Prefer `let` or `const`.

---

## Non-Primitive Data Types

JavaScript also includes objects and arrays, which are non-primitive types used to store collections of data.

    let person = { name: "Rose", age: 3 };
    let colors = ["red", "blue", "green"];

---

## Functions

In Java, functions are defined as methods inside classes:

    public class SomeClass {
      public String greeting(String str) {
        return "Hello " + str;
      }
    }

In JavaScript, functions can exist on their own. They do not have to belong to a class:

    function greeting(str) {
      return "Hello " + str;
    }

---

## Methods and Built-In Functions

Many of Java's built-in methods and libraries have JavaScript equivalents.
They are not always a perfect one-to-one match, but the syntax often feels familiar.

| Java                     | JavaScript                        |
| ------------------------ | --------------------------------- |
| `System.out.println()`   | `console.log()`                   |
| `Math.random()`          | `Math.random()`                   |
| `Math.floor()`           | `Math.floor()`                    |
| `"Rose".length()`        | `"Rose".length`                   |
| `"cat".toUpperCase()`    | `"cat".toUpperCase()`             |
| `Integer.parseInt("10")` | `parseInt("10")` / `Number("10")` |
| `"cat".charAt(1)`        | `"cat".charAt(1)` / `"cat"[1]`    |

Tip: When you need to find the JavaScript equivalent of a Java method, try searching
"JavaScript function for [Java method name]".
