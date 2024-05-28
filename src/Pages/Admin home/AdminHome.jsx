import React from "react";
import useMenuFetch from "../../hooks/useMenuFetch";
import { IoWallet } from "react-icons/io5";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { FaShop } from "react-icons/fa6";
import { MdPhoneInTalk } from "react-icons/md";
import CustomShapeBarChart from "./Components/CustomShapeBarChart";
import CustomPieChart from "./Components/CustomPieChart";
import { ImDiamonds } from "react-icons/im";


export const HomeCard = ({icon, data, title, bg}) => {
  return (
    <div className={`${bg} text-white flex justify-center items-center gap-5 py-8 rounded-3xl flex-1`}>
      <div className="text-4xl">
        {icon}
      </div>
      <div>
        <h1 className="text-4xl font-bold">{data?.length}</h1>
        <p className="text-2xl">{title}</p>
      </div>
    </div>
  );
};

const AdminHome = () => {
  const myAxios = useAxios();
  const [menu] = useMenuFetch();
  // querying payment history data
  const {data:Payments=[]} = useQuery({
    queryKey: ['payments'],
    queryFn: async () => {
      const res = await myAxios.get('/history')
      return res.data;
    }
  });

  return (
    <div className="w-11/12 mx-auto space-y-8 mt-16">
      <h1 className="text-3xl cinzel font-semibold">Hi, Welcome Back.</h1>
      <div className="flex flex-col md:flex-row gap-5 w-full justify-center">
        <HomeCard icon={<IoWallet/>} data={Payments} title='Payments' bg='bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF]'/>
        <HomeCard icon={<FaShop/>} data={menu} title='Shop' bg='bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]'/>
        <HomeCard icon={<MdPhoneInTalk/>} data={new Array(3)} title='Contact' bg='bg-gradient-to-r from-[#FE4880] to-[#FECDE9]'/>
      </div>
      <div className="flex md:flex-row flex-col">
        <div className="flex-1">
          <CustomShapeBarChart menu={menu}/>
        </div>
        <div className="flex-1">
          <div className="flex justify-center flex-wrap items-center gap-4">
            <span className="text-2xl text-[#0088FE] flex items-center"><ImDiamonds/>Dessert</span>
            <span className="text-2xl text-[#00C49F] flex items-center"><ImDiamonds/>Soup</span>
            <span className="text-2xl text-[#FFBB28] flex items-center"><ImDiamonds/>Pizza</span>
            <span className="text-2xl text-[#FF8042] flex items-center"><ImDiamonds/>Salad</span>
          </div>
          <CustomPieChart menu={menu}/>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
