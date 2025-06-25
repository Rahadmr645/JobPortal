export const isAuthentication = () => {
   return !! 
   localStorage.getItem("token"); //true if token exist
};