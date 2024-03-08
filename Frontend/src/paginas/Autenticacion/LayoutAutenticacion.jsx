import { Outlet } from "react-router-dom";



const LayoutAutenticacion = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 col-span-5">
        < Outlet />
    </div>
);
};

export default LayoutAutenticacion
