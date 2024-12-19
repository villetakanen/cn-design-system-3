---
title: 'cn-dice'
readme: 'cn-dice/README.md'
description: "A dice roll visualizer, and dice roller plugin for Cyan Design System"
---

# cn-dice

The `cn-dice` component is a LitElement component that renders a die with a height matching the line-height. The die value can be set manually or rolled randomly.

## Usage

`<cn-dice>` renders a standard six-sided die, with value 6 by default: <cn-dice></cn-dice>

The value of the die can be set with the `value` property: <cn-dice value="3"></cn-dice>

The die can be 4 to 20 sided, by setting the `sides` property: \
<cn-dice value="4" sides="4"></cn-dice>
<cn-dice></cn-dice>
<cn-dice value="8" sides="8"></cn-dice>
<cn-dice value="10" sides="10"></cn-dice>
<cn-dice value="12" sides="12"></cn-dice>
<cn-dice value="20" sides="20"></cn-dice>

## Installation

The suggested method of installation is to use git submodule for the addon:

The submodule code can then be imported to the project, after cyan-next, has been imported:

```html
<script>
  import '../../../cyan-next/src/main.ts';
  import '../../../cn-dice/src/cn-dice.ts';
</script>
```