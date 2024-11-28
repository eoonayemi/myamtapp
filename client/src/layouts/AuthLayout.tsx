import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <>
      <main className="hidden md:block bg-img bg-black bg-cover bg-center h-screen w-full">
        <div className="bg-dark_primary bg-opacity-90 flex justify-center items-center h-screen w-full ">
          <Outlet />
        </div>
      </main>
      <main className="md:hidden bg-white bg-opacity-90 flex justify-center items-center h-screen w-full ">
        <Outlet />
      </main>
    </>
  );
};

export default AuthLayout;
