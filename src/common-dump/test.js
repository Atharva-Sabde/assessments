import React from 'react';

import './test.css'

function Test() {

    return (
        <>
            <div>
                <button>
                    Add to cart       .
                    <i class="fa-solid fa-cart-arrow-down"></i>                <i></i>
                </button>
                <i></i>
            </div>

            <div className='container container-sm'>
                <div className='row justify-content-center'>
                    <div className='col col-sm-auto-8 col-lg-4'>   // auto fits using available space
                        column 1
                    </div>
                    <div className='col col-sm-8 col-lg-4'>
                        column 2

                    </div>
                    <div className='col col-sm-8 col-lg-4'>
                        column 3

                    </div>
                </div>
            </div>


          


        </>
    )
}

export default Test;