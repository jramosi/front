import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="container text-center">
      <h2>Se esta usando el admin layout</h2>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
