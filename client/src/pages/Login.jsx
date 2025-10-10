import { Link } from "react-router-dom";

function Login() {
    return (
        <>
            <section className='relative bg-[#F5FCF8] py-24 px-8 '>

                <div className='py-10'>
                    <h2 className='uppercase text-center   text-3xl tracking-wide font-bold text-[#53565A] '>Login</h2>

                </div>

                <div className="flex justify-center items-center">
                    <form className='w-1/3 px-0 bg-transparent   rounded-md  '>





                        <div className="relative w-full mb-6">
                            <input
                                type="email"
                                id="email"
                                placeholder=" "
                                className="peer bg-transparent border border-[#93A2AE] w-full p-2 pt-5 rounded outline-none   placeholder:text-[#6B7280] placeholder:text-2xl placeholder:font-medium"
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-3 text-[#4B5563] text-lg transition-all
      peer-placeholder-shown:top-4 peer-placeholder-shown:text-md peer-placeholder-shown:text-gray-600
      peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#374151]
      bg-[#F5FCF8] px-1"
                            >
                                Email *
                            </label>
                        </div>

                        <div className="relative w-full mb-2">
                            <input
                                type="password"
                                id="password"
                                placeholder=" "
                                className="peer bg-transparent border border-[#93A2AE] w-full p-2 pt-5 rounded outline-none   placeholder:text-[#6B7280] placeholder:text-2xl placeholder:font-medium"
                            />
                            <label
                                htmlFor="password"
                                className="absolute left-3 text-[#4B5563] text-lg transition-all
      peer-placeholder-shown:top-4 peer-placeholder-shown:text-md peer-placeholder-shown:text-gray-600
      peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#374151]
      bg-[#F5FCF8] px-1"
                            >
                                Password *
                            </label>
                        </div>
                        <div className="   ">
                            <Link to="/forgotpass" className="text-[#4B5563]  underline">
                               Forgot your password?
                            </Link>
                        </div>


                        <div className='w-2/4 mx-auto flex justify-center'>
                            <button
                                type="submit"
                                className=' mt-10   bg-[#435870]   text-md text-white px-9 py-4 rounded  '
                            >
                                Sign In
                            </button>


                        </div>
                        <div className="text-center mt-4">
                            <Link to="/register" className="text-[#4B5563]  underline">
                                Create Account
                            </Link>
                        </div>

                         <div className="text-center mt-7">
                            <Link to="/wholesale" className="text-[#4B5563]  underline">
                                Create Wholsale Account
                            </Link>
                        </div>

                    </form>




                </div>

            </section>
        </>
    )
}
export default Login;