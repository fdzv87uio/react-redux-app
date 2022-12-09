import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteData, setTime, setStatus, setEntities } from "../features/data";
import { getData } from "../utils/getData";

// this is a list of 100 Potential searches
const searchList = [
  "Houston",
  "Miami",
  "New York",
  "Tampa",
  "Los Angeles",
  "Austin",
];

function CreateTest() {
  const data = useSelector((state) => state.data.value);
  const dispatch = useDispatch();
  // this function retrieves data entities using the FAQX Search API, and stores it in the store
  async function fetchData() {
    // start timer
    const startTime = performance.now().toFixed(4);
    // loop through searchlist
    searchList.forEach(async (item) => {
      // perform search based on item
      const data = await getData(item);
      if (data) {
        dispatch(setEntities(data));
      }
    });
    const endTime = performance.now().toFixed(4);
    const totalTime = (endTime - startTime).toFixed(4);
    dispatch(setTime(totalTime));
    dispatch(setStatus("Completed"));
    //
  }
  return (
    <div>
      <p>
        <strong>Entity Count: </strong>

        {data.entities.length}
      </p>
      <p>
        <strong>Time (ms): </strong>
        {data.time}
      </p>
      <p>
        <strong>Status: </strong>
        {data.status}
      </p>
      <button onClick={() => fetchData()}>Update</button>
      <button onClick={() => dispatch(deleteData())}>Delete</button>
    </div>
  );
}

export default CreateTest;
