import { useState } from "react";

function UserForm() {
  const [formData, setFormData] = useState({
    reqId: "",
    reqName: "",
    empID: "",
    visName: "",
    relation: "",
    vehNum: "",
    arrDate: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const formHandler = (e) => {
    e.preventDefault();
    console.log("Submitted form.....");
    alert(...formData);
  };

  return (
    <>
      <h1 className="text-3xl font-semibold p-5 text-center font-mono ">
        VISITOR FORM
      </h1>
      <form
        className="font-mono flex flex-wrap flex-col text-center"
        autoComplete="off"
        onSubmit={formHandler}
      >
        <label className="m-1">
          {" "}
          Request ID:{" "}
          <input
            type="text"
            name="reqID"
            className="border-4 p-1 rounded-xl"
            placeholder="Auto-generated"
            value={formData.reqId}
            onChange={handleChange}
          />
        </label>
        <label className="m-1">
          Requester Name:{" "}
          <input
            type="text"
            name="reqName"
            placeholder="Autofetched from DB"
            className="border-4 p-1 rounded-xl"
            value={formData.reqName}
            onChange={handleChange}
          />
        </label>{" "}
        <label className="m-1">
          Emplyoee ID:{" "}
          <input
            type="number"
            name="empID"
            placeholder="Autofetched from DB"
            className="border-4 p-1 rounded-xl"
            value={formData.empID}
            onChange={handleChange}
          />
        </label>{" "}
        <label className="m-1">
          Visitor Name:{" "}
          <input
            type="text"
            name="visName"
            placeholder="Enter Vistor name"
            className="border-4 p-1 rounded-xl"
            value={formData.visName}
            onChange={handleChange}
          />{" "}
        </label>{" "}
        <label className="m-1">
          Relation:{" "}
          <input
            type="text"
            name="relation"
            placeholder="your relation"
            className="border-4 p-1 rounded-xl"
            value={formData.relation}
            onChange={handleChange}
          />{" "}
        </label>
        <label className="m-1">
          Vehicle Num:{" "}
          <input
            type="text"
            name="vehNum"
            placeholder="Optional"
            className="border-4 p-1 rounded-xl"
            value={formData.vehNum}
            onChange={handleChange}
          />
        </label>{" "}
        <label className="m-1">
          Arrival Date{" "}
          <input
            type="date"
            name="arrDate"
            placeholder="Optional"
            className="border-4 p-1 rounded-xl"
            value={formData.arrDate}
            onChange={handleChange}
          />
        </label>{" "}
        <footer>
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            type="submit"
          >
            Submit
          </button>
        </footer>
      </form>
    </>
  );
}

export default UserForm;
