import { useState } from 'react'
// import Accordian,{AccordianItem} from "../accordianForm.jsx"
// import Experience from './Experience.jsx';

import { GiGraduateCap } from 'react-icons/gi'
import { GrCertificate } from 'react-icons/gr'
import { LiaLanguageSolid } from 'react-icons/lia'
import { FaTools } from 'react-icons/fa'
import { MdDeveloperMode } from 'react-icons/md'

// import SkillsForm from './MultiForms/SkillsForm.jsx';
import {
  LanguageForm,
  CustomForm,
  SkillsForm,
  CertificatesForm,
  ProjectsForm,
} from './AdditionalForms/index.js'
// import { LuLanguages } from "react-icons/lu";
// import ProjectsForm from "./MultiForms/ProjectsForm.jsx"

const FormCards = ({ TabIcons, TabHead, setCurrForm, FormNum }) => {
  return (
    <div
      onClick={() => setCurrForm(FormNum)}
      className=" cursor-pointer  p-2 flex flex-col justify-center align-middle gap-2 border border-purple-600 md:w-24 h-20  md:h-24 md:min-w-14   bg-purple-100 rounded-lg"
    >
      <div>
        {<TabIcons className="w-[20px] h-auto m-auto text-purple-900 " />}
      </div>
      <div>
        <h4 className="text-purple-600 font-medium text-[12px] text-center leading-4 ">
          {TabHead}
        </h4>
      </div>
    </div>
  )
}

const AccorComponent = () => {
  const [currForm, setCurrForm] = useState(3)

  function RenderComponent() {
    switch (currForm) {
      case 1:
        return <SkillsForm />
      case 2:
        return <LanguageForm />
      case 3:
        return <ProjectsForm />
      case 4:
        return <CustomForm />
      case 5:
        return <CertificatesForm />
      default:
        return <></>
    }
  }

  return (
    // <div className="w-[100%] md:w-[520px] lg:w-[470px] xl:w-[490px] m-auto h-auto ">
    // <div className="p-2 md:p-6 mt-[20px] w-[370px] md:w-auto  md:max-w-[500px] h-[100%] xl:h-[65%]  border-[#9333ea] m-0  border-2 shadow-[#9333ea] shadow-md">

    <div className="flex flex-col  w-[350px]  md:w-auto md:max-w-[480px]  items-center p-4 my-8 border-[#9333ea] border-2 shadow-[#9333ea] shadow-md h-auto ">
      <div className="my-2">
        <h2 className="text-2xl font-semibold">
          Additional<span className="text-purple-700"> Section.</span>
        </h2>
        <div className=" my-4 flex flex-row gap-2   justify-center">
          <FormCards
            FormNum={3}
            setCurrForm={setCurrForm}
            TabIcons={FaTools}
            TabHead={'Add Projects'}
          />
          <FormCards
            FormNum={5}
            setCurrForm={setCurrForm}
            TabIcons={GrCertificate}
            TabHead={'Add Certificates'}
          />
          <FormCards
            FormNum={2}
            setCurrForm={setCurrForm}
            TabIcons={LiaLanguageSolid}
            TabHead={'Add Languages'}
          />
          {/* <FormCards FormNum={1} setCurrForm={setCurrForm}  TabIcons={GiGraduateCap} TabHead={"Add Skills"}/>  */}
          <FormCards
            FormNum={4}
            setCurrForm={setCurrForm}
            TabIcons={MdDeveloperMode}
            TabHead={'Custom Section'}
          />
        </div>
      </div>

      <div>
        {RenderComponent()}
        {/* {currForm===1?<SkillsForm/>:currForm===2?<LanguageForm/>:currForm===3?<ProjectsForm/>:<></>} */}
      </div>
    </div>
  )
}

export default AccorComponent
