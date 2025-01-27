import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Short from "./pages/ShortUrlApp/short";
import Upload from "./pages/fileUpload/upload";
import Blog from "./pages/Blogging/Blog";
import Signup from "./pages/Blogging/signup";
import Login from "./pages/Blogging/login";
import CreateBlog from "./pages/Blogging/create";
import PrivateRoute from "./privateRoutes";

function App() {
  return (
    <main>
      <div>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Routes */}
          <Route path="/ShortUrl" element={
              <PrivateRoute>
                <Short />
              </PrivateRoute>
            }
          />
          <Route path="/Upload" element={
              <PrivateRoute>
                <Upload />
              </PrivateRoute>
            }
          />
          <Route path="/blog" element={
              <PrivateRoute>
                <Blog />
              </PrivateRoute>
            }
          />
          <Route path="/create" element={
              <PrivateRoute>
                <CreateBlog />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </main>
  );
}

export default App;
