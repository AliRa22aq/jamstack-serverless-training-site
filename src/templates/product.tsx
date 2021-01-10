import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Product = ({pageContext}) => {

    const {itemDetails} = pageContext;
    console.log(JSON.parse(itemDetails.decss.raw))
        
    

    return (
        <div>
            <h1> {itemDetails.title} </h1>
            <p> {documentToReactComponents(JSON.parse(itemDetails.decss.raw))} </p>
        </div>
    )
}

export default Product

