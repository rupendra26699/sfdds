import React from "react";

import Navbar from "../../../Components/common/Navbar";
import Sidenav from "../../../Components/common/Sidebar";
import leftArrow from "../../../Assets/images/left-arrow.png";
import Input from "../../../Components/common/NewInput";
import SelectBox from "../../../Components/common/newSelect";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditClientForm = () => {
  const { handleSubmit, formState, register } = useForm({
    defaultValues: {
      account_name: "TIDC",
      account_id: "2034",
      country: "India",
      account_manager: "Subhash",
    },
  });
  const history = useNavigate();
  const { id } = useParams();
  const country = [
    { label: "India", value: "India" },
    { label: "US", value: "US" },
    { label: "Russia", value: "Russia" },
  ];

  const { errors } = formState;

  const onSubmitSuccess = (data, event) => {
    console.log("in success onSubmit");
    console.log(data);
  };

  return (
    <div className="main">
      <Navbar />
      <div className="flex justify-between">
        <Sidenav />
        <form
          onSubmit={handleSubmit(onSubmitSuccess)}
          className="w-[100%] mx-7 my-5"
        >
          <div
            className="w-[290px] h-[48px] mb-3"
            onClick={() => history("/clients")}
          >
            <span>
              <img className="float-left w-[35px] mr-3" src={leftArrow} />

              <h1 className="font-extrabold text-[24px]">Edit Account</h1>
            </span>
          </div>
          <div className="form-wrapper">
            <div className="flex justify-between mb-5">
              <div className="w-[100%] mr-5">
                <label className="text-left font-primary font-semibold text-textlight text-sm">
                  Account Name*
                </label>
                <Input
                  type="text"
                  {...register("account_name")}
                  errors={errors}
                />
              </div>
              <div className="w-[100%] mr-5">
                <label className="text-left font-primary font-semibold text-textlight text-sm">
                  Account ID
                </label>
                <Input
                  type="number"
                  {...register("account_id")}
                  errors={errors}
                />
              </div>
            </div>
            <div className="flex justify-between mb-5">
              <div className="w-[100%] mr-5">
                <label className="text-left font-primary font-semibold text-textlight text-sm">
                  Country*
                </label>
                <SelectBox
                  type="text"
                  {...register("country")}
                  value={country}
                  errors={errors}
                />
              </div>
              <div className="w-[100%] mr-5">
                <label className="text-left font-primary font-semibold text-textlight text-sm">
                  Account Manager
                </label>
                <Input
                  type="text"
                  {...register("account_manager")}
                  errors={errors}
                />
              </div>
            </div>
            <div className="float-right">
              <button
                type="button"
                className="bg-white border-blackButton border rounded-[50px] px-5 py-2  font-primary font-normal text-sm mr-5"
                onClick={() => {
                  history("/clients");
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blackButton border-0 text-white rounded-[22px]  px-5 py-2 mr-5 font-primary font-normal text-sm"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditClientForm;
