import type { Component } from 'svelte';

export type Renderers = { [key: string]: Component | null };

export type Node = Element | Text;
export type Text = {
	text: string;
	[key: string]: unknown;
};
export type Element = {
	children: Node[];
	[key: string]: unknown;
};
