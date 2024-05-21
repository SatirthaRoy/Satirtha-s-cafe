import { useQuery } from "@tanstack/react-query"
import useAxios from "./useAxios"
import useData from "./useData";


const useCart = () => {
  const myAxios = useAxios();
  const {user} = useData();
  const {data: cart=[], refetch} = useQuery({
    queryKey: ['cart', user?.uid],
    queryFn: async() => {
      const response = await myAxios.get(`/carts?uid=${user?.uid}`)
      return response.data;
    }
  })
  return [cart, refetch]
} 

export default useCart