import { useQuery } from "@tanstack/react-query"
import useAxios from "./useAxios"


const useCart = (uid) => {
  const myAxios = useAxios();
  const {data: cart=[]} = useQuery({
    queryKey: ['cart'],
    queryFn: async() => {
      const response = await myAxios.get(`/carts?uid=${uid}`)
      return response.data;
    }
  })
  return cart
} 

export default useCart