import { Link } from "react-router-dom";
function Register() {
    return (
        <>
            <section className='relative bg-[#F5FCF8] py-16 px-8 '>

                <div className='pt-4 '>
                    <h2 className='uppercase text-center pt-14  text-3xl tracking-wide font-bold text-[#53565A] '>Login</h2>

                </div>

                <div className="flex justify-center items-center">
                    <form className='w-1/3 px-0 bg-transparent p-6 rounded-md  '>


                        <div className="relative w-full mb-6">
                            <input
                                type="email"
                                id="email"
                                placeholder=" "
                                className="peer bg-transparent border border-[#93A2AE] w-full p-2 pt-5 rounded outline-none hover:ring-1 hover:ring-[#93A2AE] placeholder:text-[#6B7280] placeholder:text-2xl placeholder:font-medium"
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-3 text-[#4B5563] text-lg transition-all
               peer-placeholder-shown:top-4 peer-placeholder-shown:text-md peer-placeholder-shown:text-gray-600
               peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#374151]
               bg-[#F5FCF8] px-1 pointer-events-none"
                            >

                                First Name *
                            </label>
                        </div>


                        <div className="relative w-full mb-6">
                            <input
                                type="email"
                                id="email"
                                placeholder=" "
                                className="peer bg-transparent border border-[#93A2AE] w-full p-2 pt-5 rounded outline-none hover:ring-1 hover:ring-[#93A2AE] placeholder:text-[#6B7280] placeholder:text-2xl placeholder:font-medium"
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-3 text-[#4B5563] text-lg transition-all
               peer-placeholder-shown:top-4 peer-placeholder-shown:text-md peer-placeholder-shown:text-gray-600
               peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#374151]
               bg-[#F5FCF8] px-1 pointer-events-none"
                            >

                                Last Name *
                            </label>
                        </div>

                        <div className="relative w-full mb-6">
                            <input
                                type="email"
                                id="email"
                                placeholder=" "
                                className="peer bg-transparent border border-[#93A2AE] w-full p-2 pt-5 rounded outline-none hover:ring-1 hover:ring-[#93A2AE] placeholder:text-[#6B7280] placeholder:text-2xl placeholder:font-medium"
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-3 text-[#4B5563] text-lg transition-all
               peer-placeholder-shown:top-4 peer-placeholder-shown:text-md peer-placeholder-shown:text-gray-600
               peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#374151]
               bg-[#F5FCF8] px-1 pointer-events-none"
                            >

                                Email *
                            </label>
                        </div>

                        <div className="relative w-full mb-2">
                            <input
                                type="email"
                                id="email"
                                placeholder=" "
                                className="peer bg-transparent border border-[#93A2AE] w-full p-2 pt-5 rounded outline-none hover:ring-1 hover:ring-[#93A2AE] placeholder:text-[#6B7280] placeholder:text-2xl placeholder:font-medium"
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-3 text-[#4B5563] text-lg transition-all
               peer-placeholder-shown:top-4 peer-placeholder-shown:text-md peer-placeholder-shown:text-gray-600
               peer-focus:top-1 peer-focus:text-sm peer-focus:text-[#374151]
               bg-[#F5FCF8] px-1 pointer-events-none"
                            >

                                Password *
                            </label>
                        </div>

                        <div> <input type="checkbox" className="text-xl" /> <label htmlFor="" className="px-1 text-[#4B5563]"> Email me with news and offers. </label>  </div>  

                        



                        <div className='w-2/4 mx-auto flex justify-center'>
                            <button
                                type="submit"
                                className=' mt-10   bg-[#435870]   text-md text-white px-9 py-4 rounded  '
                            >
                                Create
                            </button>

                        </div>

                        <div className="text-center mt-4">
                            <Link to="/login" className="text-[#4B5563]  underline">
                                Login
                            </Link>
                        </div>

                    </form>


                </div>

            </section>
        </>
    )
}
export default Register;