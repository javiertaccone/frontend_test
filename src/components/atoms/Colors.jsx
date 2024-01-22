import { useState, useEffect } from "react"

const Colors = ({ product, changeColor }) => {

    const [ qtyColors , setQtyColors] = useState(0)

    useEffect(() => {
        const phoneColors = []
        product.options.colors.map((color)=>
        phoneColors.push(color))
        setQtyColors(phoneColors.length)
        if (phoneColors.length === 1){
            changeColor(phoneColors[0].code)
        }
    }, [qtyColors])
    
    if (qtyColors != 0){
    return(
      <>
        <form action="">
        {product.options.colors.map((color) => (
          <label key={color.code}>
            {color.name}
            <input
              type="radio"
              name="color"
              value={color.code}
              defaultChecked={qtyColors === 1}
              onChange={changeColor}
            />
          </label>
          ))}
        </form>
      </>
    )
  }
}

export default Colors