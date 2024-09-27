import { FILTER, HOME, SINGLE_PRODUCT, ADD_CART, DELETE_CART, GET_CART, UPDATE_CART, ADD_WISHLIST } from "@/constants/apiRoutes";
import { deleteFetcher, apiFetcher } from "@/utils/fetcher";
import strapiFetch from "@/utils/strapiFetch";
import { useSession} from "next-auth/react";

const options = {
    method: 'GET',
    // headers: {
    //     accept: 'application/json',
    //     Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
    // },
    next: {
        revalidate: 0, // data will be cached for 1 day
    }
};

const getPostOptions = (method, token = null) => {
    const options = {
        method: method, //['POST' or 'PUT' or 'GET' or 'DELETE' ]
        headers: {
            'Content-Type': 'application/json',
        },
    };

    // Only add the Authorization header if the token is provided
    if (token) {
        options.headers.Authorization = `Bearer ${token}`;
    }

    return options;
};

const getDaleteOptions = (token = null) => {
    const options = {
        method: 'DLETE',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    };

    // Only add the Authorization header if the token is provided
    if (token) {
        options.headers.Authorization = `Bearer ${token}`;
    }

    return options;
};

export async function getCategories() {
    const url = `${HOME}`;
    const urlParamsObject = {
        page: 3,
    };
    const data = await strapiFetch(url, urlParamsObject, options);
    return data;
}

export async function getHomeProducts() {
    const url = `${HOME}`;
    const urlParamsObject = null
    const data = await strapiFetch(url, urlParamsObject, options);
    return data;
}


export async function getFilter(slug) {
    const url = `${FILTER}?slug=${slug}`;
    const urlParamsObject = {};
    const data = await strapiFetch(url, urlParamsObject, options);
    if (data.status === "fulfilled") {
        const result = data.result;
        console.log(result);
        return result;
        // Do something with result
      } else {
        console.error("Error:");
      }
  
}


export async function getSingleProduct(slug) {
    const url = `${SINGLE_PRODUCT}/${slug}`
    const data = await strapiFetch(url, options);
    return data;
}



export async function getSearchProducts(id, keywords, lang) {
    const url = new URL(`https://api.themoviedb.org/3/discover/movie`);
    id && url.searchParams.set('with_genres', id)
    keywords && url.searchParams.set('with_keywords', keywords)
    lang&&url.searchParams.set('language', lang)

    const data = await fetchMovie(url);
    return data;
}


export async function addCartItem(id, quantity, token) {

    const formData = {
        'product_id': id,
        'quantity': quantity,
        'token': true
    }

    const url = `${ADD_CART}`;
    const postOptions = getPostOptions("POST",token); // Token is needed
    const data = await apiFetcher(url, formData, postOptions);
    return data;
}

export async function removeCartItem(id,token) {
    const url = `${DELETE_CART}/${id}`;
    const data = await deleteFetcher(url,{ token: token });
    return data;
}

export async function updateCartItemQty(id, quantity, token) {

    const formData = {"quantity": quantity}

    const url = `${UPDATE_CART}/${id}`;
    const postOptions = getPostOptions("POST",token); // Token is needed
    const data = await apiFetcher(url, formData, postOptions);
    return data;
}

export async function getCart(token) {
   
    const url = `${GET_CART}?token=true`;
    const postOptions = getPostOptions("GET", token); // Token is needed
    const data = await apiFetcher(url, null, postOptions);
    return data;
}


export async function addToWishlist(id, token) {
    const url = `${ADD_WISHLIST}/${id}`;
   
    const postOptions = getPostOptions("GET", token); // Token is needed
    const data = await apiFetcher(url, null, postOptions);
    return data;
}