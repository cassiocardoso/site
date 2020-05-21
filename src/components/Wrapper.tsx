import styled from 'styled-components';
import { mediaV2 } from '../utils/media';

export const Wrapper: any = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${(props: any) => (props.fullWidth ? '100%' : '80rem')};
  padding: ${(props: any) => (props.fullWidth ? '0' : '0 1rem')};

  @media ${mediaV2.tablet} {
    padding: ${(props: any) => (props.fullWidth ? '0' : '0 3rem')};
  }

  @media ${mediaV2.desktop} {
    padding: ${(props: any) => (props.fullWidth ? '0' : '0 6rem')};
  }
`;
