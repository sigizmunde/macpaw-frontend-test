import { Panel } from 'components/StyledBlocks/StyledBlocks';
import styled from 'styled-components';

export const StartPanel = styled(Panel)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  height: 100%;
  padding: 0;
  overflow: visible;
  width: calc(100% - 20px);
  background-color: var(--faded-accent-color);
`;

export const H2 = styled.h2`
  margin-top: 0;
  margin-bottom: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 44px;
  line-height: 1.32;
`;

export const Description = styled.p`
  margin-bottom: 60px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.45;
  color: var(--secondary-text-color);
`;
