
import qs from "qs";
const strapiFetch = async (slug, urlParamsObject, options) => {

    const queryString = qs.stringify(urlParamsObject);
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}${slug}${queryString ? `?${queryString}` : ""}`,
        { ...options }
    );

    console.log(`${process.env.NEXT_PUBLIC_BASE_URL}${slug}${queryString ? `?${queryString}` : ""}`,"link");

    if (!res.ok) {
        return undefined;
    }

    return res.json();
};

export default strapiFetch;

