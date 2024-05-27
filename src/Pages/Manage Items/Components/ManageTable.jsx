import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import useMenuFetch from "../../../hooks/useMenuFetch";
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const ManageTable = ({items}) => {
  const navigate = useNavigate();
  const [, , refetch] = useMenuFetch();
  const myAxios = useAxios();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Do You Want to Delete the item?",
      text: "You wont be able to revert it.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!"
    }).then((result) => {
      if (result.isConfirmed) {
        myAxios.delete(`/menu?id=${id}`)
        .then(res => {
          if(res.data.deletedCount) {
            refetch();
          }
        })
      }
    });
  }

  return (
    <table className="w-full rounded-tr-3xl rounded-tl-3xl">
      {/* head */}
      <tbody className="bg-[#D1A054] rounded-tr-full rounded-tl-3xl">
        <tr className="*:p-3 *:text-base *:text-white *:font-semibold *:text-left">
          <th></th>
          <td className="text-xs md:text-base">Item Image</td>
          <td className="text-xs md:text-base">Item Name</td>
          <td className="text-xs md:text-base">Price</td>
          <td className="text-xs md:text-base">Action</td>
          <td className="text-xs md:text-base">Action</td>
        </tr>
      </tbody>
      <tbody className="divide-y">
        {/* row 1 */}
        {items.map((item, i) => {
          return (
            <tr key={i} className="*:p-3">
              <th className="text-xs md:text-base">{i + 1}</th>

              <td className="text-base">
                <img src={item?.image} alt="" className="size-8 md:size-16 object-cover"/>
              </td>
              <td className="text-xs md:text-base">{item?.name}</td>
              <td className="text-xs md:text-base">${item?.price}</td>
              <td><Link to={`/dashboard/updateitem/${item._id}`}>
                <button className="btn bg-[#D1A054] hover:bg-[#D1A054]"><FaEdit className="text-white text-sm md:text-2xl"/></button>
              </Link></td>
              <td><button onClick={() => handleDelete(item._id)} className="btn btn-error"><MdDeleteOutline className="text-white text-sm md:text-2xl"/></button></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ManageTable;
