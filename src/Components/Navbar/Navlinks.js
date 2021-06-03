import { faShoppingCart, faSignInAlt, faSignOutAlt, faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Navlinks = [
    {
        isAuthUser: false,
        category : "MyAccount",
        name :  "My Cart",
        icon : faShoppingCart,
        to:"/mycart"
    },
    {
        isAuthUser: false,
        category : "MyAccount",
        name :  "Register",
        icon : faUserPlus,
        to:"/register"
    },
    {
        isAuthUser: false,
        category : "MyAccount",
        name :  "Sign In",
        icon : faSignInAlt,
        to:"/login"
    },
    // {
    //     isAuthUser: true,
    //     category : "MyAccount",
    //     name :  "My Profile",
    //     icon : faSignInAlt
    // },
    // {
    //     isAuthUser: true,
    //     category : "MyAccount",
    //     name :  "Sign out",
    //     icon : faSignOutAlt
    // }

]
    


export default Navlinks;