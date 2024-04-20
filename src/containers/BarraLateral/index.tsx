import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => {
  return (
    <S.Aside>
      <div>
        <S.Campo type="text" placeholder="Buscar" />
        <S.Filtros>
          <FiltroCard legenda="Pendentes" contador={5} />
          <FiltroCard legenda="Concluidas" contador={0} />
          <FiltroCard legenda="Urgentes" contador={4} />
          <FiltroCard legenda="Importante" contador={2} />
          <FiltroCard legenda="Normal" contador={5} />
          <FiltroCard legenda="Todos" ativo contador={7} />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
