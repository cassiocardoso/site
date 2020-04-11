import styled from 'styled-components';

import { mediaV2 } from '../utils/media';
import { zIndex } from '../utils/zIndex';

export const Content = styled.div`
  background-color: ${props => props.theme.colors.bg};
  border-radius: 1rem;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  margin-top: 0;
  padding: 2rem 1.5rem;
  z-index: ${zIndex.high};

  form {
    p {
      label,
      input {
        display: block;
      }

      input {
        min-width: 275px;
      }

      textarea {
        min-height: 150px;
        resize: vertical;
        width: 100%;
      }
    }
  }

  @media ${mediaV2.tablet} {
    padding: 3rem 3rem;
  }

  @media ${mediaV2.desktop} {
  	margin-top: -4rem;
  	padding: 2rem 4rem;
  }
`;
