---
title: 'Color and theme'
icon: 'design'
---
# Color and theme

Cyan Design System uses a color palette that is based on the Cyan _"chroma"_ color scales. 
The color palette is designed to be accessible, and to provide a consistent and harmonious 
look and feel across the App(s).

The color scale is also designed to be "themeable" by changing the "chroma" with a custom 
set of colors with a set with same luminance and saturation values. This allows for a consistent
look and feel across the app, while allowing for customization of the color palette.

## Tokens

The color tokens for the Desing are defined in the `src/tokens/colors` directory and have a `--color-` prefix. 
The theme tokens are all defined with values for light and dark modes, and are used to set the colors across the app. 
We also provide `--color-on-` tokens for accessible text colors on top of a given background color.

Additionally, we provide some surface tokens with prefix `--surface-` that are used to define the backgrounds for the different surfaces in the app.

## Base theme

### Surfaces and text colors

| Color | Token | Example |
|---------|-------|-------|
| Surface | `--color-surface` | <div class="color-box light" style="background: var(--color-surface);"></div> <div class="color-box dark" style="background: var(--color-surface);"></div> |
| Surface | `--color-surface-1` | <div class="color-box light" style="background: var(--color-surface-1);"></div> <div class="color-box dark" style="background: var(--color-surface-1);"></div> |
| Surface | `--color-surface-2` | <div class="color-box light" style="background: var(--color-surface-2);"></div> <div class="color-box dark" style="background: var(--color-surface-2);"></div> |
| Surface | `--color-surface-3` | <div class="color-box light" style="background: var(--color-surface-3);"></div> <div class="color-box dark" style="background: var(--color-surface-3);"></div> |
| Surface | `--color-surface-4` | <div class="color-box light" style="background: var(--color-surface-4);"></div> <div class="color-box dark" style="background: var(--color-surface-4);"></div> |
| Key     | `--color-on-surface` | <div class="color-box light" style="background: var(--color-on-surface);"></div> <div class="color-box dark" style="background: var(--color-on-surface);"></div> |
| Text   | `--color-text` | <div class="color-box light" style="background: var(--color-text);"></div> <div class="color-box dark" style="background: var(--color-text);"></div> |
| High Emphasis Text | `--color-text-high` | <div class="color-box light" style="background: var(--color-text-high);"></div> <div class="color-box dark" style="background: var(--color-text-high);"></div> |
| Low Emphasis Text | `--color-text-low` | <div class="color-box light" style="background: var(--color-text-low);"></div> <div class="color-box dark" style="background: var(--color-text-low);"></div> |

#### Contrast and accessibility

<div class="grid-2">
  <div class="light p-2" style="background: var(--color-surface)">
    <p>Elevation [0], text on surface</p>
    <p class="text-high">High emphasis text on surface</p>
    <p class="text-low">Low emphasis text on surface</p>
  </div>
  <div class="dark p-2" style="background: var(--color-surface)">
    <p>Elevation [0], text on surface</p>
    <p class="text-high">High emphasis text on surface</p>
    <p class="text-low">Low emphasis text on surface</p>
  </div>
  <div class="light p-2" style="background: var(--color-surface-1)">
    <p>Elevation 1, text on surface</p>
    <p class="text-high">High emphasis text on surface</p>
    <p class="text-low">Low emphasis text on surface</p>
  </div>
  <div class="dark p-2" style="background: var(--color-surface-1)">
    <p>Elevation 1, text on surface</p>
    <p class="text-high">High emphasis text on surface</p>
    <p class="text-low">Low emphasis text on surface</p>
  </div>
  <div class="light p-2" style="background: var(--color-surface-2)">
    <p>Elevation 2, text on surface</p>
    <p class="text-high">High emphasis text on surface</p>
    <p class="text-low">Low emphasis text on surface</p>
  </div>
  <div class="dark p-2" style="background: var(--color-surface-2)">
    <p>Elevation 2, text on surface</p>
    <p class="text-high">High emphasis text on surface</p>
    <p class="text-low">Low emphasis text on surface</p>
  </div>
  <div class="light p-2" style="background: var(--color-surface-3)">
    <p>Elevation 3, text on surface</p>
    <p class="text-high">High emphasis text on surface</p>
    <p class="text-low">Low emphasis text on surface</p>
  </div>
  <div class="dark p-2" style="background: var(--color-surface-3)">
    <p>Elevation 3, text on surface</p>
    <p class="text-high">High emphasis text on surface</p>
    <p class="text-low">Low emphasis text on surface</p>
  </div>
</div>