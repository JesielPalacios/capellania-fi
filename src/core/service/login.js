const ENPOINT = 'https://ecommerce-nodejs-expressjs.herokuapp.com'

export default function login ({ username, password}){
    return fetch(`${ENPOINT}/login`,{
       method: 'POST',
       headers:{
           "Content-Type": 'application/json'
       } 
    })
}