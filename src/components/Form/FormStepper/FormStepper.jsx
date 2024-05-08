// import {useState} from 'react';
import './stepper.css'

const FormStepper = ({ Newnum, setForm }) => {
  const steps = ['Personal', 'Education', 'Expereince', 'Skills', 'Additional']
  return (
    <>
      {/* Stepper with Completion-Green */}

      {/* Without Completion-Not Green */}
      <div className="flex justify-between my-2 w-[270px] bg-blue static z-0 ">
        {steps.map?.((step, i) => (
          <div
            key={i}
            className={` step-item ${Newnum + 1 >= i + 1 && 'active'} `}
          >
            <div className="step cursor-pointer" onClick={() => setForm(i)}>
              {' '}
              {i + 1}{' '}
            </div>
            <p className="text-gray-500 text-[10px] "> {step} </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center align-middle m-2">
        {/* <button className="p-2 mx-4 bg-purple-700 text-white rounded-md"
        onClick={()=>{
          currentStep !=0?setCurrentStep((prev)=> prev -1):(null)
          ;
        }}
        > Prev  </button>
        <button className="p-2 bg-purple-700 text-white rounded-md"
        onClick={()=>{
          currentStep === steps.length ? setComplete(true):
          setCurrentStep((prev)=> prev +1);
        }}
        > Next {currentStep} </button> */}
      </div>
    </>
  )
}

export default FormStepper
