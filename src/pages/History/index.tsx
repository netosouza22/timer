import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useCycles } from '../../contexts/CycleContext'
import { HistoryContainer, HistoryList, Status } from './styles'

export default function History() {
  const { cycles } = useCycles()

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Duração</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles
              ?.slice(0)
              .reverse()
              .map((cycle) => {
                return (
                  <tr key={cycle.id}>
                    <td>{cycle.task}</td>
                    <td>{cycle.minutesAmount} minutos</td>
                    <td>
                      {formatDistanceToNow(cycle?.startDate, {
                        addSuffix: true,
                        locale: ptBR,
                      })}
                    </td>
                    <td>
                      {cycle?.finishedDate && (
                        <Status color="green">Concluido</Status>
                      )}
                      {cycle.interruptedDate && (
                        <Status color="red">Interrompido</Status>
                      )}
                      {!cycle.finishedDate && !cycle.interruptedDate && (
                        <Status color="yellow">Excecutando</Status>
                      )}
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
