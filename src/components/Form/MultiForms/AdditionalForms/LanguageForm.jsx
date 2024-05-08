// import { GrClose } from "react-icons/gr";
import { useState } from 'react'
import { LuLanguages } from 'react-icons/lu'
import { MdDelete } from 'react-icons/md'
import { FaPlus } from 'react-icons/fa6'
import { setUserData } from '../../../../reduxToolkit/FormDataSlice.jsx'
import { useDispatch } from 'react-redux'
import { selectUserData } from '../../../../reduxToolkit/FormDataSlice.jsx'
import { useSelector } from 'react-redux'
import { nanoid } from 'nanoid'

const LanguageOption = ({ currList, updateList }) => {
  // const [language] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState('beginner')
  const [inputLang, setLangInput] = useState('')
  const dispatch = useDispatch()
  const userInputData = useSelector(selectUserData)
  //const id = nanoid();

  function handleChange(value) {
    setSelectedExpertise(value)
  }

  function addItemList() {
    let a = inputLang
    let b = selectedExpertise
    const list1 = [a, b]
    let curr_list = [...currList, list1]
    updateList(curr_list)
    //const ArrItem = [list1, id];
    const updatedData = {
      ...userInputData,
      language: curr_list,
    }
    dispatch(setUserData(updatedData))
    setLangInput('')
    setSelectedExpertise('beginner')
    // console.log(curr_list);
  }

  return (
    <>
      <div className="flex flex-row gap-2 my-3">
        <div>
          <input
            value={inputLang}
            name="language"
            onChange={(e) => setLangInput(e.target.value)}
            //  className="border border-slate-500 rounded-md p-1"
            className="border my-2 bg-slate-100 p-1 border-purple-400 rounded-sm w-full"
            placeholder={'Add Language here'}
          ></input>
        </div>
        <div>
          {/* <label htmlFor="selectExpertise">Level:</label> */}
          <select
            className="border my-2 bg-slate-100 p-1 border-purple-400 rounded-sm w-full"
            // className="border border-blue-300 mx-2"
            id="selectExpertise"
            name="expertise"
            value={selectedExpertise}
            onChange={(e) => {
              handleChange(e.target.value)
            }}
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>
          {/* <p>Selected Expertise: {selectedExpertise}</p> */}
        </div>

        <button
          onClick={() => {
            addItemList()
            updateUserData(userInputData, inputLang)
          }}
          className="bg-indigo-700 hidden  md:block text-white my-2 px-4 py-1 rounded-md  w-[80%]  md:w-auto"
        >
          Add
        </button>
      </div>
      <button
        onClick={() => {
          addItemList()
          updateUserData(userInputData, inputLang)
        }}
        className="bg-indigo-700 md:hidden text-white py-2 px-4 rounded-md w-[90%] md:w-auto"
      >
        Add
      </button>
    </>
  )
}

const DeleteButton = ({ Del_id, languageList, setLangList }) => {
  const dispatch = useDispatch()
  const userInputData = useSelector(selectUserData)

  function langDeleteItem(index) {
    let newLangArray = [...languageList]
    newLangArray.splice(index, 1)
    setLangList(newLangArray)
    //const storedData = [...userInputData.language];
    // storedData.splice(index, 1);
    const updatedData = {
      ...userInputData,
      language: newLangArray,
    }
    dispatch(setUserData(updatedData))
  }

  return (
    <MdDelete
      onClick={() => {
        langDeleteItem(Del_id)
      }}
      className="text-red-700 mt-[1px] h-8"
    />
  )
}

const LanguageForm = () => {
  const [languageList, setLangList] = useState([])

  return (
    // <div >
    // <div className="p-4 my-8 border border-gray-300 h-auto w-[360px] md:w-[460px] lg:w-[550px] max-w-[590px]">
    <div className="p-3 md:p-6  w-[350px]  md:w-auto  md:max-w-[500px] h-[100%] xl:h-[65%]    m-0 ">
      <h2 className="text-2xl font-semibold mb-3"> Add Languages.</h2>
      <div>
        <LanguageOption currList={languageList} updateList={setLangList} />
      </div>
      <div className=" text-gray-500 text-lg my-2">
        <ul>
          {' '}
          {languageList.map((e, index) => {
            return (
              <div className="flex flex-row align-middle gap-2" key={index}>
                <h2 className="text-[20px] ">
                  {' '}
                  - {e[0]} - {e[1]}
                </h2>
                <DeleteButton
                  Del_id={index}
                  languageList={languageList}
                  setLangList={setLangList}
                />

                {/* <MdDelete  className="text-red-700 mt-[6px]" onClick={()=>langDeleteItem(index)} />   */}
              </div>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default LanguageForm
