# Bidi-map

A library that extends native
[ES6 Map](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Map)
to bi-directional map.

## Install

```
npm install @amilajack/bidi-map
```

## Usage

```ts
import BidiMap from "@amilajack/bidi-map";

const bidiMap = new BidiMap([
  [1, "test"],
  ["foo", "bar"],
]);

bidiMap instanceof BidiMap; // true
bidiMap instanceof Map; // true

bidiMap.get(1); // "test"
bidiMap.has("foo"); // true
bidiMap.exists("bar"); // true
bidiMap.getKeyOf("test"); // 1

const key = Symbol("unique");
bidiMap.set(key, "test");
bidiMap.getKeysOf("test"); // [1, key]
```

## API Reference

A Bidirectional Map

- [bidi-map](#module_bidi-map)
  - [BidiMap](#exp_module_bidi-map--BidiMap) ⇐ <code>Map</code> ⏏
    - [new BidiMap([iterable])](#new_module_bidi-map--BidiMap_new)
    - [.count](#module_bidi-map--BidiMap+count) : <code>number</code>
    - [.set(key, value)](#module_bidi-map--BidiMap+set) ⇒ <code>Map.&lt;K, V&gt;</code>
    - [.exists(value)](#module_bidi-map--BidiMap+exists) ⇒ <code>boolean</code>
    - [.getKeyOf(value)](#module_bidi-map--BidiMap+getKeyOf) ⇒ <code>K</code>
    - [.getKeysOf(value)](#module_bidi-map--BidiMap+getKeysOf) ⇒ <code>Array.&lt;K&gt;</code>
    - [.delete(key)](#module_bidi-map--BidiMap+delete) ⇒ <code>boolean</code>
    - [.clear()](#module_bidi-map--BidiMap+clear) ⇒ <code>undefined</code>

<a name="exp_module_bidi-map--BidiMap"></a>

### BidiMap ⇐ <code>Map</code> ⏏

**Kind**: Exported class
**Extends**: <code>Map</code>
**Template**: K, V
<a name="new_module_bidi-map--BidiMap_new"></a>

#### new BidiMap([iterable])

Create a new instance of the bidirectional-map

| Param      | Type                                | Description        |
| ---------- | ----------------------------------- | ------------------ |
| [iterable] | <code>Iterable.&lt;Array&gt;</code> | An iterable object |

<a name="module_bidi-map--BidiMap+count"></a>

#### bidiMap.count : <code>number</code>

Get the number of differed values in this map

**Kind**: instance property of [<code>BidiMap</code>](#exp_module_bidi-map--BidiMap)
**Read only**: true
<a name="module_bidi-map--BidiMap+set"></a>

#### bidiMap.set(key, value) ⇒ <code>Map.&lt;K, V&gt;</code>

Inherits from `Map.set` method.

**Kind**: instance method of [<code>BidiMap</code>](#exp_module_bidi-map--BidiMap)

| Param | Type           |
| ----- | -------------- |
| key   | <code>K</code> |
| value | <code>V</code> |

<a name="module_bidi-map--BidiMap+exists"></a>

#### bidiMap.exists(value) ⇒ <code>boolean</code>

Check if the map has the given value.

**Kind**: instance method of [<code>BidiMap</code>](#exp_module_bidi-map--BidiMap)

| Param | Type           | Description     |
| ----- | -------------- | --------------- |
| value | <code>V</code> | The given value |

<a name="module_bidi-map--BidiMap+getKeyOf"></a>

#### bidiMap.getKeyOf(value) ⇒ <code>K</code>

Get the first key of the given value or `undefined` if not exists.

**Kind**: instance method of [<code>BidiMap</code>](#exp_module_bidi-map--BidiMap)

| Param | Type           |
| ----- | -------------- |
| value | <code>V</code> |

<a name="module_bidi-map--BidiMap+getKeysOf"></a>

#### bidiMap.getKeysOf(value) ⇒ <code>Array.&lt;K&gt;</code>

Get the all the keys of the given value.

**Kind**: instance method of [<code>BidiMap</code>](#exp_module_bidi-map--BidiMap)

| Param | Type           |
| ----- | -------------- |
| value | <code>V</code> |

<a name="module_bidi-map--BidiMap+delete"></a>

#### bidiMap.delete(key) ⇒ <code>boolean</code>

Inherits from `Map.delete` method.

**Kind**: instance method of [<code>BidiMap</code>](#exp_module_bidi-map--BidiMap)

| Param | Type           |
| ----- | -------------- |
| key   | <code>K</code> |

<a name="module_bidi-map--BidiMap+clear"></a>

#### bidiMap.clear() ⇒ <code>undefined</code>

Inherits from `Map.clear` method.

**Kind**: instance method of [<code>BidiMap</code>](#exp_module_bidi-map--BidiMap)
