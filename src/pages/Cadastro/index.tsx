import BarraLateral from '../../containers/BarraLateral'
import Formulario from '../../containers/Formulario'

export const Cadastro = () => {
  return (
    <>
      <BarraLateral mostrarFiltros={false} />
      <Formulario />
    </>
  )
}

export default Cadastro
