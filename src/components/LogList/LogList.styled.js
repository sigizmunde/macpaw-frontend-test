import styled from 'styled-components';

export const LogList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0.3em;
  }
  ::-webkit-scrollbar-track {
    /* box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--faded-accent-color);
    outline: none;
  }
`;

export const LogItem = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
  justify-content: stretch;
  align-items: center;
  padding: 15px;
  background-color: var(--back-color);
  border-radius: 20px;
  color: var(--secondary-text-color);
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  & div {
    flex-grow: 0;
    & span {
      font-weight: 500;
      color: var(--main-text-color);
    }
  }
  div:nth-child(2) {
    flex-grow: 1;
  }
`;

export const TimeStamp = styled.div`
  min-width: 60px;
  height: 30px;
  padding: 3px 0;
  color: var(--main-text-color);
  background-color: var(--panel-back-color);
  border-radius: 10px;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
`;
