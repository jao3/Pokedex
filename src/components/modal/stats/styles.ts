import styled, { keyframes } from "styled-components";

export const StatsContainer = styled.div`
  background: transparent;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-evenly;
  gap: 1.5rem;
  margin: 0;
  max-width: 1600px;
  height: 100%;
  padding: 40px 0;
`;
export const StatsTitle = styled.span`
  font-size: 40px;
  line-height: 2.5rem;
  font-weight: 400;
  display: block;
  padding: 0 50px;
  
`;
export const StatsList = styled.ul`
  padding: 0 50px;
  span {
    font-size: 1rem;
    line-height: 1;
    font-weight: 400;
    display: inline-block;
  }
  span:nth-child(1) {
    min-width: 4.38rem;
  }
  span:nth-child(2) {
    min-width: 1.88rem;
    margin: 0 1.25rem;
    font-weight: bold;
    text-align: center;
  }
  li {
    display: flex;
    align-items: center;
  }
`;
export const ProgressBar = styled.div`
  width: 100%;
  height: 0.5rem;
  border-radius: 0.25rem;
  background: rgba(255, 255, 255, 0.25);
  overflow: hidden;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  transform: translate(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
`;
const progressBar = keyframes`
  to{
    transform: initial;
  }
`;
interface BarStatusProps {
  percentage: number;
  color: string;
}
export const ProgressBarFill = styled.div<BarStatusProps>`
  width: ${(props) =>
    props.percentage >= 100 ? "100%" : `${props.percentage}%`};
  height: 0.5rem;
  background: ${(props) => (props.percentage >= 50 ? "#4dad5b" : "#FF364E")};
  box-shadow: 0 0 0.75rem 0.25rem
    ${(props) =>
      props.percentage >= 50
        ? "rgba(28, 216, 14, 0.25)"
        : "rgba(255, 54, 78, 0.25)"};
  border-radius: 0.25rem;
  transform: translate3d(-100%, 0, 0);
  animation: ${progressBar} 2s forwards;
`;
