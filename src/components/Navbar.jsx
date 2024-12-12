import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-lg font-bold">Institute Management</h1>
        <div>
          <Link className="mx-2" to="/admin">Admin</Link>
          <Link className="mx-2" to="/teacher">Teacher</Link>
          <Link className="mx-2" to="/student">Student</Link>
          <Link className="mx-2" to="/trainer">Trainer</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
