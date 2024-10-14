// import { useState } from "react";

// export function useAddressModal(){
//     const [countries, setcCountries] = useState([]);
//     const [states, setSates] = useState([]);
//     const [cities, setCities] = useState([]);

//     return {
//         countries,
//         states,
//         cities
//     }
// }

import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export function useAddressModal(countryId, stateId) {
  const { data: countriesData, error: countriesError } = useSWR('get/country-list');
  
  const { data: statesData, error: statesError } = useSWR(
    countryId ? `state/by-country/${countryId}` : null
  );

  const { data: citiesData, error: citiesError } = useSWR(
    stateId ? `city/by-state/${stateId}` : null
  );

  return {
    countries: countriesData?.results?.countries || [],
    states: statesData?.results?.states || [],
    cities: citiesData?.results?.cities || [],
    countriesError,
    statesError,
    citiesError,
  };
}
