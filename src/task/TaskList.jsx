export default function TaskList({ tasks }) {
  return (
    <div className="overflow-auto">
      <table className="table-fixed overflow-auto xl:w-full">
        <thead>
          <tr>
            {/* <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th> */}
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
              {' '}
              Serial{' '}
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
              {' '}
              Item{' '}
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
              {' '}
              Rack{' '}
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
              {' '}
              Bin{' '}
            </th>
          </tr>
        </thead>
        <tbody>
          {
            tasks.map(task => (
              <tr
                key={task.SerialNo}
                className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
                {/* <td></td> */}
                <td className="text-center">{task.SerialNo}</td>
                <td className="text-center">{task.Itemname}</td>
                <td className="text-center">{task.Rack}</td>
                <td className="text-center">{task.Bin}</td>
              </tr>
            ))
          }


        </tbody>
      </table>
    </div>
  )
}
