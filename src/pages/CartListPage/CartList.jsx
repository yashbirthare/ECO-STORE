import { useCartList } from "../../context/CartListContext"
import './CartList.css';
import { Link } from "react-router-dom";
import { ImCross } from 'react-icons/im';

 const CartList = () => {
 
const {stateCart,dispatchCart} = useCartList();
const {cartList} = stateCart;

const getCartListProduct = ({new_arrival,id,image,tittle,count,rate,processor,category,description,price,original_price,discount,qty}) => (

    <div id="Cart-Product-Store">  


    <div className="Cart-Product-Main-Area-2nd">
    <div>
    <p>{new_arrival && <div className= "Cart-Product-Item-new">new</div>}</p>
    <Link to={`/ProductDetail/${id}`}> <img className='Cart-Product-Img1-Main' src={image} alt="/"/></Link>
    <p className="Cart-Product-tittle-tag">{tittle}</p>
    </div>

   <div>
    <div className="Cart-Product-Processor-Main">
    <div className="Cart-Product-count-Main">
    <p>{count}</p>
    <p>.{rate}☆</p>
    </div>
    <p className="Cart-Product-Processer">{processor} </p> 
    <p className="Cart-Product-category">{category}</p>
    </div>


   <div className="Cart-Product-tittle-Main">
   <p className="Cart-Product-description-tag">{description}</p>
   </div>

<div className="Cart-Product-Price-Main">
   <p className="Cart-Product-pro-price">{price}</p>
   <s> <p className="Cart-Product-ori-price">{original_price}</p> </s>
   <p className="Cart-Product-dis-price">{discount}%off</p>
   <p className="Cart-Product-qty-price">Hurry, Only {qty} left!</p>
 </div>  
 <div className="Cart-Product-Main-BTN"> 
      <button className="Cart-Product-Buy-btn" >BUY NOW</button>
</div>

</div>
<p className="IM-REMOVE" onClick={() => dispatchCart({type:"REMOVE_To_Cart",id:id})}><ImCross/></p>


</div> 

</div>

)


    return(
        <div>
           {cartList.length > 0 && cartList.map((item) => getCartListProduct(item) )}
        </div>
    )
}

export default CartList;

