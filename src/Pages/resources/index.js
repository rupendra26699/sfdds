import React, { useMemo, useState } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/common/Navbar";
import SearchInput from "../../Components/common/SearchInput";
import Sidenav from "../../Components/common/Sidebar";
import EmployeeSearch from "../../Components/Modals/EmployeeSearch";
import close from "../../Assets/images/close.svg";
import TableAction from "../../Components/common/TableAction";
import Table from "../../Components/common/Table";

const Employee = () => {
	const history = useNavigate();
	const [isPaneOpen, setIsPanOpen] = useState(false);

	const handleView = () => {
		//handle view page redirection
		history("/View")
	};
	const handleEdit = () => {
		//handle edit page redirection
	};
	const handleDelete = () => {
		//handle delete action
	};
	const actions = [
		{ label: "View", handleClick: handleView },
		{ label: "Edit", handleClick: handleEdit },
		{ label: "Delete", handleClick: handleDelete },
	];

	const columns = useMemo(
		() => [
			{
				Header: "Name",
				accessor: "name",
			},
			{
				Header: "Employee ID",
				accessor: "employeeId",
			},
			{
				Header: "Primary Skills",
				accessor: "primarySkills",
			},
			{
				Header: "Email Address",
				accessor: "email",
			},
			{
				Header: "Action",
				accessor: "action",
				Cell: (props) => (
					<TableAction actionItems={actions} />
				),
				disableSortBy: true,
			},
		],
		[]
	);

	const data = useMemo(
		() => [
			{
				name: "Soumen Dey",
				employeeId: "E25236",
				primarySkills: "Design",
				email: "soumen.dey@optimizeitsystems.com",
			},
			{
				name: "Soumen Dey",
				employeeId: "E25236",
				primarySkills: "Design",
				email: "soumen.dey@optimizeitsystems.com",
			},
			{
				name: "Soumen Dey",
				employeeId: "E25236",
				primarySkills: "Design",
				email: "soumen.dey@optimizeitsystems.com",
			},
			{
				name: "Soumen Dey",
				employeeId: "E25236",
				primarySkills: "Design",
				email: "soumen.dey@optimizeitsystems.com",
			},
			{
				name: "Soumen Dey",
				employeeId: "E25236",
				primarySkills: "Design",
				email: "soumen.dey@optimizeitsystems.com",
			},
			{
				name: "Soumen Dey",
				employeeId: "E25236",
				primarySkills: "Design",
				email: "soumen.dey@optimizeitsystems.com",
			},
			{
				name: "Soumen Dey",
				employeeId: "E25236",
				primarySkills: "Design",
				email: "soumen.dey@optimizeitsystems.com",
			},
			{
				name: "Soumen Dey",
				employeeId: "E25236",
				primarySkills: "Design",
				email: "soumen.dey@optimizeitsystems.com",
			},
			{
				name: "Soumen Dey",
				employeeId: "E25236",
				primarySkills: "Design",
				email: "soumen.dey@optimizeitsystems.com",
			},
			{
				name: "Soumen Dey",
				employeeId: "E25236",
				primarySkills: "Design",
				email: "soumen.dey@optimizeitsystems.com",
			},
			{
				name: "Soumen Dey",
				employeeId: "E25236",
				primarySkills: "Design",
				email: "soumen.dey@optimizeitsystems.com",
			},
			{
				name: "Soumen Dey",
				employeeId: "E25236",
				primarySkills: "Design",
				email: "soumen.dey@optimizeitsystems.com",
			},
			{
				name: "Soumen Dey",
				employeeId: "E25236",
				primarySkills: "Design",
				email: "soumen.dey@optimizeitsystems.com",
			},
			{
				name: "Soumen Dey",
				employeeId: "E25236",
				primarySkills: "Design",
				email: "soumen.dey@optimizeitsystems.com",
			},
			{
				name: "Soumen Dey",
				employeeId: "E25236",
				primarySkills: "Design",
				email: "soumen.dey@optimizeitsystems.com",
			},
		],
		[]
	);

	return (
		<div className="main">
			<Navbar />
			<div className="flex justify-between">
				<Sidenav />
				<div className="w-[100%] mx-7 my-5">
					<div className="flex justify-between mb-5">
						<div className="font-extrabold text-[24px]">
							<h1 onClick={() => history("/login")}>Employees</h1>
						</div>
						<div className="flex justify-between">
							<button
								type="button"
								className="bg-blackButton h-[36px] text-white px-5 py-2 rounded-[21px] text-sm mr-5"
								onClick={() => history("/create-employee")}>
								Create New Employee
							</button>
							<SearchInput
								onClick={() => setIsPanOpen(true)}
								placeholder="Search Employee"
							/>
						</div>
					</div>
					<Table columns={columns} data={data} />
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
				title="Employee Search"
				isOpen={isPaneOpen}
				onRequestClose={() => {
					setIsPanOpen(false);
					document.body.style.overflow = "auto";
				}}>
				<EmployeeSearch />
			</SlidingPane>
		</div>
	);
};

export default Employee;
