
import auth0 from 'auth0-js';

let authObj;

class Auth {

    constructor() {
       this.login=this.login.bind(this);
    }
     authObj = new auth0.WebAuth({
        domain: 'arun9.auth0.com',
        clientID: 'elihTJJFB6IGVnWnuM8hJ7u0-KDRWIgb',
        redirecUrl: 'http://localhost:3000/callback',
        audience: 'https://arun9.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid'
    })



    login() {
        this.authObj.authorize();
    }

    handleAuthentication(){
        this.authObj.parseHash((error,authResult)=>{
            if(authResult && authResult.accessToken && authResult.idToken){
                let expireAt=JSON.stringify(authResult.expireIn*1000+ new Date().getTime())
                sessionStorage.setItem("accessToken",authResult.accessToken)
                sessionStorage.setItem("idToken",authResult.idToken)
                sessionStorage.setItem("expireAt",expireAt)
            }
        })
    }
}

export default Auth;