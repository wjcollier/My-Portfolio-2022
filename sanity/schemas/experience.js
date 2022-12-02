export default {
	name: 'experience',
	title: 'Experience',
	type: 'document',
	fields: [
		{
			name: 'course',
			title: 'Course',
			type: 'string',
		},
		{
			name: 'schoolImage',
			title: 'School Image',
			type: 'image',
			options: { hotspot: true },
		},
		{
			name: 'company',
			title: 'Company',
			type: 'string',
		},
		{
			name: 'dateStarted',
			title: 'DateStarted',
			type: 'date',
		},
		{
			name: 'dateEnded',
			title: 'DateEnded',
			type: 'date',
		},
		
		{
			name: 'technologies',
			title: 'Technologies',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'skill' } }],
		},
		{
			name: 'courseExplanation',
			title: 'Course Explanation',
			type: 'text',
		},
	],
	orderings: [
		{
			name: 'dateStarted',
			title: 'DateStarted',
			by: [{ field: 'dateStarted', direction: 'asc' }],
		},
	],
}
