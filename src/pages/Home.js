import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployeeDataAsyncThunk } from "../store/slice/employeeSlice";
import {
  FiEdit3,
  FiTrash2,
  FiAtSign,
  FiPhone,
  FiCalendar,
  FiBriefcase,
  FiAward,
  FiDollarSign,
} from "react-icons/fi";

export default function Home() {
  const dispatch = useDispatch();
  const { employeesData, isLoading } = useSelector((state) => state.app);

  console.log("Employee Data", employeesData);

  useEffect(() => {
    dispatch(fetchEmployeeDataAsyncThunk());
  }, []);

  return (
    <>
      <div className=" mx-auto max-w-screen-xl p-5">
        <div class="flex flex-wrap justify-items-center gap-3">
          {employeesData.map((employee) => (
            <div className=" linearGradient rounded-lg border  shadow-md bg-gray-800 border-gray-700 min-w-[300px]">
              <div className="flex flex-col items-center py-4">
                <div className="w-full flex justify-end px-4">
                  <p className="flex items-center text-gray-400">
                    <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
                    Active
                  </p>
                </div>
                <img
                  className="mb-3 w-24 h-24 rounded-full shadow-lg"
                  src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                  alt="Bonnie image"
                />
                <h3 className="mb-1 text-xl font-medium">{employee?.name}</h3>
                <span className="text-sm text-gray-400">
                  {employee?.designation}
                </span>

                <div className="p-5 grid grid-rows-3 grid-flow-col gap-4 mt-3 auto-rows-max text-gray-500 text-sm">
                  <div className="w-full  flex flex-row justify-center gap-3 place-items-center">
                    <span className="flex-start">
                      <FiAtSign />
                    </span>
                    <span className="flex-1">{employee?.email}</span>
                  </div>
                  <div className="w-full  flex flex-row justify-center gap-3 place-items-center">
                    <span>
                      <FiPhone />
                    </span>
                    <span className="flex-1">+91 {employee?.mobile}</span>
                  </div>
                  <div className="w-full  flex flex-row justify-center gap-3 place-items-center">
                    <span>
                      <FiCalendar />
                    </span>
                    <span className="flex-1">{employee?.date_of_joining}</span>
                  </div>
                  <div className="w-full  flex flex-row justify-center gap-3 place-items-center">
                    <span>
                      <FiAward />
                    </span>
                    <span className="flex-1">emp_{employee?.id}</span>
                  </div>
                  <div className="w-full  flex flex-row justify-center gap-3 place-items-center">
                    <span>
                      <FiBriefcase />
                    </span>
                    <span className="flex-1">{employee?.department}</span>
                  </div>
                  <div className="w-full  flex flex-row justify-center gap-3 place-items-center">
                    <span>
                      <FiDollarSign />
                    </span>
                    <span className="flex-1">{employee?.salary}</span>
                  </div>
                </div>

                <div className="flex mt-4 space-x-3 mb-5">
                  <a
                    href="#"
                    className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-400  border  border-gray-300 rounded-lg hover:border-orange-700 hover:text-orange-700"
                  >
                    <FiEdit3 className="mr-2" />
                    Edit
                  </a>
                  <a
                    href="#"
                    class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-400  rounded-lg border border-gray-300 hover:border-red-400 hover:text-red-400 "
                  >
                    <FiTrash2 className="mr-2" /> Delete
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
