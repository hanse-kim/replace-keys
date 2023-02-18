# replace-keys

A simple util for replace an object's keys.

## Usage

```typescript
const obj = {
  foo: {
    bar: 'baz'
  }
};

replaceKeys(obj, {
  foo: 'Foo',
  bar: (key: string) => { key.slice(1) },
});
// result: { FOO: { ar: 'baz' } }
```
