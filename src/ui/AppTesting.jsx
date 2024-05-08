import { useState, useRef } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import Modal from './modal'
import { useReactToPrint } from 'react-to-print'
// import Trash from "./icons/Trash"
import Template1 from './templates/Template1.jsx'

const PrintButton = ({ componentRef }) => {
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  return (
    <button onClick={handlePrint} className="mx-10 text-3xl">
      {' '}
      React - Print
    </button>
  )
}

export default function App() {
  const pdfRef2 = useRef()
  const [open, setOpen] = useState(false)
  const downloadPDF = async () => {
    const input = pdfRef2.current
    const canvas = await html2canvas(input)
    const imgData = canvas.toDataURL('image/png')
    const pdf = new jsPDF('p', 'mm', 'a4', true)
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = pdf.internal.pageSize.getHeight()
    const imgWidth = canvas.width
    const imgHeight = canvas.height
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)
    const imgX = (pdfWidth - imgWidth * ratio) / 2
    const imgY = 0
    pdf.addImage(
      imgData,
      'PNG',
      imgX,
      imgY,
      imgWidth * ratio,
      imgHeight * ratio,
    )
    pdf.save('resume.pdf')
  }

  return (
    <main className="App py-10">
      <button className="btn btn-danger" onClick={() => setOpen(true)}>
        Preview
      </button>
      <div className="scale-[0.70]">
        <div className="" ref={pdfRef2}>
          <Template1 />
        </div>
      </div>
      <button className="text-3xl" onClick={downloadPDF}>
        Donwload Button
      </button>

      {/* Component for React-Print */}
      <PrintButton componentRef={pdfRef2} />

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="text-center w-[400px] ">
          {/* <Trash size={56} className="mx-auto text-red-500" /> */}
          <div className="scale-[0.30]">
            <Template1 />
          </div>
        </div>
      </Modal>
    </main>
  )
}
