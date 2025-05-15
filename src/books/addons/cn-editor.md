---
title: 'cn-editor'
readme: 'cn-editor/README.md'
description: "A markdown editor plugin for Cyan Design System"
---

# cn-editor

The `cn-editor` component is a LitElement component that renders a markdown editor. The editor supports markdown syntax highlighting, and the preview pane renders the markdown as HTML.

## Usage

`<cn-editor>` renders a markdown editor with a preview pane:

<div style="width: 100%; height: 300px;">
  <cn-editor id="editor-demo" gutter></cn-editor>
</div>

<script is:inline>
const editorDemo = document.getElementById('editor-demo');

// Focus triage
editorDemo.addEventListener('focus', () => {
  console.log('<cn-editor> @focus', editorDemo.value);
});

// Blur triage
editorDemo.addEventListener('blur', () => {
  console.log('<cn-editor> @blur', editorDemo.value);
});

// Change triage
editorDemo.addEventListener('change', () => {
  console.log('<cn-editor> @change', editorDemo.value);
});
</script>