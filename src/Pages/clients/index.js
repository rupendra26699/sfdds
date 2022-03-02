import React, { useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Navbar from "../../Components/common/Navbar";
import Sidenav from "../../Components/common/Sidebar";
import SearchInput from "../../Components/common/SearchInput";
import "react-sliding-pane/dist/react-sliding-pane.css";
import TableAction from "../../Components/common/TableAction";
import Table from "../../Components/common/Table";
import ClientSearch from "../../Components/Modals/ClientSearch";
import close from "../../Assets/images/close.svg";
import SlidingPane from "react-sliding-pane";
import apiQueries from "../../Axios/apiActions";
import LoadingIndicator from "../../Components/common/newLoadingIndicator";
import { useQuery } from "react-query";
import { FETCH_ALL_ACCOUNTS_QUERY_KEY } from "../../Constants/apiConstants";

const Clients = () => {
  console.log("in accounts printing apiQueries");
  console.log(JSON.stringify(apiQueries));
  const { isLoading, isError, data, error } = useQuery(
    FETCH_ALL_ACCOUNTS_QUERY_KEY,
    apiQueries[FETCH_ALL_ACCOUNTS_QUERY_KEY]
  );
  const history = useNavigate();
  const [isPaneOpen, setIsPanOpen] = useState(false);
  const { id } = useParams();
  const handleView = () => {
    //handle view page redirection
  };
  const handleEdit = () => {
    //handle edit page redirection

    history(`/editAccount/${id}`);
  };

  const actions = [
    { label: "View", handleClick: handleView },
    { label: "Edit", handleClick: handleEdit },
  ];

  const columns = useMemo(
    () => [
      {
        Header: "Account Name",
        accessor: "account_name",
      },
      {
        Header: "Account ID",
        accessor: "account_id",
      },
      {
        Header: "Country",
        accessor: "country",
      },
      {
        Header: "Account Manager",
        accessor: "account_manager",
      },
      {
        Header: "Action",
        accessor: "action",
        Cell: (props) => <TableAction actionItems={actions} />,
        disableSortBy: true,
      },
    ],
    []
  );

  let tabledata = [];
  {
    data?.data.map((data) => {
      // console.log(data);
      tabledata.push(data);
    });
    console.log(tabledata);
  }

  

  return (
    <div className="main">
      <Navbar />
      <div className="flex justify-between">
        <Sidenav />
        <div className="w-[100%] mx-7 my-5">
          <div className="flex justify-between">
            <div className="font-extrabold text-[24px]">
              <h1 onClick={() => history("/login")}>Accounts</h1>
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                className="bg-blackButton h-[36px] text-white px-5 py-2 rounded-[21px] text-sm mr-5"
                onClick={() => history("/client-form")}
              >
                Create New Account
              </button>
              <SearchInput
                onClick={() => setIsPanOpen(true)}
                placeholder="Search Account"
              />
            </div>
          </div>
          <LoadingIndicator isOpen={!!isLoading} />
          <Table columns={columns} data={tabledata.reverse()} />
        </div>
      </div>
      <SlidingPane
        className="w-35"
        overlayClassName="z-[999]"
        closeIcon={<img src={close} className="w-4" />}
        title="Account Search"
        isOpen={isPaneOpen}
        onRequestClose={() => {
          setIsPanOpen(false);
          document.body.style.overflow = "auto";
        }}
      >
        <ClientSearch />
      </SlidingPane>
    </div>
  );
};

export default Clients;
