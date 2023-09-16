import { useState, useEffect } from "react";
import axios from "axios";

const Update = () => {
  const [userdata, setUserdata] = useState({});
  console.log(userdata);

  useEffect(() => {
    // Get values from localStorage
    const id = localStorage.getItem("ID");
    const name = localStorage.getItem("name");
    const phone = localStorage.getItem("phone");

    // Create a new object with the values
    const newUserdata = {
      id: id,
      name: name,
      phone: phone,
    };

    // Update the state with the new object
    setUserdata(newUserdata);
  }, []);

  const updateData = async () => {
    const res = await axios.put(
      `https://65019933736d26322f5bfd2a.mockapi.io/api/${userdata.id}`,
      {
        name: userdata.name,
        phone: userdata.phone,
      }
    );
    console.log(res.data, "data");
  };

  return (
    <div>
      <div className="bg-slate-700 h-[100vh] pt-10">
        <div className="mb-6">
          <label
            htmlFor="default-input"
            className="block mx-auto w-[200px] mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Default Name
          </label>
          <input
            value={userdata.name}
            onChange={(e) => setUserdata({ ...userdata, name: e.target.value })}
            type="text"
            id="default-input"
            className="bg-gray-50 border w-[400px] mx-auto border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="default-input"
            className="block mb-2 mx-auto w-[200px] text-sm font-medium text-gray-900 dark:text-white"
          >
            Default Phone
          </label>
          <input
            value={userdata.phone}
            onChange={(e) =>
              setUserdata({ ...userdata, phone: e.target.value })
            }
            type="text"
            id="default-input"
            className="bg-gray-50 w-[400px] mx-auto border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="w-full flex items-center justify-center mx-auto">
          <button
            onClick={updateData}
            className="bg-green-500 px-10 rounded-3xl py-4"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Update;
