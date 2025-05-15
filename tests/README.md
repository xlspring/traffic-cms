# Testing Guide for Traffic CMS

This project uses Vitest, a fast and modern testing framework that works well with Vite. The test suite includes unit tests for components, Redux slices, and screens.

## Running Tests

To run the tests, you can use the following commands:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch
```

## Test Structure

The tests are organized by type:

- `tests/components/` - Tests for React components
- `tests/redux/` - Tests for Redux reducers and actions
- `tests/screens/` - Tests for full screen components

## Writing New Tests

When writing new tests, follow these guidelines:

1. Create test files with a `.test.tsx` or `.test.ts` extension
2. Place the tests in the appropriate directory based on what you're testing
3. Import the necessary testing utilities from Vitest and React Testing Library
4. For components that use Redux, create a mock store with necessary data

Example:

```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import YourComponent from '~/components/YourComponent';

describe('YourComponent', () => {
  it('renders correctly', () => {
    render(<YourComponent />);
    expect(screen.getByText('Your Text')).toBeInTheDocument();
  });
});
```

## Mocking

For components that depend on external services or libraries:

1. Use `vi.mock()` to mock dependencies
2. For Redux components, create a mock store with test data
3. For components that use hooks like `useEffect`, mock them as needed

## Coverage

To see test coverage, run:

```bash
npm test -- --coverage
```

This will generate a coverage report showing which parts of the code are covered by tests. 