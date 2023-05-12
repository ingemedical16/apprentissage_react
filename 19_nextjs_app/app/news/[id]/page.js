"use client"
import {useParams} from 'next/navigation'
function news() {
    const params = useParams();
    console.log(params.id)
    return (
        <div>
            <h1>the detail news ID:{params.id}</h1>
        </div>
    );
}

export default news;