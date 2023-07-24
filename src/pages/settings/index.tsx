import { FormProvider, useForm } from 'react-hook-form';
import * as z from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { MinutesAmountInput } from '../../components/Form/styles';
import { HistoryContainer } from './styles';

const newSettingsSchema = z.object({
  pomodoroTimerAmout: z.number()
    .min(1, "O Ciclo precisa ter no mínimo 1 minuto")
    .max(60, "O ciclo pode ter no máximo 60 minutos"),
  shortBreakTimerAmout: z.number()
    .min(1, "O Ciclo precisa ter no mínimo 1 minuto")
    .max(60, "O ciclo pode ter no máximo 60 minutos"),
  longBreakTimerAmout: z.number()
    .min(1, "O Ciclo precisa ter no mínimo 1 minuto")
    .max(60, "O ciclo pode ter no máximo 60 minutos")
})

const Settings = () => {
  const methods = useForm({
    resolver: zodResolver(newSettingsSchema),
    defaultValues: {
      pomodoroTimerAmout: 25,
      shortBreakTimerAmout: 5,
      longBreakTimerAmout: 10,
    },
  });

  const { register } = methods;

  const handleSubmit = (data: any) => {
    console.log(data)
  }
  return <HistoryContainer>
    <h1>Configurações</h1>
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit}>
        <MinutesAmountInput
          type="number"
          step={5}
          min={0}
          max={60}
          {...register('pomodoroTimerAmout', { valueAsNumber: true })}
        ></MinutesAmountInput>
        <MinutesAmountInput
          type="number"
          step={5}
          min={0}
          max={60}
          {...register('shortBreakTimerAmout', { valueAsNumber: true })}
        ></MinutesAmountInput>
        <MinutesAmountInput
          type="number"
          step={5}
          min={0}
          max={60}
          {...register('longBreakTimerAmout', { valueAsNumber: true })}
        ></MinutesAmountInput>
      </form>
    </FormProvider>
  </HistoryContainer>
}

export default Settings
