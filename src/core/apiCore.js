export const getProducts = sortBy => {
    return fetch(`http://localhost:5000/api/products?sortBy=${sortBy}&order=desc&limit=6`,{
        method: "GET"
    })
    .then (response => {
        return response.json();
    })
      .catch(err => console.log(err)) 
};


export const getCategories = () => {
    return fetch(`http://localhost:5000/api/categories`, {
        method: "GET"
    })
        .then(res => {
            return res.json();
        })
        .catch(err => console.log(err));
};
