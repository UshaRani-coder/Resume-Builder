import { useState } from 'react'
import Education from './Education'
import Experience from './Experience'
import PersonalInfo from './PersonaIInfo'
const Forms = () => {
  return (
    <div className="md:max-h-full w-[100%]  max-h-80 overflow-auto  ">
      <Education />
    </div>
  )
}
export default Forms
