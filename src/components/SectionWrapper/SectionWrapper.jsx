import styled from 'styled-components';

export const SectionWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 0;
`;

export const Main = styled.main`
  display: flex;
  flex-basis: auto;
  gap: 0;
  padding: 20px;
  background-color: var(--back-color);
  color: var(--main-text-color);
  height: 100vh;
  overflow: hidden;
`;
