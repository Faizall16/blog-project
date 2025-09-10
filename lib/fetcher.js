import useSWR from "swr";
import { baseURL } from "./config";
const response = (...args) => fetch(...args).then((res) => res.json());

export default function Fetcher(endpoint) {
  const { data, error } = useSWR(`${baseURL}${endpoint}`, response);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
