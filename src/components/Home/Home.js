// images
import stonefishai from '../../img/stonefishai.gif';
import telegram from '../../img/telegram.png';
import twitter from '../../img/twitter.png';

function Home(props) {

    return (
        <div>
            <div className="home bg-white">
                {/* Hero Section */}
                <div className="container">
                    <div className="row flex-column flex-lg-row justify-content-center align-items-center min-vh-100">
                        <div className="col-sm-9 col-md-8 col-lg-6 col-xl-5 mt-lg-4">
                            <img src={stonefishai} className="w-100" alt="Stone Fish AI" />
                        </div>

                        <div className="col-lg-6 col-xl-5 tw-mt-[-70px] sm:tw-mt-[-90px] md:tw-mt-[-110px] lg:tw-mt-[0] mb-5 pb-4 mb-md-0 pb-md-0">
                            <h1 className="changa-one text-color-1 text-center font-size-180 font-size-md-250 mb-4">WEBSITE IN PROGRESS..</h1>

                            <div className="d-flex justify-content-center">
                                <div className="px-2">
                                    <img src={twitter} className="tw-w-[60px] md:tw-w-[70px]" alt="Twitter" />
                                </div>

                                <div className="px-2">
                                    <img src={telegram} className="tw-w-[60px] md:tw-w-[70px]" alt="Telegram" />
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