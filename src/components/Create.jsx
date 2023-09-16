import axios from "axios";
import { useState } from "react";

const Create = () => {
  const [userdata, setUserdata] = useState({});

  const createData = async () => {
    // console.log(userdata);

    try {
      const response = await axios.post(
        "https://65019933736d26322f5bfd2a.mockapi.io/api",
        userdata
      );

      console.log("POST request successful", response.data);
    } catch (error) {
      console.error("POST request error", error);
    }

    setUserdata({
      name: "",
      phone: "",
    });

    // console.log("called");
  };
  return (
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
          onChange={(e) => setUserdata({ ...userdata, phone: e.target.value })}
          type="text"
          id="default-input"
          className="bg-gray-50 w-[400px] mx-auto border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="w-full flex items-center justify-center mx-auto">
        <button
          onClick={createData}
          className="bg-green-500 px-10 rounded-3xl py-4"
        >
          create
        </button>
      </div>
    </div>
  );
};

export default Create;
