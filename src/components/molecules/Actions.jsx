import Memory from "../atoms/Memory"
import Add from "../atoms/Add"
import Colors from "../atoms/Colors"
import { useState } from "react"


const Actions = ({ product }) => {
    
  const [selectColor , setSelectColor] = useState(null)
  const [selectMemory , setSelectMemory] = useState(null)

  const changeColor = (e) => {
    if ( typeof e === "number"){
      setSelectColor(e)
    } else {
      setSelectColor(e.target.value) 
    }
  }
 
  const changeMemory = (e) => {
    if ( typeof e === "number"){
      setSelectMemory(e)
    } else {
      setSelectMemory(e.target.value) 
    }
  }

  return (
    <>
      <h1>select color: {selectColor}</h1>
      <h1>selec memory: {selectMemory}</h1>
      <Colors product={product} changeColor={changeColor} />
      <Memory product={product} changeMemory={changeMemory} />
      <Add product={product} selectColor={selectColor} selectMemory={selectMemory} />
    </>
  )

}

export default Actions