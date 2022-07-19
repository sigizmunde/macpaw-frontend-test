import { Field } from 'components/SelectInput/SelectInput.styled';
import styled from 'styled-components';

export const SmallCaption = styled.p`
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 1.8;
  text-transform: uppercase;
  color: var(--secondary-text-color);
`;

export const SearchImagesFormWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: stretch;
  padding: 10px;
  background-color: var(--back-color);
  border-radius: 20px;
  div {
    flex-grow: 1;
    width: 40%;
    ${Field} {
      background-color: var(--panel-back-color);
    }
  }
`;
