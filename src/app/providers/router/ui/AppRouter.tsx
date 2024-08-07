// import React, { Suspense } from "react";
// import { Routes, Route } from "react-router-dom";
// import { Home } from "../../../../pages/home";

// const Counter = React.lazy(() =>
//   import("../../../../pages/counter").then(({ Counter }) => ({
//     default: Counter,
//   }))
// );
// type TypeAppRouterProps = {
//   setActualTheme: (value: string) => void;
//   actualTheme: string;
// };
// const AppRouter = ({ actualTheme, setActualTheme }: TypeAppRouterProps) => {
//   return (
//     <Routes>
//       <Route
//         path="/"
//         index
//         element={
//           <Home setActualTheme={setActualTheme} actualTheme={actualTheme} />
//         }
//       ></Route>
//       <Route
//         path="counter"
//         element={
//           <Suspense fallback={<div>Loading...</div>}>
//             <Counter />
//           </Suspense>
//         }
//       ></Route>
//     </Routes>
//   );
// };

// export default AppRouter;
