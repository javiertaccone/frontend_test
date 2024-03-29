import { useContext } from "react"
import { SearchContext } from "../../context/SearchContext"

const Search = () => {

  const { setFilter } = useContext(SearchContext)
  
  const cambioFilter = (e) => {
    setFilter(e.target.value)
  }

  const blockEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
    }
  }

  return (
    <>
      <form className="search text-center">
        <h2 className="title" >Encuentra aquí tu próximo móvil</h2>
        <input className="input text-center"
          onKeyDown={blockEnter}
          onChange={cambioFilter}
          type="text"
          placeholder="Busca por marca o modelo"/>
      </form>
    </>
  )
}
  
export default Search 