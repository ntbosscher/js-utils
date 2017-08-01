
# Obj Util

## Class Name

Provides simple class selection using and object.

| Name | Description |
| - | - |
| ParseClassName | takes "cls-1 bold" => { "cls-1": true", "bold": true} |
| ClassName | takes { "cls-1": true", "bold": true, "italic": false} => "cls-1 bold" |

## Clone

Provides deep clone for a javascript object.

| Name | Description |
| - | - |
| Clone(obj) | |

## Deep Compare

Compares 2 objects and returns wether they are equal.

| Name | Description |
| - | - |
| Compare(A,B) | returns bool |

## IdCode

Provides a mapping from object-reference to string `transform(obj) => string`. Helpful when tracking objects that don't have a unique id field.

Every object passed to `idGen(obj) : string` is tracked until the function
is garbage collected. Scoping is important to ensure you don't track objects
that will never be used again.

| Name | Description |
| - | - |
| NewIdCodeScope | Creates a new scope and returns idGen function |

## Merge

Merges 2 objects recursively.

| Name | Description |
| - | - |
| Merge(A, B) | returns A'. Equivalent keys in A are overwritten by B |

## Mirror

Performs the following transform.
```js
mirror({"key": null,"key2": null}) => {"key": "key", "key2": "key2"}
```

Also works recursively.
```js
mirror({"group1": {,"key1": null}}) => {"group1": {"key1": "group1.key1"}}
```

Helpful for defining constants, especially grouping constants.

| Name | Description |
| - | - |
| mirror(obj) |  |

## Values

Returns an object's values.
