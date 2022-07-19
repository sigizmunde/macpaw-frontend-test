import styled from 'styled-components';

export const PanelWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
`;

export const Panel = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: var(--panel-back-color);
  border-radius: 20px;
  overflow: hidden;
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 10px;
`;

export const Btn = styled.button`
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: auto 10px;
  min-width: 40px;
  height: 40px;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--inverted-text-color);
  background-color: var(--accent-color);
  ${prop =>
    !prop.disabled &&
    `
  :hover {
    color: var(--accent-color);
    background-color: var(--faded-accent-color);
  }
  :active {
    color: var(--accent-color);
    background-color: var(--panel-back-color);
  }
  :focus {
    padding: auto 8px;
    border: solid 2px var(--faded-accent-color);
  }`}
`;

export const PanelBtn = styled(Btn)`
  padding: auto 15px;
  min-width: 60px;
  height: 60px;

  border-radius: 20px;
  font-size: 30px;

  color: var(--accent-color);
  background-color: var(--panel-back-color);
  :hover {
    color: var(--accent-color);
    background-color: var(--faded-accent-color);
  }
  :active {
    color: var(--inverted-text-color);
    background-color: var(--accent-color);
  }
  :focus {
    padding: auto 13px;
    border: solid 2px var(--faded-accent-color);
  }
`;

export const FadedBtn = styled(Btn)`
  color: var(--accent-color);
  background-color: var(--faded-accent-color);

  :hover {
    color: var(--inverted-text-color);
    background-color: var(--accent-color);
  }
  :active {
    color: var(--accent-color);
    background-color: var(--panel-back-color);
  }
`;

export const TextBtn = styled(Btn)`
  font-size: 100%;
  padding-left: 30px;
  padding-right: 30px;
  :focus {
    padding-left: 28px;
    padding-right: 28px;
  }
`;

export const FadedTextBtn = styled(TextBtn)`
  color: var(--accent-color);
  background-color: var(--faded-accent-color);
  ${prop =>
    !prop.disabled &&
    `
  :hover {
    color: var(--inverted-text-color);
    background-color: var(--accent-color);
  }
  :active {
    color: var(--accent-color);
    background-color: var(--panel-back-color);
  }`}
`;

export const Svg = styled.svg`
  display: inline-block;
  width: 1em;
  height: 1em;
  stroke-width: 0;
  stroke: currentColor;
  fill: currentColor;
`;

export const Svg180 = styled(Svg)`
  transform: rotate(180deg);
`;
