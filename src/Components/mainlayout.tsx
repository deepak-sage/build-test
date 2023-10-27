import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Outlet />
    </div>
  );
};

export default MainLayout;
