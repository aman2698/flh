import { useState, useRef, useEffect, useCallback } from 'react';
import skin from '../assets/img/our-work/skin.jpg';
import hair from '../assets/img/our-work/hair.JPG';
import comm from '../assets/img/our-work/commercial.JPEG';
import left from '../assets/img/left-arrow.svg';
import right from '../assets/img/right-arrow.svg';
import { useNavigate } from 'react-router-dom';
import jQuery from "jquery";
import Slider from "react-slick";
import Carousel from 'react-spring-3d-carousel';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { config } from "react-spring";
const CarouselOwrWork = () => {

    const [sliderRef, setSliderRef] = useState(null)
    const navigate = useNavigate();
    const rediectHair = useCallback(() => navigate('/our-work/magzine', { replace: true }), [navigate]);
    const rediectcomm = useCallback(() => navigate('/our-work/magzine', { replace: true }), [navigate]);
    const rediectSkin = useCallback(() => navigate('/our-work/magzine', { replace: true }), [navigate]);
    const rediectCA = useCallback(() => navigate('/our-work/celebrity', { replace: true }), [navigate]);
    const settings = {
        dots: true,
        infinite: true,
        // speed: 500,
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
            content: <img src={skin} style={{ 'width': '80%', 'height': '500px','objectFit':'cover' }}  alt="1" />,
            onClick: () => rediectSkin()
        },
        {
            key: 2,
            content: <img src={hair} style={{ 'width': '80%', 'height': '500px','objectFit':'cover' }} alt="2" />,
            onClick: () => rediectcomm()

        },
        {
            key: 132,
            content: <img src={comm} style={{ 'width': '80%', 'height': '500px','objectFit':'cover' }} alt="3" />,
            onClick: () => rediectcomm()

        },
        {
            key: 13,
            content: <img src={skin} style={{ 'width': '80%', 'height': '500px','objectFit':'cover' }} alt="4" />,
            onClick: () => rediectCA()

        },
        {
            key: 41,
            content: <img src={hair} style={{ 'width': '80%', 'height': '500px','objectFit':'cover' }} alt="5" />,
            onClick: () => rediectSkin()

        },
        {
            key: 531,
            content: <img src={comm} style={{ 'width': '80%', 'height': '500px','objectFit':'cover' }} alt="6" />,
            onClick: () => rediectSkin()

        },
        {
            key: 3221,
            content: <img src={skin} style={{ 'width': '80%', 'height': '500px','objectFit':'cover' }} alt="7" />,
            onClick: () => rediectSkin()

        },
        {
            key: 111,
            content: <img src={hair} style={{ 'width': '80%', 'height': '500px','objectFit':'cover' }} alt="8" />,
            onClick: () => rediectSkin()

        },
        {
            key: 5231,
            content: <img src={comm} style={{ 'width': '80%', 'height': '500px','objectFit':'cover' }} alt="6" />,
            onClick: () => rediectSkin()

        },
        {
            key: 356651,
            content: <img src={skin} style={{ 'width': '80%', 'height': '500px','objectFit':'cover' }} alt="7" />,
            onClick: () => rediectSkin()

        },
        {
            key: 13211,
            content: <img src={hair} style={{ 'width': '80%', 'height': '500px','objectFit':'cover' }} alt="8" />,
            onClick: () => rediectSkin()

        }
    ];
    const callback = function (index) {
        if (index === -1 ||index === 1) {
             return {
                'opacity':0.5,
                'width':'400px'
             }
        }else if(index === 0){
            return {
                'opacity':1,
             }
        }else{
            return {
                'opacity':0,
             }
        }
        console.log("callback", index);
    }
    const [state, setState] = useState({
        goToSlide: 0,
        offsetRadius: 2,
        showNavigation: false,
        config: config.gentle
      });

      const onChangeInputplus = (e) => {
        setState({
          'goToSlide': state.goToSlide + 1|| 0
        });
      };

      const onChangeInputminus = (e) => {
        setState({
            'goToSlide': state.goToSlide - 1|| 0
          });
      };
    
    return (
        <>
            <div className="tw-hidden min-[900px]:tw-flex tw-flex-row">

                <div class="tw-basis-[5%] min-[900px]:tw-basis-1/12 my-auto">                    <div className="" onClick={onChangeInputminus} >
                    <span className="" aria-hidden="true"><img src={left} alt='dd'></img></span>
                </div></div>
                <div class="tw-basis-[90%] min-[900px]:tw-basis-5/6 tw-w-[100%] tw-h-[500px] mx-auto">
                    {/* <Slider ref={setSliderRef} {...settings} className='tw-hidden min-[900px]:tw-grid tw-w-[30vh] min-[900px]:tw-w-[100vh] tw-mx-auto tw-h-[600px] min-[900px]:tw-h-[600px] center' style={{

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
                    </Slider> */}
                 <Carousel slides={slides}   goToSlide={state.goToSlide}
        offsetRadius={state.offsetRadius}
        enableSwipe= 'true'
        showNavigation={state.showNavigation}
        animationConfig={state.config}
        offsetFn={callback}
         />





                </div>
                <div class="tw-basis-[5%] min-[900px]:tw-basis-1/12 my-auto">
                    <div className="" onClick={onChangeInputplus} style={{ 'float': 'right' }}>
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
                                <img className="img-fluid activeImage tw-object-contain" src={comm} alt="Image 2" />
                                <div class="centered tw-font-sans tw-font-bold">Commercial</div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className="tw-basis-full min-[900px]:tw-basis-1/3" style={{ 'position': 'relative' }}>
                                <img className="img-fluid activeImage tw-object-contain" src={skin} alt="Image 2" />
                                <div class="centered tw-font-sans tw-font-bold">Commercial</div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className="tw-basis-full min-[900px]:tw-basis-1/3" style={{ 'position': 'relative' }}>
                                <img className="img-fluid activeImage tw-object-contain" onClick={rediectHair} src={hair} alt="Image 2" />
                                <div class="centered tw-font-sans tw-font-bold">Commercial</div>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only"></span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only"></span>
                    </a>
                </div>
            </div>

        </>

    );
};

export default CarouselOwrWork;
