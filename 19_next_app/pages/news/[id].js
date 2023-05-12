import {useRouter} from 'next/router'
function news() {
    const params = useRouter();
    console.log(params.id)
    return (
        <div>
            <h1>the detail news ID:{params.id}</h1>
        </div>
    );
}

export default news;