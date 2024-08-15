import PropTypes from "prop-types";
import NoResults from "../../components/NoResults";

const Table = ({ columns, data, consulta }) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50">
                  {columns.map((column, index) => (
                    <th
                      key={index}
                      scope="col"
                      className="p-5 text-left text-sm  font-semibold text-gray-900 capitalize"
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
                          className="whitespace-normal break-words text-sm leading-6 font-medium text-gray-900 p-4"
                        >
                          {column.accessor === "actions" ? (
                            <div className="flex items-center gap-1">
                              <button className="p-2 rounded-full group transition-all duration-500 flex item-center">
                                <i className="fa-solid fa-pen-to-square"></i>
                              </button>
                              <button className="p-2 rounded-full group transition-all duration-500 flex item-center">
                                <i className="fa-solid fa-trash-can"></i>
                              </button>
                              <button className="p-2 rounded-full group transition-all duration-500 flex item-center">
                                <i className="fa-regular fa-eye"></i>
                              </button>
                            </div>
                          ) : (
                            row[column.accessor] || "N/A"
                          )}
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
