import { useEffect, useState } from "react"
import { useDispatch,useSelector} from "react-redux"
import { add } from "../../app/Slice"

import './Product.css'


function Products() {
    const [Todo,setTodo] = useState([])
    useEffect(()=>{
        // const apicalling = async () => {
        // const res = await fetch('https://fakestoreapi.com/products')
        // const api = await res.json()
        // console.log(api)
        
        // }    
        // apicalling()   
        fetch('https://fakestoreapi.com/products').then((res) => res.json()).then((res) => setTodo(res))
    },[])

   

    const dispatch = useDispatch()
    const bgcolor = useSelector(state => state.color.backgroundColor)

    const handleclick = (Product) => {
        dispatch(add({...Product,quantity:1}))
    }

    

  return (
   <>
   <div className="main-dic" style={{backgroundColor:bgcolor}}>
   
   {
    Todo.map((Product) => (
        <div className="first-one" style={{color: 'white'}} key={Product.id}>
            <img src={Product.image} alt="" /> 
            <h1><span>Category:</span> {Product.category}</h1>
        
            <h3><span>Price:</span>{Product.price}</h3>
            
            <button onClick={() => handleclick(Product)} >Add to cart</button>

        </div>
    ))
   }</div>
   </>
    
  )
}

export default Products