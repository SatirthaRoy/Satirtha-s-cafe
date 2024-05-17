import { useEffect, useState } from 'react'
import useAxios from './useAxios';

const useMenuFetch = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const myAxios = useAxios();

  useEffect(() => {
    // fetch('/bistro-boss-restaurant-resources-main/menu.json')
    // .then(res => res.json())
    // .then(data => {
    //   setMenu(data);
    //   setLoading(false);
    // })
    myAxios.get('/menu')
    .then(res => {
      setMenu(res.data);
      setLoading(false);
    })
  }, [])

  return [menu, loading];

}

export default useMenuFetch