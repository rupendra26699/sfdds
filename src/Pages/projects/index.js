import React, { useMemo, useState } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/common/Navbar";
import SearchInput from "../../Components/common/SearchInput";
import Sidenav from "../../Components/common/Sidebar";
import ProjectSearch from "../../Components/Modals/ProjectSearch";
import close from "../../Assets/images/close.svg";
import TableAction from "../../Components/common/TableAction";
import Table from "../../Components/common/Table";
import apiQueries from "../../Axios/apiActions";
import LoadingIndicator from "../../Components/common/newLoadingIndicator";


import { useQuery } from "react-query";
import { FETCH_ALL_PROJECTS_QUERY_KEY } from "../../Constants/apiConstants";

const Projects = () => {
  console.log("in projects printing apiQueries")
  console.log(JSON.stringify(apiQueries))
  const { isLoading, isError, data, error } = useQuery(FETCH_ALL_PROJECTS_QUERY_KEY, apiQueries[FETCH_ALL_PROJECTS_QUERY_KEY])
  const history = useNavigate();
  const [isPaneOpen, setIsPanOpen] = useState(false);

  const handleView = () => {
    //handle view page redirection  
    history("/view-projects")
  };
  const handleEdit = () => {
    //handle edit page redirection
  };
  const actions = [
    { label: "View", handleClick: handleView },
    { label: "Edit", handleClick: handleEdit },
  ];

const columns = useMemo(
    () => [
      {
        Header: "Short Name",
        accessor: "shortName",
      },
      {
        Header: "Long Name",
        accessor: "longName",
      },
      {
        Header: "Project Manager Id",
        accessor: "projectManagerId",
      },
      {
        Header: "Planned Start Date",
        accessor: "plannedStartDate",
      },
{
        Header: "Actual Start Date",
        accessor: "actualStartDate",
      },
{
        Header: "Actual End Date",
        accessor: "actualEndDate",
      },
{
        Header: "Project Type",
        accessor: "projectType",
      },

      {
        Header: "Status",
        accessor: "status",
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

  console.log(`Fetch projects query data is`);
  console.log(data)
let data2 = [];
  {
    data?.data.map((data) => {
      // console.log(data);
      data2.push(data)
      // console.log(id.account_id);
      // console.log(id.account_name);
      // console.log(id.country);
      // console.log(id.account_manager);
    });
console.log(data2)

  }
  // TODO handle error case with a notification
  if (isError) return "Request for List of Projects Failed"

  return (
    <div>
      <Navbar />
      <div className="flex justify-between">
        <Sidenav />
        <div className="w-[100%] mx-7 my-5">
          <div className="flex justify-between mb-5">
            <div className="font-extrabold text-[24px]">
              <h1 onClick={() => history("/login")}>Projects</h1>
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                className="bg-blackButton text-white px-5 h-[36px] py-2 rounded-[21px] text-sm font-primary mr-5"
                onClick={() => history("/create-project")}
              >
                Create a New Project
              </button>
              <SearchInput
                placeholder="Search Projects"
                onClick={() => setIsPanOpen(true)}
              />
              <button
                type="button"
                className="bg-white border border-black w-[160px] h-[36px] font-primary text-black px-5 py-2 rounded-[21px] text-sm mr-5"
                onClick={() => history("/pending-approval")}
              >
                Pending Approval
              </button>
            </div>
          </div>
          <LoadingIndicator isOpen={!!isLoading} />
        {!isLoading &&  <Table columns={columns} data={data2} /> }
        </div>
      </div>
      <SlidingPane
        className="w-35"
        overlayClassName="z-[999]"
        closeIcon={
          <img src={close} className="w-4" />
          // <div className="close-btn">
          //   <object data={close} width="18" height="18" />
          // </div>
        }
        title="Project Search"
        isOpen={isPaneOpen}
        onRequestClose={() => {
          setIsPanOpen(false);
          document.body.style.overflow = "auto";
        }}
      >
        <ProjectSearch />
      </SlidingPane>
    </div>
  );
};

export default Projects;
