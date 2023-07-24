import { useFormContext } from 'react-hook-form'
import { useCycles } from '../../contexts/CycleContext'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'

const Form = () => {
  const { activeCycle } = useCycles()
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label>Vou trabalhar em </label>
      <TaskInput
        type="text"
        list="task-suggestions"
        placeholder="Dê um nome para seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
      ></TaskInput>

      <datalist id="task-suggestions">
        <option value="projeto 1"></option>
        <option value="Criar 3 pernas"></option>
        <option value="Estudar mecanica"></option>
        <option value="Estudar calopsita"></option>
      </datalist>

      <label>durante</label>
      <MinutesAmountInput
        type="number"
        step={1}
        min={0}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      ></MinutesAmountInput>

      <span>minutos.</span>
    </FormContainer>
  )
}

export default Form
