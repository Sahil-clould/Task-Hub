import { Transition } from "@headlessui/react";
import clsx from "clsx";
import { Fragment, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import React from "react";
import { setOpenSidebar } from "./redux/slices/authSlice";
// Dynamically import Login, TaskDetails, Tasks, Trash, Users, Dashboard, and Register components
const Login = React.lazy(() => import("./pages/Login"));
const TaskDetails = React.lazy(() => import("./pages/TaskDetails"));
const Tasks = React.lazy(() => import("./pages/Tasks"));
const Trash = React.lazy(() => import("./pages/Trash"));
const Users = React.lazy(() => import("./pages/Users"));
const Dashboard = React.lazy(() => import("./pages/dashboard"));
const Register = React.lazy(() => import("./pages/Register")); // Import the Register component

function Layout() {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();

  return user ? (
    <div className='w-full h-screen flex flex-col md:flex-row'>
      <div className='w-1/5 h-screen bg-white sticky top-0 hidden md:block'>
        <Sidebar />
      </div>

      <MobileSidebar />

      <div className='flex-1 overflow-y-auto'>
        <Navbar />
        
        {/* Wrap the Outlet with Suspense to handle loading for lazy-loaded routes */}
        <div className='p-4 2xl:px-10'>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </React.Suspense>
        </div>
      </div>
    </div>
  ) : (
    <Navigate to='/log-in' state={{ from: location }} replace />
  );
}

const MobileSidebar = () => {
  const { isSidebarOpen } = useSelector((state) => state.auth);
  const mobileMenuRef = useRef(null);
  const dispatch = useDispatch();

  const closeSidebar = () => {
    dispatch(setOpenSidebar(false));
  };

  return (
    <>
      <Transition
        show={isSidebarOpen}
        as={Fragment}
        enter='transition-opacity duration-700'
        enterFrom='opacity-x-10'
        enterTo='opacity-x-100'
        leave='transition-opacity duration-700'
        leaveFrom='opacity-x-100'
        leaveTo='opacity-x-0'
      >
        {(ref) => (
          <div
            ref={(node) => (mobileMenuRef.current = node)}
            className={clsx(
              "md:hidden w-full h-full bg-black/40 transition-all duration-700 transform ",
              isSidebarOpen ? "translate-x-0" : "translate-x-full"
            )}
            onClick={() => closeSidebar()}
          >
            <div className='bg-white w-3/4 h-full'>
              <div className='w-full flex justify-end px-5 mt-5'>
                <button
                  onClick={() => closeSidebar()}
                  className='flex justify-end items-end'
                >
                  <IoClose size={25} />
                </button>
              </div>

              <div className='-mt-10'>
                <Sidebar />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};

function App() {
  return (
    <main className='w-full min-h-screen bg-[#f3f4f6] '>
      <Routes>
        <Route element={<Layout />}>
          <Route index path='/' element={<Navigate to='/dashboard' />} />
          
          {/* Wrap each route with Suspense for lazy-loading */}
          <Route path='/dashboard' element={
            <React.Suspense fallback={<div>Loading Dashboard...</div>}>
              <Dashboard />
            </React.Suspense>
          } />
          
          <Route path='/tasks' element={
            <React.Suspense fallback={<div>Loading Tasks...</div>}>
              <Tasks />
            </React.Suspense>
          } />
          
          <Route path='/completed/:status' element={
            <React.Suspense fallback={<div>Loading Completed Tasks...</div>}>
              <Tasks />
            </React.Suspense>
          } />
          
          <Route path='/in-progress/:status' element={
            <React.Suspense fallback={<div>Loading In-Progress Tasks...</div>}>
              <Tasks />
            </React.Suspense>
          } />
          
          <Route path='/todo/:status' element={
            <React.Suspense fallback={<div>Loading To-Do Tasks...</div>}>
              <Tasks />
            </React.Suspense>
          } />
          
          <Route path='/team' element={
            <React.Suspense fallback={<div>Loading Users...</div>}>
              <Users />
            </React.Suspense>
          } />
          
          <Route path='/trashed' element={
            <React.Suspense fallback={<div>Loading Trash...</div>}>
              <Trash />
            </React.Suspense>
          } />
          
          <Route path='/task/:id' element={
            <React.Suspense fallback={<div>Loading Task Details...</div>}>
              <TaskDetails />
            </React.Suspense>
          } />
        </Route>

        {/* Suspense for the Login route */}
        <Route path='/log-in' element={
          <React.Suspense fallback={<div>Loading Login...</div>}>
            <Login />
          </React.Suspense>
        } />
        
        {/* Suspense for the Register route */}
        <Route path='/register' element={
          <React.Suspense fallback={<div>Loading Register...</div>}>
            <Register />
          </React.Suspense>
        } />
      </Routes>

      <Toaster richColors />
    </main>
  );
}

export default App;
