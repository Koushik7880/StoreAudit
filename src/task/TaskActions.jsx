export default function TaskActions() {
  return (
    <div className="mb-14 items-center justify-between sm:flex">
      <h2 className="text-2xl font-semibold max-sm:mb-4">
        Store Information For Audit
      </h2>
      <div className="flex items-center space-x-5">
        <button className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold">
          Upload Excel
        </button>
        {/* <button className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold">
          Delete All
        </button> */}
      </div>
    </div>
  )
}