import { SectionWrapper } from 'components/SectionWrapper/SectionWrapper';
import styled from 'styled-components';

export const ControlWrapper = styled(SectionWrapper)`
  position: relative;
  @media screen and (max-width: 767px) {
    position: absolute;
  }
`;

export const Section = styled.section`
  width: 446px;
  margin: 0 auto;
  padding: 0;
`;

export const H1 = styled.h1`
  margin-top: 0;
  margin-bottom: 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 44px;
  line-height: 1.32;
`;

export const Description = styled.p`
  margin-bottom: 60px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.45;
  color: var(--secondary-text-color);
`;

export const Motto = styled.p`
  margin-bottom: 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.45;
`;

export const DarkLightButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10%;
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
  :hover {
    color: var(--accent-color);
    background-color: var(--faded-accent-color);
  }
  :active {
    color: var(--accent-color);
    background-color: var(--panel-back-color);
  }
  ::before {
    content: var(--theme-icon);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;
