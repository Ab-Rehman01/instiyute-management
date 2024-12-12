import React from "react";


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
      </Routes>
    </div>
  );
};

export default App; // Ensure this is a default export
