<script lang="ts">
	import Renderer from '$lib/Document/Renderer.svelte';
	import { content } from './sample-content.js';
</script>

<article class="my-4 px-8">
	<Renderer document={content.document}></Renderer>
</article>

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
