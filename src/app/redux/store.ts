import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "#src/pages/counter/model/counterSlice";
import themeSlice from "#src/features/theme/themeSlice";
export const store = configureStore({
  reducer: {
    counterSlice,
    themeSlice,
  },
});
