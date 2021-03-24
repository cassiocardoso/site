import { FC } from 'react';
import styled from 'styled-components';

import { PageLayout } from 'layouts/Page';

const Lead = styled.h2`
  margin-bottom: var(--spacing-sm);
  padding: var(--spacing-lg);
`;

const Cap = styled.span`
  position: absolute;
  font-size: 7rem;
  transform: translate(-50%, -50%);
  opacity: 0.2;
  user-select: none;
  z-index: 1;
`;

const PurposePage: FC = () => (
  <PageLayout title="Purpose">
    <Lead>
      <Cap>W</Cap>
      <span>Work hard and be nice to people.</span>
    </Lead>
    <p>
      Over the years I am proud to see how much I learnt, through college, by myself and, mostly,
      from my teammates. This inspires me to keep going on this path.
    </p>
    <p>
      The excitement of doing something new, the joy of sharing it with others, the fun of talking
      about things I like, all these feelings motivate me to keep learning and sharing as much as I
      can.
    </p>
    <p>
      The possibility to work on something that is meaningful for others, that challenges the status
      quo, that creates a positive impact in the world we live in. This makes me jump out of bed in
      the morning to solve problems that will make our world a better place.
    </p>
    <p>
      <em>
        This is <strong>my purpose</strong>. Find more about it at{' '}
        <a href="https://slashpurpose.org/" target="_blank" rel="noopener noreferrer">
          slashpurpose.org
        </a>
        .
      </em>
    </p>
  </PageLayout>
);

export default PurposePage;
