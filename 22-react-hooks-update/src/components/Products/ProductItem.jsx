import React,{useContext,memo} from 'react';
//import { useDispatch } from 'react-redux';

import Card from '../UI/Card';
import './ProductItem.css';
//import { toggleFav } from '../../store/actions/products';
//import { ProductsContext } from '../../context/product-context';
import { useStore } from '../../hooks/store';

const ProductItem = memo(props => {
  console.log("rendering")
  //const dispatch = useDispatch();
  const dsipatch =  useStore(false)[1]//useContext(ProductsContext).toogaleFav

  const toggleFavHandler = () => {
    //dispatch(toggleFav(props.id));
    //toogaleFav(props.id)
    dsipatch('TOGGLE_FAV',props.id)
  };

  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="product-item">
        <h2 className={props.isFav ? 'is-fav' : ''}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? 'button-outline' : ''}
          onClick={toggleFavHandler}
        >
          {props.isFav ? 'Un-Favorite' : 'Favorite'}
        </button>
      </div>
    </Card>
  );
});

export default ProductItem;
