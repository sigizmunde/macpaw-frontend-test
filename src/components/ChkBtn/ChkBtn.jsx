const { Btn } = require('components/StyledBlocks/StyledBlocks');
const { useState } = require('react');
const { default: styled } = require('styled-components');

const UnactiveBtn = styled(Btn)`
  padding: auto 10px;
  color: var(--secondary-text-color);
  background-color: var(--back-color);
`;

const ActiveBtn = styled(Btn)`
  padding: auto 8px;
  color: var(--accent-color);
  background-color: var(--back-color);
  border: solid 2px var(--faded-accent-color);
  ${({ children }) => children} {
    color: inherit;
    fill: var(--accent-color);
  }
`;

const ChkBtn = ({ checked = false, setChecked, children }) => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(toggle => !toggle);
    setChecked(toggle);
  };

  return (
    <>
      {!checked && (
        <UnactiveBtn type="button" onClick={onToggle}>
          {children}
        </UnactiveBtn>
      )}
      {checked && (
        <ActiveBtn type="button" onClick={onToggle}>
          {children}
        </ActiveBtn>
      )}
    </>
  );
};

export default ChkBtn;
