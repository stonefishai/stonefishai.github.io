// images
import bg1 from '../../img/bg-1.webp';
import logo from '../../img/logo.png';
import social7 from '../../img/socials/social-7.webp';
import social8 from '../../img/socials/social-8.webp';
import social9 from '../../img/socials/social-9.webp';
import social4 from '../../img/socials/social-3.webp';
import social5 from '../../img/socials/social-1.webp';
import social6 from '../../img/socials/social-6.webp';
import stonefishai2 from '../../img/stonefishai-2.gif';
import burn from '../../img/burn.gif';
import wave from '../../img/wave.webp';
import wave2 from '../../img/wave2.webp';
import candle from '../../img/candle.gif';
import clouds from '../../img/clouds.webp';
import stonefishaiLeft from '../../img/stonefishai-left.webp';
import stonefishaiRight from '../../img/stonefishai-right.webp';
import meme1 from '../../img/memes/meme-1.webp';
import meme2 from '../../img/memes/meme-2.webp';
import meme3 from '../../img/memes/meme-3.webp';
import video1 from '../../img/memes/video-1.webm';
import video2 from '../../img/memes/video-2.mp4';
import video3 from '../../img/memes/video-3.mp4';
import fairlaunch from '../../img/fairlaunch.png';

import telegram from '../../img/telegram.png';
import twitter from '../../img/twitter.png';

