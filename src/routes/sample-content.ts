export const content = {
	document: [
		{
			type: 'heading',
			level: 1,
			children: [
				{
					text: 'Keystone Svelte Renderer'
				}
			]
		},
		{
			type: 'heading',
			level: 2,
			children: [
				{
					text: 'Paragraph'
				}
			]
		},
		{
			type: 'paragraph',
			children: [
				{
					text: 'Paragraph with a '
				},
				{
					bold: true,
					text: 'bold text, '
				},
				{
					bold: true,
					italic: true,
					underline: true,
					strikethrough: true,
					text: 'bold, italic, underlined and striked text, '
				},
				{
					text: 'italic text, ',
					italic: true
				},
				{
					text: 'underlined text',
					underline: true
				},
				{
					text: ', '
				},
				{
					text: 'strikethrough text',
					strikethrough: true
				},
				{
					text: ', '
				},
				{
					code: true,
					text: 'coding text'
				},
				{
					text: ', '
				},
				{
					text: 'keyboard text',
					keyboard: true
				},
				{
					text: ', '
				},
				{
					text: 'superscript text',
					superscript: true
				},
				{
					text: ' and '
				},
				{
					text: 'subscript text',
					subscript: true
				},
				{
					text: '.'
				}
			]
		},
		{
			type: 'paragraph',
			children: [
				{
					text: 'Paragraph with '
				},
				{
					href: 'https://yavanika.pictures',
					type: 'link',
					children: [
						{
							text: 'links'
						}
					]
				},
				{
					text: '.'
				}
			]
		},
		{
			type: 'paragraph',
			children: [
				{
					text: 'Left aligned paragraph.'
				}
			]
		},
		{
			type: 'paragraph',
			children: [
				{
					text: 'Center aligned paragraph'
				}
			],
			textAlign: 'center'
		},
		{
			type: 'paragraph',
			children: [
				{
					text: 'Right aligned paragraph.'
				}
			],
			textAlign: 'end'
		},
		{
			type: 'divider',
			children: [
				{
					text: ''
				}
			]
		},
		{
			type: 'blockquote',
			children: [
				{
					type: 'paragraph',
					children: [
						{
							text: 'A quote by some wise man.'
						}
					]
				}
			]
		},
		{
			type: 'heading',
			level: 2,
			children: [
				{
					text: 'List items'
				}
			]
		},
		{
			type: 'heading',
			level: 3,
			children: [
				{
					text: 'Unordered'
				}
			]
		},
		{
			type: 'unordered-list',
			children: [
				{
					type: 'list-item',
					children: [
						{
							type: 'list-item-content',
							children: [
								{
									text: 'One'
								}
							]
						}
					]
				},
				{
					type: 'list-item',
					children: [
						{
							type: 'list-item-content',
							children: [
								{
									text: 'Two'
								}
							]
						}
					]
				},
				{
					type: 'list-item',
					children: [
						{
							type: 'list-item-content',
							children: [
								{
									text: 'Three'
								}
							]
						}
					]
				}
			]
		},
		{
			type: 'heading',
			level: 3,
			children: [
				{
					text: 'Ordered'
				}
			]
		},
		{
			type: 'ordered-list',
			children: [
				{
					type: 'list-item',
					children: [
						{
							type: 'list-item-content',
							children: [
								{
									text: 'One'
								}
							]
						}
					]
				},
				{
					type: 'list-item',
					children: [
						{
							type: 'list-item-content',
							children: [
								{
									text: 'Two'
								}
							]
						}
					]
				},
				{
					type: 'list-item',
					children: [
						{
							type: 'list-item-content',
							children: [
								{
									text: 'Three'
								}
							]
						}
					]
				}
			]
		},
		{
			type: 'heading',
			level: 2,
			children: [
				{
					text: 'Layout blocks'
				}
			]
		},
		{
			type: 'layout',
			layout: [1, 1],
			children: [
				{
					type: 'layout-area',
					children: [
						{
							type: 'paragraph',
							children: [
								{
									text: 'Add layout blocks'
								}
							]
						},
						{
							type: 'paragraph',
							children: [
								{
									text: 'and all the usual '
								},
								{
									code: true,
									text: 'formatting'
								},
								{
									text: ' options'
								}
							]
						}
					]
				},
				{
					type: 'layout-area',
					children: [
						{
							type: 'paragraph',
							children: [
								{
									text: 'You can insert '
								},
								{
									href: 'https://keystonejs.com/',
									type: 'link',
									children: [
										{
											text: 'links'
										}
									]
								},
								{
									text: ''
								}
							]
						},
						{
							type: 'paragraph',
							children: [
								{
									text: 'and format text with **'
								},
								{
									bold: true,
									text: 'markdown syntax'
								},
								{
									text: '**'
								}
							]
						}
					]
				}
			]
		},
		{
			type: 'paragraph',
			children: [
				{
					text: ''
				}
			]
		}
	]
};
