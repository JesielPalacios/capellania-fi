const ENPOINT = 'https://ecommerce-nodejs-expressjs.herokuapp.com'

export default function login ({ username, password}){
    return fetch(`${ENPOINT}/api/auth/login`,{
       method: 'POST',
       headers:{
           "Content-Type": 'application/json'
       },
       body: JSON.stringify({username, password})
    }).then(res =>{
        if (!res.ok) throw new Error('Response is NOT ok')
        return res.json()
    }).then(res =>{
        return res.accessToken
    })
}