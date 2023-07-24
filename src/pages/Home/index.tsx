/* eslint-disable prettier/prettier */
import { zodResolver } from "@hookform/resolvers/zod";
import { HandPalm, Play } from "@phosphor-icons/react";
import { FormProvider, useForm } from "react-hook-form";
import * as z from "zod";

import CountDown from "../../components/CountDown";
import Form from "../../components/Form";
import { PomodoroCycleControls } from "../../components/PomodoroCycleControls";
import { useCycles } from "../../contexts/CycleContext";
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton
} from "./styles";

const newCycleSchema = z.object({
  task: z.string().min(1, "Informe  a tarefa"),
  minutesAmount: z
    .number()
    .min(1, "O ciclo precisa ser de no minimo 5 minutos.")
    .max(60, " O ciclo precisa ser de no máximo 60 minutos."),
});

type NewCycleType = z.infer<typeof newCycleSchema>;


export default function Home() {
  const { activeCycle, createCycle, handleInterruptCounter } = useCycles()

  const methods = useForm<NewCycleType>({
    resolver: zodResolver(newCycleSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const onSubmit = (data: NewCycleType) => {
    methods.reset()
    createCycle(data)
  };

  return (
    <FormProvider {...methods}>
      <HomeContainer>
        <form onSubmit={methods.handleSubmit(onSubmit)} >
          <PomodoroCycleControls />
          <Form />
          <CountDown />

          {activeCycle ? (
            <StopCountdownButton onClick={handleInterruptCounter}>
              <HandPalm />
              Interromper
            </StopCountdownButton>
          ) : (
            <StartCountdownButton>
              <Play />
              Começar
            </StartCountdownButton>
          )}
        </form>
      </HomeContainer>
    </FormProvider>
  );
}
