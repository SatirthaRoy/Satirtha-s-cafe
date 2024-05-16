import { useEffect, useState } from 'react'

const useMenuFetch = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/bistro-boss-restaurant-resources-main/menu.json')
    .then(res => res.json())
    .then(data => {
      setMenu(data);
      setLoading(false);
      
    })
  })

  return [menu, loading];

}

export default useMenuFetch