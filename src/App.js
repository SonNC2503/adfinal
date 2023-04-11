import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import ListUser from "./pages/list/Listuser";
import ListProduct from "./pages/list/Listproduct";
import ListNews from "./pages/list/Listnew";
import ListCategory from "./pages/list/Listcategory";
import ListAboutUs from "./pages/list/ListaboutUs";
import ListSupport from "./pages/list/Listsupport";



import Single from "./pages/single/Single";


import Newuser from "./pages/new/Newuser";
import Newproduct from "./pages/new/Newproduct";
import Newnews from "./pages/new/Newnewspaper";
import Newcategory from "./pages/new/Newcategory";
import NewaboutUs from "./pages/new/NewaboutUs";
import Newsupport from "./pages/new/Newsupport";




import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs, userInputs, newInputs, categoryInputs, aboutUsInputs, supportInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";



function App() {


  const { darkMode } = useContext(DarkModeContext);

  const { currentUser } = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };


  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>

          <Route>
            <Route path="/" index element={<Login />} />
            <Route path="/dashboard"
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />

            <Route path="users">
              <Route
                index
                element={
                  <RequireAuth>
                    <ListUser />
                  </RequireAuth>
                }
              />
              <Route
                path=":userId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <Newuser inputs={userInputs} title="Add New User" />
                  </RequireAuth>
                }
              />


            </Route>
            <Route path="products">
              <Route
                index
                element={
                  <RequireAuth>
                    <ListProduct />
                  </RequireAuth>
                }
              />
              <Route
                path=":productId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <Newproduct inputs={productInputs} title="Add New Product" />
                  </RequireAuth>
                }
              />
            </Route>


            <Route path="news">
              <Route
                index
                element={
                  <RequireAuth>
                    <ListNews />
                  </RequireAuth>
                }
              />
              <Route
                path=":newsId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <Newnews inputs={newInputs} title="Add New Newspaper" />
                  </RequireAuth>
                }
              />
            </Route>

            <Route path="category">
              <Route
                index
                element={
                  <RequireAuth>
                    <ListCategory />
                  </RequireAuth>
                }
              />
              <Route
                path=":newsId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <Newcategory inputs={categoryInputs} title="Add New Category" />
                  </RequireAuth>
                }
              />
            </Route>

            <Route path="aboutUs">
              <Route
                index
                element={
                  <RequireAuth>
                    <ListAboutUs />
                  </RequireAuth>
                }
              />
              <Route
                path=":newsId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <NewaboutUs inputs={aboutUsInputs} title="Add Information About My Store" />
                  </RequireAuth>
                }
              />
            </Route>

            <Route path="support">
              <Route
                index
                element={
                  <RequireAuth>
                    <ListSupport />
                  </RequireAuth>
                }
              />
              <Route
                path=":newsId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <Newsupport inputs={supportInputs} title="Add New Support" />
                  </RequireAuth>
                }
              />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;