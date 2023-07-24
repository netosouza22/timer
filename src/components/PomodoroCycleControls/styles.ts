import styled from "styled-components";

interface ICycleControlButton {
  isActive: boolean;
}

export const PomodoroCycleControlsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`

export const CycleControlButton = styled.button<ICycleControlButton>`
  background-color: transparent;
  color: ${(props) => props.isActive ? props.theme.white : props.theme["gray-500"]};
  border: none;
  padding: 0.5rem 0px;

  font-weight: bold;
  font-size: 1.5rem;

  border-top: 0.25rem solid transparent;
  border-bottom: 0.25rem solid transparent;


  transition: border-bottom ease-in-out;

  border-bottom:  ${(props) => props.isActive ? `0.25rem solid ${props.theme.white}` : '0.25rem solid transparent'};

  &:hover {
  cursor: pointer;
  border-bottom: 0.25rem solid ${(props) => props.isActive ? props.theme.white : props.theme["gray-500"]};
}
`