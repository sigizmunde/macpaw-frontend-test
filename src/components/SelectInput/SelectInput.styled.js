const { default: styled } = require('styled-components');
const dropdownIcon = require('images/icons/dropdown-12.png');

export const FieldWrapper = styled.div`
  position: relative;
  width: ${prop => prop.width};
  min-width: 101px;
`;

export const Field = styled.p`
  margin: 0;
  padding: 10px;
  position: relative;
  height: 40px;
  width: 100%;
  color: var(--secondary-text-color);
  background-color: var(--back-color);
  border-radius: 10px;
  border: none;
  white-space: nowrap;
  cursor: pointer;
  :focus {
    border: solid 2px var(--faded-accent-color);
  }
  ::after {
    display: flex;
    align-items: center;
    justify-content: center;
    content: url(${dropdownIcon});
    position: absolute;
    z-index: 99;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 30px;
    cursor: pointer;
    border-radius: 6px;
    color: var(--secondary-text-color);
    background-color: inherit;
  }
  :hover::after,
  :focus::after {
    color: var(--panel-color);
    background-color: var(--panel-back-color);
  }
`;

export const FieldList = styled.ul`
  position: absolute;
  top: 50px;
  left: 0px;
  /* width: 100%; */
  max-height: 69vh;
  margin: 0;
  padding: 20px;
  overflow-y: auto;
  overflow-x: hidden;
  list-style: none;
  color: var(--secondary-text-color);
  background-color: var(--panel-back-color);
  border-radius: 10px;
  box-shadow: var(--shadow);
  z-index: 99;
  li {
    margin-bottom: 8px;
    font: var(--form-list-text);
    white-space: nowrap;
    cursor: pointer;
    :hover {
      background-color: var(--back-color);
    }
  }
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
