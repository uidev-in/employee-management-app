import React, { useState } from "react";
import Input from "../component/Form/Input";
import SelectInput from "../component/Form/SelectInput";

const departmentOptions = [
  { label: "Marketing", value: "marketing" },
  { label: "Sales", value: "sales" },
  { label: "Human Resources", value: "human_resources" },
  { label: "Information Technology", value: "information_technology" },
  { label: "Accounts", value: "accounts" },
  { label: "Operations", value: "operations" },
];

const designationOptions = {
  sales: [
    { label: "Manager", value: "manager" },
    { label: "Team Lead", value: "team_lead" },
    { label: "Sales Excecutive", value: "sales_executive" },
  ],
  marketing: [
    { label: "SEO Specialist", value: "seo_specialist" },
    { label: "Marketing Executive", value: "marketing_executive" },
    { label: "Manager", value: "manager" },
    { label: "", value: "" },
  ],
  information_technology: [
    { label: "Frontend Engineer", value: "frontend_engineer" },
    { label: "Backend Developer", value: "backend_engineer" },
    { label: "Operations", value: "operations" },
    { label: "Full Stack Developer", value: "full_stack_developer" },
    { label: "UI/UX Designer", value: "ui_ux_designer" },
    { label: "Senior Frontend Developer", value: "seninor_frontend_Developer" },
    { label: "Senior Backend Developer", value: "senior_backend_developer" },
    { label: "Manager", value: "manager" },

  ],
  human_resources: [
    { label: "HR Executive", value: "hr_executive" },
    { label: "HR Assistant", value: "hr_assistant" },
    { label: "Trainee HR", value: "hr_trainee" },
  ],
  operations: [
    { label: "Operations Manager", value: "ops_manager" },
    { label: "Operations Executive", value: "ops_executive" },
    { label: "Operations Analyst", value: "ops_analyst" },
  ],
  accounts: [
    { label: "Senior Accountant", value: "senior_accountant" },
    { label: "Accountant", value: "accountant" },
    { label: "CA", value: "ca" },
  ],
};

export default function Create() {
  const [optionSelected, setOptionSelected] = useState("");

  console.log(optionSelected);

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
                  className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
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
                      onChange={(e) => console.log(e.target.value)}
                    />
                  </div>
                  <div className="w-full lg:w-6/12 px-4 mt-3">
                    <Input
                      type="email"
                      label="Email Address"
                      placeholder="Enter email address..."
                      name="email"
                      onChange={(e) => console.log(e.target.value)}
                    />
                  </div>
                  <div className="w-full lg:w-6/12 px-4 mt-3">
                    <Input
                      type="number"
                      label="Mobile No."
                      placeholder="Enter mobile number..."
                      name="mobile"
                      onChange={(e) => console.log(e.target.value)}
                    />
                  </div>
                  <div className="w-full lg:w-6/12 px-4 mt-3">
                    <Input
                      type="date"
                      label="Date Of Joining"
                      placeholder=""
                      name="email"
                      onChange={(e) => console.log(e.target.value)}
                    />
                  </div>
                  <div className="w-full lg:w-6/12 px-4 mt-3">
                    <SelectInput
                      label="Department"
                      options={departmentOptions}
                      onChange={(event) =>
                        setOptionSelected(event.target.value)
                      }
                    />
                  </div>
                  

                  <div className="w-full lg:w-6/12 px-4 mt-3">
                    {optionSelected ? (
                      <SelectInput
                        label="Designation"
                        options={designationOptions[optionSelected]}
                        onChange={(event) =>
                          setOptionSelected(event.target.value)
                        }
                      />
                    ) : null}
                  </div>
                  
                  <div className="w-full lg:w-6/12 px-4 mt-3">
                    <Input
                      type="number"
                      label="Salary"
                      placeholder="Enter eSalary..."
                      name="salary"
                      onChange={(e) => console.log(e.target.value)}
                    />
                  </div>
                  <div className="w-full lg:w-6/12 px-4 mt-3">
                    <Input
                      type="text"
                      label="Status"
                      placeholder="Active / Disable"
                      name="status"
                      onChange={(e) => console.log(e.target.value)}
                    />
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
