import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [userdata, setUserdata] = useState({});

  const navigator = useNavigate();

  const createData = async () => {
    // console.log(userdata);

    let data = JSON.stringify(userdata);

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://649547e4b08e17c91791d8b7.mockapi.io/fakeData",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then(() => {
        alert("product has been added!!!!!");
        navigator("/");
      })
      .catch((error) => {
        console.log(error);
      });

    setUserdata({
      pname: "",
      pdesc: "",
      pprice: "",
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
          Product Name
        </label>
        <input
          value={userdata.pname}
          onChange={(e) => setUserdata({ ...userdata, pname: e.target.value })}
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
          Product Description
        </label>
        <input
          value={userdata.pdesc}
          onChange={(e) => setUserdata({ ...userdata, pdesc: e.target.value })}
          type="text"
          id="default-input"
          className="bg-gray-50 w-[400px] mx-auto border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="default-input"
          className="block mb-2 mx-auto w-[200px] text-sm font-medium text-gray-900 dark:text-white"
        >
          Product Price
        </label>
        <input
          value={userdata.pprice}
          onChange={(e) => setUserdata({ ...userdata, pprice: e.target.value })}
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
