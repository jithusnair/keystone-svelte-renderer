<script lang="ts">
	import Self from './DocumentNode.svelte';
	import { defaultMap } from './default-renderers.js';
	import type { Text, Element, Node, Renderers } from './types.js';

	interface Props {
		node: Node;
		renderers: Renderers;
	}

	let { node, renderers }: Props = $props();

	function getInlineKeys(node: Text) {
		const keys = Object.keys(node);
		if (keys.length === 1) return keys;

		// filter out "text" key
		const filteredKeys = keys.filter((item) => item !== 'text');

		// bring "text" key to the beginning of the array
		return ['text', ...filteredKeys];
	}
</script>

{#snippet self(node: Props['node'])}
	{#each (node as Element).children as child}
		<Self node={child} {renderers}></Self>
	{/each}
{/snippet}

{#snippet inlineSelf(entries: string[], node: Text)}
	{@const entry = entries.pop()}
	{#if entry && renderers[entry]}
		{@const Elem = renderers[entry]}
		<Elem tag={defaultMap[entry]}>
			{@render inlineSelf(entries, node)}
		</Elem>
	{:else}
		{node.text}
	{/if}
{/snippet}

{#if typeof node.text === 'string'}
	{@render inlineSelf(getInlineKeys(node as Text), node as Text)}
{:else}
	{@const type = node.type}
	{@const Elem = renderers[node.type as string]}
	{#if !Elem}
		{@render self(node)}
	{:else if type === 'paragraph'}
		<Elem tag={defaultMap[type]} style={`text-align: ${node.textAlign}`}>
			{@render self(node)}
		</Elem>
	{:else if type === 'code' && (node as Element).children.length === 1 && typeof (node as Element).children[0]?.text === 'string'}
		<Elem tag={defaultMap[type]}>
			{(node as Element).children[0].text}
		</Elem>
	{:else if type === 'layout'}
		<Elem
			tag={defaultMap[type]}
			style={`display: grid; grid-template-columns: ${(node.layout as number[]).map((x) => x + 'fr').join(' ')}`}
		>
			{@render self(node)}
		</Elem>
	{:else if type === 'link'}
		<Elem tag={defaultMap[type]} href={node.href}>
			{@render self(node)}
		</Elem>
	{:else if type === 'heading'}
		<Elem tag={defaultMap[type] + node.level}>
			{@render self(node)}
		</Elem>
	{:else}
		<Elem tag={defaultMap[type as string]}>
			{@render self(node)}
		</Elem>
	{/if}
{/if}
