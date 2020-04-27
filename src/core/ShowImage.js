import React from 'react';

const ShowImage = ({ item }) => (
    <div className="product-img">
        <img src={`https://newexemplify.herokuapp.com/api/product/photo/${item._id}`}
        alt={item.name}
        className="mb-3"
        style={{ maxHeight: "100%", maxWidth: "100%"}} />
    </div>
)

export default ShowImage;