import { useEffect, useState } from "react";
import UserProfile from "./UserProfile/UserProfile";
import { Route, Routes, Navigate, Redirect } from "react-router-dom";
import Header from "./Header/Header";
export default function App() {
  useEffect(() => {
    console.log('useEffect running!')
  }, [])
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/user/:id" element={<UserProfile />} />
        <Route path="/user/:id" element={<UserProfile />} />
        <Route path="/user/:id" element={<UserProfile />} />
        <Route path="*" element={<Navigate to="/user/10" replace />} />
      </Routes>
    </div>
  );
}
