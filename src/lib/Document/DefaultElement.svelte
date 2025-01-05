<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
		[key: string]: unknown;
	}

	let { tag, children, ...restAttributes }: Props = $props();
</script>

<svelte:element this={tag as string} {...restAttributes}>
	{@render children?.()}
</svelte:element>
