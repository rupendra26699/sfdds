import React, { useEffect, useState } from "react";

import AutoComplete from "../../common/AutoComplete";
import Input from "../../common/Input";

const EmployeeSearch = (props) => {
  const initialForm = {
    skill_set: {
      name: "skill_set",
      value: "",
      errorMsg: null,
      placeholder: "Design",
    },
    attribute: {
      name: "attribute",
      value: "",
      errorMsg: null,
      placeholder: "Attributes",
    },
    project_name: {
      name: "project_name",
      value: "",
      errorMsg: null,
      placeholder: "Enter Project Name",
    },
    first_name: {
      name: "first_name",
      value: "",
      errorMsg: null,
      placeholder: "Enter First Name",
    },
    last_name: {
      name: "last_name",
      value: "",
      errorMsg: null,
      placeholder: "Enter Last Name",
      options: [],
    },
    employee_id: {
      name: "employee_id",
      value: "",
      errorMsg: null,
      placeholder: "Enter Employee Id",
      options: [],
    },
    email: {
      name: "email",
      value: "",
      errorMsg: null,
      placeholder: "Enter email",
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
            Skill Set
          </label>
          <AutoComplete
            name={formData.skill_set.name}
            value={formData.skill_set.value}
            formState={{ formData, setFormData }}
            suggestions={["Design", "coding"]}
            submitError={formData.skill_set.errorMsg}
          />
        </div>
        <div className="relative my-5">
          <label className="text-left font-primary font-bold text-sm text-textlight">
            Attribute
          </label>
          <Input
            name={formData.attribute.name}
            value={formData.attribute.value}
            formState={{ formData, setFormData }}
            submitError={formData.attribute.errorMsg}
          />
        </div>
        <div className="relative my-5">
          <label className="text-left font-primary font-bold text-sm text-textlight">
            Project Name
          </label>
          <AutoComplete
            name={formData.project_name.name}
            submitError={formData.project_name.errorMsg}
            formState={{ formData, setFormData }}
            suggestions={["Skill Portal"]}
            submitError={formData.project_name.errorMsg}
          />
        </div>
        <div className="relative my-5">
          <label className="text-left font-primary font-bold text-sm text-textlight">
            First Name
          </label>
          <AutoComplete
            name={formData.first_name.name}
            submitError={formData.first_name.errorMsg}
            formState={{ formData, setFormData }}
            suggestions={["Lalit", "subhash"]}
            submitError={formData.first_name.errorMsg}
          />
        </div>
        <div className="relative my-5">
          <label className="text-left font-primary font-bold text-sm text-textlight">
            Last Name
          </label>
          <AutoComplete
            name={formData.last_name.name}
            submitError={formData.last_name.errorMsg}
            formState={{ formData, setFormData }}
            suggestions={["Mishra", "kumar"]}
          />
        </div>
        <div className="relative my-5">
          <label className="text-left font-primary font-bold text-sm text-textlight">
            Employee ID
          </label>
          <AutoComplete
            name={formData.employee_id.name}
            submitError={formData.employee_id.errorMsg}
            formState={{ formData, setFormData }}
            suggestions={["12345", "68798"]}
          />
        </div>
        <div className="relative my-5">
          <label className="text-left font-primary font-bold text-sm text-textlight">
            Email Address
          </label>
          <Input
            type="email"
            name={formData.email.name}
            value={formData.email.value}
            submitError={formData.email.errorMsg}
            formState={{ formData, setFormData }}
          />
        </div>
      </div>
      <div className="float-right">
        <button
          type="button"
          className="bg-white border-blackButton border rounded-[50px] px-5 py-2 mr-5 font-primary font-normal text-sm"
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
          Search Employee
        </button>
      </div>
    </>
  );
};

export default EmployeeSearch;
