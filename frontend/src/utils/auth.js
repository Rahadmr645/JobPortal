
export  const isAuthenticated = () => {
   return !!localStorage.getItem("token") // true if token exists

}