import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {Outlet} from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';
import {setProducts,loading,hasError} from '../store/slices/productSlice'


function Layout(props) {
   const dispatch = useDispatch()

    
      useEffect(()=>{
        const fetchproducts = async () =>{
            dispatch(loading())
            try {
             const response = await  fetch('https://dummyjson.com/products');
             if (!response.ok) {
              throw new Error("something went wrong!")
             }
             const productArry = await response.json();
             let data= productArry.products
             let arry=[]
             for (const key in data){
                arry.push(data[key])
             }
             
             dispatch(setProducts(arry));
              
            } catch (error) {
              dispatch(hasError(error.message))
            }
           
          }
          fetchproducts();
      },[]);
    return (
        <>
           <MainNavigation/>
                <main>
           
          <Outlet /> 
          </main>
       
        </>
    );
}

export default Layout;