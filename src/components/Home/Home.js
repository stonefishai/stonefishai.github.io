// images
import bg1 from '../../img/bg.webp';
import stonefishai from '../../img/stonefishai.gif';
import telegram from '../../img/telegram.png';
import twitter from '../../img/twitter.png';

function Home(props) {

    return (
        <div>
            <div className="!tw-z-[99]" id="background-wrap">
                <div className="bubble x1"></div>
                <div className="bubble x2"></div>
                <div className="bubble x3"></div>
                <div className="bubble x4"></div>
                <div className="bubble x5"></div>
                <div className="bubble x6"></div>
                <div className="bubble x7"></div>
                <div className="bubble x8"></div>
                <div className="bubble x9"></div>
                <div className="bubble x10"></div>
            </div>

            <div className="home bg-white background-image-cover" style={{backgroundImage:"url('" + bg1 + "')"}}>
                {/* Hero Section */}
                <div className="container py-5 py-lg-0 position-relative tw-z-[9999]">
                    <div className="row flex-column flex-lg-row justify-content-center align-items-center min-vh-100">
                        <div className="col-sm-9 col-md-8 col-lg-6 col-xl-5 mt-lg-4">
                            <img src={stonefishai} className="w-100" alt="Stone Fish AI"/>
                        </div>

                        <div
                            className="col-lg-6 col-xl-5 tw-mt-[-70px] sm:tw-mt-[-90px] md:tw-mt-[-110px] lg:tw-mt-[0] mb-4 mb-md-0">
                            <h1 className="changa-one text-color-1 text-center font-size-180 font-size-md-250 mb-4 pb-2">Welcome
                                STONEFISH AI</h1>

                            <p className="changa-one text-color-1 text-center font-size-150 font-size-md-160 mb-1">Our
                                Venomous Fish Devs<br className="d-block d-sm-none"/> Are Busy 🛠️</p>
                            <p className="changa-one text-color-1 text-center font-size-150 font-size-md-160 mb-4 pb-2">💻
                                Do Not Disturb 🚫</p>

                            <p className="changa-one text-color-1 text-center font-size-150 font-size-md-120 tw-break-words mb-1">Contract
                                Address:</p>
                            <p className="changa-one text-color-1 text-center font-size-100 tw-break-words mb-4 pb-2">0x5b40e84bd4b428fb7ae15a4a36ed1527d1b7bfaeae21855a499714175d215c2e::sai::SAI</p>

                            <div className="d-flex justify-content-center mb-4">
                                <div className="px-3">
                                    <a href="https://dexscreener.com/sui/0x7c7ffaedb6d8a31618565f74638a9017b24cd74e1affb5ceca2640e02972c8ce"
                                       target="_blank" rel="noreferrer"
                                       className="changa-one text-color-1 text-center font-size-150 font-size-md-170 tw-break-words mb-1">Chart</a>
                                </div>
                                <div className="px-3">
                                    <a href="https://app.turbos.finance/#/trade?input=0x5b40e84bd4b428fb7ae15a4a36ed1527d1b7bfaeae21855a499714175d215c2e::sai::SAI&output=0x2::sui::SUI"
                                       target="_blank" rel="noreferrer"
                                       className="changa-one text-color-1 text-center font-size-150 font-size-md-170 tw-break-words mb-1">Exchange</a>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center">
                                <div className="px-2">
                                    <a href="https://x.com/stonefishai" target="_blank" rel="noreferrer">
                                        <img src={twitter} className="tw-w-[60px] md:tw-w-[70px]" alt="Twitter"/>
                                    </a>
                                </div>

                                <div className="px-2">
                                    <a href="https://t.me/stonefishAI" target="_blank" rel="noreferrer">
                                        <img src={telegram} className="tw-w-[60px] md:tw-w-[70px]" alt="Telegram"/>
                                    </a>
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