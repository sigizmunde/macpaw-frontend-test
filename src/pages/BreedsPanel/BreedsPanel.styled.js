import { Btn, Panel } from 'components/StyledBlocks/StyledBlocks';
import { minTablet } from 'components/utility/breakpoints';
import styled from 'styled-components';

export const Pagination = styled.div`
  /* position: absolute;
  z-index: 12;
  bottom: 20px; */
  width: 100% - 42px;
  height: 80px;
  display: flex;
  justify-content: center;
  gap: 40px;
  margin: 0;
  padding: 20px;
  background-color: var(--panel-back-color);
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

export const MobilePlaceholder = styled.div`
  margin: 0 auto;
  width: 100%;
  flex-grow: 1;
  @media screen and (min-width: ${minTablet}) {
    display: none;
  }
`;

export const FlexGroup = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
`;

export const ContentPanel = styled(Panel)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  height: 100%;
`;
