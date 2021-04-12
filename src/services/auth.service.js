/*
The service uses Axios for HTTP requests and Local Storage for user information & JWT.
It provides following important methods:

    login(): POST {username, password} & save JWT to Local Storage
    logout(): remove JWT from Local Storage
    register(): POST {username, email, password}
    getCurrentUser(): get stored user information (including JWT)
*/
import axios from 'axios';
const API_URL = "https://localhost:5000/";


class AuthService {
    login(username, password) {
      return axios
        .post(API_URL + "auth/login", {
            "user":{
               "email": username,
                "password": password
            } 
        })
        .then(response => {
          if (response.data.accessToken) {
            localStorage.setItem("user_token", JSON.stringify(response.data));
          }
  
          return response.data;
        });
    }
  
    logout() {
      localStorage.removeItem("user_token");
    }
  
/*     register(username, email, password) {
      return axios.post(API_URL + "signup", {
        username,
        email,
        password
      });
    }
   */
  
    getCurrentUser() {
      return JSON.parse(localStorage.getItem('user_token'));;
    }
  }
  
  export default new AuthService();
  