import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";  
import Home from "./components/pages/Home";
import Dashboard from "./components/layout/Dashboard";
import Overview from "./components/pages/Overview";
import Settings from "./components/pages/Settings";
import Profile from "./components/pages/Profile";
import Videos from "./components/pages/Videos";  

function App() {
  return (
    <Suspense fallback = {<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Overview />} />
            <Route path = "videos" element = {<Videos />} />
            <Route path = "settings" element = {<Settings />} />
            <Route path = "profile" element = {<Profile />} />
          </Route>
        </Routes>
      </>
    </Suspense>
  )
}

export default App 
