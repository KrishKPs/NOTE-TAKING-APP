import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [show, setshow] = useState(false);

    return (
        <section className="py-14 bg-white dark:bg-[#0b1727] text-indigo-900 dark:text-white">
            <div className="container px-4 mx-auto">
                <div className="flex justify-center items-center w-full lg:max-w-md mx-auto rounded-2xl overflow-hidden bg-red-50 shadow-lg">
                    <div className="col-span-12 lg:col-span-7 p-6 lg:p-12">
                        <div className="w-full h-full bg-white dark:bg-[#0b1727] rounded-2xl p-6 lg:p-12">
                            <h2 className="text-indigo-900 dark:text-white text-3xl md:text-4xl font-bold mb-6 text-center">
                                Welcome Back!
                            </h2>

                            <div className="mb-4">
                                <input
                                    type="text"
                                    className="w-full bg-blue-50 dark:bg-slate-700 min-h-[48px] leading-10 px-4 p-2 rounded-lg outline-none border border-transparent focus:border-blue-600"
                                    placeholder="Username"
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>

                            <div className="w-full relative mb-4">
                                <input
                                    type={show ? 'text' : 'password'}
                                    className="w-full bg-blue-50 dark:bg-slate-700 min-h-[48px] leading-10 px-4 p-2 rounded-lg outline-none border border-transparent focus:border-blue-600"
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {show ? (
                                    <FaRegEye
                                        onClick={() => setshow(!show)}
                                        className="absolute top-1/2 -translate-y-1/2 right-2 opacity-80 cursor-pointer"
                                    />
                                ) : (
                                    <FaRegEyeSlash
                                        onClick={() => setshow(!show)}
                                        className="absolute top-1/2 -translate-y-1/2 right-2 opacity-80 cursor-pointer"
                                    />
                                )}
                            </div>

                            <button
                                onClick={async () => {
                                    await axios.post("http://localhost:3099/user/login", {
                                        username: username,
                                        Password: password
                                    })
                                    .then((res) => {
                                        console.log(res.data);
                                        alert(res.data.msg);
                                        localStorage.setItem("token", res.data.token);
                                        navigate("/dashboard");
                                    });
                                }}
                                className="bg-indigo-900 text-white py-3 px-6 rounded w-full hover:bg-indigo-800"
                            >
                                Login
                            </button>

                            <div className="flex items-center my-6 justify-center">
                                <p className="mb-0 mr-2 opacity-50">Don't have an account?</p>
                                <a href="#!" className="text-blue-600 font-bold"> <Link to={'/signup'}> Create Account</Link></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
