import { jwtDecode} from 'jwt-decode'

export function getUser() {
  const token = localStorage.getItem("token")
  if (!token) return null
    try {
        const decodedToken = jwtDecode(token);
        const user={
            email: decodedToken?.email,
            accountType: decodedToken?.accountType,
        }
        return user;
    } catch (error) {
        console.error("Error decoding token:", error);
        return null;
    }
}
