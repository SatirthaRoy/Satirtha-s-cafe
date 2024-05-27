import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";
import useCart from "../../../hooks/useCart";

const CartTable = ({ cart }) => {

  const [, refetch] = useCart();

  const myAxios = useAxios();

  const handleClick = (id) => {
    Swal.fire({
      title: "Do You Want to Cancel the Order?",
      text: "You wont be able to revert it.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!"
    }).then((result) => {
      if (result.isConfirmed) {
        myAxios.delete(`/carts?id=${id}`)
        .then(res => {
          if(res.data.deletedCount) {
            refetch();
          }
        })
      }
    });
  }

  return (
    // <div className="overflow-x-auto">
      <table className="w-full rounded-tr-3xl rounded-tl-3xl">
        {/* head */}
        <thead className="bg-[#D1A054] rounded-tr-full rounded-tl-3xl">
          <tr className="*:p-3 *:text-base *:text-white *:font-semibold *:text-left">
            <th></th>
            <th>Item image</th>
            <th>Item name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {cart.map((item, i) => {
            return (
              <tr key={i} className="*:p-3">
                <th>
                  {i+1}
                </th>
                <td>
                  <img
                    src={item?.image}
                    alt={item?.name}
                    className="size-12 rounded-2xl object-cover"
                  />
                </td>
                <td className="text-base">
                  {item?.name}
                </td>
                <td className="text-base">${item?.price}</td>
                <td>
                  <button onClick={() => handleClick(item._id)} className="btn btn-error"><MdDeleteOutline className="text-white text-2xl"/></button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    // </div>
  );
};

export default CartTable;
