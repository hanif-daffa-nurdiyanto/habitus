## Tech Stack
- Vite react typescript
- Tailwindcss

## Code Style

- Prefer arrow functions over function declarations.
- When a function or component returns an expression or JSX directly, omit the `return` keyword and use the parenthesized implicit-return form: `() => (...)`.
- Declare components with `const ComponentName = ...`.
- Keep named exports at the bottom of the file using `export { ComponentName }`.
- Use `kebab-case` for file names.
- Prefer logical operators such as `&&` for conditional rendering when there is no meaningful fallback value.
- For numeric conditions, use explicit comparisons such as `count > 0 && <Component />` instead of relying on numeric truthiness such as `count && <Component />`.
- Avoid ternary expressions that only return `null` or `undefined`, especially for boolean or comparison conditions such as `condition ? <Component /> : null`, `items.length > 0 ? <Component /> : null`, or `count > 0 ? <Component /> : undefined`; use `condition && <Component />` instead.
- Use ternary expressions when both branches produce meaningful values.
- Prefer early returns and guard clauses to reduce unnecessary nesting.