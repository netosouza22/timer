import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

interface INewCicle {
  task: string
  minutesAmount: number
}

interface ICycle {
  id: string
  type: "pomodoro" | "short break" | "long break",
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface ICycleTypeActive {
  cycleType: "pomodoro" | "short break" | "long break",
}

interface ICycleContext {
  cycles: ICycle[] | null
  activeCycle: ICycle | undefined
  createCycle: (data: INewCicle) => void
  handleInterruptCounter: () => void
  markCycleAsFinished: () => void
}
interface ICycleProvider {
  children: ReactNode
}

interface ICreateCycle {
  task: string
  minutesAmount: number
}

const CycleContext = createContext({} as ICycleContext)

export function CycleProvider({ children }: ICycleProvider) {
  const [cycleTypeActive, SetCycleTypeActive] = useState<ICycleTypeActive>({
    cycleType: "pomodoro"
  })
  const [cycles, setCycles] = useState<ICycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const activeCycle = cycles?.find((cycle) => cycle.id === activeCycleId)

  const handleInterruptCounter = useCallback(() => {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )

    setActiveCycleId((state) => (state = null))
  }, [activeCycleId])

  const createCycle = useCallback((data: ICreateCycle) => {
    const id = String(new Date().getTime())

    const cycle: ICycle = {
      id,
      task: data.task,
      type: "pomodoro",
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    setActiveCycleId(id)
    setCycles((state) => [...state, cycle])
  }, [])

  const markCycleAsFinished = useCallback(() => {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
    setActiveCycleId(null)
  }, [activeCycleId])

  const value = useMemo(() => {
    return {
      cycles,
      activeCycle,
      createCycle,
      markCycleAsFinished,
      handleInterruptCounter,
    }
  }, [
    cycles,
    activeCycle,
    createCycle,
    markCycleAsFinished,
    handleInterruptCounter,
  ])

  return <CycleContext.Provider value={value}>{children}</CycleContext.Provider>
}

export function useCycles() {
  const context = useContext(CycleContext)

  if (!context) {
    throw new Error(
      'useCycleContext must be used within an CycleContextProvider',
    )
  }

  return context
}
