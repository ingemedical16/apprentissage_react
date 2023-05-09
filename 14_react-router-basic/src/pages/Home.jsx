import {useNavigate} from 'react-router-dom'
function Home(props) {
    const navigate = useNavigate();
    const navigateHandler = ()=>{
        navigate('/products')
    }
    return (
        <div>
            <h1>my Home Page</h1>
            
            <button onClick={navigateHandler}>Navigate to products</button>
        </div>
    );
}

export default Home;