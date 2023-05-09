import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom';

import classes from './ProductDetails.module.css'
import ImageBlock from '../components/UI/ImageBlock';
import Card from '../components/UI/Card';

function ProductDetails(props) {
    const [product,setProdact]= useState()
    const {id} = useParams();

    useEffect(()=>{
        const getProductsById =async (productId)=>{
            try {
                const response = await  fetch(`https://dummyjson.com/products/${productId}`);
                if (!response.ok) {
                 throw new Error("Product not Fond!")
                }
                const productArry = await response.json();
              setProdact(productArry)
                
               
                 
               } catch (error) {
                
               }
              
        }

        getProductsById(id);
    },[id]);

    if(!product){
       return  <p>No product Fond!</p>
    }
     console.log(product.images)
    return (
        <div className={classes.container}>
        <Card className={classes.card}>
           
           
           {product && <ImageBlock images={product.images}/>}
        
            
            <h1>{product.title}</h1>
            <p>{product.description}</p>
        </Card></div>
    );
}


export default ProductDetails;