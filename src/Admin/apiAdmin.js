
export const createCategory = (userId, token, category) =>{
    // console.log(name, email, password);
   return fetch(`https://newexemplify.herokuapp.com/api/category/create/${userId}`,{
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
   
   return fetch(`https://newexemplify.herokuapp.com/api/product/create/${userId}`,{
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
    return fetch(`https://newexemplify.herokuapp.com/api/categories`, {
        method: "GET"
    })
        .then(res => {
            return res.json();
        })
        .catch(err => console.log(err));
};







