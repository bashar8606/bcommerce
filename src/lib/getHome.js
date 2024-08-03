import { FILTER, HOME, SINGLE_PRODUCT } from "@/constants/apiRoutes";
import strapiFetch from "@/utils/strapiFetch";

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
    const urlParamsObject = {
        page: 2,
    };
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