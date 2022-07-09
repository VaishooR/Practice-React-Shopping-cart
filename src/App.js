import './App.css';
import Product from './components/Products';
import Cart from './components/Cart';
import {useState} from 'react';

function App() {
  const [productdetails,setProduct]=useState([
    {
      id:1,
      phone:'Samsung',
      price:8000,
      isAvailable:true
    },
    {
      id:2,
      phone:'iphone',
      price:50000,
      isAvailable:false
    },
    {
      id:3,
      phone:'MI',
      price:10000,
      isAvailable:true
    },
    {
      id:4,
      phone:'OnePlus',
      price:20000,
      isAvailable:true
    },
    {
      id:5,
      phone:'Redmi',
      price:5000,
      isAvailable:true
    },
    {
      id:6,
      phone:'Nokia',
      price:2000,
      isAvailable:false
    } 
])

const [cartitem,setcart] = useState([]);
const [total,settotal]= useState([0]);

let addtocart=(id)=>{
  let productid=productdetails.findIndex(obj=>obj.id===id);
  let clickedproduct=productdetails[productid];
  setcart([...cartitem,clickedproduct]);
  settotal(parseInt(total)+parseInt(clickedproduct.price))
}

let removecart=(id)=>{
  let removeprodid=cartitem.findIndex(obj=> obj.id===id);
  settotal(parseInt(total)-parseInt(cartitem[removeprodid].price))
  cartitem.splice(removeprodid, 1)
  setcart([...cartitem])
}

  return (
    <>
    <div className="container">
      <div className="row"> 
        {/* ---Heading--- */}
        <div className="col-lg-12 text-center bg-warning mt-3">          
          <h1>Shopping Products</h1>
        </div>
      </div>
      <div className="row">

        {/* ---Products--- */}
        <div className="col-lg-8">                                        
          <div className="row">
            {
              productdetails.map((prod=>{
                return <Product cartitem={cartitem} addtocart={addtocart} data={prod}></Product>
              }))
            }
          </div>
        </div> 

        {/* ---Cart--- */}
        <div className="col-lg-4 mt-4"> 
        <h3>Cart:</h3>
        <ul class="list-group ml-3" style={{width:'20rem'}}>
                                   
          {
            cartitem.map(cartproduct=>{
              return <Cart data={cartproduct} removecart={removecart}></Cart>
            })
          }
          
        </ul>
        <h3 className="mt-5">Total: {total}</h3>

        </div>
      </div>
    </div>
    </>
  );
}

export default App;
