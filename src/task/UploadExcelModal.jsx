import { useState } from 'react'
import * as XLSX from 'xlsx'

export default function UploadExcelModal() {
  // onchange states
  const [excelFile, setExcelFile] = useState(null)
  const [typeError, setTypeError] = useState(null)

  // submit state
  const [excelData, setExcelData] = useState(null)

  // onchange event
  const handleFile = (e) => {
    let fileTypes = [
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'text/csv',
    ]
    let selectedFile = e.target.files[0]
    if (selectedFile) {
      if (selectedFile && fileTypes.includes(selectedFile.type)) {
        setTypeError(null)
        let reader = new FileReader()
        reader.readAsArrayBuffer(selectedFile)
        reader.onload = (e) => {
          setExcelFile(e.target.result)
        }
      } else {
        setTypeError('Please select only excel file types')
        setExcelFile(null)
      }
    } else {
      console.log('Please select your file')
    }
  }

  // submit event
  const handleFileSubmit = (e) => {
    e.preventDefault()
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: 'buffer' })
      const worksheetName = workbook.SheetNames[0]
      const worksheet = workbook.Sheets[worksheetName]
      const data = XLSX.utils.sheet_to_json(worksheet)
      setExcelData(data.slice(0, 10))
    }
  }
  return (
    <>
      <div
        className="bg-black bg-opacity-70 h-hull w-full z-10 absolute
            top-0 left-0"
      ></div>
      <form
        className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%]
                 bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 z-10 absolute top-1/4 left-1/3"
      >
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          Upload New Excel File
        </h2>

        {/* <div className="space-y-9 text-white lg:space-y-10">
          <div className="space-y-2 lg:space-y-3">
            <label for="title">Upload Excel</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              required
            />
          </div>
        </div> */}

        {/* form */}
        <form className="form-group custom-form" onSubmit={handleFileSubmit}>
          <input
            type="file"
            className="form-control"
            required
            onChange={handleFile}
          />
          <button type="submit" className="btn btn-success btn-md">
            UPLOAD
          </button>
          {typeError && (
            <div className="alert alert-danger" role="alert">
              {typeError}
            </div>
          )}
        </form>

        {/* view data */}
        <div className="viewer">
          {excelData ? (
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    {Object.keys(excelData[0]).map((key) => (
                      <th key={key}>{key}</th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {excelData.map((individualExcelData, index) => (
                    <tr key={index}>
                      {Object.keys(individualExcelData).map((key) => (
                        <td key={key}>{individualExcelData[key]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div>No File is uploaded yet!</div>
          )}
        </div>

        <div className="mt-16 flex justify-center lg:mt-20">
          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
          >
            Save Excel Data
          </button>
        </div>
      </form>
    </>
  )
}
