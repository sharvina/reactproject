import React, {useState } from 'react';
import './Cart.css'


const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart1';

 function Cart  () {
     const [Cart1,setCart1] =  useState([

     ]);

     const [page, setPage] = useState(PAGE_PRODUCTS);

     const  [products] = useState([
         {
           
             image: 'data:image/jpeg;base64,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',

             name: 'Nokia 3.4',
             cost: '₹11,999.00',
         },
         {
           
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPjyW3auAhdBVlM5L7p942NvC-vFV7qbcj9w&usqp=CAU',
            name: 'Nokia 3.4',
            cost: '₹11,999.00',
        }



     ]);

     const addToCart = (product) =>{
         
         setCart1([...Cart1,product]);
     };

     const navigateTo= (nextPage) => {
         setPage(nextPage);
     };

     const renderProducts = () => (
        
          <>
           <h1 className="hd1">Nokia Product</h1>
           <div className="products">
           {products.map((product, idx) => (
               <div class="product" key={idx}>
                   <h3 className="hd2">{product.name}</h3>
               <h4 className="hd2">{product.cost}</h4>
               <img src={product.image} alt={product.name}></img>
          <button className="btnc" onClick={() => addToCart(product)}>Add to cart</button>
                   
               </div>
           ))}
           </div> 
           </>
     );

     const renderCart1 = () => (
         <>
         <h1 className="hd1">Welcome to Cart</h1>
           <div className="products">
           {Cart1.map((product, idx) => (
               <div class="product" key={idx}>
                   <h3 className="hd2">{product.name}</h3>
               <h4 className="hd2">{product.cost}</h4>
               <img src={product.image} alt={product.name}></img>
       {/*  <button className="btnc" onClick={() =>/* addToCart(product)}>Add to cart</button>*/}
                   
               </div>
           ))}
           </div>     
         </>

     );
     



    return (

       <div className="Cart">
           <br></br>
           <div >
               <button className="gocart" onClick={() => navigateTo(PAGE_CART)}>Go to Cart ({Cart1.length})</button>
           </div>
           <br></br>

           <div >
               <button className="gocart1" onClick={() => navigateTo(PAGE_PRODUCTS)}>Back to Products </button>
           </div>

           {page === PAGE_PRODUCTS &&  renderProducts()}

           {page === PAGE_CART &&  renderCart1()}
                   
        </div>
    );
           
}
export default Cart;
