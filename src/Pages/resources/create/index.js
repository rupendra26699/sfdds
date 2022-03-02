import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../Components/common/Navbar";
import Sidenav from "../../../Components/common/Sidebar";
import leftArrow from "../../../Assets/images/left-arrow.png";
import Input from "../../../Components/common/Input";
import SelectBox from "../../../Components/common/SelectBox";
import DateInput from "../../../Components/common/DateInput";
import "react-sliding-pane/dist/react-sliding-pane.css";
import FileBrowser from "../../../Components/common/FileBrowser";
import Skillmodal from "../../../Components/Modals/SkillSet";
import CustomModal from "../../../Components/common/CustomModal";
import AddCertifications from "../../../Components/Modals/AddCertifications";

const ResourceForm = () => {
	const history = useNavigate();
	const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);
	const [certificateModal, setCertificateModal] = useState(false);

	const initialForm = {
		first_name: {
			name: "first_name",
			value: "",
			errorMsg: null,
			required: true,
			placeholder: "Enter First Name",
		},
		middle_name: {
			name: "middle_name",
			value: "",
			errorMsg: null,
			required: false,
			placeholder: "Enter Middle Name",
		},
		last_name: {
			name: "last_name",
			value: "",
			errorMsg: null,
			required: true,
			placeholder: "Enter Last Name",
		},
		employee_id: {
			name: "employee_id",
			value: "",
			errorMsg: null,
			required: true,
			placeholder: "Enter Employee ID",
		},
		department_name: {
			name: "department_name",
			value: "",
			errorMsg: null,
			required: true,
			placeholder: "Select Department",
			options: [
				{ label: "UI", value: "UI" },
				{ label: "BACKEND", value: "BACKEND" },
			],
		},
		reporting_to: {
			name: "reporting_to",
			value: "",
			errorMsg: null,
			required: true,
			placeholder: "Resource Manager",
			options: [
				{ label: "Subhash", value: "Subhash" },
				{ label: "Ratna", value: "Ratna" },
			],
		},
		employee_status: {
			name: "employee_status",
			value: "",
			errorMsg: null,
			required: true,
			placeholder: "Employee Status",
			options: [
				{ label: "ACTIVE", value: "ACTIVE" },
				{ label: "INACTIVE", value: "INACTIVE" },
			],
		},
		employee_type: {
			name: "employee_type",
			value: "",
			errorMsg: null,
			required: true,
			placeholder: "Employee Role",
			options: [
				{ label: "Fulltime Employee", value: "Fulltime Employee" },
				{ label: "Parttime Employee", value: "Parttime Employee" },
			],
		},
		role: {
			name: "role",
			value: "",
			errorMsg: null,
			required: true,
			placeholder: "Select Role",
			options: [
				{ label: "ACTIVE", value: "ACTIVE" },
				{ label: "INACTIVE", value: "INACTIVE" },
			],
		},
		education: {
			name: "education",
			value: "",
			errorMsg: null,
			required: true,
			placeholder: "Select Education",
			options: [
				{ label: "B.TECH", value: "B.TECH" },
				{ label: "M.TECH", value: "M.TECH" },
			],
		},
		joining_date: {
			name: "joining_date",
			value: "",
			errorMsg: null,
			required: true,
			placeholder: "DD/MMM/YYYY",
		},
		end_date: {
			name: "end_date",
			value: "",
			placeholder: "DD/MMM/YYYY",
			errorMsg: null,
			required: false,
			disabled: true,
		},
		email: {
			name: "email",
			value: "",
			errorMsg: null,
			required: true,
			placeholder: "Enter Email Address",
		},
		phone_num: {
			name: "phone_num",
			value: "",
			errorMsg: null,
			required: false,
			placeholder: "Enter Phone Number",
		},
		location: {
			name: "location",
			value: "",
			errorMsg: null,
			required: true,
			placeholder: "Select City",
			options: [
				{ label: "Noida", value: "Noida" },
				{ label: "Kolkata", value: "Kolkata" },
				{ label: "Jaipur", value: "Jaipur" },
			],
		},
		designation: {
			name: "designation",
			value: "",
			errorMsg: null,
			required: true,
			placeholder: "Enter Designation",
			options: [
				{ label: "Project Manager", value: "Project Manager" },
				{ label: "Team Lead", value: "Team Lead" },
			],
		},
		expTimeOfJoining_select_year: {
			name: "expTimeOfJoining_select_year",
			value: "",
			errorMsg: null,
			required: true,
			placeholder: "Select Year",
			options: [
				{ label: "0", value: "0" },
				{ label: "1", value: "1" },
				{ label: "2", value: "2" },
				{ label: "3", value: "3" },
				{ label: "4", value: "4" },
				{ label: "5", value: "5" },
				{ label: "6", value: "6" },
				{ label: "7", value: "7" },
				{ label: "8", value: "8" },
				{ label: "9", value: "9" },
				{ label: "10", value: "10" },
			],
		},
		expTimeOfJoining_select_month: {
			name: "expTimeOfJoining_select_month",
			value: "",
			errorMsg: null,
			required: true,
			placeholder: "Select Month",
			options: [
				{ label: "0", value: "0" },
				{ label: "1", value: "1" },
				{ label: "2", value: "2" },
				{ label: "3", value: "3" },
				{ label: "4", value: "4" },
				{ label: "5", value: "5" },
				{ label: "6", value: "6" },
				{ label: "7", value: "7" },
				{ label: "8", value: "8" },
				{ label: "9", value: "9" },
				{ label: "10", value: "10" },
				{ label: "11", value: "11" },
			],
		},
		expAsOnDate_select_year: {
			name: "expAsOnDate_select_year",
			value: "",
			errorMsg: null,
			required: true,
			placeholder: "Select Year",
			disabled: true,
			options: [
				{ label: "0", value: "0" },
				{ label: "1", value: "1" },
				{ label: "2", value: "2" },
				{ label: "3", value: "3" },
				{ label: "4", value: "4" },
				{ label: "5", value: "5" },
				{ label: "6", value: "6" },
				{ label: "7", value: "7" },
				{ label: "8", value: "8" },
				{ label: "9", value: "9" },
				{ label: "10", value: "10" },
			],
		},
		expAsOnDate_select_month: {
			name: "expAsOnDate_select_month",
			value: "",
			errorMsg: null,
			required: true,
			placeholder: "Select Month",
			disabled: true,
			options: [
				{ label: "0", value: "0" },
				{ label: "1", value: "1" },
				{ label: "2", value: "2" },
				{ label: "3", value: "3" },
				{ label: "4", value: "4" },
				{ label: "5", value: "5" },
				{ label: "6", value: "6" },
				{ label: "7", value: "7" },
				{ label: "8", value: "8" },
				{ label: "9", value: "9" },
				{ label: "10", value: "10" },
				{ label: "11", value: "11" },
			],
		},
		deployable: {
			name: "deployable",
			value: "",
			errorMsg: null,
			required: true,
			placeholder: "Deployable %",
		},
		ga: {
			name: "ga",
			value: "",
			errorMsg: null,
			required: true,
			placeholder: "Enter G&A %",
		},

		oh: {
			name: "oh",
			value: "",
			errorMsg: null,
			required: true,
			placeholder: "Enter OH %",
		},

		effective_date: {
			name: "effective_date",
			value: "",
			placeholder: "DD/MMM/YYYY",
			errorMsg: null,
			required: true,
		},

		upload_pic: {
			name: "upload_pic",
			value: "",
			errorMsg: null,
			required: true,
			placeholder: "No file chosen",
		},
		upload_resume: {
			name: "upload_resume",
			value: "",
			errorMsg: null,
			required: true,
			placeholder: "No file chosen",
		},

		// date_of_birth: {
		//   name: "date_of_birth",
		//   value: "",
		//   errorMsg: null,
		//   required: true,
		//   placeholder: "DD/MMM/YYYY",
		// },
		// local_address: {
		//   name: "local_address",
		//   value: "",
		//   errorMsg: null,
		//   required: true,
		//   placeholder: "Local Address",
		// },
		// permanent_address: {
		//   name: "permanent_address",
		//   value: "",
		//   errorMsg: null,
		//   required: true,
		//   placeholder: "Permanent Address",
		// },
		// resource_type: {
		//   name: "resource_type",
		//   value: "",
		//   errorMsg: null,
		//   required: true,
		//   placeholder: "Fulltime Employee",
		// },

		// resource_status: {
		//   name: "resource_status",
		//   value: "",
		//   errorMsg: null,
		//   required: true,
		//   placeholder: "Select Resource Status",
		//   options: [
		//     { label: "ACTIVE", value: "ACTIVE" },
		//     { label: "INACTIVE", value: "INACTIVE" },
		//   ],
		// },
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
	};
	return (
		<div className="main">
			<Navbar />
			<div className="flex justify-between">
				<Sidenav />
				<div className="w-[100%] mx-7 my-5">
					<div
						className="w-[290px] h-[48px] mb-3"
						onClick={() => history("/employee")}>
						<span className="hover:cursor-pointer">
							<img className="float-left w-[35px] mr-3" src={leftArrow} />
							<h1 className="font-extrabold text-[24px]">
								Create New Employee
							</h1>
						</span>
					</div>
					<h2 className="text-lg font-primary font-bold text-left mb-5">
						General Information
					</h2>
					<div className="form-wrapper">
						<div className="flex justify-between mb-1">
							<div className="w-[100%] mr-5">
								<label className="text-left font-primary font-semibold text-textlight text-sm">
									First Name*
								</label>
								<Input
									type="text"
									name={formData.first_name.name}
									value={formData.first_name.value}
									formState={{ formData, setFormData }}
									submitError={formData.first_name.errorMsg}
								/>
							</div>
							<div className="w-[100%] mr-5">
								<label className="text-left font-primary font-semibold text-textlight text-sm">
									Middle Name
								</label>
								<Input
									type="text"
									name={formData.middle_name.name}
									value={formData.middle_name.value}
									formState={{ formData, setFormData }}
									submitError={formData.middle_name.errorMsg}
								/>
							</div>
							<div className="w-[100%] mr-5">
								<label className="text-left font-primary font-semibold text-textlight text-sm">
									Last Name*
								</label>
								<Input
									type="text"
									name={formData.last_name.name}
									value={formData.last_name.value}
									formState={{ formData, setFormData }}
									submitError={formData.last_name.errorMsg}
								/>
							</div>
						</div>
						<div className="flex justify-between mb-1">
							<div className="w-[100%] mr-5">
								<label className="text-left font-primary font-semibold text-textlight text-sm">
									Employee ID*
								</label>
								<Input
									type="number"
									name={formData.employee_id.name}
									value={formData.employee_id.value}
									formState={{ formData, setFormData }}
									submitError={formData.employee_id.errorMsg}
								/>
							</div>
							<div className="w-[100%] mr-5">
								<label className="text-left font-primary font-semibold text-textlight text-sm">
									Department Name
								</label>
								{/* <AutoComplete
                  name={formData.department_name.name}
                  suggestions={["UI", "Backend"]}
                  submitError={formData.department_name.errorMsg}
                  formState={{ formData, setFormData }}
                /> */}
								<SelectBox
									name={formData.department_name.name}
									submitError={formData.department_name.errorMsg}
									formState={{ formData, setFormData }}
								/>
							</div>
							<div className="w-[100%] mr-5">
								<label className="text-left font-primary font-semibold text-textlight text-sm">
									Reporting To*
								</label>
								{/* <AutoComplete
                  name={formData.reporting_to.name}
                  suggestions={["subhash", "Ratna"]}
                  formState={{ formData, setFormData }}
                  submitError={formData.reporting_to.errorMsg}
                /> */}
								<SelectBox
									name={formData.reporting_to.name}
									submitError={formData.reporting_to.errorMsg}
									formState={{ formData, setFormData }}
								/>
							</div>
						</div>
						<div className="flex justify-between mb-1">
							<div className="w-[100%] mr-5">
								<label className="text-left font-primary font-semibold text-textlight text-sm">
									Employee Status*
								</label>
								<SelectBox
									name={formData.employee_status.name}
									submitError={formData.employee_status.errorMsg}
									formState={{ formData, setFormData }}
								/>
							</div>
							<div className="w-[100%] mr-5">
								<label className="text-left font-primary font-semibold text-textlight text-sm">
									Employee Type*
								</label>
								<SelectBox
									name={formData.employee_type.name}
									submitError={formData.employee_type.errorMsg}
									formState={{ formData, setFormData }}
								/>
							</div>
							<div className="w-[100%] mr-5">
								<label className="text-left font-primary font-semibold text-textlight text-sm">
									Role*
								</label>
								<SelectBox
									name={formData.role.name}
									submitError={formData.role.errorMsg}
									formState={{ formData, setFormData }}
								/>
							</div>
						</div>
						<div className="flex justify-between mb-1">
							<div className="w-[100%] mr-5">
								<label className="text-left font-primary font-semibold text-textlight text-sm">
									Education*
								</label>
								{/* <AutoComplete
                  name={formData.education.name}
                  suggestions={["Btech", "Mtech", "P.hd"]}
                  submitError={formData.education.errorMsg}
                  formState={{ formData, setFormData }}
                /> */}
								<SelectBox
									name={formData.education.name}
									submitError={formData.education.errorMsg}
									formState={{ formData, setFormData }}
								/>
							</div>
							<div className="w-[100%] mr-5">
								<label className="text-left font-primary font-semibold text-textlight text-sm">
									Joining Date*
								</label>
								<DateInput
									type="date"
									name={formData.joining_date.name}
									value={formData.joining_date.value}
									formState={{ formData, setFormData }}
									submitError={formData.joining_date.errorMsg}
								/>
							</div>
							<div className="w-[100%] mr-5">
								<label className="text-left font-primary font-semibold text-textlight text-sm">
									End Date
								</label>
								<DateInput
									type="date"
									name={formData.end_date.name}
									value={formData.end_date.value}
									formState={{ formData, setFormData }}
								/>
							</div>
						</div>
						<div className="flex justify-between mb-1">
							<div className="w-[100%] mr-5">
								<label className="text-left font-primary font-semibold text-textlight text-sm">
									Email Address*
								</label>
								<Input
									type="email"
									name={formData.email.name}
									value={formData.email.value}
									formState={{ formData, setFormData }}
									submitError={formData.email.errorMsg}
								/>
							</div>
							<div className="w-[100%] mr-5">
								<label className="text-left font-primary font-semibold text-textlight text-sm">
									Phone Number
								</label>
								<Input
									type="number"
									name={formData.phone_num.name}
									value={formData.phone_num.value}
									formState={{ formData, setFormData }}
								/>
							</div>
							<div className="w-[100%] mr-5">
								<label className="text-left font-primary font-semibold text-textlight text-sm">
									Location*
								</label>
								<SelectBox
									name={formData.location.name}
									submitError={formData.location.errorMsg}
									formState={{ formData, setFormData }}
								/>
							</div>
						</div>

						{/* <div className="w-[100%] mr-5">
              <label className="text-left font-primary font-semibold text-textlight text-sm">
                Date of Birth*
              </label>
              <DateInput
                name={formData.date_of_birth.name}
                value={formData.date_of_birth.value}
                formState={{ formData, setFormData }}
                submitError={formData.date_of_birth.errorMsg}
              />
            </div> */}
						<div className="flex justify-between mb-1">
							<div className="w-[100%] mr-5">
								<label className="text-left font-primary font-semibold text-textlight text-sm">
									Designation*
								</label>
								{/* <AutoComplete
                  name={formData.designation.name}
                  suggestions={["Manager", "Trainee"]}
                  formState={{ formData, setFormData }}
                  submitError={formData.designation.errorMsg}
                /> */}
								<SelectBox
									name={formData.designation.name}
									submitError={formData.designation.errorMsg}
									formState={{ formData, setFormData }}
								/>
							</div>
							<div className="w-[100%] mr-3">
								<label className="text-left font-primary font-semibold text-textlight text-sm mb-3">
									Total experience at the time of joining*
								</label>
								<div className="flex justify-between w-[100%]">
									<SelectBox
										name={formData.expTimeOfJoining_select_year.name}
										formState={{ formData, setFormData }}
									/>
									<SelectBox
										name={formData.expTimeOfJoining_select_month.name}
										formState={{ formData, setFormData }}
									/>
								</div>
							</div>
							<div className="w-[100%] mr-3">
								<label className="text-left font-primary font-semibold text-textlight text-sm mb-3">
									Total experience as on Date*
								</label>
								<div className="flex justify-between w-[100%]">
									<SelectBox
										name={formData.expAsOnDate_select_year.name}
										formState={{ formData, setFormData }}
									/>
									<SelectBox
										name={formData.expAsOnDate_select_month.name}
										formState={{ formData, setFormData }}
									/>
								</div>
							</div>
						</div>
						{/* <div className="flex justify-between mb-5">
              <div className="w-[100%] mr-5">
                <label className="text-left font-primary font-semibold text-textlight text-sm">
                  Local Address*
                </label>
                <Input
                  type="text"
                  name={formData.local_address.name}
                  value={formData.local_address.value}
                  formState={{ formData, setFormData }}
                  submitError={formData.local_address.errorMsg}
                />
              </div>
              <div className="w-[100%]">
                <label className="text-left font-primary font-semibold text-textlight text-sm">
                  Permanent Address
                </label>
                <Input
                  type="text"
                  name={formData.permanent_address.name}
                  value={formData.permanent_address.value}
                  formState={{ formData, setFormData }}
                  submitError={formData.permanent_address.errorMsg}
                />
              </div>
            </div>
            <div className="flex justify-between mb-5">
              <div className="w-[100%] mr-5">
                <label className="text-left font-primary font-semibold text-textlight text-sm">
                  Resource Type*
                </label>
                <AutoComplete
                  name={formData.resource_type.name}
                  suggestions={["DBS", "Maxlife"]}
                  submitError={formData.resource_type.errorMsg}
                  formState={{ formData, setFormData }}
                />
              </div>
            </div>
            <div className="flex justify-between mb-5"></div>
            <div className="flex justify-between mb-5">
              <div className="w-[100%] mr-5">
                <label className="text-left font-primary font-semibold text-textlight text-sm">
                  Resource Status*
                </label>
                <SelectBox
                  name={formData.resource_status.name}
                  submitError={formData.resource_status.errorMsg}
                  formState={{ formData, setFormData }}
                />
              </div>
            </div> */}

						<div className="justify-between items-center mb-1 mr-5 pr-2">
							<h2 className="text-lg font-primary font-bold text-left mb-3">
								Allocation Type
							</h2>
							<div className="flex justify-between mb-3">
								<div className="flex w-[100%] mr-5 items-center">
									<label className="text-left font-primary font-semibold text-textlight text-sm w-40 mr-2">
										Deployable %*
									</label>
									<Input
										type="number"
										name={formData.deployable.name}
										value={formData.deployable.value}
										formState={{ formData, setFormData }}
										submitError={formData.deployable.errorMsg}
									/>
								</div>
								<div className="flex w-[75%] mr-5 items-center">
									<label className="text-left font-primary font-semibold text-textlight text-sm mr-3">
										G&A%*
									</label>
									<Input
										type="number"
										name={formData.ga.name}
										value={formData.ga.value}
										formState={{ formData, setFormData }}
										submitError={formData.ga.errorMsg}
									/>
								</div>
								<div className="flex w-[75%] mr-5 items-center">
									<label className="text-left font-primary font-semibold text-textlight text-sm mr-3">
										OH%*
									</label>
									<Input
										type="number"
										name={formData.oh.name}
										value={formData.oh.value}
										formState={{ formData, setFormData }}
										submitError={formData.oh.errorMsg}
									/>
								</div>
								<div className="flex w-[100%] items-center">
									<label className="text-left font-primary font-semibold text-textlight text-sm w-48 mr-2">
										Effective Date*
									</label>
									<DateInput
										name={formData.effective_date.name}
										value={formData.effective_date.value}
										formState={{ formData, setFormData }}
										submitError={formData.effective_date.errorMsg}
									/>
								</div>
							</div>
						</div>

						{/* <div className="half-input mb-5">
              <label className="text-left font-primary font-semibold text-textlight text-sm">Allocation Type</label>
              <div className="radio-input">
                <input
                  name="allocation"
                  type="radio"
                  value={formData.deployable.value}
                ></input>
                {formData.deployable.placeholder} &nbsp; &nbsp;
                <input
                  name="allocation"
                  type="radio"
                  value={formData.non_deployable.value}
                ></input>
                {formData.non_deployable.placeholder}
              </div>
            </div> */}

						<div className="flex justify-between mb-3">
							<div className="w-[100%] mr-5">
								<label className="text-left font-primary font-semibold text-textlight text-sm">
									Upload Picture*
								</label>
								<FileBrowser
									id="upload"
									label="fileuploader"
									span="file-chosen"
									accept="image/jpeg,image/jpg,image/png"
									text="Size of image should not be more than 2Mb.You may only upload
                  JPG, JPEG, PNG"
								/>
							</div>
							<div className="w-[100%]">
								<label className="text-left font-primary font-semibold text-textlight text-sm">
									Upload Resume*
								</label>

								<FileBrowser
									id="uploadresume"
									label="fileuploader"
									span="file-chosen"
									text="Size of image should not be more than 2Mb."
									accept="image/jpeg,image/jpg,image/png,application/pdf,application/msword,text/plain"
								/>
							</div>
						</div>
						<div className="flex justify-between p-5 items-center border-2 border-inputComponentBorderColor mb-2">
							<h2 className="text-lg font-primary font-bold text-left mb-2">
								Skill set
							</h2>
							<button
								onClick={() => {
									setIsSkillModalOpen(true);
								}}
								type="button"
								className="bg-blackButton border-0 text-white rounded-[22px]  px-5 py-2 mr-5 font-primary font-normal text-sm">
								Add
							</button>
						</div>
						<div className="flex justify-between p-5 items-center border-2 border-inputComponentBorderColor mb-5">
							<h2 className="text-lg font-primary font-bold text-left mb-2">
								Certification
							</h2>
							<button
								type="button"
								className="bg-blackButton border-0 text-white rounded-[22px]  px-5 py-2 mr-5 font-primary font-normal text-sm"
								onClick={() => setCertificateModal(!certificateModal)}>
								Add
							</button>
						</div>
					</div>
					<div className="float-right">
						<button
							type="button"
							className="bg-white border-blackButton border rounded-[50px] px-5 py-2  font-primary font-normal text-sm mr-5"
							onClick={() => {
								history("/employee");
							}}>
							Cancel
						</button>
						<button
							type="button"
							className="bg-blackButton border-0 text-white rounded-[22px]  px-5 py-2 mr-5 font-primary font-normal text-sm"
							onClick={() => handleSubmit()}>
							Save
						</button>
					</div>
				</div>
			</div>
			<CustomModal
				show={isSkillModalOpen}
				size="w-[40%] h-[90%]"
				onClose={() => setIsSkillModalOpen(false)}
				modalComponent={
					<Skillmodal onClose={() => setIsSkillModalOpen(false)} />
				}
				title="Add Skill Set"
			/>

			<CustomModal
				show={certificateModal}
				size="w-[40%] h-[90%]"
				onClose={() => setCertificateModal(false)}
				modalComponent={
					<AddCertifications onClose={() => setCertificateModal(false)} />
				}
				title="Add Certification"
			/>
		</div>
	);
};
export default ResourceForm;
