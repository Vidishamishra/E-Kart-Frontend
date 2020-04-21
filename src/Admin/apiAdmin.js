
export const createCategory = (userId, token, category) =>{
    // console.log(name, email, password);
   return fetch(`http://localhost:5000/api/category/create/${userId}`,{
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    })
    .then(res => {
        return res.json()
    })
    .catch(err => {
        console.log(err);
    })
    
};

export const createProduct = (userId, token, product) =>{
   
   return fetch(`http://localhost:5000/api/product/create/${userId}`,{
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: product
    })
    .then(res => {
        return res.json()
    })
    .catch(err => {
        console.log(err);
    })
    
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







