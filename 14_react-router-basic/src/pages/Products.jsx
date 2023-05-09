import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

import Card from '../components/UI/Card'
import classes from './products.module.css'

function Products(props) {

        const products = useSelector(state => state.listProducts.products)
        const isLoading = useSelector(state => state.listProducts.isLoading)
        const hasError = useSelector(state => state.listProducts.error)

       console.log(products)
 if(isLoading){
    return <p>Loading.....</p>
 }
       
 if(hasError){
    return <p>{hasError}</p>
 }

    return (
        <>
           <h1>The products Page</h1> 
           <ul className={classes.content}>
           
            { products.payload && products.payload.map(p =>
            <Card key={p.id} className={classes.card}>
                
            <li >
            <Link to={`/products/${p.id}`}> <img src={p.thumbnail} alt={p.title} width="300px" height="300px"/></Link>
                <hr/>
                <p>Discount: {p.discountPercentage} % </p>
                <p>{p.price} Euros</p>
                <Link to={`/products/${p.id}`}> {p.title}</Link>
                </li>
            </Card>)}
           </ul>
        </>
    );
}

export default Products;