# Why do we need to bind methods in react class components

This is because of how JavaScript works.

This class:

```js
class Macaw {
  constructor() {
    this.sound = "Macaw!! Macaw!!!";
  }
  shout() {
    console.log(this.sound);
  }
  run() {
    this.shout();
  }
}
```

Will roughly translate to the following:

```js
function Macaw() {
  this.sound = "Macaw!! Macaw!!!";
}

Macaw.prototype.shout = function () {
  console.log(this.sound);
};

Macaw.prototype.run = function () {
  this.shout();
};
```

Now important thing to remember is this:
The moment a function is assigned to a variable and is called using that variable, JavaScript has no way of knowing the original execution context of the called function.

For example:

```js
const m = new Macaw();
const anotherVariable = m.run;

anotherVariable(); // this will error out as `this` now refers to the global scope and there is no `run` method on global this

m.run(); // this will run as expected as JavaScript knows the execution context is the instance `m`
```

Now let's check a more commonly used pattern.

Say this is the structure of our HTML:

```html
<html>
  <body>
    <div>
      <h1>Hello</h1>

      <button>Click Me!</button>
    </div>
  </body>
</html>
```

And we have the following JS in it:

```js
const button = document.querySelector("button");
button.addEventListener("click", m.run);
```

When we click on the button, we will see the same error as we saw in `anotherVariable()` as this is the exact same usecase. `m.run` is assigned to a temporary variable as a callback.

How do we correct this?
We can `bind` it!

```js
class Macaw {
  constructor() {
    this.sound = "Macaw!! Macaw!!!";
  }
  shout() {
    console.log(this.sound);
  }
  run() {
    this.shout();
  }
}

const m = new Macaw();

const button = document.querySelector("button");
button.addEventListener("click", m.run.bind(m));
```

To make it more react-ish:

```html
<html>
  <body>
    <div>
      <h1>Hello</h1>

      <button>Click Me!</button>
    </div>
  </body>
</html>
```

And the corresponsind JS:

```js
class Macaw {
  constructor() {
    this.sound = "Macaw!! Macaw!!!";
  }
  shout() {
    console.log(this.sound);
  }
  run() {
    const button = document.querySelector("button");
    button.addEventListener("click", this.shout.bind(this));
  }
}

new Macaw().run();
```

The exact same behavior applies to a React component.
