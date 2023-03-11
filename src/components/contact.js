import React from 'react'
import Header from './header'
import fo1 from '../assets/img/footer/1.svg';
import fo2 from '../assets/img/footer/2-1.svg';
import fo21 from '../assets/img/footer/2.svg';
import fo3 from '../assets/img/footer/3.svg';
import fb from '../assets/img/fb.svg';
import insta from '../assets/img/instagram.svg';
import twitter from '../assets/img/twitter.svg';
import logo from '../assets/img/logoo.svg';

const Contact = () => {
    return (
        <>
            <div className='tw-w-full'>
                <Header>
                </Header>
                <div>
                    <div class="tw-flex tw-flex-col-reverse min-[900px]:tw-flex-row tw-mx-[10px]  min-[900px]:tw-mx-[200px] tw-my-[50px]">
                        <div className='min-[900px]:tw-w-1/2  tw-h-auto ' style={{ 'background': '#fff', 'border': '1px solid #000' }}>
                            <div class="tw-grid tw-grid-cols-2 tw-gap-4 tw-m-[20px]">
                                <div className="">
                                    <label htmlFor="first-name" className="tw-block tw-text-sm tw-font-medium tw-leading-6 tw-text-gray-900">
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="tw-mt-2 tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                                    />
                                </div>
                                <div className="">                      <label htmlFor="last-name" className="tw-block tw-text-sm tw-font-medium tw-leading-6 tw-text-gray-900">
                                    Last name
                                </label>
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="tw-mt-2 tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                                    />
                                </div>
                            </div>
                            <div class="tw-grid tw-grid-cols-1 tw-gap-4 tw-m-[20px]">
                                <div className="">
                                    <label htmlFor="Email" className="tw-block tw-text-sm tw-font-medium tw-leading-6 tw-text-gray-900">
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        name="Email"
                                        id="Email"
                                        autoComplete="given-name"
                                        className="tw-mt-2 tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                                    />
                                </div>
                            </div>
                            <div class="tw-grid tw-grid-cols-1 tw-gap-4 tw-m-[20px]">
                                <div className="">
                                    <label htmlFor="Message" className="tw-block tw-text-sm tw-font-medium tw-leading-6 tw-text-gray-900">
                                        Message
                                    </label>
                                    <input
                                        type="text"
                                        name="Message"
                                        id="Message"
                                        autoComplete="given-name"
                                        className="tw-mt-2 tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                                    />
                                </div>
                            </div>
                            <div class="tw-grid tw-grid-cols-1 tw-gap-4 tw-m-[20px]">
                                <div className="">
                                    <label htmlFor="Additional Details" className="tw-block tw-text-sm tw-font-medium tw-leading-6 tw-text-gray-900">
                                        Additional Details
                                    </label>
                                    <textarea
                                        rows="5"
                                        type="text"
                                        name="Additional Details"
                                        id="Additional Details"
                                        autoComplete="given-name"
                                        className="tw-mt-2 tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                                    />
                                </div>
                            </div>
                            <div class="tw-grid tw-grid-cols-1 tw-gap-4 tw-m-[20px]">
                                <button class="tw-bg-black hover:tw-bg-white tw-text-white hover:tw-text-black tw-font-bold tw-py-2 tw-px-4 tw-rounded">
                                    Send Message
                                </button>

                            </div>
                        </div>
                        <div className='min-[900px]:tw-w-1/2 tw-mx-[30px] tw-my-auto tw-mb-[20px] min-[900px]:tw-mb-auto'>
                            <div class="tw-flex tw-flex-col">
                                <div className='mx-auto tw-font-sans tw-font-semibold tw-text-[12px] tw=leading-[16px] tw-text-[#E9145A]'>Got a Question?</div>
                                <div className='mx-auto tw-font-sans tw-font-bold tw-text-[36px] tw=leading-[49px] tw-text-[#000000]'>Contact Florian</div>
                                <div className='mx-auto tw-font-sans tw-font-semibold tw-text-[16px] tw=leading-[22px] tw-text-[#000] ' style={{'textAlign':'center'}}>We’re here to help and answer any question you might have. We look forward to hearing from you</div>
                                <div className='tw-mt-[30px] tw-hidden min-[900px]:tw-block'>
                                    <img src={logo} alt='ssss'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* footer */}
                <div className='tw-w-full' style={{ 'background': 'rgba(229, 229, 229, 0.5)' }}>
                    <div className='tw-grid min-[900px]:tw-grid-cols-3 tw-grid-cols-1 tw-gap-4 tw-mx-10 md:tw-mx-40 tw-py-8 mx-auto' >
                        <img className='mx-auto my-auto min-[900px]:tw-block tw-hidden' src={fo1} alt='g' ></img>
                        <div>
                            <div className='columns-1'>
                                <img className='mx-auto' src={fo2} alt='g' ></img>
                                <img className='mx-auto' src={fo21} alt='g' ></img>
                                <div className='tw-grid tw-grid-cols-3 tw-gap-4 tw-mx-40 mt-4 '>
                                    <img className='mx-auto' src={fb} alt='g' ></img>
                                    <img className='mx-auto' src={insta} alt='g' ></img>
                                    <img className='mx-auto' src={twitter} alt='g' ></img>
                                </div>
                            </div>
                        </div>
                        <img className='mx-auto my-auto min-[900px]:tw-block tw-hidden' src={fo3} alt='g' ></img>
                    </div>
                    <hr className='w-full tw-hidden min-[900px]:tw-block' />
                    <div className=' tw-hidden min-[900px]:tw-grid tw-grid-cols-3 tw-gap-4 tw-mx-10 md:tw-mx-40 tw-mt-4 tw-py-4 mx-auto' >
                        <div></div>
                        <div className='mx-auto'>&#169;Copyrights 2023</div>
                        <div className='mx-auto'>Privacy policy / Cookies policy / Terms of use</div>
                    </div>
                    <div className=' tw-grid min-[900px]:tw-hidden tw-grid-cols-1 tw-gap-4 tw-mx-10 md:tw-mx-40 tw-py-2 mx-auto' >
                        {/* <div></div> */}
                        <div className='mx-auto'>&#169;Copyrights 2023
                        </div>
                        <div className='mx-auto'>Privacy policy / Cookies policy / Terms of use</div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Contact