import { merge } from './merge';

describe('merge(collection_1, collection_2, collection_3)', () => {

  test('basic case: all distinct values', () => {
    const c1 = [1, 4, 7];       // asc
    const c2 = [2, 5, 8];       // asc
    const c3 = [9, 6, 3];       // desc
    expect(merge(c1, c2, c3)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  test('duplicate values across collections', () => {
    const c1 = [1, 3, 5];
    const c2 = [1, 3, 5];
    const c3 = [5, 3, 1];
    expect(merge(c1, c2, c3)).toEqual([1, 1, 1, 3, 3, 3, 5, 5, 5]);
  });

  test('collections of different lengths', () => {
    const c1 = [1, 10];
    const c2 = [2, 3, 4];
    const c3 = [9, 6];
    expect(merge(c1, c2, c3)).toEqual([1, 2, 3, 4, 6, 9, 10]);
  });

  test('one collection is empty', () => {
    const c1: number[] = [];
    const c2 = [1, 3, 5];
    const c3 = [6, 4, 2];
    expect(merge(c1, c2, c3)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('all collections are empty', () => {
    expect(merge([], [], [])).toEqual([]);
  });

  test('single element in each collection', () => {
    expect(merge([3], [1], [2])).toEqual([1, 2, 3]);
  });

  test('negative numbers', () => {
    const c1 = [-5, -3, 0];
    const c2 = [-4, -1, 2];
    const c3 = [4, 1, -2];
    expect(merge(c1, c2, c3)).toEqual([-5, -4, -3, -2, -1, 0, 1, 2, 4]);
  });

  test('already sorted result with overlapping ranges', () => {
    const c1 = [1, 5, 9];
    const c2 = [3, 7, 11];
    const c3 = [10, 6, 2];
    expect(merge(c1, c2, c3)).toEqual([1, 2, 3, 5, 6, 7, 9, 10, 11]);
  });

  test('large equal values', () => {
    const c1 = [5, 5, 5];
    const c2 = [5, 5];
    const c3 = [5, 5];
    expect(merge(c1, c2, c3)).toEqual([5, 5, 5, 5, 5, 5, 5]);
  });

  test('two empty collections', () => {
    const c1: number[] = [];
    const c2: number[] = [];
    const c3 = [9, 3, 1];
    expect(merge(c1, c2, c3)).toEqual([1, 3, 9]);
  });
});