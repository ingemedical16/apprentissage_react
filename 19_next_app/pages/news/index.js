import Link from "next/link";
import { Fragment } from "react";

function news() {
    return (
        <Fragment>
            <h1>The News Page</h1>
            <ul>
                <li>
                    <Link href="news/nextjs-is-a-great-framwork">
                        NextJS Is A Great Framwork
                    </Link>
                </li>
                <li>Something Else</li>
            </ul>
        </Fragment>
    );
}

export default news;