<script lang="ts">
	import DocumentNode from './DocumentNode.svelte';
	import { defaultRenderers } from './default-renderers.js';
	import type { Renderers, Element } from './types.js';

	interface Props {
		document: Element[];
		renderers?: Renderers;
	}
	let { document, renderers = defaultRenderers }: Props = $props();
</script>

{#each document as node}
	<DocumentNode {node} {renderers}></DocumentNode>
{/each}
