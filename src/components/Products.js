import React from 'react'

function Product(props) {
  return (
    <>
    <div class="card m-4 " style={{width: '12rem'}}>
        <img src="https://img.freepik.com/free-photo/phone-screen-with-abstract-marble-aesthetic_53876-145553.jpg?w=200" class="card-img-top" alt="..."/>
        <div class="card-body text-center">
            <h5 class="card-title">{props.data.phone}</h5>
            <p class="card-text">{props.data.price}</p>
            <button 
            onClick={()=>props.addtocart(props.data.id)} 
            disabled={props.cartitem.some(obj=>obj.id===props.data.id)}
            class="btn btn-primary">
                Add to Cart
            </button>
        </div>
    </div>
    </>
  )
}

export default Product