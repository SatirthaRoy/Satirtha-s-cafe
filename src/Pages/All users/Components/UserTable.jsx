import React from 'react'
import useGetUsers from '../../../hooks/useGetUsers';
import { MdDeleteOutline } from 'react-icons/md';
import useAxios from '../../../hooks/useAxios';
import Swal from 'sweetalert2';
import { FaUsers } from 'react-icons/fa';

const UserTable = ({users}) => {
  const myAxios = useAxios();
  const [, refetch] = useGetUsers();

  const handleClick = (id) => {
    Swal.fire({
      title: "Do You Want to Delete the user?",
      text: "You wont be able to revert it.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!"
    }).then((result) => {
      if (result.isConfirmed) {
        myAxios.delete(`/users?id=${id}`)
        .then(res => {
          if(res.data.deletedCount) {
            refetch();
          }
        })
      }
    });
  }

  const makeAdmin = (id) => {
    Swal.fire({
      title: "Do You Want to make the user ADMIN?",
      text: "You wont be able to revert it.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes!"
    }).then((result) => {
      if (result.isConfirmed) {
        myAxios.patch(`/users/${id}`)
        .then(res => {
          console.log(res.data);
          refetch();
        })
      }
    });
  }

  return (
    <table className="w-full rounded-tr-3xl rounded-tl-3xl">
        {/* head */}
        <thead className="bg-[#D1A054] rounded-tr-full rounded-tl-3xl">
          <tr className="*:p-3 *:text-base *:text-white *:font-semibold *:text-left">
            <th></th>
            <th>Name</th>
            <th>email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {users.map((item, i) => {
            return (
              <tr className="*:p-3">
                <th>
                  {i+1}
                </th>
                
                <td className="text-base">
                  {item?.name}
                </td>
                <td>{item?.email}</td>
                <td className="text-base">{item?.role ? "ADMIN" : <button onClick={() => makeAdmin(item?._id)} className="btn bg-[#D1A054] hover:bg-[#D1A054]"><FaUsers className="text-white text-2xl"/></button>}</td>
                <td>
                  <button onClick={() => handleClick(item._id)} className="btn btn-error"><MdDeleteOutline className="text-white text-2xl"/></button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
  )
}

export default UserTable