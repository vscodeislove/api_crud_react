import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setdata] = useState([]);

  const onDelete = (id) => {
    let config = {
      method: "delete",
      maxBodyLength: Infinity,
      url: `https://649547e4b08e17c91791d8b7.mockapi.io/fakeData/${id}`,
      headers: {},
    };

    axios
      .request(config)
      .then(() => {
        alert("your product has been deleted as per your request!!!!!");
        fetchData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const setData = (data) => {
  //   let { id, phone, name } = data;
  //   localStorage.setItem("ID", id);
  //   localStorage.setItem("name", name);
  //   localStorage.setItem("phone", phone);
  // };

  const fetchData = async () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://649547e4b08e17c91791d8b7.mockapi.io/fakeData",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(response.data, "this is my api res");
        setdata(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
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
                Price
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
                <td className="px-6 py-4">{item.pname}</td>
                <td className="px-6 py-4">{item.pdesc}</td>
                <td className="px-6 py-4">{item.pprice}</td>
                <td className="px-6 py-4">
                  <Link to={`/update/${item.id}`}>
                    <button
                      // onClick={() => setdata(item)}
                      className=" text-white"
                    >
                      Update
                    </button>
                  </Link>

                  <button
                    onClick={() => onDelete(item.id)}
                    className="bg-red-500 p-[10px] ml-5 text-white"
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
