// TransactionHistory.jsx

import React from "react";
import PropTypes from "prop-types";

const TransactionHistory = ({ transaction }) => {
  return (
    <div className="flex items-center justify-center">
      <table className="min-w-7xl text-center text-sm/6 whitespace-nowrap bg-amber-50 shadow-xl/50">
        <thead className="bg-gray-300 ">
          <tr className="text-xl">
            <th className="py-2 px-4 ">Contact</th>
            <th className="py-2 px-4 ">Company</th>
            <th className="py-2 px-4 ">Country</th>
          </tr>
        </thead>
        <tbody className="">
          {transaction.map(({ id, type, amount, currency }) => (
            <tr
              className={`divide-x-2 divide-gray-300 ${
                type === "withdrawal" ? "bg-gray-200" : ""
              }`}
              key={id}
            >
              <td className="py-2 px-4">{type}</td>
              <td className="py-2 px-4">{amount}</td>
              <td className="py-2 px-4">{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  transaction: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
