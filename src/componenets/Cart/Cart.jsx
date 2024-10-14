
import { remove,updateQuantity,Totalprice} from '../../app/Slice'
import './Cart.css'
import { useSelector,useDispatch  } from "react-redux"

function Cart() {
  const Totalitems = useSelector(state => state.cart)
  const totalPrice = useSelector(state => Totalprice(state))
  
  const dispatch = useDispatch()
   const handleUpdateQuantity = (productId, newQuantity) => {
     dispatch(updateQuantity({ id: productId, quantity: newQuantity }));
 };
 const bgcolor = useSelector(state => state.color.backgroundColor)
  
 
  return (<>
    
      <div id='all ' style={{backgroundColor:bgcolor , color: 'white'}} >
      <div id='main' >
        
    {
    Totalitems.map((Product) => (
      
      <div className="cart-product" key={Product.id}>
      <img src={Product.image} alt="" /> 
      <h1><span>Category:</span> {Product.category}</h1>
  
      <h3><span>Price:</span>{Product.price}</h3>
      {<h3>
                                <span>Quantity:</span>
                                <button onClick={() => handleUpdateQuantity(Product.id, Product.quantity - 1)} className='butt'>
                                    -</button>
                                {Product.quantity}
                                <button onClick={() => handleUpdateQuantity(Product.id, Product.quantity + 1)}>
                                    +</button>
                            </h3> }
                          
     
      <button onClick={() => dispatch(remove(Product.id))}>Remove</button>
    
  </div>
  
  ))}</div>
  { <div id="total-price">
      <h2>Total Price: {totalPrice}</h2>
  </div> }
    </div>
</>
  )
}

export default Cart