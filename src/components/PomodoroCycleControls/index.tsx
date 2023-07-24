import { useState } from "react";
import { CycleControlButton, PomodoroCycleControlsContainer } from "./styles";

type SelectButtonType = "pomodoro" | "short_break" | "long_break";

export const PomodoroCycleControls = () => {
  const [selectedButton, setSelectedButton] = useState<SelectButtonType>("pomodoro");

  const handleButtonSelected = (buttonType: SelectButtonType) => {
    setSelectedButton(buttonType)
  }

  return (
    <PomodoroCycleControlsContainer>
      <CycleControlButton isActive={selectedButton === "pomodoro"} onClick={() => handleButtonSelected("pomodoro")}>Pomodoro</CycleControlButton>
      <CycleControlButton isActive={selectedButton === "short_break"} onClick={() => handleButtonSelected("short_break")}>Short Break</CycleControlButton>
      <CycleControlButton isActive={selectedButton === "long_break"} onClick={() => handleButtonSelected("long_break")}>Long Break</CycleControlButton>
    </PomodoroCycleControlsContainer>
  )
}