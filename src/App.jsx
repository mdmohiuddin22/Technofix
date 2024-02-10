import Users from "./Users";

function App() {
  return (
    <>
      <h2 className="text-center  items-center">Hello world</h2>
      <h1>
        <Users />
      </h1>
    </>
  );
}

export default App;

// App.jsx

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Users from "./Users";
// import UserDetails from "./UserDetails";

// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/" exact>
//           <Users />
//         </Route>
//         <Route path="/user/:id">
//           <UserDetails />
//         </Route>
//       </Switch>
//     </Router>
//   );
// };

// export default App;
