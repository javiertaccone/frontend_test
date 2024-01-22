import { useContext } from "react"
import { SearchContext } from "../../context/SearchContext"

const Search = () => {

  const { setFilter } = useContext(SearchContext)
  
  const cambioFilter = (e) => {
    setFilter(e.target.value)
  }

  return (
    <>
      <form>
        <h2>Encuentra aquí tu próximo móvil</h2>
        <input onChange={cambioFilter} type="text" placeholder="Busca por marca o modelo"/>
      </form>
    </>
  )
}
  
export default Search 