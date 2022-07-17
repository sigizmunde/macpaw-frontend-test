import styled from 'styled-components';

export const HeaderDiv = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
  margin: 0;
  padding: 10px 10px 0 10px;
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  font: var(--form-text);
`;

export const Label = styled.label`
  display: flex;
  width: 100%;
  padding: 10px;
  background-color: var(--panel-back-color);
  border-radius: 20px;
`;
