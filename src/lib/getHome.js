import { FILTER, HOME, SINGLE_PRODUCT, ADD_CART, DELETE_CART } from "@/constants/apiRoutes";
import { deleteFetcher, postFetcher } from "@/utils/fetcher";
import strapiFetch from "@/utils/strapiFetch";
import { useSession, signOut, signIn } from "next-auth/react";

const options = {
    method: 'GET',
    // headers: {
    //     accept: 'application/json',
    //     Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`
    // },
    next: {
        revalidate: 60 * 60 * 24, // data will be cached for 1 day
    }
};

const getPostOptions = (token = null) => {
    const options = {
        method: 'POST',
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
    const url = `${FILTER}`;
    const urlParamsObject = {
        slug: slug,
    };
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
    const formData = new FormData();
    formData.append('product_id', id);
    formData.append('quantity', quantity);
    formData.append('token', true);

    const url = `${ADD_CART}`;
    const postOptions = getPostOptions(token); // Token is needed
    const data = await postFetcher(url, formData, postOptions);
    return data;
}

export async function removeCartItem(id,token) {
    const url = `${DELETE_CART}/${id}`;
    const postOptions = getDaleteOptions(token); // Token is needed
    const data = await deleteFetcher(url, null, postOptions);
    return data;
}

export async function updateCartItemQty(id, quantity, token) {

    const formData = new FormData();
    formData.append('quantity', quantity);

    const url = `${UPDATE_CART}/${id}`;
    const postOptions = getPostOptions(token); // Token is needed
    const data = await postFetcher(url, formData, postOptions);
    return data;
}