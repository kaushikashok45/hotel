import Footer from "Compnents2/Footer";
import Header from "Compnents2/Header";
import MobileMenu from "Compnents2/MobileMenu";
import React from 'react';
import {useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import OrderBox from "Compnents2/OrderComponents/OrderBox";


function Orders(){
    return(
        <div className="bg-black" style={{ scrollBehavior: "smooth",maxWidth:"100vw",height:"auto",bottom:"0",minHeight:"100vh"}}>
          <Header/>
          <MobileMenu/>
          <OrderBox/>
          {/* <div style={{PaddingTop:"20px"}}><Footer/></div> */}
          <Footer/>
        </div>
    )
}

export default Orders;