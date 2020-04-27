 export const signup = (user) =>{
    // console.log(name, email, password);
   return fetch('https://newexemplify.herokuapp.com/api/signup',{
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res => {
        return res.json()
    })
    .catch(err => {
        console.log(err);
    })
    
};

export const signin = (user) =>{
    // console.log(name, email, password);
   return fetch('https://newexemplify.herokuapp.com/api/signin',{
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res => {
        return res.json()
    })
    .catch(err => {
        console.log(err);
    })
    
};

export const authenticate = (data, next) => {
    if(typeof window !== "undefined") {
        localStorage.setItem("jwt", JSON.stringify(data));
        next();
    }
}

export const signout = next => {
    if(typeof window !== "undefined") {
        localStorage.removeItem("jwt");
        next();
        return fetch('https://newexemplify.herokuapp.com/api/signout',{
            method: "GET"
        })
            .then(response => {
                console.log("signout", response);
            })
            .catch(err => console.log(err));
    }
};

export const isAuthenticated = () => {
    if (typeof window == "undefined") {
        return false;
    }

    if (localStorage.getItem("jwt")) {
        return JSON.parse(localStorage.getItem("jwt"));
    } else {
        return false;
    }
};