function Home(props) {

    return (
        <div>
            {/* Hero Section */}
            <div
                className="home bg-white background-image-cover tw-bg-[80%_0px] sm:tw-bg-[90%_0px] md:tw-bg-[50%_0px] lg:tw-bg-[center] xl:tw-bg-[0_0px]"
                style={{backgroundImage: "url('" + bg1 + "')"}}>
                <div className="container position-relative">
                    <div className="position-absolute tw-top-[25px] tw-left-0 w-100 px-2 px-sm-0">
                        <div
                            className="bg-color-2 px-4 py-2 tw-border-[3px] tw-border-[#000000] tw-border-solid tw-rounded-[20px] box-shadow-1">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex align-items-center">
                                    <div>
                                        <img src={logo}
                                             className="tw-w-[50px] lg:tw-w-[55px] xl:tw-w-[60px] xxl:tw-w-[65px]"
                                             alt="Stone Fish AI"/>
                                    </div>
                                    <div className="ps-3">
                                        <p className="friem-regular font-size-170 font-size-md-180 font-size-lg-200 font-size-xl-220 font-size-xxl-230 text-center text-black mb-0">$SAI</p>
                                    </div>

                                    <div className="d-none d-lg-block ps-5">
                                        <a href="#tokenomics" className="text-decoration-none">
                                            <p className="friem-regular font-size-100 text-center text-black mb-0">Tokenomics</p>
                                        </a>
                                    </div>
                                    <div className="d-none d-lg-block ps-3 ps-xl-4">
                                        <a href="#community-spotlight" className="text-decoration-none">
                                            <p className="friem-regular font-size-100 text-center text-black mb-0">Community</p>
                                        </a>
                                    </div>
                                    <div className="d-none d-lg-block ps-3 ps-xl-4">
                                        <a href="https://drive.google.com/drive/folders/1609UU05hU27Q_SMkLfTbmKYnysRrbuaP?usp=sharing" target="_blank" rel="noreferrer" className="text-decoration-none">
                                            <p className="friem-regular font-size-100 text-center text-black mb-0">Meme
                                                Library</p>
                                        </a>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center tw-mt-[-8px]">
                                    <div className="d-none d-sm-block">
                                        <a href="https://dexscreener.com/sui/0x7c7ffaedb6d8a31618565f74638a9017b24cd74e1affb5ceca2640e02972c8ce" target="_blank" rel="noreferrer"
                                            className="btn btn-custom-3 friem-regular font-size-120 font-size-md-140 font-size-xl-160 py-0 px-4 tw-w-[115px] md:tw-w-[126px] xl:tw-w-[136px] text-color-2">Chart
                                        </a>
                                    </div>
                                    <div className="d-none d-sm-block ps-2 pe-2">
                                        <a href="https://app.turbos.finance/#/trade?input=0x5b40e84bd4b428fb7ae15a4a36ed1527d1b7bfaeae21855a499714175d215c2e::sai::SAI&output=0x2::sui::SUI" target="_blank" rel="noreferrer"
                                            className="btn btn-custom-3 friem-regular font-size-120 font-size-md-140 font-size-xl-160 py-0 px-4 tw-w-[115px] md:tw-w-[126px] text-white bg-color-3">Buy
                                        </a>
                                    </div>

                                    <div className="d-block d-lg-none ps-4 tw-mt-[8px]">
                                        <div className="dropdown">
                                            <i className="fa-light fa-bars font-size-200 font-size-xl-240 cursor-pointer" data-bs-toggle="dropdown"></i>

                                            <ul className="dropdown-menu bg-color-2 tw-border-[2px] tw-border-[#000000] tw-border-solid tw-rounded-[10px]">
                                                <li><a href="#tokenomics" className="text-decoration-none friem-regular dropdown-item">Tokenomics</a></li>
                                                <li><a href="https://t.me/stonefishAI" className="friem-regular dropdown-item" target="_blank" rel="noreferrer">Community</a></li>
                                                <li><a href="https://drive.google.com/drive/folders/1609UU05hU27Q_SMkLfTbmKYnysRrbuaP?usp=sharing" target="_blank" rel="noreferrer" className="friem-regular dropdown-item">Meme Library</a></li>
                                                <li className="d-block d-sm-none px-3 mt-2 mb-2">
                                                    <a href="https://dexscreener.com/sui/0x7c7ffaedb6d8a31618565f74638a9017b24cd74e1affb5ceca2640e02972c8ce" target="_blank" rel="noreferrer"
                                                        className="btn btn-custom-3 friem-regular font-size-120 font-size-md-140 font-size-xl-160 py-0 px-4 tw-w-[115px] md:tw-w-[126px] xl:tw-w-[136px] text-color-2">Chart
                                                    </a>
                                                </li>
                                                <li className="d-block d-sm-none px-3 mb-2">
                                                    <a href="https://app.turbos.finance/#/trade?input=0x5b40e84bd4b428fb7ae15a4a36ed1527d1b7bfaeae21855a499714175d215c2e::sai::SAI&output=0x2::sui::SUI" target="_blank" rel="noreferrer"
                                                        className="btn btn-custom-3 friem-regular font-size-120 font-size-md-140 font-size-xl-160 py-0 px-4 tw-w-[115px] md:tw-w-[126px] text-white bg-color-3">Buy
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row align-items-center min-vh-100 py-5">
                        <div className="col-lg-7 mt-4 mt-sm-5 pt-5">
                            <h1 className="friem-regular text-shadow-1 font-size-360 font-size-sm-420 font-size-md-450 font-size-xl-520 font-size-xxl-550 text-center text-white line-height-120 line-height-sm-100 tw-tracking-[-0.04em] mb-5">Welcome
                                to<br/> STONEFISH AI!</h1>
                            <h2 className="friem-regular text-shadow-2 font-size-170 font-size-sm-180 font-size-md-180 font-size-xl-200 font-size-xxl-220 text-center text-white line-height-100 tw-tracking-[-0.01em] mb-5">Venomous
                                Ai Agent on SUI Network</h2>

                            <div className="text-center mb-4">
                                <a href="https://t.me/stonefishAI" target="_blank" rel="noreferrer"
                                   className="btn btn-custom-3 friem-regular font-size-120 font-size-md-140 font-size-xl-160 pt-[1px] pb-[1px] px-5">Join
                                    $SAI Community
                                </a>
                            </div>

                            <div className="text-center">
                                <a href="https://raidenx.io/@StonefishSAI" target="_blank" rel="noreferrer"
                                   className="btn btn-custom-3 friem-regular font-size-120 font-size-md-140 font-size-xl-160 pt-[1px] pb-[1px] bg-color-3 text-white px-5 tw-w-[311.95px] md:tw-w-[347.13px] xl:tw-w-[382.33px] xxl:tw-w-[382.33px]">SNIPE $SAI HERE
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="bg-color-3 pb-5">
                <div className="container">
                    <div
                        className="bg-color-4 tw-border-[#000000] tw-border-solid tw-border-[4px] tw-rounded-[20px] px-4 py-3">
                        <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
                            <div className="d-flex flex-column flex-lg-row align-items-lg-center mb-2 mb-md-0">
                                <div
                                    className="d-flex justify-content-center justify-content-md-start align-items-center mb-2 mb-lg-0">
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
                                    <a href="https://x.com/stonefishai" target="_blank"
                                       rel="noreferrer">
                                        <img src={social7} className="tw-w-[40px] lg:tw-w-[50px]" alt=""/>
                                    </a>
                                </div>
                                <div className="px-1">
                                    <a href="https://t.me/stonefishAI" target="_blank"
                                       rel="noreferrer">
                                        <img src={social8} className="tw-w-[40px] lg:tw-w-[50px]" alt=""/>
                                    </a>
                                </div>
                                <div className="px-1">
                                    <a href="https://suiscan.xyz/mainnet/coin/0x5b40e84bd4b428fb7ae15a4a36ed1527d1b7bfaeae21855a499714175d215c2e::sai::SAI/txs" target="_blank"
                                       rel="noreferrer">
                                        <img src={social9} className="tw-w-[40px] lg:tw-w-[50px]" alt=""/>
                                    </a>
                                </div>
                                <div className="px-1">
                                    <a href="https://dexscreener.com/sui/0x7c7ffaedb6d8a31618565f74638a9017b24cd74e1affb5ceca2640e02972c8ce" target="_blank"
                                       rel="noreferrer">
                                        <img src={social4} className="tw-w-[40px] lg:tw-w-[50px]" alt=""/>
                                    </a>
                                </div>
                                <div className="px-1">
                                    <a href="https://app.turbos.finance/#/trade?input=0x5b40e84bd4b428fb7ae15a4a36ed1527d1b7bfaeae21855a499714175d215c2e::sai::SAI&output=0x2::sui::SUI" target="_blank"
                                       rel="noreferrer">
                                        <img src={social5} className="tw-w-[40px] lg:tw-w-[50px]" alt=""/>
                                    </a>
                                </div>
                                <div className="px-1">
                                    <a href="https://www.coingecko.com/en/coins/stonefish-ai" target="_blank" rel="noreferrer">
                                        <img src={social6} className="tw-w-[40px] lg:tw-w-[50px]" alt=""/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="bg-white tw-border-[#000000] tw-border-solid tw-border-[4px] tw-rounded-[20px] box-shadow-1 px-4 py-3">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="px-sm-5 px-md-2 px-lg-4">
                                    <img src={stonefishai2}
                                         className="w-100 tw-mt-[-20px] sm:tw-mt-[-30px] md:tw-mt-[0] xl:tw-mt-[-50px] xxl:tw-mt-[-70px] xl:tw-mb-[-20px] xxl:tw-mb-[-40px]"
                                         alt=""/>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="pt-md-3 pt-lg-0 pe-md-4 pe-lg-5 mb-4 mb-md-0">
                                    <div className="pe-lg-4">
                                        <p className="text-center friem-regular text-black font-size-180 font-size-lg-240 font-size-xl-250 font-size-xxl-260">About
                                            $SAI</p>
                                        <p className="text-center montserrat text-black font-size-110 font-size-md-100 font-size-lg-120 font-size-xl-130 font-size-xxl-140 font-weight-500">SAI,
                                            the Stonefish AI, is the most cunning and resilient creature in the Sui
                                            Ocean, embodying the unyielding spirit of innovation.</p>
                                        <p className="text-center montserrat text-black font-size-110 font-size-md-100 font-size-lg-120 font-size-xl-130 font-size-xxl-140 font-weight-500">Rising
                                            from the depths of decentralized intelligence, SAI fuses the chaotic
                                            brilliance of meme culture with cutting-edge AI technology, creating a
                                            project unlike any other in the crypto space.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Burning Milestone */}
            <div className="bg-color-3 pt-5">
                <div className="container">
                    <p className="friem-regular text-shadow-1 text-center text-md-start font-size-260 font-size-sm-280 font-size-md-280 font-size-lg-330 font-size-xl-380 font-size-xxl-420 text-start text-white line-height-120 line-height-sm-100 tw-tracking-[-0.04em] mb-5">$SAI
                        BURNING MILESTONE</p>

                    <div className="row align-items-center">
                        <div className="order-1 order-lg-0 col-lg-6">
                            <div
                                className="bg-color-4 box-shadow-1 tw-border-[#000000] tw-border-solid tw-border-[4px] tw-rounded-[20px] p-4 tw-mb-[30px]">
                                <div className="p-2">
                                    <p className="montserrat text-black font-size-lg-110 font-size-xl-130 font-weight-700">50M $SAI Burned to Ashes - 13 DEC 2024</p>
                                    <p className="montserrat text-black font-size-lg-110 font-size-xl-130 font-weight-700">500K mc milestone</p>

                                    <a href="https://suivision.xyz/txblock/4JQ1MVWXCpR7ZJx73ZaQ63Dg7JYfv63xjk2PDgeMUhv8" target="_blank" rel="noreferrer" className="montserrat text-black font-size-90 font-weight-600 font-size-lg-100 line-height-150 mb-0" style={{wordBreak: "break-word"}}>https://suivision.xyz/txblock/4JQ1MVWXCpR7ZJx73ZaQ63Dg7JYfv63xjk2PDgeMUhv8</a>
                                </div>
                            </div>

                            <div
                                className="bg-color-4 box-shadow-1 tw-border-[#000000] tw-border-solid tw-border-[4px] tw-rounded-[20px] p-4">
                                <div className="p-2">
                                    <p className="montserrat text-black font-size-lg-110 font-size-xl-130 font-weight-700">50M $SAI Burned to Ashes - 16 DEC 2024</p>
                                    <p className="montserrat text-black font-size-lg-110 font-size-xl-130 font-weight-700">1M mc milestone</p>

                                    <a href="https://suivision.xyz/txblock/4JQ1MVWXCpR7ZJx73ZaQ63Dg7JYfv63xjk2PDgeMUhv8"
                                       target="_blank" rel="noreferrer"
                                       className="montserrat text-black font-size-90 font-weight-600 font-size-lg-100 line-height-150 mb-0"
                                       style={{wordBreak: "break-word"}}>https://suivision.xyz/txblock/FJ4nkWQHbDb8xpLsFcRhnuXC2rgRZqUaPXEcXpYFD4Wb</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 order-0 order-lg-1 mb-5 mb-lg-0">
                            <div
                                className="row justify-content-center justify-content-lg-end justify-content-xl-center">
                                <div className="col-11 col-sm-9 col-md-7 col-lg-11 col-xl-10 col-xxl-9">
                                    <img src={burn} className="w-100" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="tw-mt-[100px]">
                    <img src={wave} className="w-100" alt=""/>
                </div>
            </div>

            {/* Community Spotlight */}
            <div
                className="bg-color-5 py-5 position-relative tw-mt-[-10px] sm:tw-mt-[-20px] md:tw-mt-[-50px] md:tw-mb-[-50px]" id="community-spotlight">
                <div
                    className="bg-color-5 position-absolute tw-bottom-[-10px] tw-left-[0] w-100 tw-h-[50px] tw-z-[-1]"></div>

                <div className="container">
                    <div className="d-flex justify-content-between align-items-center mb-5 pb-md-4 pb-lg-4">
                        <div className="d-none d-md-block">
                            <img src={stonefishaiLeft}
                                 className="md:tw-w-[100px] lg:tw-w-[180px] xl:tw-w-[220px] xxl:tw-w-[220px]" alt=""/>
                        </div>
                        <div className="lg:tw-px-[20px] xl:tw-px-[80px] xxl:tw-px-[100px]">
                            <p className="friem-regular text-shadow-1 text-center font-size-300 font-size-sm-290 font-size-md-280 font-size-lg-260 font-size-xl-280 font-size-xxl-340 text-start text-white line-height-120 line-height-sm-100 tw-tracking-[-0.04em] mb-4 pb-2">Community
                                Spotlight!</p>

                            <p className="montserrat text-center text-shadow-3 font-weight-800 font-size-200 font-size-sm-210 font-size-md-200 font-size-lg-190 font-size-xl-210 font-size-xxl-260 text-start text-white line-height-120 line-height-sm-100 tw-tracking-[-0.04em] mb-3">Meme
                                contest winners</p>
                        </div>
                        <div className="d-none d-md-block">
                            <img src={stonefishaiRight}
                                 className="md:tw-w-[100px] lg:tw-w-[180px] xl:tw-w-[220px] xxl:tw-w-[220px]" alt=""/>
                        </div>
                    </div>

                    <p className="friem-regular text-shadow-2 font-size-170 font-size-sm-180 font-size-md-180 font-size-xl-200 font-size-xxl-220 text-center text-white line-height-100 tw-tracking-[-0.01em] mb-5">Meme
                        Photos</p>

                    <div className="row mb-5">
                        <div className="col-md-4 px-lg-2 px-xl-3">
                            <div className="font-size-90">
                                <p className="friem-regular text-shadow-2 font-size-170 font-size-sm-180 font-size-md-180 font-size-xl-200 font-size-xxl-220 text-center text-white line-height-100 tw-tracking-[-0.01em] mb-3">Top
                                    1</p>
                            </div>
                            
                            <a href="https://x.com/ningtya39149/status/1869005427251593258" target="_blank"
                               rel="noreferrer">
                                <div
                                    className="bg-color-4 box-shadow-1 tw-border-[#000000] tw-border-solid tw-border-[4px] tw-rounded-[20px] p-2 p-lg-3 tw-mb-[30px]">
                                    <img src={meme1} className="w-100 tw-rounded-[20px]" alt="Meme"/>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-4 px-lg-2 px-xl-3">
                            <div className="font-size-90">
                                <p className="friem-regular text-shadow-2 font-size-170 font-size-sm-180 font-size-md-180 font-size-xl-200 font-size-xxl-220 text-center text-white line-height-100 tw-tracking-[-0.01em] mb-3">Top
                                    2</p>
                            </div>

                            <a href="https://x.com/Crypt_amos/status/1868544191023993265" target="_blank"
                               rel="noreferrer">
                                <div
                                    className="bg-color-4 box-shadow-1 tw-border-[#000000] tw-border-solid tw-border-[4px] tw-rounded-[20px] p-2 p-lg-3 tw-mb-[30px]">
                                    <img src={meme2} className="w-100 tw-rounded-[20px]" alt="Meme"/>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-4 px-lg-2 px-xl-3">
                            <div className="font-size-90">
                                <p className="friem-regular text-shadow-2 font-size-170 font-size-sm-180 font-size-md-180 font-size-xl-200 font-size-xxl-220 text-center text-white line-height-100 tw-tracking-[-0.01em] mb-3">Top
                                    3</p>
                            </div>

                            <a href="https://x.com/AbuSulaimon456/status/1869974591143084221" target="_blank"
                               rel="noreferrer">
                                <div
                                    className="bg-color-4 box-shadow-1 tw-border-[#000000] tw-border-solid tw-border-[4px] tw-rounded-[20px] p-2 p-lg-3 tw-mb-[30px]">
                                    <img src={meme3} className="w-100 tw-rounded-[20px]" alt="Meme"/>
                                </div>
                            </a>
                        </div>
                    </div>

                    <p className="friem-regular text-shadow-2 font-size-170 font-size-sm-180 font-size-md-180 font-size-xl-200 font-size-xxl-220 text-center text-white line-height-100 tw-tracking-[-0.01em] mb-5">Meme
                        Videos</p>

                    <div className="row">
                        <div className="col-md-4 px-lg-2 px-xl-3">
                            <div className="font-size-90">
                                <p className="friem-regular text-shadow-2 font-size-170 font-size-sm-180 font-size-md-180 font-size-xl-200 font-size-xxl-220 text-center text-white line-height-100 tw-tracking-[-0.01em] mb-3">Top 1</p>
                            </div>

                            <a href="https://x.com/Rt1Mind/status/1870059933758087622" target="_blank"
                               rel="noreferrer">
                                <div
                                    className="bg-color-4 box-shadow-1 tw-border-[#000000] tw-border-solid tw-border-[4px] tw-rounded-[20px] p-2 p-lg-3 tw-mb-[30px]">
                                    <div className="ratio ratio-4x3">
                                        <video autoPlay muted loop controls className="tw-rounded-[20px]">
                                            <source src={video1} type="video/mp4"/>
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-4 px-lg-2 px-xl-3">
                            <div className="font-size-90">
                                <p className="friem-regular text-shadow-2 font-size-170 font-size-sm-180 font-size-md-180 font-size-xl-200 font-size-xxl-220 text-center text-white line-height-100 tw-tracking-[-0.01em] mb-3">Top
                                2</p>
                            </div>

                            <a href="https://x.com/pinguin_farm/status/1870067541760192819" target="_blank"
                               rel="noreferrer">
                                <div
                                    className="bg-color-4 box-shadow-1 tw-border-[#000000] tw-border-solid tw-border-[4px] tw-rounded-[20px] p-2 p-lg-3 tw-mb-[30px]">
                                    <div className="ratio ratio-4x3">
                                        <video autoPlay muted loop controls className="tw-rounded-[20px]">
                                            <source src={video2} type="video/mp4"/>
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className="col-md-4 px-lg-2 px-xl-3">
                            <div className="font-size-90">
                                <p className="friem-regular text-shadow-2 font-size-170 font-size-sm-180 font-size-md-180 font-size-xl-200 font-size-xxl-220 text-center text-white line-height-100 tw-tracking-[-0.01em] mb-3">Top
                                3</p>
                            </div>

                            <a href="https://x.com/masterzionn/status/1870074207419412761" target="_blank"
                               rel="noreferrer">
                                <div
                                    className="bg-color-4 box-shadow-1 tw-border-[#000000] tw-border-solid tw-border-[4px] tw-rounded-[20px] p-2 p-lg-3 tw-mb-[30px]">
                                    <div className="ratio ratio-4x3">
                                        <video autoPlay muted loop controls className="tw-rounded-[20px]">
                                            <source src={video3} type="video/mp4"/>
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <img src={wave2} className="w-100" alt=""/>

            {/* Tokenomics */}
            <div className="bg-color-3 py-5 position-relative" id="tokenomics">
                <div className="container pb-5">
                    <p className="friem-regular text-shadow-1 text-center font-size-300 font-size-sm-290 font-size-md-280 font-size-lg-260 font-size-xl-280 font-size-xxl-340 text-start text-white line-height-120 line-height-md-100 tw-tracking-[-0.04em] mb-5">its
                        about the tokenomics</p>

                    <div className="row justify-content-center align-items-center">
                        <div className="col-10 col-sm-7 col-md-5 col-lg-6 mb-5 mb-lg-0">
                            <div className="pe-lg-5">
                                <div className="mb-4 position-relative">
                                    <div className="position-absolute w-100 tw-z-[2] tw-top-[0] tw-left-[0]">
                                        <img src={clouds} className="w-100" alt="Candle"/>
                                    </div>

                                    <div className="position-relative tw-z-[1]">
                                        <img src={candle} className="w-100" alt="Candle"/>
                                    </div>
                                </div>

                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="d-none d-sm-block">
                                        <a href="https://dexscreener.com/sui/0x7c7ffaedb6d8a31618565f74638a9017b24cd74e1affb5ceca2640e02972c8ce"
                                           target="_blank" rel="noreferrer"
                                           className="btn btn-custom-3 friem-regular font-size-120 font-size-md-140 font-size-xl-160 py-0 px-4 tw-w-[115px] md:tw-w-[126px] xl:tw-w-[136px] text-color-2">Chart
                                        </a>
                                    </div>
                                    <div className="d-none d-sm-block ps-2 pe-2">
                                        <a href="https://app.turbos.finance/#/trade?input=0x5b40e84bd4b428fb7ae15a4a36ed1527d1b7bfaeae21855a499714175d215c2e::sai::SAI&output=0x2::sui::SUI"
                                           target="_blank" rel="noreferrer"
                                            className="btn btn-custom-3 friem-regular font-size-120 font-size-md-140 font-size-xl-160 py-0 px-4 tw-w-[115px] md:tw-w-[126px] text-white bg-color-3">Buy
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div
                                className="bg-color-4 tw-border-[#000000] tw-border-solid tw-border-[4px] tw-rounded-[20px] px-4 py-3">
                                <p className="montserrat font-weight-700 font-size-150 font-size-md-160 font-size-xl-170 font-size-xxl-180 text-center mb-0">Token
                                    Supply:<br/> 10,000,000,000 $SAI</p>
                            </div>

                            <div
                                className="bg-white tw-border-[#000000] tw-border-solid tw-border-[4px] tw-rounded-[20px] box-shadow-1 px-4 py-5 p-lg-5">
                                <div className="my-5">
                                    <div className="d-flex justify-content-center mb-4">
                                        <div className="">
                                            <img src={fairlaunch} className="tw-w-[130px]" alt="Fair Launch"></img>
                                        </div>
                                    </div>

                                    <p className="montserrat text-black text-center font-size-lg-110 font-size-xl-130 font-weight-700 mb-3">100% Community (Fair Launch)</p>

                                    <ul className="d-flex flex-column align-items-center">
                                        <li className="montserrat text-black text-center font-size-90 font-size-lg-100 line-height-150 mb-0">Stealth launch on <a href="https://turbos.fun" className="text-black font-weight-600" target="_blank" rel="noreferrer">turbos.fun</a></li>
                                        <li className="montserrat text-black text-center font-size-90 font-size-lg-100 line-height-150 mb-0">Bonded in less than 2 hours</li>
                                        <li className="montserrat text-black text-center font-size-90 font-size-lg-100 line-height-150 mb-0">0% team token</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="bg-color-5 py-5">
                <div className="container">
                    <div className="d-flex flex-wrap justify-content-center align-items-center mb-2">
                        <div className="px-2 px-sm-3 mb-3">
                            <a href="#tokenomics" className="text-decoration-none">
                                <p className="friem-regular font-size-100 text-center text-white mb-0">Tokenomics</p>
                            </a>
                        </div>
                        <div className="px-2 px-sm-3 mb-3">
                            <a href="#community-spotlight" className="text-decoration-none">
                                <p className="friem-regular font-size-100 text-center text-white mb-0">Community</p>
                            </a>
                        </div>
                        <div className="px-2 px-sm-3 mb-3">
                            <a href="https://drive.google.com/drive/folders/1609UU05hU27Q_SMkLfTbmKYnysRrbuaP?usp=sharing" target="_blank" rel="noreferrer" className="text-decoration-none">
                                <p className="friem-regular font-size-100 text-center text-white mb-0">Meme&nbsp;Library</p>
                            </a>
                        </div>
                    </div>

                    <p className="friem-regular text-shadow-1 font-size-360 font-size-sm-360 font-size-md-450 font-size-xl-520 font-size-xxl-550 text-center text-white line-height-120 line-height-sm-100 tw-tracking-[-0.04em] mb-4">trade
                        $saI on sui!</p>

                    <div className="d-flex justify-content-center mb-5">
                        <div className="px-1">
                            <a href="https://x.com/stonefishai"
                               target="_blank"
                               rel="noreferrer">
                                <img src={social7} className="tw-w-[40px] sm:tw-w-[60px] lg:tw-w-[70px]" alt=""/>
                            </a>
                        </div>
                        <div className="px-1">
                            <a href="https://t.me/stonefishAI"
                               target="_blank"
                               rel="noreferrer">
                                <img src={social8} className="tw-w-[40px] sm:tw-w-[60px] lg:tw-w-[70px]" alt=""/>
                            </a>
                        </div>
                        <div className="px-1">
                            <a href="https://suiscan.xyz/mainnet/coin/0x5b40e84bd4b428fb7ae15a4a36ed1527d1b7bfaeae21855a499714175d215c2e::sai::SAI/txs"
                               target="_blank"
                               rel="noreferrer">
                                <img src={social9} className="tw-w-[40px] sm:tw-w-[60px] lg:tw-w-[70px]" alt=""/>
                            </a>
                        </div>
                        <div className="px-1">
                            <a href="https://dexscreener.com/sui/0x7c7ffaedb6d8a31618565f74638a9017b24cd74e1affb5ceca2640e02972c8ce"
                               target="_blank"
                               rel="noreferrer">
                                <img src={social4} className="tw-w-[40px] sm:tw-w-[60px] lg:tw-w-[70px]" alt=""/>
                            </a>
                        </div>
                        <div className="px-1">
                            <a href="https://app.turbos.finance/#/trade?input=0x5b40e84bd4b428fb7ae15a4a36ed1527d1b7bfaeae21855a499714175d215c2e::sai::SAI&output=0x2::sui::SUI"
                               target="_blank"
                               rel="noreferrer">
                                <img src={social5} className="tw-w-[40px] sm:tw-w-[60px] lg:tw-w-[70px]" alt=""/>
                            </a>
                        </div>
                        <div className="px-1">
                            <a href="https://www.coingecko.com/en/coins/stonefish-ai" target="_blank" rel="noreferrer">
                            <img src={social6} className="tw-w-[40px] sm:tw-w-[60px] lg:tw-w-[70px]" alt=""/>
                            </a>
                        </div>
                    </div>

                    <p className="friem-regular font-size-100 font-size-sm-120 font-size-md-120 font-size-xl-130 font-size-xxl-130 text-center text-white line-height-100 tw-tracking-[-0.01em] mb-0">$SAI © 2024. ALL RIGHTS RESERVED</p>
                </div>
            </div>
        </div>
    )
}

export default Home