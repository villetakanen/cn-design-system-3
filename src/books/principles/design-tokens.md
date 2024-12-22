---
title: 'Design Tokens'
icon: 'design'
---
# Design Tokens

Core Design tokens can be found at `[cyan]/src/tokens` directory. 

## Units

### Baseline grid

| Token | Value | Description |
|-------|-------|-------------|
| `--cn-grid` | `0.5rem` | The baseline grid unit, 8px |
| `--cn-gap` | `--cn-grid * 2` | The gap unit, 16px |
| `--cn-line` | `--cn-grid * 3` | The line (height) unit, 24px |

### Breakpoints

While CSS media queries are used to define the breakpoints, we do provide tokens for the
breakpoints themselves. Just in case.

| Token | Value | Description |
|-------|-------|-------------|
| `--cn-breakpoint-small` | `620px` | Extra small breakpoint, up to 620px |
| `--cn-breakpoint-medium` | `960px` | Small breakpoint, up to 960px |
| `--cn-breakpoint-wide` | `1365px` | Medium breakpoint, up to 1365px. Beyond that we might have some support for extra-wide monitors |

### Button Sizing

All buttons maintain a minimum clickable area of 56x56 pixels to ensure optimal touch interaction, even when their visual appearance is smaller. Below are the standard visual button sizes used in our system.

| Token | Value | Description |
|-------|-------|-------------|
| `--cn-button-size-physical` | `56px` | The minimum clickable area of a button |
| `--cn-button-size` | `38px` | The standard button visual size |
| `--cn-navigation-button-size` | `48px` | The standard navigation button visual size |

<div class="flex">
  <figure class="elevation-1 p-1 m-0">
    <div style="margin: 0 auto; width: var(--cn-button-size-physical); height: var(--cn-button-size-physical); background: var(--color-notify);border-radius:50%"></div>
    <figcaption>Physical size (56px)</figcaption>
  </figure>
  <figure class="elevation-1 p-1 m-0">
    <div style="margin: 0 auto; width: var(--cn-button-size); height: var(--cn-button-size); background: var(--color-notify);border-radius:50%"></div>
    <figcaption>Visual size (38px)</figcaption>
  </figure>
  <figure class="elevation-1 p-1 m-0">
    <div style="margin: 0 auto; width: var(--cn-navigation-button-size); height: var(--cn-navigation-button-size); background: var(--color-notify);border-radius:50%"></div>
    <figcaption>Navigation size (48px)</figcaption>
  </figure>
</div>


