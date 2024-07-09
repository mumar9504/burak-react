import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import HomePage from "./screens/homePage/index";
import ProductsPage from "./screens/productsPage/index";
import OrdersPage from "./screens/ordersPage/index";
import UserPage from "./screens/userPage/index";
import HelpPage from "./screens/helpPage";
import HomeNavbar from "./components/headers/HomeNavbar";
import OtherNavbar from "./components/headers/OtherNavbar";
import Footer from "./components/footer";
import "../css/app.css";
import "../css/navbar.css";
import "../css/footer.css";


function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? <HomeNavbar /> : <OtherNavbar />}
      <Switch>
        <Route path="/products" exact component={ProductsPage} />
        <Route path="/orders" exact component={OrdersPage} />
        <Route path="/member-page" exact component={UserPage} />
        <Route path="/help" exact component={HelpPage} />
        <Route path="/" exact component={HomePage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;





// import React from "react";
// import { Box, Button, Container, Stack, Typography } from "@mui/material";
// import { Link, Route, Switch, useLocation } from "react-router-dom";
// import { HomePage } from "./screens/homePage/index";
// import { ProductsPage } from "./screens/productsPage/index";
// import { OrdersPage } from "./screens/ordersPage/index";
// import { UserPage } from "./screens/userPage/index";
// import { HelpPage } from "./screens/helpPage";
// import { HomeNavbar } from "./components/headers/HomeNavbar";
// import { OtherNavbar } from "./components/headers/OtherNavbar";
// import { Footer } from "./components/footer";
// import "../css/app.css";
// import "../css/navbar.css";

// function App() {
//   const location = useLocation();

//   return (
//     <>
//       {location.pathname === "/" ? <HomeNavbar /> : <OtherNavbar />}
//       <Switch>
//         <Route path="/products">
//           <ProductsPage />
//         </Route>
//         <Route path="/orders">
//           <OrdersPage />
//         </Route>
//         <Route path="/member-page">
//           <UserPage />
//         </Route>
//         <Route path="/help">
//           <HelpPage />
//         </Route>
//         <Route path="/">
//           <HomePage />
//         </Route>
//       </Switch>
//       <Footer />
//     </>
//   );
// }

// export default App;
