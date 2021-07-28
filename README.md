# react-lazy-retry

This is a lazyRetry that wraps Reacts lazy loading function.
Implementation below

## Geting started

```
// npm
npm intall @tdotcode/react-lazy-retry

// yarn
yarn add @tdotcode/react-lazy-retry
```

## Usage

1. This will retry 5 times spaced out for 1 second between retries

```javascript
import React from "react";
import lazyRetry from "@tdotcode/react-lazy-retry";
const Greeting = lazyRetry(() => import("./components/Greeting"));

function App() {
  return (
    <Suspense fallback={null}>
      <Greeting />
    </Suspense>
  );
}
```

2. You can also control number of retries and duration between retries.
   In this example we are retrying 10 times spaced out for 100ms

```javascript
import React from "react";
import lazyRetry from "@tdotcode/react-lazy-retry";
const Greeting = lazyRetry(() => import("./components/Greeting"), 10, 100);

function App() {
  return (
    <Suspense fallback={null}>
      <Greeting />
    </Suspense>
  );
}
```
