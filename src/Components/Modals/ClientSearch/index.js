import React, { useEffect, useState } from "react";
import AutoComplete from "../../common/AutoComplete";
import Input from "../../common/Input";
import SelectBox from "../../common/SelectBox";

const ClientSearch = (props) => {
  const initialForm = {
   account_name: {
      name: "account_name",
      value: "",
      errorMsg: null,
      placeholder: "Enter Account Name",
    },
    account_id: {
      name: "account_id",
      value: "",
      errorMsg: null,
      placeholder: "Enter Account ID",
    },
    country: {
      name: "country",
      value: "",
      errorMsg: null,
      placeholder: "Select Country",
      options: [
        { label: "India", value: "India" },
        { label: "USA", value: "USA" },
        { label: "Nepal", value: "Nepal" },
      ],
    },
  };
  const [formData, setFormData] = useState(initialForm);

  const handleSubmit = () => {};

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  return (
    <>
      <div className="login-form">
        <div className="relative my-5">
          <label className="text-left font-primary font-bold text-sm  text-textlight">
            Account Name
          </label>
          <AutoComplete
            name={formData.account_name.name}
            submitError={formData.account_name.errorMsg}
            formState={{ formData, setFormData }}
            suggestions={["swagat", "subhash"]}
            
          />
        </div>
        <div className="relative my-5">
          <label className="text-left font-primary font-bold text-sm  text-textlight">
            Account ID
          </label>
          <Input
            type="text"
            name={formData.account_id.name}
            value={formData.account_id.value}
            formState={{ formData, setFormData }}
            maxLength="10"
            submitError={formData.account_id.errorMsg}
          />
        </div>
        
        <div className="relative my-5">
          <label className="text-left font-primary font-bold text-sm  text-textlight">
            Country
          </label>
          <SelectBox
            name={formData.country.name}
            submitError={formData.country.errorMsg}
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
          Search Account
        </button>
      </div>
    </>
  );
};

export default ClientSearch;
