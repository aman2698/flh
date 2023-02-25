import { useState, useRef, useEffect, useCallback } from 'react';
import skin from '../assets/img/our-work/skin.jpg';
import hair from '../assets/img/our-work/hair.JPG';
import comm from '../assets/img/our-work/commercial.JPEG';
import left from '../assets/img/left-arrow.svg';
import right from '../assets/img/right-arrow.svg';
import { useNavigate } from 'react-router-dom';
import jQuery from "jquery";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { config } from "react-spring";
const CarouselOwrWork = () => {

    const [sliderRef, setSliderRef] = useState(null)
    const navigate = useNavigate();
    const rediectHair = useCallback(() => navigate('/our-work/magzine', { replace: true }), [navigate]);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        className: "center",
        centerPadding: "0px",
        centerMode: true,
        responsive: [
            // {
            //   breakpoint: 1024,
            //   settings: {
            //     slidesToShow: 3,
            //     slidesToScroll: 3,
            //     infinite: true,
            //     dots: true
            //   }
            // },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            // {
            //   breakpoint: 480,
            //   settings: {
            //     slidesToShow: 1,
            //     slidesToScroll: 1
            //   }
            // }
        ]
    };
    const slides = [
        {
            key: 1,
            content: <img src={skin} alt="1" />
        },
        {
            key: 2,
            content: <img src={skin} alt="2" />
        },
        {
            key: 132,
            content: <img src={skin} alt="3" />
        },
        {
            key: 13,
            content: <img src={skin} alt="4" />
        },
        {
            key: 41,
            content: <img src={skin} alt="5" />
        },
        {
            key: 531,
            content: <img src={skin} alt="6" />
        },
        {
            key: 3221,
            content: <img src={skin} alt="7" />
        },
        {
            key: 111,
            content: <img src={skin} alt="8" />
        }
    ];
    const callback = function (index) {
        console.log("callback", index);
    }
    return (
        <>
            <div className="tw-hidden min-[900px]:tw-flex tw-flex-row">
                {/* <Slider {...settings}>
          <div>
          <img src={skin} alt="1" />
          </div>
          <div>
          <img src={skin} alt="1" />
          </div>
          <div>
          <img src={skin} alt="1" />
          </div>
          <div>
          <img src={skin} alt="1" />
          </div>
          <div>
          <img src={skin} alt="1" />
          </div>
          <div>
          <img src={skin} alt="1" />
          </div>
          <div>
          <img src={skin} alt="1" />
          </div>
          <div>
          <img src={skin} alt="1" />
          </div>
          <div>
          <img src={skin} alt="1" />
          </div>
        </Slider> */}

                <div class="tw-basis-[5%] min-[900px]:tw-basis-1/12 my-auto">                    <div className="" onClick={sliderRef?.slickPrev} >
                    <span className="" aria-hidden="true"><img src={left} alt='dd'></img></span>
                </div></div>
                <div class="tw-basis-[90%] min-[900px]:tw-basis-5/6">
                    <Slider ref={setSliderRef} {...settings} className='tw-hidden min-[900px]:tw-grid tw-w-[30vh] min-[900px]:tw-w-[100vh] tw-mx-auto tw-h-[600px] min-[900px]:tw-h-[600px] center' style={{

                    }}>
                        <div class="main">

                            <img src={skin} className='mx-auto main_image' style={{ 'width': '90%', 'height': '400px', }} alt="1" />
                            <span className='text-over-image centered tw-font-sans tw-font-bold' style={{ "zIndex": '1000000000000000000000000000000' }}>Skin Commercial</span>
                        </div>
                        <div>
                            <img src={comm} className='mx-auto' style={{ 'width': '90%', 'height': '400px', }} alt="1" />
                            <span className='text-over-image centered tw-font-sans tw-font-bold' style={{ "zIndex": '1000000000000000000000000000000' }}>&nbsp;&nbsp;Commercial</span>

                        </div>
                        <div>
                            <img src={hair} onClick={rediectHair} className='mx-auto' style={{ 'width': '90%', 'height': '400px', }} alt="1" />
                            <span className='text-over-image centered tw-font-sans tw-font-bold' style={{ "zIndex": '1000000000000000000000000000000' }}>Hair commercial</span>

                        </div>
                        <div>
                            <img src={skin} className='mx-auto' style={{ 'width': '90%', 'height': '400px', }} alt="1" />
                            <span className='text-over-image centered tw-font-sans tw-font-bold' style={{ "zIndex": '1000000000000000000000000000000' }}>Skin Commercial</span>

                        </div>
                        <div>
                            <img src={comm} className='mx-auto' style={{ 'width': '90%', 'height': '400px', }} alt="1" />
                            <span className='text-over-image centered tw-font-sans tw-font-bold' style={{ "zIndex": '1000000000000000000000000000000' }}>&nbsp;&nbsp;Commercial</span>

                        </div>
                        <div>
                            <img src={hair} onClick={rediectHair} className='mx-auto' style={{ 'width': '90%', 'height': '400px', }} alt="1" />
                            <span className='text-over-image centered tw-font-sans tw-font-bold' style={{ "zIndex": '1000000000000000000000000000000' }}>Hair commercial</span>

                        </div>
                        <div>
                            <img src={skin} className='mx-auto' style={{ 'width': '90%', 'height': '400px', }} alt="1" />
                            <span className='text-over-image centered tw-font-sans tw-font-bold' style={{ "zIndex": '1000000000000000000000000000000' }}>Skin Commercial</span>

                        </div>
                        <div>
                            <img src={comm} className='mx-auto' style={{ 'width': '90%', 'height': '400px', }} alt="1" />
                            <span className='text-over-image centered tw-font-sans tw-font-bold' style={{ "zIndex": '1000000000000000000000000000000' }}>&nbsp;&nbsp;Commercial</span>

                        </div>
                        <div>
                            <img src={hair} onClick={rediectHair} className='mx-auto' style={{ 'width': '90%', 'height': '400px', }} alt="1" />
                            <span className='text-over-image centered tw-font-sans tw-font-bold' style={{ "zIndex": '1000000000000000000000000000000' }}>Hair commercial</span>

                        </div>
                    </Slider>



                    {/* <div id="gallery" className="carousel slide carousel-fade tw-w-full tw-mx-4" data-ride="carousel">
                    <ol class="carousel-indicators tw-hidden min-[900px]:tw-block">
                        <li data-target="#gallery" data-slide-to="0" class="active"></li>
                        <li data-target="#gallery" data-slide-to="1"></li>
                        <li data-target="#gallery" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner ">
                        <div className="carousel-item active">
                            <div className="tw-flex tw-flex-row min-[900px]:tw-gap-4">
                                <div className="tw-hidden min-[900px]:tw-block min-[900px]:tw-basis-1/3 " style={{ 'position': 'relative' }}>
                                    <div className='sideImage img-fluid' onClick={rediectHair}>
                                        <img className=" " style={{ 'opacity': '0.5', 'objectFit': 'cover', 'width': '100%', 'height': '500px' }} src={hair} alt="Image 3" />
                                    </div>
                                    <div class="centered tw-font-sans tw-font-bold">Hair commercial</div>
                                </div>

                                <div className="tw-basis-full min-[900px]:tw-basis-1/3" style={{ 'position': 'relative' }}>
                                    <img className="img-fluid activeImage" src={comm} alt="Image 2" />
                                    <div class="centered tw-font-sans tw-font-bold">Commercial</div>
                                </div>

                                <div className="tw-hidden min-[900px]:tw-block min-[900px]:tw-basis-1/3" style={{ 'position': 'relative' }}>
                                    <div className='sideImage img-fluid'>
                                        <img className=" " style={{ 'opacity': '0.5', 'objectFit': 'cover', 'width': '100%', 'height': '500px' }} src={skin} alt="Image 3" />
                                    </div>
                                    <div class="centered tw-font-sans tw-font-bold">Skin Commercial</div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item ">
                            <div className="tw-flex tw-flex-row min-[900px]:tw-gap-4">
                                <div className="tw-hidden min-[900px]:tw-block min-[900px]:tw-basis-1/3 " style={{ 'position': 'relative' }}>
                                    <div className='sideImage img-fluid'>
                                        <img className=" " style={{ 'opacity': '0.5', 'objectFit': 'cover', 'width': '100%', 'height': '500px' }} src={comm} alt="Image 3" />
                                    </div>
                                    <div class="centered tw-font-sans tw-font-bold">Hair commercial</div>
                                </div>

                                <div className="tw-basis-full min-[900px]:tw-basis-1/3" style={{ 'position': 'relative' }}>
                                    <img className="img-fluid activeImage" src={skin} alt="Image 2" />
                                    <div class="centered tw-font-sans tw-font-bold">Commercial</div>
                                </div>

                                <div className="tw-hidden min-[900px]:tw-block min-[900px]:tw-basis-1/3" style={{ 'position': 'relative' }}>
                                    <div className='sideImage img-fluid' onClick={rediectHair}>
                                        <img className=" " style={{ 'opacity': '0.5', 'objectFit': 'cover', 'width': '100%', 'height': '500px' }} src={hair} alt="Image 3" />
                                    </div>
                                    <div class="centered tw-font-sans tw-font-bold">Skin Commercial</div>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item ">
                            <div className="tw-flex tw-flex-row min-[900px]:tw-gap-4">
                                <div className="tw-hidden min-[900px]:tw-block min-[900px]:tw-basis-1/3 " style={{ 'position': 'relative' }}>
                                    <div className='sideImage img-fluid'>
                                        <img className=" " style={{ 'opacity': '0.5', 'objectFit': 'cover', 'width': '100%', 'height': '500px' }} src={skin} alt="Image 3" />
                                    </div>
                                    <div class="centered tw-font-sans tw-font-bold">Hair commercial</div>
                                </div>

                                <div className="tw-basis-full min-[900px]:tw-basis-1/3" style={{ 'position': 'relative' }}>
                                    <img className="img-fluid activeImage" onClick={rediectHair} src={hair} alt="Image 2" />
                                    <div class="centered tw-font-sans tw-font-bold">Commercial</div>
                                </div>

                                <div className="tw-hidden min-[900px]:tw-block min-[900px]:tw-basis-1/3" style={{ 'position': 'relative' }}>
                                    <div className='sideImage img-fluid'>
                                        <img className=" " style={{ 'opacity': '0.5', 'objectFit': 'cover', 'width': '100%', 'height': '500px' }} src={comm} alt="Image 3" />
                                    </div>
                                    <div class="centered tw-font-sans tw-font-bold">Skin Commercial</div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div> */}

                </div>
                <div class="tw-basis-[5%] min-[900px]:tw-basis-1/12 my-auto">
                    <div className="" onClick={sliderRef?.slickNext} style={{ 'float': 'right' }}>
                        <span className="" aria-hidden="true"><img src={right} alt='dd'></img></span>
                    </div>
                </div>
            </div>
            <div className=' min-[900px]:tw-hidden'>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div className="tw-basis-full min-[900px]:tw-basis-1/3" style={{ 'position': 'relative' }}>
                                <img className="img-fluid activeImage" src={comm} alt="Image 2" />
                                <div class="centered tw-font-sans tw-font-bold">Commercial</div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className="tw-basis-full min-[900px]:tw-basis-1/3" style={{ 'position': 'relative' }}>
                                <img className="img-fluid activeImage" src={skin} alt="Image 2" />
                                <div class="centered tw-font-sans tw-font-bold">Commercial</div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className="tw-basis-full min-[900px]:tw-basis-1/3" style={{ 'position': 'relative' }}>
                                <img className="img-fluid activeImage" onClick={rediectHair} src={hair} alt="Image 2" />
                                <div class="centered tw-font-sans tw-font-bold">Commercial</div>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>

        </>

    );
};

export default CarouselOwrWork;
