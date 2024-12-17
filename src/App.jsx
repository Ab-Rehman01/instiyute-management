// src/App.jsx
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
//import { useClerk, useUser, RedirectToSignIn } from '@clerk/clerk-react';
import Navbar from './components/Navbar';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AddCourse from './pages/Admin/AddCourse';
import ManageTeachers from './pages/Admin/ManageTeachers';
import ManageBatches from './pages/Admin/ManageBatches';
import ManageSections from './pages/Admin/ManageSections';
import TeacherDashboard from './pages/Teacher/TeacherDashboard';
import SignUpPage from './pages/Auth/SignUpPage'; // Custom SignUp Page
import SignInPage from './pages/Auth/SignInPage'; // Custom SignIn Page

const App = () => {
  // const { isLoaded, user, openSignUp, openSignIn } = useClerk();
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect(() => {
  //   if (isLoaded && user) {
  //     setIsAuthenticated(true);
  //   }
  // }, [isLoaded, user]);

  // if (!isLoaded) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <Navbar />
      <Routes>
        {/* Default Sign In and Sign Up Routes */}
        {/* <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} /> */}

        {/* Admin and Teacher Routes */}
        {/* {isAuthenticated && (
          <>
            {user?.publicMetadata.role === 'admin' && ( */}
              <>
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/admin/add-course" element={<AddCourse />} />
                <Route path="/admin/manage-teachers" element={<ManageTeachers />} />
                <Route path="/admin/manage-batches" element={<ManageBatches />} />
                <Route path="/admin/manage-sections" element={<ManageSections />} />
              </>
            )}

            {/* {user?.publicMetadata.role === 'teacher' && (
              <Route path="/teacher" element={<TeacherDashboard />} /> */}
            )}
          {/* </> */}
        )}
      </Routes>
    </div>
  );
};

export default App;
