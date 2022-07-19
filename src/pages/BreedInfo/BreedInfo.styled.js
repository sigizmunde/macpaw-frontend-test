import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 360px;
  background-color: var(--back-color);
  border-radius: 20px;
  overflow: hidden;

  img {
    position: relative;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 115%;
  }
`;

export const OverlayControlPanel = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: auto;
  min-height: 30px;
  background-color: var(--panel-back-color);
  border-radius: 20px;
  padding: 10px;
  border: solid inset 5px var(--panel-back-color);
  overflow: hidden;

  position: absolute;
  z-index: 1;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
`;

export const SliderBtn = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--faded-accent-color);
  transition: background-color 150ms ease-out;
  ${props => props.active && `background-color: var(--accent-color);`}
`;

export const InfoContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  position: relative;
  width: 100%;
  background-color: transparent;
  border: solid 2px var(--faded-accent-color);
  border-radius: 20px;
  text-align: center;
`;

export const BreedTitle = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: auto;
  min-height: 60px;
  color: var(--main-text-color);
  background-color: var(--panel-back-color);
  border-radius: 20px;
  padding: 5px 40px 40px;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 52px;
  white-space: nowrap; //manific!

  position: absolute;
  z-index: 1;
  left: 50%;
  top: -30px;
  transform: translateX(-50%);
`;

export const Subtitle = styled.div`
  position: relative;
  z-index: 10;
  margin: 26px auto 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  color: var(--secondary-text-color);
`;

export const FlexDiv = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 20px;
  width: calc(100% - 80px);
  margin: 0 auto 30px;
  text-align: start;
  div {
    width: 50%;
  }
  p {
    margin-top: 0;
    font-family: 'Jost';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: var(--secondary-text-color);
  }
  span {
    margin-bottom: 0;
    font-family: 'Jost';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    color: var(--main-text-color);
  }
`;
