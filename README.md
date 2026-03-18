# Merge Three Sorted Arrays

## Algorithm

The implementation uses a three-pointer merge strategy:

1. Reverses `collection_3` to make it ascending (without using sort)
2. Performs a k-way merge on all three ascending arrays
3. Time complexity: O(n1 + n2 + n3)
4. Space complexity: O(n1 + n2 + n3)

## Setup Instructions

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone or navigate to the project directory:**

   ```bash
   git clone https://github.com/OverCatX/merge-sorted-arrays.git
   cd merge-sorted-arrays
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   This will install:
   - `typescript` - TypeScript compiler
   - `jest` - Testing framework
   - `ts-jest` - TypeScript preprocessor for Jest
   - `@types/jest` - TypeScript type definitions for Jest

## Running the Code

### Run Tests

```bash
npm test
```

All 10 unit tests will run and should pass.

### Run Example

```bash
npm run example
```

This runs the example file that demo the merge function with various test cases.

## Test Cases

The project includes comprehensive unit tests covering:

1. Basic case with all distinct values
2. Duplicate values across collections
3. Collections of different lengths
4. One collection is empty
5. All collections are empty
6. Single element in each collection
7. Negative numbers
8. Overlapping ranges
9. Large equal values
10. Two empty collections

## Example Usage

```typescript
import { merge } from "./merge";

const c1 = [1, 4, 7]; // ascending
const c2 = [2, 5, 8]; // ascending
const c3 = [9, 6, 3]; // descending

const result = merge(c1, c2, c3);
console.log(result); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## Implementation Details

The solution avoids using any sort functions by:

- Manually reversing `collection_3` using a two-pointer approach
- Using a three-way merge algorithm that compares the current elements from each array
- Maintaining three pointers (one for each array) and selecting the smallest element at each step
