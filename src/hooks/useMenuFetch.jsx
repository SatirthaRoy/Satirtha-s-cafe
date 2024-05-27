import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useMenuFetch = () => {
  const myAxios = useAxios();

  // useEffect(() => {
  //   myAxios.get('/menu')
  //   .then(res => {
  //     setMenu(res.data);
  //     setLoading(false);
  //   })
  // }, [])
  const {data:menu=[], isPending:loading, refetch} = useQuery({
    queryKey: ['menu'],
    queryFn: async () => {
      const res = await myAxios.get('/menu')
      return res.data;
    }
  })

  return [menu, loading, refetch];

}

export default useMenuFetch