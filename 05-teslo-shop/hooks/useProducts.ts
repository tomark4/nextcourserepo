import useSWR, { SWRConfiguration } from "swr";
import { Product } from "../interfaces";

// const fetcher = (...args: [key: string]) =>
//   fetch(...args).then((res) => res.json());

const useProducts = (path: string, config?: SWRConfiguration) => {
  const { data, error } = useSWR<Product[]>(`/api/${path}`, config);

  return { products: data || [], isLoading: !error && !data, isError: error };
};

export default useProducts;
