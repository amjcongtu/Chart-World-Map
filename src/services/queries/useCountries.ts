import { useQuery } from "react-query";
import { getAPI } from "../apiClient";
import { get } from "lodash";
import { queryKeys } from "../../utils/constant/query";

export const API_COUNTRIES = "/v3.1/all";

export const useCountries = () => {
  const url = `${
    import.meta.env.VITE_APP_BASE_API_URL
  }${API_COUNTRIES}`;

  const fetcher = async () => {
    const result = await getAPI(url);
    return get(result, "data", []) ;
  };

  return useQuery([queryKeys.countries], fetcher, {
    // cache upload data
    // cacheTime: 100,
  });
};
