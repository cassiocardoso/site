import config from '../../config/SiteConfig';
import Post from '../models/Post';

export const personSchema = `
	{
		"@context": "http://schema.org",
		"@type": "Person",
		"name": "${config.author}",
		"url": "${config.siteUrl}",
		"jobTitle": "${config.jobTitle}",
		"alumniOf": "Univap",
		"gender": "male",
		"image": "https://raw.githubusercontent.com/cassiocardoso/resume/master/assets/profile_sm.jpg",
		"sameAs": [
			"https://linkedin.com/in/cassiocardoso",
			"http://github.com/cassiocardoso",
			"http://twitter.com/cassiocardoso",
			"https://codepen.io/cassiocardoso",
			"http://stackoverflow.com/users/3816479/cassiocardoso",
			"https://www.npmjs.com/~cassiocardoso07"
		]
	}
`;

type Edge = {
	node: Post,
};

export const blogSchema = (edges: Edge[]) => `
	{
		"@context": "http://schema.org",
		"@type": "Blog",
		"author": {
			"@type": "Person",
			"name": "${config.author}",
			"url": "${config.siteUrl}"
		},
		"blogPost": [
			${edges.map(edge => ({
				"@context": "http://schema.org",
				"@type": "BlogPosting",
				"headline": `${edge.node.frontmatter.title}`,
				"keywords": `${edge.node.frontmatter.tags ? edge.node.frontmatter.tags.join(', '): ''}`,
				"url": `${config.siteUrl}/blog/${edge.node.fields.slug}`,
				"datePublished": `${edge.node.frontmatter.date}`,
				"dateCreated": `${edge.node.frontmatter.date}`,
				"dateModified": `${edge.node.frontmatter.date}`,
				"image": {},
				"author": {
					"@type": "Person",
					"name": `${config.author}`,
					"url": `${config.siteUrl}`
				},
				"publisher": {
					"@type": "Person",
					"name": `${config.author}`,
					"url": `${config.siteUrl}`
				}
			}))}
		]
	}
`;
