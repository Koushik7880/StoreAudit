import { useState } from 'react'

import SearchTask from './SearchTask'
import TaskActions from './TaskActions'
import TaskList from './TaskList'
import UploadExcelModal from './UploadExcelModal'

export default function TaskBoard() {
  const defaultTask = {
    SerialNo: 1,
    Itemname: 'Fan',
    Rack: 1,
    Bin: 1.1,
  }
  const [tasks, setTasks] = useState([defaultTask])
  const [showUploadExcelModal, setShowUploadExcelModal] = useState(false)

  // function handleAddExcel(){
  //   console.log("Uploading an excel data.....");
  //   setShowUploadExcelModal(true);
  // }
  return (
    // <!-- Begin Table -->
    <section className="mb-20" id="tasks">
      {showUploadExcelModal && <UploadExcelModal />}
      <div className="container">
        {/* <!-- Search Box --> */}
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>
        {/* <!-- Search Box Ends --> */}
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions onAddClick={() => setShowUploadExcelModal(true)} />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
    // <!-- End Table -->
  )
}
