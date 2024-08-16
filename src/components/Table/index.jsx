import PropTypes from "prop-types";
import NoResults from "../../components/NoResults";

const Table = ({ columns, data, consulta }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full m-2">
              <thead>
                <tr className="bg-gray-200 ">
                  {columns.map((column, index) => (
                    <th
                      key={index}
                      scope="col"
                      className="p-5 text-center  font-semibold text-gray-900 capitalize"
                    >
                      {column.header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-300">
                {data.length === 0 ? (
                  <tr className="bg-white">
                    <td
                      colSpan={columns.length}
                      className="p-5 text-center text-sm leading-6 font-medium text-gray-900"
                    >
                      <NoResults consulta={consulta}></NoResults>
                    </td>
                  </tr>
                ) : (
                  data.map((row, rowIndex) => (
                    <tr key={rowIndex} className="bg-white">
                      {columns.map((column, colIndex) => (
                        <td
                          key={colIndex}
                          className="whitespace-normal break-words text-sm leading-6 font-medium text-gray-900 px-4 py-2"
                        >
                          {
                            row[column.accessor] || "N/A"
                          }
                        </td>
                      ))}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      accessor: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  consulta: PropTypes.string,
};

export default Table;
