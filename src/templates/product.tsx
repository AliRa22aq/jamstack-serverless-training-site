import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../components/layout'

const Product = ({pageContext}) => {

    const {itemDetails} = pageContext;
    console.log(JSON.parse(itemDetails.decss.raw))
        
    

    return (

        <Layout>
            <h1> {itemDetails.title} </h1>
            <p> {documentToReactComponents(JSON.parse(itemDetails.decss.raw))} </p>
        </Layout>

    )
}

export default Product

