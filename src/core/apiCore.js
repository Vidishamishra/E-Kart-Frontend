import queryString from 'query-string';

export const getProducts = sortBy => {
    return fetch(`https://newexemplify.herokuapp.com/api/products?sortBy=${sortBy}&order=desc&limit=6`,{
        method: "GET"
    })
    .then (response => {
        return response.json();
    })
      .catch(err => console.log(err)) 
};


export const getCategories = () => {
    return fetch(`https://newexemplify.herokuapp.com/api/categories`, {
        method: "GET"
    })
        .then(res => {
            return res.json();
        })
        .catch(err => console.log(err));
};

export const getFilteredProducts = (skip, limit, filters = {}) => {
    const data = {
        limit, skip, filters
    };
    return fetch(`https://newexemplify.herokuapp.com/api/products/by/search`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then (res => {
        return res.json();
    })
    .catch(err => {
        console.log(err);
    })
};

export const list = params => {
    const query = queryString.stringify(params)
    return fetch(`https://newexemplify.herokuapp.com/api/products/search?${query}`, {
        method: "GET"
    }) .then(response => {
          return response.json();
    }) .catch(err => console.log(err));
};

export const read = (productId) => {
    return fetch(`https://newexemplify.herokuapp.com/api/product/${productId}`, {
        method: "GET"
    })
        .then(res => {
            return res.json();
        })
        .catch(err => console.log(err));
};

export const listRelated = (productId) => {
    return fetch(`https://newexemplify.herokuapp.com/api/products/related/${productId}`, {
        method: "GET"
    })
        .then(res => {
            return res.json();
        })
        .catch(err => console.log(err));
};

export const getBraintreeClientToken = (userId, token) => {
    return fetch(`https://newexemplify.herokuapp.com/api/braintree/getToken/${userId}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    })
        .then(res => {
            return res.json();
        })
        .catch(err => console.log(err));
};
