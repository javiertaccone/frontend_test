import { useState, useEffect } from "react"

const Memory = ({ product, changeMemory}) => {

    const [ qtyMemory , setQtyMemory] = useState(0)

    useEffect(() => {
        const phoneMemory = []
        product.options.storages.map((memory)=>
        phoneMemory.push(memory))
        setQtyMemory(phoneMemory.length)
        if (phoneMemory.length === 1){
            changeMemory(phoneMemory[0].code)
        }
    }, [qtyMemory])
    
    if (qtyMemory != 0){
    return(
      <>
        <form className="form" action="">
        {product.options.storages.map((memory) => (
          <label className="radio" key={memory.code}>
            {memory.name}
            <input
              type="radio"
              name="memory"
              value={memory.code}
              defaultChecked={qtyMemory === 1}
              onChange={changeMemory}
            />
          </label>
          ))}
        </form>
      </>
    )
  }
}

export default Memory