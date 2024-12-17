// src/pages/Teacher/TeacherDashboard.jsx
import React, { useState, useEffect } from 'react';
//import { useClerk, useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

const TeacherDashboard = () => {
  const { user } = useUser(); // Get the user data from Clerk
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // You can fetch teacher-specific data here (like courses, students, etc.)
    if (user) {
      // Example fetch for courses, in a real app, replace this with your API call
      setCourses([
        { id: 1, name: 'Math 101', time: '10:00 AM' },
        { id: 2, name: 'Science 102', time: '1:00 PM' },
      ]);
      setStudents([
        { id: 1, name: 'John Doe', enrolledIn: 'Math 101' },
        { id: 2, name: 'Jane Smith', enrolledIn: 'Science 102' },
      ]);
    }
  }, [user]);

  return (
    <div className="teacher-dashboard">
      <h1>Welcome, {user?.firstName}!</h1>
      <p>Here’s an overview of your teaching activities:</p>

      {/* Display Teacher’s Courses */}
      <div className="courses">
        <h2>Your Courses</h2>
        <ul>
          {courses.map((course) => (
            <li key={course.id}>
              <h3>{course.name}</h3>
              <p>Time: {course.time}</p>
              {/* You can link to a specific course page */}
              <Link to={`/teacher/course/${course.id}`}>View Course</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Display Teacher’s Students */}
      <div className="students">
        <h2>Your Students</h2>
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              <h3>{student.name}</h3>
              <p>Enrolled in: {student.enrolledIn}</p>
              {/* Link to student details page */}
              <Link to={`/teacher/student/${student.id}`}>View Student</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeacherDashboard;
