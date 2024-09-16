import axios from "axios";

// const fetcher = async url => {
//     const res = await fetch(url)


   
//     // If the status code is not in the range 200-299,
//     // we still try to parse and throw it.
//     if (!res.ok) {
//       const error = new Error('An error occurred while fetching the data.')
//       // Attach extra info to the error object.
//       error.info = await res.json()
//       error.status = res.status
//       throw error
//     }
   
//     return res.json()
//   }

const fetcher = url => axios.get(url).then(res => res.data);

const fetcherWithToken = async (url, options = {}) => {
    const { token } = options;
  
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
  
    try {
        const res = await axios.get(url, { headers });
        return res.data;
    } catch (error) {
        console.error('Fetcher error:', error);
        throw error;
    }
  };

const postFetcher = async (url, data, headers) => {
    try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, data, { headers });
        return res.data;
    } catch (err) {
        console.error("Error in POST request:", err);
        return err.response.data;
    }
};

const deleteFetcher = async (url, data = null, options = {}) => {
    try {
        const { token } = options;
        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        const config = {
            headers,
            ...(data && { data }) // Only add `data` if it exists
          };

        const res = await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, config);
        return res.data;
    } catch (err) {
        console.error("Error in POST request:", err);
        return err.response.data;
    }
};

export default fetcher
export {postFetcher, fetcherWithToken, deleteFetcher}