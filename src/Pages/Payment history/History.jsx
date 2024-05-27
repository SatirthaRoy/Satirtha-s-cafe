import React from 'react'
import SectionTitle from '../../Shared components/SectionTitle'
import useAxios from '../../hooks/useAxios'
import { useQuery } from '@tanstack/react-query'
import useData from '../../hooks/useData'
import HistoryTable from './Components/HistoryTable'

const History = () => {
  const {user} = useData();
  const myAxios = useAxios();
  const {data:history=[]} = useQuery({
    queryKey: ['history'],
    queryFn: async () => {
      const res = await myAxios.get(`/history?uid=${user?.uid}`);
      return res.data;
    }
  })
  console.log(history);
  return (
    <div className='flex-grow '>
       <SectionTitle title='payment history' phrase='At a Glance'/>
       <div className='p-3 md:p-6 w-full space-y-10'>
        <div className='w-full flex justify-between items-center'>
          <h1 className='cinzel text-lg md:text-3xl font-bold'>Total Payments: {history?.length}</h1>
        </div>
        <HistoryTable history={history}/>
       </div>
    </div>
  )
}

export default History