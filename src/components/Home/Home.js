// images
import bg1 from '../../img/bg-1.webp';
import logo from '../../img/logo.png';
import social1 from '../../img/socials/social-1.webp';
import social2 from '../../img/socials/social-2.webp';
import social3 from '../../img/socials/social-3.webp';
import social4 from '../../img/socials/social-4.webp';
import social5 from '../../img/socials/social-5.webp';
import social6 from '../../img/socials/social-6.webp';
import stonefishai2 from '../../img/stonefishai-2.gif';

import telegram from '../../img/telegram.png';
import twitter from '../../img/twitter.png';

function Home(props) {

    return (
        <div>
            {/* Hero Section */}
            <div className="home bg-white background-image-cover tw-bg-[80%_0px] sm:tw-bg-[90%_0px] md:tw-bg-[50%_0px] lg:tw-bg-[center] xl:tw-bg-[0_0px]" style={{backgroundImage:"url('" + bg1 + "')"}}>
                <div className="container position-relative">
                    <div className="position-absolute tw-top-[25px] tw-left-0 w-100 px-2 px-sm-0">
                        <div className="bg-color-2 px-4 py-2 tw-border-[3px] tw-border-[#000000] tw-border-solid tw-rounded-[20px] box-shadow-1">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <img src={logo} className="tw-w-[50px] lg:tw-w-[55px] xl:tw-w-[60px] xxl:tw-w-[65px]" alt="Stone Fish AI"/>
                                    </div>
                                    <div className="ps-3">
                                        <p className="friem-regular font-size-170 font-size-md-180 font-size-lg-200 font-size-xl-220 font-size-xxl-230 text-center text-black mb-0">$SAI</p>
                                    </div>

                                    <div className="d-none d-lg-block ps-5">
                                        <p className="friem-regular font-size-100 text-center text-black mb-0">Tokenomics</p>
                                    </div>
                                    <div className="d-none d-lg-block ps-3 ps-xl-4">
                                        <p className="friem-regular font-size-100 text-center text-black mb-0">Community</p>
                                    </div>
                                    <div className="d-none d-lg-block ps-3 ps-xl-4">
                                        <p className="friem-regular font-size-100 text-center text-black mb-0">Meme Library</p>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center tw-mt-[-8px]">
                                    <div className="d-none d-sm-block">
                                        <button
                                            className="btn btn-custom-3 friem-regular font-size-120 font-size-md-140 font-size-xl-160 py-0 px-4 tw-w-[115px] md:tw-w-[126px] xl:tw-w-[136px] text-color-2">Chart
                                        </button>
                                    </div>
                                    <div className="d-none d-sm-block ps-2 pe-2">
                                        <button
                                            className="btn btn-custom-3 friem-regular font-size-120 font-size-md-140 font-size-xl-160 py-0 px-4 tw-w-[115px] md:tw-w-[126px] text-white bg-color-3">Buy
                                        </button>
                                    </div>

                                    <div className="ps-4 tw-mt-[8px]">
                                        <i className="fa-light fa-bars font-size-200 font-size-xl-240 cursor-pointer"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center min-vh-100 py-5">
                    <div className="col-lg-7 mt-4 mt-sm-5 pt-5">
                            <h1 className="friem-regular text-shadow-1 font-size-360 font-size-sm-420 font-size-md-450 font-size-xl-520 font-size-xxl-550 text-center text-white line-height-120 line-height-sm-100 tw-tracking-[-0.04em] mb-5">Welcome to<br/> STONEFISH AI!</h1>
                            <h2 className="friem-regular text-shadow-2 font-size-170 font-size-sm-180 font-size-md-180 font-size-xl-200 font-size-xxl-220 text-center text-white line-height-100 tw-tracking-[-0.01em] mb-5">Venomous Ai Agent on SUI Network</h2>

                            <div className="text-center">
                                <button className="btn btn-custom-3 friem-regular font-size-120 font-size-md-140 font-size-xl-160 pt-[1px] pb-[1px] px-5">Join $SAI Community</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <div className="bg-color-3">
                <div className="container">
                    <div
                        className="bg-color-4 tw-border-[#000000] tw-border-solid tw-border-[4px] tw-rounded-[20px] px-4 py-3">
                        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
                            <div className="d-flex flex-column flex-lg-row align-items-lg-center mb-2 mb-md-0">
                                <div className="d-flex justify-content-center justify-content-md-start align-items-center mb-2 mb-lg-0">
                                    <div>
                                        <i className="fa-solid fa-copy font-size-130 font-size-lg-150"></i>
                                    </div>
                                    <div className="ps-2">
                                        <p className="montserrat text-black font-weight-700 font-size-100 font-size-md-110 font-size-lg-120 mb-0">Token&nbsp;address:</p>
                                    </div>
                                </div>
                                <div className="ps-lg-3">
                                    <p className="montserrat text-center text-md-start text-black font-weight-500 font-size-90 font-size-lg-90 font-size-xl-110 mb-0"
                                       style={{wordBreak: "break-word"}}>0x5b40e84bd4b428fb7ae15a4a36ed1527d1b7bfaeae21855a499714175d215c2e::sai::SAI</p>
                                </div>
                            </div>

                            <div className="d-flex ps-3">
                                <div className="px-1">
                                    <img src={social1} className="tw-w-[40px] lg:tw-w-[50px]" alt=""/>
                                </div>
                                <div className="px-1">
                                    <img src={social2} className="tw-w-[40px] lg:tw-w-[50px]" alt=""/>
                                </div>
                                <div className="px-1">
                                    <img src={social3} className="tw-w-[40px] lg:tw-w-[50px]" alt=""/>
                                </div>
                                <div className="px-1">
                                    <img src={social4} className="tw-w-[40px] lg:tw-w-[50px]" alt=""/>
                                </div>
                                <div className="px-1">
                                    <img src={social5} className="tw-w-[40px] lg:tw-w-[50px]" alt=""/>
                                </div>
                                <div className="px-1">
                                    <img src={social6} className="tw-w-[40px] lg:tw-w-[50px]" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white tw-border-[#000000] tw-border-solid tw-border-[4px] tw-rounded-[20px] px-4 py-3">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="px-sm-5 px-md-2 px-lg-4">
                                    <img src={stonefishai2} className="w-100 tw-mt-[-20px] sm:tw-mt-[-30px] md:tw-mt-[0] xl:tw-mt-[-50px] xxl:tw-mt-[-70px] xl:tw-mb-[-20px] xxl:tw-mb-[-40px]" alt=""/>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="pt-md-3 pt-lg-0 pe-md-4 pe-lg-5 mb-4 mb-md-0">
                                    <div className="pe-lg-4">
                                        <p className="text-center friem-regular text-black font-size-180 font-size-lg-240 font-size-xl-250 font-size-xxl-260">About $SAI</p>
                                        <p className="text-center montserrat text-black font-size-110 font-size-md-100 font-size-lg-120 font-size-xl-130 font-size-xxl-140 font-weight-500">SAI, the Stonefish AI, is the most cunning and resilient creature in the Sui Ocean, embodying the unyielding spirit of innovation.</p>
                                        <p className="text-center montserrat text-black font-size-110 font-size-md-100 font-size-lg-120 font-size-xl-130 font-size-xxl-140 font-weight-500">Rising from the depths of decentralized intelligence, SAI fuses the chaotic brilliance of meme culture with cutting-edge AI technology, creating a project unlike any other in the crypto space.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home