import logo from './logo.svg';
import './App.css';
import AddProductComp from './AddProduct'
import TotalPriceComp from './TotalPrice'
import ProductsComp from './Products'


function App() {
  return (
    <div className="App">
        <div style={{width: "50%", float:"left"}}>

        <TotalPriceComp /> <br/><br/><br/><br/><br/>
          <AddProductComp />
      </div>

      <div style={{width: "50%", float:"right"}}>
       <ProductsComp />
      </div>
    </div>
  );
}

export default App;
