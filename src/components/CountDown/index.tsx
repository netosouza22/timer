import { differenceInSeconds } from 'date-fns'
import { useEffect, useState } from 'react'
import { useCycles } from '../../contexts/CycleContext'
import { CountdownContainer } from './styles'

const CountDown = () => {
  const { activeCycle, markCycleAsFinished } = useCycles()

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = String(Math.floor(currentSeconds / 60)).padStart(2, '0')
  const secondsAmount = String(currentSeconds % 60).padStart(2, '0')

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (secondsDifference === totalSeconds) {
          markCycleAsFinished()
          return
        }

        setAmountSecondsPassed(secondsDifference)
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, markCycleAsFinished, totalSeconds])

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutesAmount}:${secondsAmount}`
    }
  }, [activeCycle, minutesAmount, secondsAmount])

  return (
    <CountdownContainer>
      <>
        <span>{minutesAmount[0]}</span>
        <span>{minutesAmount[1]}</span>
        <span>:</span>
        <span>{secondsAmount[0]}</span>
        <span>{secondsAmount[1]}</span>
      </>
    </CountdownContainer>
  )
}
export default CountDown
