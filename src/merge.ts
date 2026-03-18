/**
 * Merges three integer arrays into a single sorted array (ascending).
 * - collection_1: sorted ascending (min → max)
 * - collection_2: sorted ascending (min → max)
 * - collection_3: sorted descending (max → min)
 *
 * No sort functions are used. Uses a k-way merge with pointer strategy.
 */
export function merge(
    collection_1: number[],
    collection_2: number[],
    collection_3: number[]
  ): number[] {
    
    // Reverse collection_3 in-place using two pointers (no sort)
    const c3Asc = reverseArray(collection_3);
  
    // Merge all three ascending arrays using k-way merge
    return mergeThreeAscending(collection_1, collection_2, c3Asc);
  }
  
  /**
   * Returns a new array with elements in reverse order (no sort used).
   */
  function reverseArray(arr: number[]): number[] {
    const result: number[] = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
      result[i] = arr[arr.length - 1 - i];
    }
    return result;
  }
  
  /**
   * Merges three ascending-sorted arrays into one ascending-sorted array.
   * Uses a three-pointer approach — O(n1 + n2 + n3) time.
   */
  function mergeThreeAscending(
    a: number[],
    b: number[],
    c: number[]
  ): number[] {
    const result: number[] = [];
    let i = 0, j = 0, k = 0;
  
    while (i < a.length && j < b.length && k < c.length) {
      if (a[i] <= b[j] && a[i] <= c[k]) {
        result.push(a[i++]);
      } else if (b[j] <= a[i] && b[j] <= c[k]) {
        result.push(b[j++]);
      } else {
        result.push(c[k++]);
      }
    }
  
    // Drain remaining from a and b
    while (i < a.length && j < b.length) {
      result.push(a[i] <= b[j] ? a[i++] : b[j++]);
    }
  
    // Drain remaining from a and c
    while (i < a.length && k < c.length) {
      result.push(a[i] <= c[k] ? a[i++] : c[k++]);
    }
  
    // Drain remaining from b and c
    while (j < b.length && k < c.length) {
      result.push(b[j] <= c[k] ? b[j++] : c[k++]);
    }
  
    // Drain any leftovers
    while (i < a.length) result.push(a[i++]);
    while (j < b.length) result.push(b[j++]);
    while (k < c.length) result.push(c[k++]);
  
    return result;
  }