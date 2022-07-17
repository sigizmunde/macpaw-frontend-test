import { Panel } from 'components/StyledBlocks/StyledBlocks';
import styled from 'styled-components';

export const StartPanel = styled(Panel)`
  margin: 10px;
  height: 100%;
  padding: 0;
  overflow: visible;
  width: calc(100% - 20px);
  background-color: var(--faded-accent-color);
`;

export const StartImg = styled.img`
  position: relative;
  width: 100%;
  transform: scale(110%);
`;
