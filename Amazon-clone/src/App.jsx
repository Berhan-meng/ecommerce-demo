// // import ComponentA from "./ComponentA";
// // import ComponentB from "./ComponentB";
// // import Landing from "./Pages/Landing/Landing";
// import Routing from "./Routing";
// // import { ThemeProvider } from "./ContextProvider";
// import {
//   DataContext,
//   // DataProvider,
// } from "./assets/Components/DataProvider/DataProvider";
// // import { reducer, initialState } from "./Utility/reducer";
// import { useContext, useEffect } from "react";
// import { Type } from "./Utility/action.type";
// import { auth } from "./Utility/firebase";
// import "./App.css";

// window.onerror = function (message, source, lineno, colno, error) {
//   console.error("GLOBAL ERROR:", message);
//   console.error(error?.stack);
// };

// function App() {
//   // const [{ user }, dispatch] = useContext(DataContext);
//   const [{ user, basket, authReady }, dispatch] = useContext(DataContext);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged((authUser) => {
//       dispatch({
//         type: Type.SET_USER,
//         user: authUser, // can be null on logout
//       });
//     });

//     return unsubscribe;
//   }, []);

//   // useEffect(() => {
//   //   const unsubscribe = auth.onAuthStateChanged((authUser) => {
//   //     dispatch({
//   //       type: Type.SET_USER,
//   //       user: authUser || null,
//   //     });
//   //   });

//   //   return unsubscribe;
//   // }, []);

//   return <Routing />;
//   // <ThemeProvider>
//   //   <ComponentA />
//   //   <ComponentB />
//   // </ThemeProvider>
// }

// export default App;

// import ComponentA from "./ComponentA";
// import ComponentB from "./ComponentB";
// import Landing from "./Pages/Landing/Landing";
import Routing from "./Routing";
// import { ThemeProvider } from "./ContextProvider";
import {
  DataContext,
  // DataProvider,
} from "./assets/Components/DataProvider/DataProvider";
// import { reducer, initialState } from "./Utility/reducer";
import { useContext, useEffect } from "react";
import { Type } from "./Utility/action.type";
import { auth } from "./Utility/firebase";
import "./App.css";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      dispatch({
        type: Type.SET_USER,
        user: authUser || null,
      });
    });

    return unsubscribe;
  }, []);

  return <Routing />;
  // <ThemeProvider>
  //   <ComponentA />
  //   <ComponentB />
  // </ThemeProvider>
}

export default App;
