<script lang="ts">
	import DocumentNode from './DocumentNode.svelte';
	import { defaultRenderers, type Renderers } from './default-renderers.js';

	type Element = {
		children: Node[];
		[key: string]: unknown;
	};
	type Text = {
		text: string;
		[key: string]: unknown;
	};

	type Node = Element | Text;
	interface Props {
		document: Element[];
		renderers?: Renderers;
	}
	let { document, renderers = defaultRenderers }: Props = $props();
</script>

{#each document as node}
	<DocumentNode {node} {renderers}></DocumentNode>
{/each}
