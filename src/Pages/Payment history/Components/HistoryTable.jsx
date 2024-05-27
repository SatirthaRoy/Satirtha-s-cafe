import React from 'react'

const HistoryTable = ({history}) => {
  return (
    <table className="w-full rounded-tr-3xl rounded-tl-3xl">
        {/* head */}
        <thead className="bg-[#D1A054] rounded-tr-full rounded-tl-3xl">
          <tr className="*:p-3 *:text-base *:text-white *:font-semibold *:text-left">
            <th>Email</th>
            <th>Transaction Id</th>
            <th>Price</th>
            <th>Payment Date</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {history.map((item, i) => {
            return (
              <tr key={i} className="*:p-3">
                <td>
                  {item?.email}
                </td>
                <td className="text-base">
                {item?.transactionId}
                </td>
                <td className="text-base">${item?.totalPrice}</td>
                <td>
                  {item?.date.split('T')[0]}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
  )
}

export default HistoryTable