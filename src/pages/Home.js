import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteEmployeeAsyncThunk,
  fetchEmployeeDataAsyncThunk,
} from "../store/slice/employeeSlice";
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

import { Link } from "react-router-dom";
import Modal from "../component/Modal";

export default function Home() {
  const dispatch = useDispatch();
  const { employeesData, isLoading } = useSelector((state) => state.app);


  /* For Modal*/
  const [showModal, setShowModal] = useState(false);
  const [employeeIdToDelete, setEmployeeIdToDelete] = useState(null);

  function openModal(employeeId) {
    setEmployeeIdToDelete(employeeId);
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
    setEmployeeIdToDelete(null);
  }

  function confirmActionModal() {
    console.log("Employee with ID deleted successfully.", employeeIdToDelete);
    dispatch(deleteEmployeeAsyncThunk(employeeIdToDelete));
    setShowModal(false);
  }

  useEffect(() => {
    dispatch(fetchEmployeeDataAsyncThunk());
  }, []);

 
  return (
    <>
      <div className="container mx-auto p-10">
        <div className="flex flex-wrap   justify-center gap-10">
          {employeesData.map((employee) => (
            <div
              key={employee?.id}
              className=" linearGradient rounded-lg border  shadow-md bg-gray-800 border-gray-700 min-w-[420px]"
            >
              <div className="flex flex-col items-center py-4">
                <div className="w-full flex justify-end px-4">
                  <p className="flex items-center text-gray-400">
                    <span
                      className={`${
                        employee?.status === "active"
                          ? "bg-green-500"
                          : "bg-red-500 "
                      } inline-block w-3 h-3 rounded-full mr-2`}
                    ></span>
                    {employee?.status}
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
                  <Link
                    to={`/update/${employee?.id}`}
                    className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-400  border  border-gray-300 rounded-lg hover:border-orange-700 hover:text-orange-700"
                  >
                    <FiEdit3 className="mr-2" />
                    Edit
                  </Link>
                  <button
                    type="button"
                    className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-400  rounded-lg border border-gray-300 hover:border-red-400 hover:text-red-400 "
                    onClick={() => {
                      openModal(employee?.id);
                    }}
                  >
                    <FiTrash2 className="mr-2" /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        open={showModal}
        onClose={closeModal}
        userId={employeeIdToDelete}
        confirmAction={confirmActionModal}
      />
    </>
  );
}
