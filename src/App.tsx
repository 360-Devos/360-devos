import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Calendar from "./Calendar.tsx";
import Social from "./Social.tsx";
import Devos from "./Devos.tsx";
import Home from "./Home.tsx";
import Layout from "./Layout.tsx";
import Profile from "./Profile.tsx";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/social" element={<Social />} />
        <Route path="/devos" element={<Devos />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
