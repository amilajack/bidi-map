/**
 * Copyright 2017 Moshe Simantov
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A Bidirectional Map
 */

const kReverseMap = Symbol("reverseMap");

class BidiMap<V> extends Map<V, V> {
  [kReverseMap]: Map<V, V[]> = new Map<V, V[]>();

  constructor(entries?: readonly (readonly [V, V])[] | null) {
    super();

    if (entries) {
      for (const [key, value] of entries) {
        this.set(key, value);
      }
    }

    return this;
  }

  /**
   * Get the number of differed values in this map
   *
   * @member {number} count
   * @memberOf module:bidi-map#
   * @readonly
   */
  get count() {
    return this[kReverseMap].size;
  }

  /**
   * Inherits from `Map.set` method.
   */
  set(key: V, value: V): this {
    this.delete(key);
    super.set(key, value);

    let lookup = this[kReverseMap].get(value);
    if (lookup) {
      lookup.push(key);
    } else {
      lookup = [key];
      this[kReverseMap].set(value, lookup);
    }

    return this;
  }

  /**
   * Check if the map has the given value.
   *
   * @param {V} value The given value
   * @return {boolean}
   */
  exists(value: V): boolean {
    return this[kReverseMap].has(value);
  }

  /**
   * Get the first key of the given value or `undefined` if not exists.
   *
   * @param {V} value
   * @return {K}
   */
  getKeyOf(value: V): V | undefined {
    const lookup = this[kReverseMap].get(value);
    return lookup ? lookup[0] : undefined;
  }

  /**
   * Get the all the keys of the given value.
   *
   * @param {V} value
   */
  getKeysOf(value: V): V[] {
    const lookup = this[kReverseMap].get(value);
    return lookup ? lookup.slice() : [];
  }

  /**
   * Inherits from `Map.delete` method.
   *
   * @param {K} key
   * @return {boolean}
   */
  delete(key: V): boolean {
    if (!this.has(key)) {
      return false;
    }

    const value = this.get(key) as V;
    const lookup = this[kReverseMap].get(value);

    if (lookup) {
      if (lookup.length === 1) {
        if (lookup[0] !== key) {
          throw Error(`can't find property "${key}" on the lookup map`);
        }

        this[kReverseMap].delete(value);
      } else {
        const index = lookup.indexOf(key);
        if (index === -1) {
          throw Error(`can't find property "${key}" on the lookup map`);
        }

        lookup.splice(index, 1);
      }
    }

    super.delete(key);

    return true;
  }

  clear() {
    super.clear();
    this[kReverseMap].clear();
  }
}

export default BidiMap;
