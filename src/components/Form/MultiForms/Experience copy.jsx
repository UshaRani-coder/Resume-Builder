import { useState } from 'react'
import { useForm } from 'react-hook-form'
// import FormStepper from "./FormStepper/FormStepper.jsx";
import { useDispatch } from 'react-redux'
import { setExperienceData } from '../../../reduxToolkit/FormDataSlice.jsx'

import DOMPurify from 'dompurify'
import { MdDelete } from 'react-icons/md'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './quill.css'

export const ExperienceTab = ({
  idRef,
  jobRole,
  companyName,
  startDate,
  endDate,
  expDescription,
  deleteExpData,
  // Link,
  // Description,
  // idRef,
  // HandleDeleteItem,
}) => {
  const sanitizedHtml = DOMPurify.sanitize(expDescription)

  return (
    <>
      {/* <div className="border border-gray-200 p-4 my-4"> */}

      <div className="rounded-lg border border-gray-400  w-[95%]  my-2 px-4 py-4">
        <div className="flex flex-row justify-between ">
          <h3 className="text-md font-semibold">
            {jobRole} at <span className="text-gray-600">{companyName}</span>
          </h3>
          <div className="flex flex-row justify-center ">
            <h3 className="text-md text-cyan-600 ">
              From {startDate} to {endDate}
            </h3>
            <MdDelete
              onClick={() => deleteExpData(idRef)}
              className=" cursor-pointer mt-1 ml-2 w-4 text-red-700"
            />
          </div>
        </div>
        <div className="py-2 max-w-[95%] ">
          <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
        </div>
      </div>
    </>
  )
}

const Experience = () => {
  const dispatch = useDispatch()
  const { register, handleSubmit, reset } = useForm()
  const [ExpDesc, setExpDes] = useState('')
  // const [successMsg, setSuccessMsg] = useState("");

  const [expData, setExpData] = useState([])

  function sumbitData(data) {
    data.description = ExpDesc
    let currData = [...expData, data]
    setExpData(currData)
    console.log(expData)
    // Dispatcher here
    dispatch(setExperienceData(currData))
    // setSuccessMsg("Data is updated.");
    setExpDes('')
    reset()
  }

  function deleteExpData(expID) {
    let currData = [...expData]
    currData.splice(expID, 1)
    setExpData(currData)
  }

  return (
    <div>
      {/* <div className="p-4 border-[#9333ea] border-2 shadow-[#9333ea] shadow-md h-auto w-[360px] md:w-[490px] lg:w-[550px] max-w-[590px]"> */}
      {/* <div className="p-4 border-[#9333ea] border-2 shadow-[#9333ea] shadow-md h-auto w-[85%] md:w-[440px] lg:w-[440px] max-w-[590px]"> */}
      {/* <div className="p-6  mt-[20px] w-[90%]  h-[100%]  lg:w-[95%] xl:h-[65%] xl:w-[100%] border-[#9333ea] border-2 shadow-[#9333ea] shadow-md"> */}
      <div className="p-6 mt-[20px] w-[350px]  md:w-auto md:max-w-[500px] h-[100%]  xl:h-[65%]  border-[#9333ea] border-2 shadow-[#9333ea] shadow-md">
        <h2 className="text-2xl font-semibold mb-3">Add Experience.</h2>
        <form
          className="flex flex-col md:flex-col "
          onSubmit={handleSubmit(sumbitData)}
        >
          {/* <div className="flex flex-row justify-between "> */}
          <div className="flex flex-col md:flex-row  justify-between  w-[100%]">
            <div className="flex flex-col w-[100%] md:w-[45%]">
              <label>Job Title</label>
              <input
                className="border my-2 bg-slate-100 p-1 border-purple-400 rounded-sm  "
                placeholder="Job Title"
                autoComplete="off"
                type="text"
                {...register('Job_Title', {
                  required: 'Required!',
                })}
              ></input>
            </div>
            <div className="w-[100%] md:w-[45%]">
              <label>Company Name</label>
              <input
                className="border my-2 bg-slate-100 p-1 border-purple-400 rounded-sm w-[100%]"
                placeholder="Company Name"
                autoComplete="off"
                type="text"
                {...register('Company_Name', {
                  required: 'Required!',
                })}
              ></input>
            </div>
          </div>
          {/* 2 */}
          <div className="flex flex-col md:flex-row justify-between  w-[100%] ">
            <div className="flex flex-col w-[100%] md:w-[45%]">
              <label>Start Date</label>
              <input
                type="month"
                name="WorkstartDate"
                id="start-date"
                {...register('WrkStartDate')}
                autoComplete="off"
                className="border my-2 bg-slate-100 p-1 border-purple-400 rounded-sm w-auto"
              />
            </div>
            <div className="w-[100%] md:w-[45%]">
              <label>End Date</label>
              <input
                type="month"
                name="WorkendDate"
                id="end-date"
                {...register('WrkEndDate')}
                autoComplete="off"
                className="border my-2 bg-slate-100 p-1 border-purple-400 rounded-sm  w-[100%]"
              />
            </div>
          </div>
          <div className="">
            <ReactQuill
              value={ExpDesc}
              onChange={(e) => {
                setExpDes(e)
              }}
              className="border my-5  bg-slate-100 border-purple-400"
            />
          </div>
          <button
            type={'submit'}
            className=" bg-indigo-700 text-white py-2 px-3 rounded-md flex flex-row justify-center cursor-pointer "
          >
            Save
          </button>
        </form>
      </div>
      {/* <div className="p-4 border border-gray-300 h-auto w-[360px] md:w-[490px] lg:w-[550px] max-w-[590px]">
        {expData.map((e, index) => {
          return (
            <ExperienceTab
              key={index}
              idRef={index}
              jobRole={e.Job_Title}
              companyName={e.Company_Name}
              startDate={e.WrkStartDate}
              endDate={e.WrkEndDate}
              expDescription={e.description}
              deleteExpData={deleteExpData}
            />
          );
        })}
      </div> */}
      {/* <div className="p-4 border border-gray-300 h-auto w-[350px]  md:w-auto  md:max-w-[500px] max-w-[590px]">
        {expData.map((e, index) => {
          return (
            <ExperienceTab
              key={index}
              idRef={index}
              jobRole={e.Job_Title}
              companyName={e.Company_Name}
              startDate={e.WrkStartDate}
              endDate={e.WrkEndDate}
              expDescription={e.description}
              deleteExpData={deleteExpData}
            />
          );
        })}
      </div> */}
    </div>
  )
}

export default Experience
