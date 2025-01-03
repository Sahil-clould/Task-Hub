import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Textbox from "../components/Textbox";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { useRegisterMutation } from "../redux/slices/api/authApiSlice";
import Loading from "../components/Loader";
import { toast } from 'sonner'; 

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [registerUser, { isLoading }] = useRegisterMutation();

  const submitHandler = async (data) => {
    try {
      // Ensure the `isAdmin` checkbox sends a boolean value
      data.isAdmin = data.isAdmin === true;
      
      // Register the user with the API call
      const result = await registerUser(data).unwrap();
      toast.success('Registration successful! Please login.');
      navigate("/log-in");
    } catch (error) {
      console.error("Registration Error:", error);
      toast.error(error?.data?.message || "An error occurred during registration. Please try again.");
    }
  };

  return (
    <div className='w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-[#f3f4f6]'>
      <div className='w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center'>
        {/* Left side */}
        <div className='h-full w-full lg:w-2/3 flex flex-col items-center justify-center'>
          <div className='w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:-mt-20'>
            <span className='flex gap-1 py-1 px-3 border rounded-full text-sm md:text-base border-gray-300 text-gray-600'>
              Manage all your tasks in one place!
            </span>
            <p className='flex flex-col gap-0 md:gap-4 text-4xl md:text-6xl 2xl:text-7xl font-black text-center text-blue-700'>
              <span>Project-Task</span>
              <span>Manager</span>
            </p>
            <div className='cell'>
              <div className='circle rotate-in-up-left'></div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className='w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center'>
          <form
            onSubmit={handleSubmit(submitHandler)}
            className='form-container w-full md:w-[400px] flex flex-col gap-y-8 bg-white px-10 pt-14 pb-14'
          >
            <div className=''>
              <p className='text-blue-600 text-3xl font-bold text-center'>
                Create an account!
              </p>
              <p className='text-center text-base text-gray-700 '>
                Join us to manage your tasks effectively.
              </p>
            </div>

            <div className='flex flex-col gap-y-5'>
              <Textbox
                placeholder='John Doe'
                type='text'
                name='name'
                label='Full Name'
                className='w-full rounded-full'
                register={register("name", {
                  required: "Full Name is required!",
                })}
                error={errors.name ? errors.name.message : ""}
              />
              <Textbox
                placeholder='Project Manager'
                type='text'
                name='title'
                label='Title'
                className='w-full rounded-full'
                register={register("title", {
                  required: "Title is required!",
                })}
                error={errors.title ? errors.title.message : ""}
              />
              <Textbox
                placeholder='email@example.com'
                type='email'
                name='email'
                label='Email Address'
                className='w-full rounded-full'
                register={register("email", {
                  required: "Email Address is required!",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address!",
                  },
                })}
                error={errors.email ? errors.email.message : ""}
              />
              <Textbox
                placeholder='your password'
                type='password'
                name='password'
                label='Password'
                className='w-full rounded-full'
                register={register("password", {
                  required: "Password is required!",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long!",
                  },
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    message: "Password must contain letters and numbers!",
                  },
                })}
                error={errors.password ? errors.password.message : ""}
              />

              {isLoading ? (
                <Loading />
              ) : (
                <Button
                  type='submit'
                  label='Register'
                  className='w-full h-10 bg-blue-700 text-white rounded-full'
                />
              )}
            </div>
            <span className='text-sm text-gray-500 text-center'>
             Already have an account?{" "}
              <Link to="/log-in" className='text-blue-600 hover:underline'>
                Login here
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
