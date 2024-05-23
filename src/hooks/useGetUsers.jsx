import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios'

const useGetUsers = () => {
  const myAxios = useAxios();

  const {data: users=[], refetch} = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await myAxios.get('/users')
      return response.data;
    }
  })

  return [users, refetch]

}

export default useGetUsers