import DefaultElement from './DefaultElement.svelte';
import type { Renderers } from './types.js';

export const defaultRenderers: Renderers = {
	bold: DefaultElement,
	italic: DefaultElement,
	underline: DefaultElement,
	strikethrough: DefaultElement,
	code: DefaultElement,
	keyboard: DefaultElement,
	subscript: DefaultElement,
	superscript: DefaultElement,
	relationship: DefaultElement,
	link: DefaultElement,
	// block elements
	blockquote: DefaultElement,
	heading: DefaultElement,
	paragraph: DefaultElement,
	layout: DefaultElement,
	'layout-area': DefaultElement,
	divider: DefaultElement,
	'ordered-list': DefaultElement,
	'unordered-list': DefaultElement,
	'list-item': DefaultElement,
	'list-item-content': null
};

export const defaultMap: { [key: string]: string } = {
	bold: 'strong',
	italic: 'em',
	underline: 'u',
	strikethrough: 's',
	code: 'code',
	keyboard: 'kbd',
	subscript: 'sub',
	superscript: 'sup',
	relationship: 'span',
	link: 'a',
	blockquote: 'blockquote',
	heading: 'h',
	paragraph: 'p',
	layout: 'div',
	'layout-area': 'div',
	divider: 'hr',
	'ordered-list': 'ol',
	'unordered-list': 'ul',
	'list-item': 'li',
	'list-item-content': ''
};
