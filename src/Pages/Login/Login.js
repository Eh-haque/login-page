import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { IoIosLock } from 'react-icons/io';

const Login = () => {
    return (
        <div className="bg-gradient-to-r from-green-400 to-blue-500 h-screen flex">
            <div className="bg-white w-1/5 m-auto rounded-lg">
                <div className="p-5">
                    <h2 className="text-2xl font-bold">Login</h2>
                    <form className="flex flex-col">
                        <div className="relative">
                            <AiOutlineUser className="relative top-12 left-4" />
                            <input type="text" className="p-2 rounded-full my-5 pl-10" name="" id="" placeholder="Username" />
                        </div>
                        <div className="relative">
                            <IoIosLock className="absolute top-3 left-4" />
                            <input type="password" className="p-2 pl-10 rounded-full mb-5" name="" id="" placeholder="Password" />
                        </div>
                        <label htmlFor="check" className=" self-start"><input type="checkbox" className="p-2 rounded-md mr-2 bg-yellow-300 " name="check" id="check" />Remember me</label>
                        <button className="p-2 mt-5 rounded-full  bg-gradient-to-r from-yellow-300 to-red-500 text-white">LOG IN</button>
                    </form>

                    <p className="mt-24">Not a member? <a href="go" className="text-blue-400">Sign up now</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;