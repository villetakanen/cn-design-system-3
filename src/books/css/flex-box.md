---
title: 'Flex Box'
icon: 'css'
description: 'Flex Box'
---
# Flex Box

The default styling for flexbox is:
```css
.flex {
  display: flex;
  gap: var(--cn-gap);
  flex-wrap: wrap;
}
.flex > * {
  flex-grow: 1;
  flex-shrink: 0;
}
```

## Examples

### Default styling

<div class="flex">
  <cn-card 
    title="A Card"
  ></cn-card>
  <cn-avatar nick="Sparrow"></cn-avatar>
  <h2>H2</h2>
  <p>Paragraph</p>
</div>

### Column

<div class="flex flex-col">
  <cn-card 
    title="A Card"
  ></cn-card>
  <cn-card 
    title="Another"
  ></cn-card>
  <cn-bubble>
    And a Bubble
  </cn-bubble>
</div>

## Atomics

We do provide a set of atomic classes to help you with flexbox layouts. These classes follow the
best-practice naming conventions from [Tailwind CSS](https://tailwindcss.com/).

| Class | Description |
| --- | --- |
| `flex` | This class sets `display: flex;` and adds the basic styles from above. |
| `flex-row` | This class sets `flex-direction: row;` on the element. |
| `flex-col` | This class sets `flex-direction: column;` on the element, and `width: 100%` to all direct children |
| `flex-no-wrap` | This class sets `flex-wrap: nowrap;` on the element. |
| `grow` | This class sets `flex-grow: 1;` on the element. |
| `shrink` | This class sets `flex-shrink: 1;` on the element. |
| `justify-end` | This class sets `justify-content: flex-end;` on the element. |
| `justify-space-between` | This class sets `justify-content: space-between;` on the element. |
| `justify-center` | This class sets `justify-content: center;` on the element. |
| `align-center` | This class sets `align-items: center;` on the element. |
| `items-center` | This class sets `align-items: center;` and `justify-content: center;` on the element. |
