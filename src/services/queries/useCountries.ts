import { getAPI } from "../apiClient";
import { get } from "lodash";
import { queryKeys } from "../../utils/constant/query";
import { useQuery } from "@tanstack/react-query";

export const API_COUNTRIES = "/v3.1/all";

export const useCountries = () => {
  const url = `${import.meta.env.VITE_APP_BASE_API_URL}${API_COUNTRIES}`;

  const fetcher = async () => {
    const result = await getAPI(url);
    return get(result, "data", []);
  };

  return useQuery({ queryKey: [queryKeys.countries], queryFn: fetcher });
};
