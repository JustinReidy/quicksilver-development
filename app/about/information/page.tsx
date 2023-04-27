export const metadata = {
    title: 'Get Information',
    description: 'Get more information'
}

export default function Information() {
    return (
        <section className='bg-gradient-to-b from-gray-100 to-white'>
            <div className="max-w-6xl mx-auto px-4 sm:px=6">
                <div className='pt-32 pb-12 md:pt-40 md:pb-20'>
                    {/* Page header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                        <h1 className="h1 mb-4" data-aos="zoom-y-out">Want more <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">information</span>?</h1>
                        <p className="text-xl text-gray-600" data-aos='zoom-y-out' data-aos-delay='250'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam ipsa officia saepe odit accusamus exercitationem debitis quasi, vero porro tenetur quidem consequatur doloribus eos ad expedita ut nemo autem quod quae. Fuga, ullam facilis sed sunt quidem tempore expedita debitis, totam illum repudiandae mollitia vel ipsa ut eos laboriosam numquam.</p>
                    </div>
                    {/* Form */}
                    <div className="max-w-sm mx-auto">
                        <form>
                            <div className="flex flex-wrap -mx-3 mb-4">
                                <div className="w-full px-3" data-aos='zoom-y-out' data-aos-delay='350'>
                                    <label htmlFor="name" className="block text-gray-800 text-sm font-medium mb-1">Name <span className="text-red-600">*</span></label>
                                    <input type="text" id="name" className="form-input w-full text-gray-800" placeholder="John Doe" required />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-4">
                                <div className="w-full px-3" data-aos='zoom-y-out' data-aos-delay='450'>
                                    <label htmlFor="email" className="block text-gray-800 text-sm font-medium mb-1">Email <span className="text-red-600">*</span></label>
                                    <input type="email" id="email" className="form-input w-full text-gray-800" placeholder="John.Doe@acmeco.com" required />
                                </div>
                            </div>
                            <div className='flex flex-wrap -mx-3 mb-4'>
                                <div className="w-full px-3" data-aos='zoom-y-out' data-aos-delay='550'>
                                    <label htmlFor="budget" className="block text-gray-800 text-sm font-medium mb-1">Budget <span className="text-red-600">*</span></label>
                                    <input type="text" id="budget" className="form-input w-full text-gray-800" placeholder="$2000" required />
                                </div>
                            </div>    
                            <div className="flex flex-wrap -mx-3 mt-6" data-aos='zoom-y-out' data-aos-delay='650'>
                                <div className="w-full px-3">
                                    <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Request Information</button>
                                </div>
                            </div>
                        </form> 
                    </div>
                </div>
            </div>
        </section>
    )
}