import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: [],
  time: 0,
  status: "initial",
};

export const dataSlice = createSlice({
  name: "data",
  initialState: { value: initialState },
  reducers: {
    deleteData(state) {
      state.value = initialState;
    },
    setEntities(state, action) {
      const currentEntities = state.value.entities;
      const addedEntities = action.payload;
      const newEntities = currentEntities.concat(addedEntities);
      state.value.entities = newEntities;
    },
    setTime(state, action) {
      state.value.time = action.payload;
    },
    setStatus(state, action) {
      state.value.status = action.payload;
    },
  },
});

export const { deleteData, setEntities, setTime, setStatus } =
  dataSlice.actions;

export default dataSlice.reducer;
