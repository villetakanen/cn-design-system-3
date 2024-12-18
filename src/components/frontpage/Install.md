## Installation

The suggested method of installation is to use npm registry.

```zsh
npm install @11thdeg/cyan-next
# OR
pnpm install @11thdeg/cyan-next
```

Alternatively, you can use the GitHub repository as a subrepo, like this
[Astro](https://astro.build) project does.

## Fonts

The Design System expects to use Lato (headings) and Open Sans (body) from Google fonts.

A fallback to Tailwinf CSS's default font stack is provided for both, and the font stack
suggested by the Tailwinf CSS is used for the monospace font.

```html
<!-- Google fonts for Cyan-->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto+Mono:wght@500&display=swap" rel="stylesheet">
<!-- end Google fonts for Cyan -->
```