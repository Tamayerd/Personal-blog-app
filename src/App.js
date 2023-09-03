import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Peoples from "./Pages/Peoples";
import AuthProvider from "./Context/AuthProvider";
import Admin from "./Pages/Admin";
import LoginRequired from "./Layout/LoginRequired";
import PermissionRequired from "./Layout/PermissionRequired";
import Layout from "./Layout/Layout";
import GetUserData from "./Layout/GetUserData";
import Meals from "./Pages/CookRecepies";
import RecipeDetails from "./Pages/MealRecepie";
import CookRecepies from "./Pages/CookRecepies";
import data from "./data.json";
import ErrorPage from "./Pages/ErrorPage";
import LogIn from "./Pages/Login";
import Logout from "./Pages/Logout";
import SearchBarFilter from "./Navbar/SearchBarFilter";
import AllDayMeal from "./Pages/AllDayMeal";


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div>
          <Navbar />
          {/* Public */}

          <Routes element={<Layout></Layout>}>
            <Route element={<GetUserData></GetUserData>}>
              <Route path="/" element={<HomePage />} />
              <Route path="/peoples" element={<Peoples />} />
              <Route path="/login" element={<LogIn />} />
            
              <Route path="/logout" element={<Logout></Logout>}></Route>
              <Route path="/404" element={<ErrorPage></ErrorPage>}></Route>
              <Route
                path="/Cook"
                element={<CookRecepies data={data}></CookRecepies>}
              ></Route>
              <Route
                path="/mealrecepies/:id"
                element={<RecipeDetails data={data} />}
              />

              {/* Private */}
              <Route element={<LoginRequired></LoginRequired>}>
              <Route path="/Meals" element={<Meals></Meals>}></Route>
              <Route path="/mealrecepies/:id" element={<SearchBarFilter></SearchBarFilter>}></Route>
              <Route path="/AllDayMeal" element={<AllDayMeal></AllDayMeal>}></Route>
                <Route element={<PermissionRequired></PermissionRequired>}>
                  <Route path="/Admin" element={<Admin></Admin>}></Route>
                </Route>
              </Route>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
