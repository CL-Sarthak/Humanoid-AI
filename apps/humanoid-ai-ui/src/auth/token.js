import { jwtDecode } from "jwt-decode"

export function getToken() {
    return sessionStorage.getItem("access_token");
  }
  
  export function decodeToken(token) {
    try {
      return jwtDecode(token);
    } catch (e) {
      return null;
    }
  }