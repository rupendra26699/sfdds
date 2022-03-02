import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../Components/common/Navbar";
import Sidenav from "../../../Components/common/Sidebar";
import leftArrow from "../../../Assets/images/left-arrow.png";
import Input from "../../../Components/common/Input";
import SelectBox from "../../../Components/common/SelectBox";
import DateInput from "../../../Components/common/DateInput";

const ProjectsForm = () => {
  const history = useNavigate();

  const initialForm = {
    project_id: {
      name: "project_id",
      value: "",
      errorMsg: null,
      disabled: true,
    },
    short_name: {
      name: "short_name",
      value: "",
      errorMsg: null,
      required: true,
      placeholder: "Enter Short Project Name",
    },
    full_name: {
      name: "full_name",
      value: "",
      errorMsg: null,
      required: true,
      placeholder: "Enter Full Project Name",
    },
    project_category: {
      name: "project_category",
      value: "",
      errorMsg: null,
      required: true,
      placeholder: "Select Project Manager",
      options: [
        { label: "Architecture", value: "Architecture" },
        { label: "Design", value: "Design" },
      ],
    },
    project_type: {
      name: "project_type",
      value: "",
      errorMsg: null,
      required: true,
      placeholder: "Select Project Type",
      options: [
        { label: "Internal", value: "Internal" },
        { label: "External", value: "External" },
      ],
    },
    billability_status: {
      name: "billability_status",
      value: "",
      errorMsg: null,
      required: true,
      placeholder: "Select Billability Status",
      options: [
        { label: "Billable", value: "Billable" },
        { label: "Non-Billable", value: "external" },
      ],
    },
    pricing_model: {
      name: "pricing_model",
      value: "",
      errorMsg: null,
      required: true,
      placeholder: "Select Pricing Model",
      options: [
        { label: "Basic", value: "Basic" },
        { label: "Pro", value: "Pro" },
      ],
    },
    account_name: {
      name: "account_name",
      value: "",
      errorMsg: null,
      required: true,
      placeholder: "Select Account Name",
      options: [
        { label: "TIDC", value: "TIDC" },
        { label: "LIMBUS", value: "LIMBUS" },
      ],
    },
    project_manager: {
      name: "project_manager",
      value: "",
      errorMsg: null,
      required: true,
      placeholder: "Select Project Manager",
      options: [
        { label: "Subhash", value: "Subhash" },
        { label: "Ratna", value: "Ratna" },
      ],
    },
    planned_start_date: {
      name: "planned_start_date",
      value: "",
      placeholder: "DD/MMM/YYYY",
      errorMsg: null,
      required: true,
    },
    planned_end_date: {
      name: "planned_end_date",
      value: "",
      placeholder: "DD/MMM/YYYY",
      errorMsg: null,
      required: true,
    },
    actual_start_date: {
      name: "actual_start_date",
      value: "",
      placeholder: "DD/MMM/YYYY",
      errorMsg: null,
      required: true,
    },
    actual_end_date: {
      name: "actual_end_date",
      value: "",
      placeholder: "DD/MMM/YYYY",
      errorMsg: null,
      required: true,
    },

    project_status: {
      name: "project_status",
      value: "",
      errorMsg: null,
      required: true,
      placeholder: "Select Project Status",
      options: [
        { label: "Active", value: "Active" },
        { label: "Inactive", value: "Inactive" },
      ],
    },
    reference_link: {
      name: "reference_link",
      value: "",
      errorMsg: null,
      required: true,
      placeholder: "Enter Reference",
    },
    domain: {
      name: "domain",
      value: "",
      errorMsg: null,
      required: true,
      placeholder: "Select Domain",
      options: [
        { label: "UI", value: "UI" },
        { label: "Backend", value: "Backend" },
      ],
    },
    technology_stack: {
      name: "technology_stack",
      value: "",
      errorMsg: null,
      required: true,
      placeholder: "Select Technology Stack",
      options: [
        { label: "MySql", value: "MySql" },
        { label: "Vs Code", value: "Vs Code" },
      ],
    },
  };

  const [formData, setFormData] = useState(initialForm);

  const handleSubmit = () => {
    const formDataCopy = { ...formData };
    let isError = false;
    Object.keys(formDataCopy).every((inputName) => {
      if (
        formDataCopy[inputName].required &&
        formDataCopy[inputName].value === ""
      ) {
        formDataCopy[inputName].errorMsg = "This field is required";
        isError = true;
        return false;
      } else return true;
    });

    if (isError) {
      setFormData(formDataCopy);
      return;
    }
    // form submit code
  };

  return (
    <div className="main">
      <Navbar />
      <div className="flex justify-between">
        <Sidenav />
        <div className="w-[100%] mx-7 my-5">
          <div
            className="w-[290px] h-[48px] mb-3"
            onClick={() => history("/projects")}
          >
            <span className="hover:cursor-pointer">
              <img className="float-left w-[35px] mr-3" src={leftArrow} />
              <h1 className="font-extrabold text-[24px]">Create New Project</h1>
            </span>
          </div>
          <h2 className="text-lg font-primary font-bold text-left mb-3">
            Project Information
          </h2>
          <div>
            <div className="flex justify-between mb-1">
              <div className="flex w-[100%] justify-between  mr-5">
                <div className="w-[100%]">
                  <label className="text-left font-primary font-semibold text-textlight text-sm">
                    Project ID
                  </label>
                  <Input
                    type="text"
                    name={formData.project_id.name}
                    value={formData.project_id.value}
                    formState={{ formData, setFormData }}
                  />
                </div>
              </div>
              <div className="w-[100%] ">
                <label className="text-left font-primary font-semibold text-textlight text-sm">
                  Short Project Name*
                </label>
                <Input
                  type="text"
                  name={formData.short_name.name}
                  value={formData.short_name.value}
                  formState={{ formData, setFormData }}
                  maxLength="10"
                  submitError={formData.short_name.errorMsg}
                />
              </div>
            </div>
            <div className="w-[49%] mr-5">
              <label className="text-left font-primary font-semibold text-textlight text-sm">
                Full Project Name*
              </label>
              <Input
                type="text"
                name={formData.full_name.name}
                value={formData.full_name.value}
                formState={{ formData, setFormData }}
                maxLength="10"
                submitError={formData.full_name.errorMsg}
              />
            </div>
            <div className="flex justify-between mb-1">
              <div className="w-[100%] mr-5">
                <label className="text-left font-primary font-semibold text-textlight text-sm">
                  Project Category*
                </label>
                <SelectBox
                  name={formData.project_category.name}
                  submitError={formData.project_category.errorMsg}
                  formState={{ formData, setFormData }}
                />
              </div>
              <div className="w-[100%]">
                <label className="text-left font-primary font-semibold text-textlight text-sm">
                  Project Type*
                </label>
                <SelectBox
                  name={formData.project_type.name}
                  submitError={formData.project_type.errorMsg}
                  formState={{ formData, setFormData }}
                />
              </div>
            </div>
            <div className="flex justify-between mb-1">
              <div className="w-[100%] mr-5">
                <label className="text-left font-primary font-semibold text-textlight text-sm">
                  Billability Status*
                </label>
                <SelectBox
                  name={formData.billability_status.name}
                  submitError={formData.billability_status.errorMsg}
                  formState={{ formData, setFormData }}
                />
              </div>
              <div className="w-[100%] ">
                <label className="text-left font-primary font-semibold text-textlight text-sm">
                  Pricing Model*
                </label>
                <SelectBox
                  name={formData.pricing_model.name}
                  submitError={formData.pricing_model.errorMsg}
                  formState={{ formData, setFormData }}
                />
              </div>
            </div>
            <div className="flex justify-between mb-1">
              <div className="w-[100%] mr-5">
                <label className="text-left font-primary font-semibold text-textlight text-sm">
                  Account Name*
                </label>
                <SelectBox
                  name={formData.account_name.name}
                  submitError={formData.account_name.errorMsg}
                  formState={{ formData, setFormData }}
                />
              </div>
              <div className="w-[100%]">
                <label className="text-left font-primary font-semibold text-textlight text-sm">
                  Project Manager*
                </label>
                <SelectBox
                  name={formData.project_manager.name}
                  submitError={formData.project_manager.errorMsg}
                  formState={{ formData, setFormData }}
                />
              </div>
            </div>
            <div className="flex justify-between mb-1">
              <div className="w-[100%] mr-5">
                <label className="text-left font-primary font-semibold text-textlight text-sm">
                  Planned Start Date*
                </label>
                <DateInput
                  name={formData.planned_start_date.name}
                  value={formData.planned_start_date.value}
                  formState={{ formData, setFormData }}
                  submitError={formData.planned_start_date.errorMsg}
                />
              </div>
              <div className="w-[100%]">
                <label className="text-left font-primary font-semibold text-textlight text-sm">
                  Planned End Date*
                </label>
                <DateInput
                  name={formData.planned_end_date.name}
                  value={formData.planned_end_date.value}
                  formState={{ formData, setFormData }}
                  submitError={formData.planned_end_date.errorMsg}
                />
              </div>
            </div>
            <div className="flex justify-between mb-1">
              <div className="w-[100%] mr-5">
                <label className="text-left font-primary font-semibold text-textlight text-sm">
                  Actual Start Date
                </label>
                <DateInput
                  name={formData.actual_start_date.name}
                  value={formData.actual_start_date.value}
                  formState={{ formData, setFormData }}
                  submitError={formData.actual_start_date.errorMsg}
                />
              </div>
              <div className="w-[100%]">
                <label className="text-left font-primary font-semibold text-textlight text-sm">
                  Actual End Date
                </label>
                <DateInput
                  name={formData.actual_end_date.name}
                  value={formData.actual_end_date.value}
                  formState={{ formData, setFormData }}
                  submitError={formData.actual_end_date.errorMsg}
                />
              </div>
            </div>
            <div className="flex justify-between mb-1">
              <div className="w-[100%] mr-5">
                <label className="text-left font-primary font-semibold text-textlight text-sm">
                  Project Status*
                </label>
                <SelectBox
                  name={formData.project_status.name}
                  submitError={formData.project_status.errorMsg}
                  formState={{ formData, setFormData }}
                />
              </div>
              <div className="w-[100%] ">
                <label className="text-left font-primary font-semibold text-textlight text-sm">
                  Reference Link
                </label>
                <Input
                  type="text"
                  name={formData.reference_link.name}
                  value={formData.reference_link.value}
                  formState={{ formData, setFormData }}
                  maxLength="10"
                  submitError={formData.reference_link.errorMsg}
                />
              </div>
            </div>
            <div className="flex justify-between mb-3">
              <div className="w-[100%] mr-5">
                <label className="text-left font-primary font-semibold text-textlight text-sm">
                  Domain*
                </label>
                <SelectBox
                  name={formData.domain.name}
                  submitError={formData.domain.errorMsg}
                  formState={{ formData, setFormData }}
                />
              </div>
              <div className="w-[100%] ">
                <label className="text-left font-primary font-semibold text-textlight text-sm">
                  Technology Stack*
                </label>
                <SelectBox
                  name={formData.technology_stack.name}
                  submitError={formData.technology_stack.errorMsg}
                  formState={{ formData, setFormData }}
                />
              </div>
            </div>
          </div>
          <div className="float-right">
            <button
              type="button"
              className="bg-white border-blackButton border rounded-[50px] px-5 py-2 font-primary font-normal text-sm mr-5"
              onClick={() => {
                history("/projects");
              }}
            >
              Cancel
            </button>
            <button
              type="button"
              className="bg-blackButton border-0 text-white rounded-[22px]  px-5 py-2 mr-5 font-primary font-normal text-sm"
              onClick={() => handleSubmit()}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsForm;
