import React, {useState, useEffect} from 'react';
import Layout from './Layout';
import Card from './Card';
import { getCategories } from './apiCore';
import Checkbox from './Checkbox';
import {prices} from './fixedPrice';
import RadioBox from './RadioBox';

const Shop = () => {

    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(false);
    const [myFilters, setMyFilters] = useState({
        filters : {category: [], price: []}
    });

    const init = () =>{
        getCategories().then(data => {
            if (data.error){
                setError(data.error)
            } else {
                setCategories(data)
            }
        })
    }

    useEffect (() =>{
        init();
    }, []);

    //shop is the parent component using checkbox component , 
    //so to interact with DB we need to send the id of the category 
    //from child component to the parent component i.e., shop
    const handleFilters = (filters, filterBy) => {
        // console.log(filters, filterBy);
        const newFilters = {...myFilters}
        newFilters.filters[filterBy] = filters;
        setMyFilters(newFilters);
    }

    return (
        <Layout title="Shop" description="Find your type" className="container-fluid" >
            <div className="row">
                <div className="col-4">
                    <h4>Filter by categories</h4>
                    <ul>
                        <Checkbox categories={categories} handleFilters={filters => handleFilters(filters, 'category')} />
                    </ul>
                    <h4>Filter by price range</h4>
                    <div>
                        <RadioBox categories={categories} handleFilters={filters => handleFilters(filters, 'price')} />
                    </div>
                </div>
            </div>
                <div className="col-8">Right</div>
           
        </Layout>
    )
}

export default Shop;