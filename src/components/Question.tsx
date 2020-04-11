import React, { Fragment } from 'react';
import styled from 'styled-components';

import config from '../../config/SiteConfig'

export const QuestionList = styled.dl``;

const Title = styled.dt`
	font-family: ${config.headerFontFamily};
	font-weight: 700;
	margin-bottom: 0.5rem;
`;

const Answer = styled.dd``;

type QuestionProps = {
	children: React.ReactElement | React.ReactElement[],
	title: string,
}

export const Question = ({ children, title }: QuestionProps) => (
	<Fragment>
		<Title>{title}</Title>
		<Answer>{children}</Answer>
	</Fragment>
);
