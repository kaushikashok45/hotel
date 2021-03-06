import React from 'react';
import CartSection1 from 'CartComponents/CartSection1';
import CartSection2 from 'CartComponents/CartSection2';
import Modal from 'CommonComponents/Modal';
import {useState, useEffect} from 'react'
import Tabs from 'Compnents2/Tabs';

function CartMain(props) {
    // const [showModal, setshowModal] = useState(false);

    // useEffect(() => {
    //   console.log(showModal);
    
    // }, [showModal]);
    
    return (
        <div id="menu_main_content">
            <div id="wrapper" className="hasbg transparent" style={{bacgroundColor: "black"}}>
              <div id="page-content-wrapper" className="no-title">
                  <div className="inner">
                      <div className="inner-wrapper">
                          <div className="sidebar-content fullwidth">
                              <div data-elementor-type="wp-page" data-elementor-id="3602" className="elementor custom-css-style" data-elementor-settings="[]">
                                  <div className="elementor-inner">
                                      <div className="elementor-section-wrap" >

                                      {/* {
                                          showModal ? <Modal setshowModal={setshowModal}>
                                              <Tabs/>
                                          </Modal> : null
                                      } */}


                                            <CartSection1/>
                                          {/* <SearchBar/> */}
                                          
                                          <CartSection2 />
                                          
                                          
                                          
                                          
                                      </div>
                                  </div>
                              </div>
                              <div className="comment_disable_clearer"></div>
                          </div>
                      </div>
                  </div>
              </div>
  
          </div>
        </div>
    )
}

export default CartMain;
