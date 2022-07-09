import React from 'react'

function Cart(props) {
  return (
    <>
    
             <li class="list-group-item d-flex justify-content-between align-items-center">
                {props.data.phone} - Rs {props.data.price} 
                <button 
                onClick={()=>props.removecart(props.data.id)}
                class="badge badge-pill ml-auto btn btn-danger ">x</button>
             </li>
          
    </>
  )
}

export default Cart