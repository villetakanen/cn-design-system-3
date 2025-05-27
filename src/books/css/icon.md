---
title: 'Icon'
collection: 'Component styles'
---
# Icon

While actual icons are provided via the [`<cn-icon>`](./../elements/cn-icon) component, we
provide a component style for images that are used in the same way as icons in the
application.

## Base styling 
```css
img.icon-large {
  width: var(--cn-icon-size-[large]);
  aspect-ratio: 1 / 1;
  border-radius: var(--cn-grid);
  object-fit: cover;
}
```

## Examples

<div class="flex">
  <img class="icon-large flex-none" src="/example/avatar.webp" alt="Icon">
</div>

## Usage

| Class | Description |
| --- | --- |
| `icon-large` | This class sets the icon size to `var(--cn-icon-size-large)` |