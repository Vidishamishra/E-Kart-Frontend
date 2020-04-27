import React, {useState, useEffect} from 'react';
import Layout from './Layout';
import {read, listRelated} from './apiCore';
import Card from './Card';

const Product = (props) => {

    const [product, setProduct] = useState({})
    const [relatedProduct, setRelatedProduct] = useState([])
    const [error, setError] = useState(false)

    const loadingSingleProduct = productId => {
        
            read(productId).then(data => {
                if(data.error) {
                    setError(data.error);
                } else {
                    setProduct(data);
                    // fetch related products after the single product is obtained
                    listRelated(data._id).then(data => {
                        if(data.error) {
                            setError(data.error)
                        } else {
                            // console.log(data);
                            setRelatedProduct(data);
                        }
                    })
                }
            })
}

    useEffect(() => {
        //As this component is present in route it has access to the props
        const productId = props.match.params.productId
        loadingSingleProduct(productId)
    }, [props])

    return (
        <Layout title={product && product.name} description="" className="container-fluid">
           <h2 className="mb-4">single product</h2>
              {/* <div className="row">{JSON.stringify(product)}</div> */}
           
            <div className="row">
                <div className="col-8">
                {product && product.description && <Card product={product} showViewProductButton={false}/>}
                </div>
                <div className="col-4">
                    <h4>Related products</h4>
                      {relatedProduct.map((p,i) => (
                          <div className="mb-3">
                              <Card  key={i} product={p}/>
                          </div>
                      ))}
                </div>
            </div>
        </Layout>
    )
}

export default Product;