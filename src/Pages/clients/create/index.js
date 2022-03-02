import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../Components/common/Navbar";
import Sidenav from "../../../Components/common/Sidebar";
import leftArrow from "../../../Assets/images/left-arrow.png";
import Input from "../../../Components/common/NewInput";
import SelectBox from "../../../Components/common/newSelect";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "react-query";
import apiCaller from "../../../Axios/apiCaller";
import { CREATE_ACCOUNT_URL } from "../../../Constants/apiConstants";

const schema = yup.object({
  // TODO validate userName for it either being a valid email or an employeeId
  account_name: yup.string().required("This field is required "),
  account_id: yup.string().required("This field is required"),
  country: yup.string().required("This field is required"),
  account_manager: yup.string().required("This field is required"),
});

const ClientsForm = () => {
  const history = useNavigate();

  const addAccount = (data) => {
    return apiCaller.post(CREATE_ACCOUNT_URL, data);
  };

  const { mutate } = useMutation(addAccount);

  const { register, handleSubmit, formState, control } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitSuccess = (data, event) => {
    //handle form submission ;
    console.log("in success onSubmit");
    mutate(data);
    history("/clients");
  };
  const { errors } = formState;

  const country = [
    { label: "India", value: "India" },
    { label: "US", value: "US" },
    { label: "Russia", value: "Russia" },
  ];
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

              <h1 className="font-extrabold text-[24px]">Create New Account</h1>
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
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ClientsForm;
