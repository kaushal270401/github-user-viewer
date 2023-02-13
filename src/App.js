import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { Route, Routes } from "react-router-dom";
import { Info } from "./components";

function App() {
  return (
    <Dashboard />
    // <div>
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={
    //         <PrivateRoute>
    //           <Dashboard />
    //         </PrivateRoute>
    //       }
    //     />
    //     <Route path="login" element={<Login />} />
    //     <Route path="*" element={<Error />} />
    //   </Routes>
    // </div>
  );
}

export default App;
