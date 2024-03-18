export default function ItemList() {
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
          <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
            {/* <td></td> */}
            <td className="text-center">1</td>
            <td className="text-center">Cement</td>
            <td className="text-center">1</td>
            <td className="text-center">1.1</td>
          </tr>
          <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
            {/* <td></td> */}
            <td className="text-center">2</td>
            <td className="text-center">Black Clot</td>
            <td className="text-center">2</td>
            <td className="text-center">2.1</td>
          </tr>
          <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
            {/* <td></td> */}
            <td className="text-center">3</td>
            <td className="text-center">White Clot</td>
            <td className="text-center">1</td>
            <td className="text-center">1.1</td>
          </tr>
          <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
            {/* <td></td> */}
            <td className="text-center">4</td>
            <td className="text-center">White Cement</td>
            <td className="text-center">2</td>
            <td className="text-center">2.1</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
