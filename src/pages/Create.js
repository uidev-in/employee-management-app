import React, {  useEffect, useState } from "react";
import Input from "../component/Form/Input";
import SelectInput from "../component/Form/SelectInput";
import RadioInput from "../component/Form/RadioInput";
import { useDispatch, useSelector } from "react-redux";
import {
  createEmployeeAsyncThunk,
} from "../store/slice/employeeSlice";
import { departmentOptions, designationOptions } from "../utils/constant";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [optionSelected, setOptionSelected] = useState("");

  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    mobile: "",
    date_of_joining: "",
    department: "",
    designation: "",
    salary: "",
    status: "in_active",
  });

  const getInputData = (event) => {
    return setInputData({
      ...inputData,
      [event.target.name]: event.target.value,
    });
  };

  const onRadioOptionChange = (e) => {
    const newStatus = e.target.value;
    setInputData({ ...inputData, status: newStatus });
  };

  const handleSubmit = () => {
    dispatch(createEmployeeAsyncThunk(inputData));
    navigate("/");
  };

  





  return (
    <>
      <section className="py-1">
        <div className="w-full lg:w-10/12 px-4 mx-auto mt-6">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-black mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">
                  New Employee Details
                </h6>
                <button
                  className="lg:px-5 py-2  focus:ring-4 focus:ring-primary-300  font-normal rounded-lg text-sm px-4    text-white bg-orange-700  border  border-orange-700  hover:border-orange-700 hover:bg-transparent hover:text-orange-500"
                  type="button"
                  onClick={handleSubmit}
                >
                  Add Employee
                </button>
              </div>
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0 bg-primary-black">
              <form>
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 px-4 mt-3">
                    <Input
                      type="text"
                      label="Full Name"
                      placeholder="Enter full name..."
                      name="name"
                      onChange={getInputData}
                    />
                  </div>
                  <div className="w-full lg:w-6/12 px-4 mt-3">
                    <Input
                      type="email"
                      label="Email Address"
                      placeholder="Enter email address..."
                      name="email"
                      onChange={getInputData}
                    />
                  </div>
                  <div className="w-full lg:w-6/12 px-4 mt-3">
                    <Input
                      type="number"
                      label="Mobile No."
                      placeholder="Enter mobile number..."
                      name="mobile"
                      onChange={getInputData}
                    />
                  </div>
                  <div className="w-full lg:w-6/12 px-4 mt-3">
                    <Input
                      type="date"
                      label="Date Of Joining"
                      placeholder=""
                      name="date_of_joining"
                      onChange={getInputData}
                    />
                  </div>
                  <div className="w-full lg:w-6/12 px-4 mt-3">
                    <SelectInput
                      label="Department"
                      name="department"
                      options={departmentOptions}
                      onChange={(event) => {
                       
                        setOptionSelected(event.target.value);
                        setInputData({
                          ...inputData,
                          department: event.target.value,
                        });
                      }}
                    />
                  </div>

                  <div className="w-full lg:w-6/12 px-4 mt-3">
                    <SelectInput
                      label="Designation"
                      name="designation"
                      options={
                        optionSelected ? designationOptions[optionSelected] : []
                      }
                      onChange={(event) => {
                        setInputData({
                          ...inputData,
                          designation: event.target.value,
                        });
                      }}
                    />
                  </div>

                  <div className="w-full lg:w-6/12 px-4 mt-3">
                    <Input
                      type="number"
                      label="Salary"
                      placeholder="Enter eSalary..."
                      name="salary"
                      onChange={getInputData}
                    />
                  </div>
                  <div className="w-full lg:w-6/12 px-4 mt-3">
                    <h3 className="block mb-2 text-md font-medium">Status</h3>
                    <div className="flex ">
                      <RadioInput
                        heading="Status"
                        label="Active"
                        name="status"
                        value="active"
                        checked={inputData.status === "active"}
                        onChange={onRadioOptionChange}
                      />

                      <RadioInput
                        heading="Status"
                        label="InActive"
                        name="status"
                        value="in_active"
                        checked={inputData.status === "in_active"}
                        onChange={onRadioOptionChange}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
