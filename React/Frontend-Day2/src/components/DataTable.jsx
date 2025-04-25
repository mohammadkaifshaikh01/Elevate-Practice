import { useState, useEffect } from "react";

const DataTable = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(10);

  const lastIndexItem = currentPage * itemPerPage;
  const firstIndexItem = lastIndexItem - itemPerPage;
  const currentItem = data.slice(firstIndexItem, lastIndexItem);
  const totalPages = Math.ceil(data.length / itemPerPage);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.log("Something Went Wrong: ", error);
      }
    };
    fetchData();
  }, []);

 
  
  const filterItem = (e) => {
    const sorting = [...data];
    console.log(e)
    if (e === "asc") {
      sorting.sort((a, b) => {
        return a.first_name.localeCompare(b.first_name);
      });
    } else {
      sorting.sort((a, b) => {
        return b.first_name.localeCompare(a.first_name);
      });
    }
    console.log(sorting)
    setData(sorting)

  }

  const handleNumberOfItems = (e) => {
    setItemPerPage(+e)
  }

  return (
    <div className="p-8">
      <h1 className="text-center text-3xl font-semibold mb-6 text-gray-800">
        Employee Details
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
        <div>
          <select
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-gray-700 bg-white"
            onChange={(e) => filterItem(e.target.value)}
          >
            {/* <option value="">Filter ⬇️</option> */}
            <option value="asc">Ascending ⬇️</option>
            <option value="desc">Descending ⬆️</option>
          </select>
        </div>
        <div>
          <select onChange={(e) => handleNumberOfItems(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-gray-700 bg-white">
            <option value="">Items Per Page 📃</option>
            <option value="10">10 Items</option>
            <option value="20">20 Items</option>
            <option value="30">30 Items</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto mt-5">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 border-b">
                Employee ID
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 border-b">
                First Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 border-b">
                Last Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 border-b">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 border-b">
                Position
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 border-b">
                Date Of Birth
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItem.map((elem, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-700 border-b">
                  {(currentPage - 1) * itemPerPage + index + 1}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 border-b">
                  {elem.first_name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 border-b">
                  {elem.last_name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 border-b">
                  {elem.email}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 border-b">
                  {elem.position}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700 border-b">
                  {elem.dob}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-gray-100">
            <tr>
              <td
                colSpan="6"
                className="text-center px-6 py-4 text-sm font-medium text-gray-500"
              >
                Total Employees: {data.length}
              </td>
            </tr>
          </tfoot>
        </table>

        <div className="flex items-center justify-center space-x-4 mt-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300"
          >
            Prev
          </button>
          <span className="text-lg font-medium text-gray-700">
            {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
