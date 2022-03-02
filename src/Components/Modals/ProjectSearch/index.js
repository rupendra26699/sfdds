import React, { useEffect, useState } from "react";

import AutoComplete from "../../common/AutoComplete";
import Input from "../../common/Input";
import SelectBox from "../../common/SelectBox";

const ProjectSearch = (props) => {
  const initialForm = {
    short_name: {
      name: "short_name",
      value: "",
      errorMsg: null,
      placeholder: "Enter Short Project Name",
    },
    project_id: {
      name: "project_id",
      value: "",
      errorMsg: null,
      placeholder: "Enter Project ID",
    },
    project_manager: {
      name: "project_manager",
      value: "",
      errorMsg: null,
      placeholder: "Select Project Manager",
    },
    client_name: {
      name: "client_name",
      value: "",
      errorMsg: null,
      placeholder: "Select Client Name",
    },
    billability_status: {
      name: "billability_status",
      value: "",
      errorMsg: null,
      placeholder: "Select Billability Status",
      options: [],
    },
    pricing_model: {
      name: "pricing_model",
      value: "",
      errorMsg: null,
      placeholder: "Select Pricing Model",
      options: [],
    },
    project_status: {
      name: "project_status",
      value: "",
      errorMsg: null,
      placeholder: "Select Project Status",
      options: [],
    },
  };
  const [formData, setFormData] = useState(initialForm);

  const handleSubmit = () => {
    // TODO to be implemented
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  return (
    <>
      <div className="login-form">
        <div className="relative my-5">
          <label className="text-left font-primary font-bold text-sm  text-textlight">
            Short Project Name
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
        <div className="relative my-5">
          <label className="text-left font-primary font-bold text-sm  text-textlight">
            Project ID
          </label>
          <Input
            type="text"
            name={formData.project_id.name}
            value={formData.project_id.value}
            formState={{ formData, setFormData }}
            maxLength="10"
            submitError={formData.project_id.errorMsg}
          />
        </div>
        <div className="relative my-5">
          <label className="text-left font-primary font-bold text-sm  text-textlight">
            Project Manager
          </label>
          <AutoComplete
            name={formData.project_manager.name}
            submitError={formData.project_manager.errorMsg}
            formState={{ formData, setFormData }}
            suggestions={["Subhash Mishra"]}
            submitError={formData.project_manager.errorMsg}
          />
        </div>
        <div className="relative my-5">
          <label className="text-left font-primary font-bold text-sm  text-textlight">
            Client Name
          </label>
          <AutoComplete
            name={formData.client_name.name}
            submitError={formData.client_name.errorMsg}
            formState={{ formData, setFormData }}
            suggestions={["DBS", "Maxlife"]}
            submitError={formData.client_name.errorMsg}
          />
        </div>
        <div className="relative my-5">
          <label className="text-left font-primary font-bold text-sm  text-textlight">
            Billability Status
          </label>
          <SelectBox
            name={formData.billability_status.name}
            submitError={formData.billability_status.errorMsg}
            formState={{ formData, setFormData }}
          />
        </div>
        <div className="relative my-5">
          <label className="text-left font-primary font-bold text-sm  text-textlight">
            Pricing Model
          </label>
          <SelectBox
            name={formData.pricing_model.name}
            submitError={formData.pricing_model.errorMsg}
            formState={{ formData, setFormData }}
          />
        </div>
        <div className="relative my-5">
          <label className="text-left font-primary font-bold text-sm  text-textlight">
            Project Status
          </label>
          <SelectBox
            name={formData.project_status.name}
            submitError={formData.project_status.errorMsg}
            formState={{ formData, setFormData }}
          />
        </div>
      </div>
      <div className="float-right">
        <button
          type="button"
          className="bg-white border-blackButton border rounded-[50px] px-5 py-2  font-primary font-normal text-sm mr-5"
          onClick={() => {
            setFormData(initialForm);
          }}
        >
          Clear Filter
        </button>
        <button
          type="button"
          className="bg-blackButton border-0 text-white rounded-[22px]  px-5 py-2 mr-5 font-primary font-normal text-sm"
          onClick={() => handleSubmit()}
        >
          Search Project
        </button>
      </div>
    </>
  );
};

export default ProjectSearch;
