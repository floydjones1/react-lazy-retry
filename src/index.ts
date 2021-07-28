import { lazy, ComponentType, LazyExoticComponent } from 'react'

type ComponentPromise<T = any> = Promise<{
  default: T;
}>

export default function lazyRetry<T extends ComponentType<any>>(component: Promise<ComponentPromise<T>>, retries?: number, interval?: number) : LazyExoticComponent<T> {
  return lazy(() => retry<T>(component, retries, interval))
}


function retry<T>(component: Promise<ComponentPromise<T>>, retriesLeft = 5, interval = 1000): Promise<{
  default: T;
}>  {
  return new Promise((resolve, reject) => {
    component.then(resolve).catch((error) => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            // reject('maximum retries exceeded');
            reject(error);
            return;
          }

          // Passing on "reject" is the important part
          retry(component, retriesLeft - 1, interval).then(resolve, reject);
        }, interval);
      });
  });
}