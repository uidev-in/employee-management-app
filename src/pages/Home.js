import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployeeDataAsyncThunk } from "../store/slice/employeeSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { employeesData, isLoading } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(fetchEmployeeDataAsyncThunk());
  }, []);

  return (
    <>
      <div className="py-10">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500  dark:text-gray-400">
            <thead className="text-xs text-white uppercase bg-black dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Emp ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Full Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Contact
                </th>
                <th scope="col" className="px-6 py-3">
                  D.O.B
                </th>
                <th scope="col" className="px-6 py-3">
                  Department
                </th>
                <th scope="col" className="px-6 py-3">
                  Designation
                </th>
                <th scope="col" className="px-6 py-3">
                  D.O.J
                </th>
                <th scope="col" className="px-6 py-3">
                  Salary (LPA)
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Emp_1
                </th>
                <td className="px-6 py-4">Sandeep </td>
                <td className="px-6 py-4">sandy@weblly.in</td>
                <td className="px-6 py-4">7895641230</td>
                <td className="px-6 py-4">12/06/1995</td>
                <td className="px-6 py-4">IT</td>
                <td className="px-6 py-4">Frontend Developer</td>
                <td className="px-6 py-4">11/10/2020</td>
                <td className="px-6 py-4">1000000</td>
                <td className="px-6 py-4">Active</td>
                <td className="px-6 py-4"> E / D</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
