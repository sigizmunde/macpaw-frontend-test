import { Btn, Panel, PanelBtn } from 'components/StyledBlocks/StyledBlocks';
import styled from 'styled-components';

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 20px;
`;

export const PagBtn = styled(Btn)`
  color: var(--secondary-text-color);
  background-color: var(--back-color);
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.33;
  padding-left: 30px;
  padding-right: 30px;
  :hover {
    color: var(--accent-color);
    background-color: var(--faded-accent-color);
  }
`;

export const ContentPanel = styled(Panel)`
  height: 90%;
`;
