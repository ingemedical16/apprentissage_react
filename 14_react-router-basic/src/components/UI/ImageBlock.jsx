import {useState} from 'react';

import classes from './ImageBlock.module.css'
import Card from './Card';

function ImageBlock(props) {
    const {images} = props
    const[imgIndex,setImgIndex]=useState(0);
    const imagesHandler = (e,i) =>{
       setImgIndex(i)
    }

    return (
        
            <div  className={classes.imageBlock}>
                <div className={classes.images}>
                    <ul>
                        {
                            images.map((img,i) =><li onMouseMove={(e) =>imagesHandler(e,i)}>
                                <img src={img} alt={i}  width="120px" height="120px"/>
                            </li>)
                        }
                    </ul>

                </div>
                <div className={classes.imagesZome}>
                    {images.length >0 && <img src={images[imgIndex]} alt={imgIndex} width="500px" height="500px"/>}
                </div>
            </div>
     
    )
}

export default ImageBlock;