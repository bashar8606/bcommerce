// import { useLocale } from "next-intl";

// export const getLocale = () => {
//     return useLocale();
// };

export const HOME = "home/page";
export const FILTER = "home/filter_data";
export const ALL_CATEGORIES ="sidebar/categories"

export const FILTER_PRODUCTS = "home/filtered_products"
export const SINGLE_PRODUCT = "home/product-details"
// export const GET_CART = "carts?token=true"

export const GET_CART = "carts?"
//auth
export const OTP_SENT = "get-register-login-otp";
export const OTP_VERIFY = "verify-register-login-otp";
export const REFRESH_TOKEN = "/auth/refresh_tokens";

//Post method
export const ADD_CART = "cart-store"
export const UPDATE_CART = "cart-update"

//Delete method
export const DELETE_CART = "cart-delete"

export const WISHLIST = "user/wishlists?"
// export const WISHLIST = () => {
//     const locale = getLocale();
//     return `user/wishlists?lang=${locale}`;
//   };

export const ALL_ADDRESSES = "user/shipping-addresses"
export const ADD_ADDRESS = "user/shipping-addresses"
export const EDIT_ADDRESS = ""
export const DELETE_ADDRESS = "user/shipping-addresses"

export const ALL_ORDERS ="user/orders"
export const TRACK_ORDER ="user/track-order"
export const CANCEL_ORDER="user/cancel-order?id="
export const RETURN_ORDER="user/return-order?id="
 

export const ADD_WISHLIST ="user/add-to-wishlist"
export const REMOVE_WISHLIST ="user/remove-wishlist-product"

export const UPDATE_PROFILE ="user/update-profile"

export const COUNTRY_LIST = "get/country-list"
export const CITY_BY_STATE = "city/by-state"
export const STATE_BY_COUNTRY = "state/by-country" 