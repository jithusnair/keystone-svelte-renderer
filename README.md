# Keystone Svelte Renderer

This is an unofficial Svelte 5 port of [Keystonejs's](https://keystonejs.com) Document Renderer.

## Installation

```bash
npm i -D keystone-svelte-renderer
```

## Usage

```svelte
<script lang="ts">
	import Renderer from 'keystone-svelte-renderer';

	// this should be replaced with your Keystone Document content
	import { content } from './sample-content.js';
</script>

<article class="my-4 px-8">
	<Renderer document={content.document}></Renderer>
</article>
```

### Styling

Currently styling is left to the user. The library is only concerned with rendering they Keystone document to the DOM.

Here's a sample style for the above code.

```svelte
<style lang="postcss">
	article :global {
		h1 {
			@apply my-4 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl;
		}

		h2 {
			@apply my-4 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0;
		}

		h3 {
			@apply my-3 scroll-m-20 text-2xl font-semibold tracking-tight;
		}

		h4 {
			@apply my-2 scroll-m-20 text-xl font-semibold tracking-tight;
		}

		h5 {
			@apply my-2 scroll-m-20 text-lg font-medium tracking-tight;
		}

		h6 {
			@apply my-2 scroll-m-20 font-medium tracking-tight;
		}

		p {
			@apply leading-7 [&:not(:first-child)]:mt-6;
		}

		em {
			@apply italic;
		}

		u {
			@apply underline;
		}

		strong {
			@apply font-bold;
		}

		s {
			@apply line-through;
		}

		sub {
			@apply text-sm;
		}

		sup {
			@apply text-sm;
		}

		a {
			@apply font-medium underline underline-offset-4;
		}

		ul {
			@apply my-6 ml-6 list-disc [&>li]:mt-2;
		}

		ol {
			@apply my-6 ml-6 list-decimal [&>li]:mt-2;
		}

		blockquote {
			@apply mt-6 border-l-2 pl-6 italic;
		}
	}
</style>
```

## Experimental

You can override the default renderers.

```svelte
<!-- CustomParagraph.svelte -->
<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		[key: string]: unknown;
	}

	let { tag, children, ...restAttributes }: Props = $props();
</script>

<!-- your paragraph with some custom styling -->
<p class="text-red-500" {...restAttributes}>
	{@render children?.()}
</p>
```

```svelte
<script lang="ts">
	import Renderer, { defaultRenderer } from 'keystone-svelte-renderer';
  import CustomParagraph from './CustomParagraph.svelte'

  // override the paragraph's renderer
  const customRenderer== {
    ...defaultRenderers
    paragraph: CustomParagraph
  } 

	// this should be replaced with your Keystone Document content
	import { content } from './sample-content.js';
</script>

<article class="my-4 px-8">
	<Renderer document={content.document} renderers={customRenderers}></Renderer>
</article>
```

### Node types that can be overridden

| Node type         | Additional Attributes | Default Tag             |
| ----------------- | --------------------- | ----------------------- |
| bold              |                       | `strong`                |
| italic            |                       | `em`                    |
| underline         |                       | `u`                     |
| strikethrough     |                       | `s`                     |
| code              |                       | `code`                  |
| keyboard          |                       | `kbd`                   |
| subscript         |                       | `sub`                   |
| superscript       |                       | `sup`                   |
| relationship      |                       | `span`                  |
| link              |                       | `a`                     |
| blockquote        |                       | `blockquote`            |
| heading           | `node.level`          | `h`                     |
| paragraph         | `node.textAlign`      | `p`                     |
| layout            | `node.layout`         | `div`                   |
| layout-area       |                       | `div`                   |
| divider           |                       | `hr`                    |
| ordered-list      |                       | `ol`                    |
| unordered-list    |                       | `ul`                    |
| list-item         |                       | `li`                    |
| list-item-content |                       | `null` (is a text node) |

Node types (or custom components) outside the above list _are not supported_ as of now.
