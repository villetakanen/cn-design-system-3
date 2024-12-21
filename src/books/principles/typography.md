---
title: 'Typography'
icon: 'font'
multipart: true
---
<article class="column-s elevation-1 p-2 border-radius">
  <div class="text-center">
    <cn-icon noun="font" xlarge></cn-icon>
  </div>
  <h3 class="text-center">Typography</h3>

A Longish treatise on typography, type-scales and font-usage on the Pelilauta and related apps.

</article>

<article class="column-l">
  <h2>Type Scale</h2>

The type scale is generated using https://typescale.com/ with "Major third" sacale and 1.25 ratio. The scale
is then adjusted to fit the the design system and units used in the design system (this might cause some _intentional_
rounding discrepancies between the scale and the actual font sizes used in the design system).

  <h3 class="text-caption pb-1">Type Scale</h3>
  <div style="display: grid; grid-template-columns: 1fr 1fr;">
    <h1 class="m-0" style="border-left: 4px solid var(--chroma-primary-20); padding-left: var(--cn-grid)"> Heading 1</h1>
      <div></div>
      <h2 class="m-0" style="border-left: 4px solid var(--chroma-primary-40); padding-left: var(--cn-grid)">Heading 2</h2>
      <h1 class="m-0 downscaled" style="border-left: 4px solid var(--chroma-primary-20); padding-left: var(--cn-grid)">Downscaled 1</h1>
      <h3 class="m-0" style="border-left: 4px solid var(--chroma-primary-60); padding-left: var(--cn-grid)"> Heading 3</h3>
      <h2 class="m-0 downscaled" style="border-left: 4px solid var(--chroma-primary-40); padding-left: var(--cn-grid)"> Downscaled 2</h2>
      <h4 class="m-0" style="border-left: 4px solid var(--chroma-primary-80); padding-left: var(--cn-grid)"> Heading 4</h4>
      <h3 class="m-0 downscaled" style="border-left: 4px solid var(--chroma-primary-60); padding-left: var(--cn-grid)"> Downscaled 3</h3>
      <h5 class="m-0" style="border-left: 4px solid var(--chroma-primary-95); padding-left: var(--cn-grid)"> (Heading 5)</h5>
      <h4 class="m-0 downscaled" style="border-left: 4px solid var(--chroma-primary-80); padding-left: var(--cn-grid)"> Downscaled 4</h4>
    </div>
    </article>

<article>

## Text

We set the base text styles at `body` and override them as needed. 

The style can be forced to a non _body element_ by using the `.text-body` class.

### Styling Text

| Class | Description |
| --- | --- |
| `.text-high` | High emphasis text, used where text needs to stand out |
| `.text-low` | Low emphasis text, used where text needs to be less prominent |

### Examples

<p class="text-high">High emphasis text, used where text needs to stand out</p>

Normal text, and some filler content.

<p class="text-low">Low emphasis text, used where text needs to be less prominent</p>

<h4 class="text-body">A H4 element with the `.text-body` class</h4>

</article>

<article>

## Lists

Lists inherit the base text styles and support either loose (default) or `.compact` spacing.

### Examples

#### Unordered List

* An unordered list
* <span class="text-high">With some items, this one being high emphasis.</span>

#### Ordered List

1. An ordered list
2. <span class="text-low">With some items, this one being low emphasis.</span>

#### Compact Unordered List

<ol class="compact">
  <li>A compact ordered list</li>
  <li>With some items</li>
</ol>

</article>

<article>

## Tables

Please note: tables are intended for tabular data, not for layout. For layout, we provide a set of grid helpers
and layout containers.

Tables use the token `--color-surface-[+1]` as a highlight color for borders and headers. F.ex `--color-surface-1` for 
the first surface color, `--color-surface-2` on top of `.elevation-1` for the second surface color, etc.

### Examples

| Header 1 | Header 2 | Header 3 |
| --- | --- | --- |
| Row 1, Cell 1 | Row 1, Cell 2 | Row 1, Cell 3 |
| Row 2, Cell 1 | Row 2, Cell 2 | Row 2, Cell 3 |

<div class="elevation-1 p-1">

| Header 1 | Header 2 | Header 3 |
| --- | --- | --- |
| Row 1, Cell 1 | Row 1, Cell 2 | Row 1, Cell 3 |

</div>

<div class="elevation-2 p-1">

| Header 1 | Header 2 | Header 3 |
| --- | --- | --- |
| Row 1, Cell 1 | Row 1, Cell 2 | Row 1, Cell 3 |

</div>

<div class="elevation-3 p-1">

| Header 1 | Header 2 | Header 3 |
| --- | --- | --- |
| Row 1, Cell 1 | Row 1, Cell 2 | Row 1, Cell 3 |

</article>