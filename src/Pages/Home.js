import React from "react";
import '../Pages/Home.css';
import shop from '../Pages/images/shop.png';
import product from '../Pages/images/product.png';
import history from '../Pages/images/history.jpg';
import { Link } from "react-router-dom";

const Home = () => {
   return (
      <div className="nav-card">

         <div className="card-div">
            <h3>shop</h3>
            <Link to='/shop'>
               <img width={350} height={200} src={shop} alt="" />
            </Link>
         </div>

         <div className="card-div">
            <h3>Product</h3>
            <Link to='/products'>
               <img width={350} height={200} src={product} alt="" />
            </Link>
         </div>

         <div className="card-div">
            <h3>History</h3>
            <Link to='/history' >
               <img width={350} height={200} src={history} alt="" />
            </Link>

         </div>


      </div>
   );
};

export default Home;