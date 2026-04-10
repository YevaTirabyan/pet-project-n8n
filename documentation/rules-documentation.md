# Project Code Rules Documentation

## General
- The code should be structured, readable, and easy to maintain.
- Do not mix different responsibilities in one file unless necessary.
- Each file should serve a clear and specific purpose.
- File names, variables, functions, and classes should be clearly named and reflect their purpose.
- Do not duplicate code if it can be reused.

## HTML Rules
- Use semantic tags where appropriate: `header`, `main`, `section`, `article`, `footer`, etc.
- Keep tag nesting clean and well-structured.
- Do not leave large unused or commented-out code blocks unless necessary.
- Use clear class names that reflect the purpose of the element.

## CSS Rules
- Write CSS only in separate `.css` files.
- Do not use inline styles via the `style` attribute, except in rare cases.
- Group styles logically: general styles, layout, blocks, elements, modifiers.
- Avoid duplicating identical rules.
- Class names should be clear and consistent.

## File Naming
- File names should be simple and predictable.
- Use a consistent naming style, for example lowercase with hyphens, or standard names such as:
    - `index.html`
    - `styles.css`
    - `script.js`

## Code Maintainability
- New code should fit into the existing project structure.
- Before adding a new file or function, check whether a similar implementation already exists.
- Any non-standard solutions should be briefly commented when possible.

## Prohibited
- Do not combine HTML, CSS, and JavaScript into one file unless necessary.
- Do not put the entire project into a single `index.html` file if styles and scripts can be separated.
- Do not add chaotic, unused, or duplicated code.
- Do not use unclear abbreviations in variable and file names.