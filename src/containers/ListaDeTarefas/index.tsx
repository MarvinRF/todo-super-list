import Tarefa from '../../components/Tarefa'
import * as enums from '../../utils/enums/Tarefa'
import * as S from './style'

const tarefas = [
  {
    titulo: 'TRABALHAR',
    descricao: 'Ver a aula 3',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'TRABALHAR',
    descricao: 'Ver a aula 3',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'TRABALHAR',
    descricao: 'Ver a aula 3',
    prioridade: enums.Prioridade.NORMAL,
    status: enums.Status.PENDENTE
  }
]

export const ListaDeTarefas = () => {
  return (
    <S.Container>
      <p>
        2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;
      </p>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              descricao={t.descricao}
              titulo={t.titulo}
              status={t.status}
              prioridade={t.prioridade}
            />
          </li>
        ))}
      </ul>
    </S.Container>
  )
}

export default ListaDeTarefas
