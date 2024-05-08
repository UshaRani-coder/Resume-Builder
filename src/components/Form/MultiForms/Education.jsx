import { useState } from 'react'
import { useForm } from 'react-hook-form'
// import FormStepper from "./FormStepper/FormStepper.jsx";
import { useDispatch, useSelector } from 'react-redux'
import { setEducationData } from '../../../reduxToolkit/FormDataSlice.jsx'
import { selectEducationData } from '../../../reduxToolkit/FormDataSlice.jsx'

const Education = () => {
  const { register, handleSubmit, reset } = useForm()
  const [successMsg, setSuccessMsg] = useState('')
  const dispatch = useDispatch()
  //const userEduData = useSelector(selectEducationData);

  const [eduData, setEduData] = useState([])

  function sumbitData(data) {
    //console.log(data);
    let currData = [...eduData, data]
    setEduData(currData)
    console.log(eduData)
    dispatch(setEducationData(currData))
    setSuccessMsg('Data is updated.')
    reset()
  }
  return (
    <div className="p-6 mt-[20px] w-[350px]  md:w-auto  md:max-w-[500px] h-[100%] xl:h-[65%]  border-[#9333ea] m-0 border-2 shadow-[#9333ea] shadow-md">
      {successMsg && (
        <p className=" absolute right-10 top-8 font-bold p-0 bg-green-600 px-3 py-0.5 rounded-tr-xl rounded-bl-xl inline-block text-white text-sm">
          {successMsg}
        </p>
      )}
      <h2 className="text-2xl font-semibold leading-7 text-gray-900 ">
        Education
      </h2>
      {/* <div className="absolute border-t-4  border-purple-600 w-1/3"></div> */}
      <p className=" text-xs   text-gray-500 w-[85%] ">
        Add your most relevant education, including programs you're currently
        enrolled in.
      </p>

      <form
        // className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6 "
        className="flex flex-col md:flex-col "
        onSubmit={handleSubmit(sumbitData)}
      >
        <div className="flex flex-col md:flex-row  justify-between  w-[100%]">
          <div className="w-[100%] md:w-[45%]">
            <label>School Name</label>
            <div className="mt-1">
              <input
                type="text"
                name="schoolName"
                placeholder="School Name"
                id="school-name"
                {...register('schoolName')}
                autoComplete="off"
                className="border my-2 bg-slate-100 p-1 border-purple-400 rounded-sm w-[100%] "
              />
            </div>
          </div>

          <div className="w-[100%] md:w-[45%]">
            <label>School Location</label>
            <div className="mt-1">
              <input
                type="text"
                name="schoolLocation"
                placeholder="School Location"
                id="school-location"
                autoComplete="off"
                {...register('schoolLocation')}
                className="border my-2 bg-slate-100 p-1 border-purple-400 rounded-sm w-[100%] "
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between  w-[100%] ">
          <div className="w-[100%] md:w-[45%]">
            <label>Start Date</label>
            <div className="mt-1">
              <input
                type="date"
                name="startDate"
                placeholder=""
                id="start-date"
                {...register('startDate')}
                autoComplete="off"
                className="border my-2 bg-slate-100 p-1 border-purple-400 rounded-sm w-[100%] "
              />
            </div>
          </div>

          <div className="w-[100%] md:w-[45%]">
            <label>End Date</label>
            <div className="mt-1">
              <input
                type="date"
                name="endDate"
                id="end-date"
                {...register('endDate')}
                autoComplete="off"
                className="border my-2 bg-slate-100 p-1 border-purple-400 rounded-sm w-[100%] "
              />
            </div>
            <div className="mt-1 text-xs text-slate-500 flex items-center gap-1">
              <label>I am currently study here</label>
              <input
                type="checkbox"
                name="currentEmployed"
                id="currentEmployed"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between w-[100%]">
          <div className="flex flex-col w-[100%] md:w-[45%]">
            <label>Degree</label>
            <div className="mt-1">
              <input
                type="text"
                name="degree"
                placeholder="Degree"
                id="degree"
                autoComplete="off"
                {...register('degree')}
                className="border my-2 bg-slate-100 p-1 border-purple-400 rounded-sm w-[100%] "
              />
            </div>
          </div>

          <div className="w-[100%] md:w-[45%]">
            <label>Field of study</label>
            <div className="mt-1">
              <input
                type="text"
                name="fieldOfStudy"
                id="fieldOfStudy"
                placeholder="Field of Study"
                {...register('fieldOfStudy')}
                autoComplete="off"
                className="border my-2 bg-slate-100 p-1 border-purple-400 rounded-sm w-[100%] "
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between ">
          <div className="w-auto">
            <label>Description</label>
            <textarea
              id="message"
              rows="4"
              name="description"
              {...register('description')}
              className="border my-2 bg-slate-100 p-1 border-purple-400 rounded-sm w-[100%] "
              placeholder="e.g. Supported mentor teacher throughout lessons by preparing…"
            ></textarea>
          </div>

          <div className="flex flex-col mt-2">
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-700 text-white font-semibold py-1 px-3   rounded"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default Education
