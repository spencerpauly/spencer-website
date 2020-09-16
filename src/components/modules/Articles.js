import React from 'react';
import styled from 'styled-components';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const articles = [
	{
		name: 'My Plan For a Personal Website Overhaul',
		url: 'https://medium.com/@spencerpauly',
		views: '',
	},
	{
		name: 'The 9 Month Solo Development Journey of Skiwise',
		url:
			'https://medium.com/@spencerpauly/the-9-month-solo-development-journey-of-skiwise-282c74cd5c3a',
		views: '',
	},
	,
	{
		name: '"State Containers" - A Simpler Alternative to Redux for State Management',
		url:
			'https://medium.com/better-programming/the-container-pattern-for-better-state-management-in-react-9351fe4381d1',
		views: '(1,640 views)',
	},
	{
		name: 'Why I Have 2 Installations of Google Chrome.',
		url:
			'https://medium.com/@spencerpauly/why-i-use-2-installations-of-google-chrome-to-increase-my-productivity-8d5f6b1890f4',
		views: '',
	},
	{
		name: '10 Pro Tips for Incoming Computer Science Students in 2020',
		url:
			'https://medium.com/better-programming/10-pro-tips-for-incoming-computer-science-students-in-2020-d115945c7584',
		views: '(700 views)',
	},
	{
		name: 'Why I Switched Away From Google Firestore',
		url:
			'https://medium.com/swlh/why-i-switched-away-from-google-firestore-and-will-never-go-back-e34cafb733b',
		views: '(16,820 views)',
	},
	{
		name: '10 Takeaways from the 2020 GraphQL Summit',
		url: 'https://medium.com/@spencerpauly/10-takeaways-from-the-2020-graphql-summit-d1910997df39',
		views: '',
	},
];

const Articles = () => {
	return (
		<Wrapper>
			<OpenDesc>
				I decided I wanted to start writing technical articles. Now I post a new article every
				single <b>Sunday</b>.
			</OpenDesc>
			<Posts>
				{articles.map((article) => (
					<Article>
						<ArticleDesc target='_blank' href={article.url}>
							{article.name + ' '}
							<FontAwesomeIcon icon={faExternalLinkAlt} color='#007bff' />{' '}
						</ArticleDesc>
						{article.views}
					</Article>
				))}
			</Posts>
		</Wrapper>
	);
};

export default Articles;

const Wrapper = styled.div`
	padding-top: 1rem;
	padding-bottom: 3rem;
`;

const Posts = styled.div`
	display: flex;
	justify-content: left;
	flex-direction: column;
`;

const OpenDesc = styled.div`
	color: #777;
	font-weight: 500;
	max-width: 30rem;
	margin: auto;
	font-size: 0.9rem;
	padding-bottom: 20px;
`;

const Article = styled.div`
	padding: 0.3rem;
`;

const ArticleDesc = styled.a``;
