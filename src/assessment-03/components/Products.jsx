import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';
import Footer from './Footer';
import './styles/products.css'


function Products() {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);
   
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const handleAdd = (product) => {
        dispatch(add(product));
    };
    if (status === STATUSES.LOADING)
        return <h2> please wait </h2>;
    if (status === STATUSES.ERROR)
        return <h2>Something went wrong!</h2>;
    
    return (

       <>
       <div className='filter'>
            <form className='searchForm'>
                <h6>Search Products</h6>
                <input type="text" />
            </form>
       </div>
       <div className='pbody'>
            <div className="productContainer">
                {products.map((product) => (
                    <div className="card" key={product.id}>
                        <img src={product.image} alt="" />
                        <h4>{product.title}</h4>
                        <h5>{product.price}</h5>
                        <button onClick={() => handleAdd(product)} className="btn">
                            Add to cart <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                ))}
            </div>
            {/* <Footer> </Footer> */}
        </div>
       </>
    );
};

export default Products