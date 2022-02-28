import { useState } from "react";
import { useSelector } from "react-redux";
import ProductComp from "./Product";

function ProductsComp() {

  const storeData = useSelector(state => state)
 

  const [product, setProduct] = useState({name : '', price : 0})

  return (
    <div style={{width : "400px", borderStyle : "solid", borderColor : "blue", borderWidth : "3px"}}>

        <h3>Current Products in Order</h3>

        {
          storeData.products.map((item,index) =>
          {
            return <ProductComp prodData={item} key={index} />
          })
        }
      
    </div>
  );
}

export default ProductsComp;
