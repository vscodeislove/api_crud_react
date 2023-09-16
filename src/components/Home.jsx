import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setdata] = useState([]);

  const onDelete = (id) => {
    axios
      .delete(`https://65019933736d26322f5bfd2a.mockapi.io/api/${id}`)
      .then(() => {
        fetchData();
      });
  };

  const setData = (data) => {
    let { id, phone, name } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("name", name);
    localStorage.setItem("phone", phone);
  };

  const fetchData = async () => {
    const res = await axios.get(
      "https://65019933736d26322f5bfd2a.mockapi.io/api"
    );
    setdata(res.data);
    console.log(res.data);
  };

  useEffect(() => {
    // const fetchdata = async () => {
    //   const data = await axios.get(
    //     "https://65019933736d26322f5bfd2a.mockapi.io/api"
    //   );
    //   console.log(data, "this is a data");
    // };

    fetchData();
  }, []);

  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                this is id
              </th>
              <th scope="col" className="px-6 py-3">
                this is name
              </th>
              <th scope="col" className="px-6 py-3">
                this is phone
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr
                key={i}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="pl-10">{i + 1}</td>
                <td className="px-6 py-4">{item.name}</td>
                <td className="px-6 py-4">{item.phone}</td>
                <td className="px-6 py-4">
                  <Link to={`/update/${item.id}`}>
                    <button
                      onClick={() => setData(item)}
                      className="bg-green-500 mr-6 p-3 text-white"
                    >
                      Update
                    </button>
                  </Link>

                  <button
                    onClick={() => onDelete(item.id)}
                    className="bg-red-500 p-3 text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
