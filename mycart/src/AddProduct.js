import { useState } from "react";
import { useDispatch } from "react-redux";

function AddProductComp() {

  const dispatch = useDispatch();

  const [product, setProduct] = useState({name : '', price : 0})

  return (
    <div style={{width : "400px", height : "150px", borderStyle : "solid", borderColor : "red", borderWidth : "3px"}}>

        <h3>Order New Product</h3>

        Name : <input type="text" onChange={e => setProduct({...product, name : e.target.value}) } /><br/>
        Price : <input type="text" onChange={e => setProduct({...product, price : e.target.value}) } /><br/>
        <input type="button" value="Add" onClick={() => dispatch({ type : "ADD" , payload : product }) } />
    </div>
  );
}

export default AddProductComp;
