import React from 'react'
import brand1 from '../assets/img/brand/bazar.svg';
import brand2 from '../assets/img/brand/femina.svg';
import brand3 from '../assets/img/brand/grazia.svg';
import brand4 from '../assets/img/brand/vogue.svg';
import brand5 from '../assets/img/brand/brand5.svg';
import logo from '../assets/img/home.svg';
import a1 from '../assets/img/apperance/1.JPG';
import a2 from '../assets/img/apperance/2.JPG';
import a3 from '../assets/img/apperance/3.JPG';
import a4 from '../assets/img/apperance/4.JPG';
import f1 from '../assets/img/film/1.mp4';
import f2 from '../assets/img/film/2.mp4';
import f3 from '../assets/img/film/3.mp4';
import t1 from '../assets/img/film/1.jpg';
import t2 from '../assets/img/film/2.jpg';
import t3 from '../assets/img/film/3.jpg';
import fo1 from '../assets/img/footer/1.svg';
import fo2 from '../assets/img/footer/2-1.svg';
import fo21 from '../assets/img/footer/2.svg';
import fo3 from '../assets/img/footer/3.svg';
import fb from '../assets/img/fb.svg';
import cross from '../assets/img/times.svg';
import insta from '../assets/img/instagram.svg';
import twitter from '../assets/img/twitter.svg';
import CarouselOwrWork from './crouselOwrWork';
import left from '../assets/img/left-arrow.svg';
import right from '../assets/img/right-arrow.svg';
import leftw from '../assets/img/leftw.svg';
import rightw from '../assets/img/right.svg';
import dash from '../assets/img/dash.svg';
import quote from '../assets/img/quote.png';
import flh from '../assets/img/flh.svg';
import flhAcademy from '../assets/img/flhAcademy.svg';
import { Outlet, Link } from "react-router-dom";
import VideoModel from './videoModel';
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import salonspa from '../assets/img/SALONSPA.png'
import $ from "jquery";
import b1 from '../assets/img/blog/1.webp';
import b2 from '../assets/img/blog/2.webp';
import b3 from '../assets/img/blog/3.jpg';
import home from '../assets/img/home.jpeg';

//commercial import

const BrandWorkWith = () => {
  const [videoArray, setvideoArray] = React.useState([])
  const [imageArray, setimageArray] = React.useState([])
  let [selectedVideo, setSelectedVideo] = React.useState(0)
  let [selectedImage, setSelectedImage] = React.useState(0)
  let [isOpen, setIsOpen] = React.useState(false)
  const videoRef = React.useRef();
  const navigate = useNavigate();


  const play = (event, id, index) => {
    console.log(event.target.parentElement);
    document.getElementById('nav').style.display = 'none'
    document.getElementById('modal').style.display = 'block'
    document.getElementsByTagName('body')[0].classList.add('tw-overflow-y-hidden')
    setTimeout(() => {
      var img = document.getElementById(id).children;
      let arr = []
      for (let i = 0; i <= img.length - 1; i++) {
        arr.push(`${img[i].getElementsByTagName("source")[0].src}`)
      }
      setvideoArray(arr)
      setSelectedVideo(index)
      setIsOpen(true)
    }, 500);
  }

  const playImage = (event, id, index) => {
    document.getElementById('nav').style.display = 'none'
    document.getElementById('modal-image').style.display = 'block'
    document.getElementsByTagName('body')[0].classList.add('tw-overflow-y-hidden')
    setTimeout(() => {
      var img = document.getElementById(id).children;
      let arr = []
      for (let i = 0; i <= img.length - 1; i++) {
        arr.push(`${img[i].src}`)
      }
      setimageArray(arr)
      setSelectedImage(index)
    }, 500);
  }



  React.useEffect(() => {
    // setSelectedVideo(videoArray[0])
    console.log(videoArray[selectedVideo], selectedVideo, isOpen);
    // videoRef.current?.load();
    return () => {
      // videoRef.current?.pause();
    }
  }, [videoArray, selectedVideo, isOpen])

  const nextVideo = () => {
    // debugger
    if (selectedVideo < (videoArray.length - 1)) {
      setSelectedVideo(selectedVideo + 1)

    }
  }

  const previousVideo = () => {
    // debugger
    if (selectedVideo !== 0) {
      setSelectedVideo(selectedVideo - 1)
    }
  }

  const nextImage = () => {
    if (selectedImage < (imageArray.length - 1)) {
      setSelectedImage(selectedImage + 1)

    }
  }

  const previousImage = () => {
    if (selectedImage !== 0) {
      setSelectedImage(selectedImage - 1)
    }
  }

  const closeModal = () => {
    document.getElementById('nav').style.display = 'block'
    setvideoArray([])
    document.getElementById('modal').style.display = 'none'
    document.getElementsByTagName('body')[0].classList.remove('tw-overflow-y-hidden')
  }

  const closeModalImage = () => {
    document.getElementById('nav').style.display = 'block'
    document.getElementById('modal-image').style.display = 'none'
    document.getElementsByTagName('body')[0].classList.remove('tw-overflow-y-hidden')
  }
  React.useEffect(() => {
    $(function () {
      $('.btn-6')
        .on('mouseenter', function (e) {
          var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
          $(this).find('span').css({ top: relY, left: relX })
        })
        .on('mouseout', function (e) {
          var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
          $(this).find('span').css({ top: relY, left: relX })
        });
    });
    // $('#carouselExampleIndicators1').carousel({
    //   interval: 3000,
    //   cycle: true
    // }); 
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false
  };

  function importAll(r) {
    return r.keys().map((r));
  }

  const commercial = importAll(require.context('../assets/img/commercial', false, /\.(png|jpe?g|JPG|svg)$/));
  console.log(commercial);

  return (
    <>
      <div className='brandWorkWith' id='ss'>
        <div className='tw-grid tw-mx-10 min-[900px]:tw-mx-48'>
          <div className='tw-columns-1'>
            <div className='tw-font-sans tw-font-bold tw-text-2xl tw-mt-4 min-[900px]:tw-mt-[55px] tw-text-white underline-small' style={{ 'textTransform': 'uppercase' }}>
              Brands worked with
            </div>
          </div>
          <div className='tw-hidden min-[900px]:tw-grid tw-grid-cols-2 min-[900px]:tw-grid-cols-4 tw-gap-4 tw-my-[45px] '>
            <img src={brand1} alt='d' style={{ 'margin': 'auto' }}></img>
            <img src={brand2} alt='d' style={{ 'margin': 'auto' }}></img>
            <img src={brand3} alt='d' style={{ 'margin': 'auto' }}></img>
            <img src={brand4} alt='d' style={{ 'margin': 'auto' }}></img>
          </div>
          <div className='min-[900px]:tw-hidden tw-w-full tw-gap-4 tw-my-12 '>
            {/* <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel" data-interval="5000">

              <div className="carousel-inner" style={{ 'margin': 'auto', 'width': '50%' }}>
                <div className="carousel-item active">
                  <img src={brand5} alt='d' className='mx-auto' ></img>
                </div>
                <div className="carousel-item">
                  <img src={brand2} alt='d' className='mx-auto' ></img>
                </div>
                <div className="carousel-item">
                  <img src={brand5} alt='d' className='mx-auto' ></img>
                </div>
                <div className="carousel-item">
                  <img src={brand2} alt='d' className='mx-auto' ></img>
                </div>
              </div>

            </div> */}
            <Slider {...settings} style={{ 'width': '80vw' }}>
              <div>
                <img src={brand1} alt='d' style={{ 'margin': 'auto', 'width': '70%' }}></img>
              </div>
              <div>
                <img src={brand2} alt='d' style={{ 'margin': 'auto', 'width': '70%' }}></img>
              </div>
              <div>
                <img src={brand3} alt='d' style={{ 'margin': 'auto', 'width': '70%' }}></img>
              </div>
              <div>
                <img src={brand4} alt='d' style={{ 'margin': 'auto', 'width': '70%' }}></img>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div className='tw-hidden min-[900px]:tw-grid tw-grid-cols-4  tw-h-[285px] min-[900px]:tw-h-auto  tw-mx-8 min-[900px]:tw-mx-[350px] tw-my-[50px]'>
        <div id='home' className='tw-my-auto'>
        <video onClick={e => play(e, 'home', 0)} poster={home}>
            <source src='https://www.youtube.com/embed/eXQJNyLEYqY?autoplay=1' type="video/mp4" />
          </video>
          </div>
        <div className='tw-col-span-3' >
          <div className="vertical-line tw-mx-8"></div>
          <span className='min-[900px]:tw-text-2xl tw-text-lg tw-font-sans tw-font-normal'>
            Florian has been an educator for the longest time with a total international experience of 17 + years making him A Global Ambassador for Hair Giants “Schwarzkopf Professional”

          </span>
        </div>
      </div>


      <div className='tw-hidden min-[900px]:tw-block tw-w-full our-work' >
        <div className='tw-grid tw-mx-10 min-[900px]:tw-mx-48 tw-my-10 tw-py-8' >
          <div className='tw-columns-1'>
            <div className='tw-font-sans tw-font-bold tw-text-2xl tw-mt-4 min-[900px]:tw-mt-8 tw-text-white underline-small' style={{ 'textTransform': 'uppercase' }}>
              Business holded
            </div>
          </div>
          <div className='tw-columns-1 tw-mx-auto'>
            <div className='tw-font-sans tw-font-normal  tw-mt-1 min-[900px]:tw-mt-2 tw-text-black min-[900px]:tw-text-white' style={{ 'textTransform': 'uppercase', 'fontSize': '142px', 'lineHeight': '142px' }}>
              <img style={{ 'transform': 'rotate(180deg)', 'margin': '28px 0px' }} src={quote}></img>
            </div>
          </div>
          <div className='tw-columns-1'>
            <div className='tw-font-sans tw-font-normal min-[900px]:tw-text-2xl tw-text-lg  tw-mt-1 tw-text-center min-[900px]:tw-mt-2 tw-text-black min-[900px]:tw-text-white' style={{ 'textTransform': 'uppercase' }}>
              Speaking of his International Experience of so many years, Florian himself has developed a Method of his own which he passes out to young, experienced and aspiring artists through his educational platform “Florian Hurel Academy” as a entrepreneur, Florian holds on to business within the education and fitness sectors of the Industry owning Florian Hurel Academy and FloFitBox Mumbai.
            </div>
          </div>
          <div className='tw-grid tw-grid-cols-4 tw-gap-2 tw-my-[45px]' >
            <img className='mx-auto my-auto' src={flhAcademy} alt='g' ></img>

            <img className='mx-auto' src={flh} alt='g' ></img>
            <img className='mx-auto my-auto' src={fo3} alt='g' ></img>
            <img className='mx-auto my-auto' src={salonspa} alt='g' ></img>
          </div>
        </div>

      </div>

      {/* our work */}
      <div id='our-work' className='tw-grid tw-mx-0 min-[900px]:tw-mx-40 tw-mt-10 min-[900px]:tw-h-[700px]'>
        <div className='tw-columns-1 w-full'>
          <div className='tw-font-sans tw-font-bold tw-text-2xl underline-small tw-mx-10 min-[900px]:tw-mx-0' style={{ 'marginBottom': '15px', 'textTransform': 'uppercase' }}>our work</div>
          <CarouselOwrWork />
          {/* <div className='view-all tw-mx-auto tw-mt-8' style={{ 'position': 'relative', 'border': '2px solid #000' }}>
            <span className='tw-font-sans tw-font-semibold' style={{ 'position': 'absolute', 'fontSize': '24px', 'padding': '8px 1px 1px 21px' }}>VIEW ALL</span>
          </div> */}
          <div class="mx-auto">
            <div class="wrap">
              <a class="btn-6" onClick={() => navigate("/campaigns")}>VIEW ALL<span></span></a>
            </div>
          </div>

        </div>
      </div>

      <div className='tw-block min-[900px]:tw-hidden tw-w-full our-work' >
        <div className='tw-grid tw-mx-10 min-[900px]:tw-mx-48 tw-my-10 tw-py-8' >
          <div className='tw-columns-1'>
            <div className='tw-font-sans tw-font-bold tw-text-2xl tw-mt-4 min-[900px]:tw-mt-8 tw-text-white underline-small' style={{ 'textTransform': 'uppercase' }}>
              Business holded
            </div>
          </div>
          <div className='tw-columns-1 tw-mx-auto'>
            <div className='tw-font-sans tw-font-normal  tw-mt-1 min-[900px]:tw-mt-2 tw-text-white' style={{ 'textTransform': 'uppercase', 'fontSize': '142px', 'lineHeight': '142px' }}>
              <img style={{ 'transform': 'rotate(180deg)', 'margin': '28px 0px' }} src={quote}></img>
            </div>
          </div>
          <div className='tw-columns-1'>
            <div className='tw-font-sans tw-font-normal min-[900px]:tw-text-2xl tw-text-lg  tw-mt-1 tw-text-center min-[900px]:tw-mt-2 tw-text-white' style={{ 'textTransform': 'uppercase' }}>
              Speaking of his International Experience of so many years, Florian himself has developed a Method of his own which he passes out to young, experienced and aspiring artists through his educational platform “Florian Hurel Academy” as a entrepreneur, Florian holds on to business within the education and fitness sectors of the Industry owning Florian Hurel Academy and FloFitBox Mumbai.
            </div>
          </div>
          <div className='tw-grid tw-my-[45px]' >
            <Slider {...settings} style={{ 'width': '80vw' }}>
              <div>
                <img src={fo3} alt='d' style={{ 'margin': 'auto', 'width': '70%' }}></img>
              </div>
              <div>
                <img src={flhAcademy} alt='d' style={{ 'margin': 'auto', 'width': '70%' }}></img>
              </div>
              <div>
                <img src={flh} alt='d' style={{ 'margin': 'auto', 'width': '70%' }}></img>
              </div>
              <div>
                <img src={salonspa} alt='d' style={{ 'margin': 'auto', 'width': '70%' }}></img>
              </div>
            </Slider>
          </div>
        </div>

      </div>

      {/* film */}
      <div className='tw-hidden min-[900px]:tw-block tw-w-full' style={{ 'background': '#232323' }}>
        <div className='tw-grid tw-mx-10 md:tw-mx-40 tw-py-8' >
          <div className='tw-columns-1'>
            <div className='tw-font-sans tw-font-bold tw-text-2xl tw-mt-4 md:tw-mt-8 underline-small' style={{ 'color': '#fff', 'textTransform': 'uppercase' }}>
              Films
            </div>
          </div>
          <div id='video1' className='tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-8  tw-mx-8 md:tw-mx-48 tw-my-10 mx-auto'>
            <video onClick={e => play(e, 'video1', 0)} poster={t1}>
              <source src='https://www.youtube.com/embed/V3v-hYQC_D8?autoplay=1' type="video/mp4" />
            </video>
            <video onClick={e => play(e, 'video1', 1)} poster={t2}>
              <source src='https://www.youtube.com/embed/mXkdtM86REY?autoplay=1' type="video/mp4" />
            </video>
            <video onClick={e => play(e, 'video1', 2)} poster={t3}>
              <source src='https://www.youtube.com/embed/7VNpvlF4xCw?autoplay=1' type="video/mp4" />
            </video>
          </div>
          <div className='tw-columns-1'>
            {/* <div class="mx-auto">
              <div class="wrap">
                <a class="btn-7" href="#">VIEW ALL<span></span></a>
              </div>
            </div> */}

          </div>
        </div>

      </div>

      <div className='tw-block min-[900px]:tw-hidden tw-w-full' style={{ 'background': '#fff' }}>
        <div className='tw-grid tw-mx-8 min-[900px]:tw-mx-40' >
          <div className='tw-columns-1'>
            <div className='tw-font-sans tw-font-bold tw-text-2xl tw-mt-4 underline-small' style={{ 'color': '#232323', 'textTransform': 'uppercase' }}>
              Films
            </div>
          </div>
          <div id='' className='tw-flex tw-flex-row tw-gap-3 tw-mx-8 min-[900px]:tw-mx-48 tw-my-10 mx-auto'>
            {/* <div class="">///// */}
            {/* <div class="tw-basis-[8%] m-auto">
              <a href="#carouselExampleIndicators6" role="button" data-slide="prev">
                <img src={left} alt='dd'></img>

              </a>
            </div> */}
            <div class="tw-basis-[100%]">
              <div id="carouselExampleIndicators6" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators" style={{ 'color': 'black', 'bottom': '-50px' }}>
                  <li data-target="#carouselExampleIndicators6" data-slide-to="0" className="active"><img src={dash}></img>&nbsp;&nbsp;&nbsp;</li>
                  <li data-target="#carouselExampleIndicators6" data-slide-to="1"><img src={dash}></img>&nbsp;&nbsp;&nbsp;</li>
                  <li data-target="#carouselExampleIndicators6" data-slide-to="2"><img src={dash}></img></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <video onClick={e => play(e, 'video1', 0)} poster={t1}>
                      <source src='https://www.youtube.com/embed/V3v-hYQC_D8?autoplay=1' type="video/mp4" />
                    </video>
                  </div>
                  <div className="carousel-item">
                    <video onClick={e => play(e, 'video1', 1)} poster={t2}>
                      <source src='https://www.youtube.com/embed/mXkdtM86REY?autoplay=1' type="video/mp4" />
                    </video>
                  </div>
                  <div className="carousel-item">
                    <video onClick={e => play(e, 'video1', 2)} poster={t3}>
                      <source src='https://www.youtube.com/embed/7VNpvlF4xCw?autoplay=1' type="video/mp4" />
                    </video>
                  </div>
                </div>


              </div>

            </div>
            {/* <div class="tw-basis-[8%] m-auto">
              <a href="#carouselExampleIndicators6" role="button" data-slide="next">
                <img src={right} alt='dd'></img>
              </a>
            </div> */}
            {/* </div> */}
          </div>
          <div className='tw-columns-1'>
            {/* <div class="mx-auto">
              <div class="wrap">
                <a class="btn-7" href="#">VIEW ALL<span></span></a>
              </div>
            </div> */}

          </div>
        </div>

      </div>

      {/* Appearance */}
      <div className='tw-bg-[#232323] min-[900px]:tw-bg-white tw-h-auto'>
        <div className='tw-grid tw-mx-10 min-[900px]:tw-mx-40 min-[900px]:tw-my-10 tw-py-4 '>
          <div className='tw-columns-1 '>
            <div className='tw-font-sans tw-font-bold tw-text-2xl underline-small tw-text-white min-[900px]:tw-text-black' style={{ 'marginBottom': '15px' }}>Appearance</div>
            <div id='image1' className='tw-hidden min-[900px]:tw-grid min-[900px]:tw-grid-cols-4 tw-grid-cols-1 tw-gap-2  tw-mx-8 min-[900px]:tw-mx-48 tw-my-10 mx-auto'>
              <img className='mx-auto' onClick={e => playImage(e, 'image1', 0)} src={a1} alt='g' style={{ 'width': '90%', 'height': '400px', 'objectFit': 'cover' }}></img>
              <img className='mx-auto' onClick={e => playImage(e, 'image1', 1)} src={a2} alt='g' style={{ 'width': '90%', 'height': '400px', 'objectFit': 'cover' }}></img>
              <img className='mx-auto' onClick={e => playImage(e, 'image1', 2)} src={a3} alt='g' style={{ 'width': '90%', 'height': '400px', 'objectFit': 'cover' }}></img>
              <img className='mx-auto' onClick={e => playImage(e, 'image1', 3)} src={a4} alt='g' style={{ 'width': '90%', 'height': '400px', 'objectFit': 'cover' }}></img>
            </div>
            <div className='tw-block min-[900px]:tw-hidden'>
              <div id='' className='tw-flex tw-flex-row tw-gap-3 tw-mx-8 min-[900px]:tw-mx-48 tw-my-10 mx-auto'>
                {/* <div class="">///// */}
                <div class="tw-basis-[8%] m-auto">
                  <a href="#carouselExampleIndicators1" role="button" data-slide="prev">
                    <img src={leftw} alt='dd'></img>

                  </a>
                </div>
                <div class="tw-basis-[84%]">
                  <div id="carouselExampleIndicators1" class="carousel slide" data-ride="carousel" data-interval="3000">

                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <div className="tw-basis-full min-[900px]:tw-basis-1/3" style={{ 'position': 'relative' }}>
                          <img className="tw-w-[100%] tw-h-[400px] mx-auto tw-object-cover" src={a1} alt="Image 2" />
                          {/* <div class="centered tw-font-sans tw-font-bold">Commercial</div> */}
                        </div>
                      </div>
                      <div class="carousel-item">
                        <div className="tw-basis-full min-[900px]:tw-basis-1/3" style={{ 'position': 'relative' }}>
                          <img className="tw-w-[100%] tw-h-[400px] mx-auto tw-object-cover" src={a2} alt="Image 2" />
                          {/* <div class="centered tw-font-sans tw-font-bold">Commercial</div> */}
                        </div>
                      </div>
                      <div class="carousel-item">
                        <div className="tw-basis-full min-[900px]:tw-basis-1/3" style={{ 'position': 'relative' }}>
                          <img className="tw-w-[100%] tw-h-[400px] mx-auto  tw-object-cover" src={a3} alt="Image 2" />
                          {/* <div class="centered tw-font-sans tw-font-bold">Commercial</div> */}
                        </div>
                      </div>
                      <div class="carousel-item">
                        <div className="tw-basis-full min-[900px]:tw-basis-1/3" style={{ 'position': 'relative' }}>
                          <img className="tw-w-[100%] tw-h-[400px] mx-auto tw-object-cover" src={a4} alt="Image 2" />
                          {/* <div class="centered tw-font-sans tw-font-bold">Commercial</div> */}
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
                <div class="tw-basis-[8%] m-auto">
                  <a href="#carouselExampleIndicators1" role="button" data-slide="next">
                    <img src={rightw} alt='dd'></img>
                  </a>
                </div>
                {/* </div> */}
              </div>

            </div>
            <div class="tw-hidden min-[900px]:tw-block mx-auto">
              <div class="wrap">
                <a class="btn-6" onClick={() => navigate("/celebrity")}>VIEW ALL<span></span></a>
              </div>
            </div>
            <div class="tw-block min-[900px]:tw-hidden mx-auto">
              <div class="wrap">
                <a class="btn-7" onClick={() => navigate("/celebrity")}>VIEW ALL<span></span></a>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Commercial */}
      <div className='tw-hidden min-[900px]:tw-block tw-w-full tw-py-4' style={{ 'background': '#232323' }}>
        <div className='tw-grid tw-mx-10 md:tw-mx-40 tw-my-10 tw-py-8' >
          <div className='tw-columns-1'>
            <div className='tw-font-sans tw-font-bold tw-text-2xl tw-mt-4 md:tw-mt-8' style={{ 'color': '#fff', 'textTransform': 'uppercase' }}>
              Commercial
            </div>
          </div>
          <div id='video2' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-1 tw-gap-8  tw-mx-8 md:tw-mx-48 tw-my-10 mx-auto'>
            <video onClick={e => play(e, 'video2', 0)} poster={commercial[0]}>
              <source src='https://www.youtube.com/embed/eXQJNyLEYqY?autoplay=1' type="video/mp4" />
            </video>
            <video onClick={e => play(e, 'video2', 1)} poster={commercial[1]}>
              <source src='https://www.youtube.com/embed/R58kGs01FBM?autoplay=1' type="video/mp4" />
            </video>
            <video onClick={e => play(e, 'video2', 2)} poster={commercial[2]}>
              <source src='https://www.youtube.com/embed/hKyNjBpuOjQ?autoplay=1' type="video/mp4" />
            </video>
            <video onClick={e => play(e, 'video2', 3)} poster={commercial[3]}>
              <source src='https://www.youtube.com/embed/aZWl4QY-LOA?autoplay=1' type="video/mp4" />
            </video>
            <video onClick={e => play(e, 'video2', 4)} poster={commercial[4]}>
              <source src='https://www.youtube.com/embed/PbR98T2peEY?autoplay=1' type="video/mp4" />
            </video>
            <video onClick={e => play(e, 'video2', 5)} poster={commercial[5]}>
              <source src='https://www.youtube.com/embed/x5lvN1pSKNE?autoplay=1' type="video/mp4" />
            </video>
            <video onClick={e => play(e, 'video2', 6)} poster={commercial[6]}>
              <source src='https://www.youtube.com/embed/EEXXcqRUquo?autoplay=1' type="video/mp4" />
            </video>
            <video onClick={e => play(e, 'video2', 7)} poster={commercial[7]}>
              <source src='https://www.youtube.com/embed/sLSlt7Fx8mU?autoplay=1' type="video/mp4" />
            </video>
          </div>
          <div className='tw-columns-1 tw-w-full'>
            <div class="mx-auto">
              <div class="wrap">
                <a class="btn-7" onClick={() => navigate("/hair")}>VIEW ALL<span></span></a>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className='tw-grid min-[900px]:tw-hidden tw-mx-4 tw-py-4'>
        <div className='tw-columns-1 '>
          <div className='tw-font-sans tw-font-bold tw-text-2xl underline-small' style={{ 'marginBottom': '15px' }}>Commercial</div>
          <div className='tw-block min-[900px]:tw-hidden'>
            <div id="carouselExampleIndicators3" class="carousel slide" data-ride="carousel" data-interval="3000">
              <ol className="carousel-indicators" style={{ 'color': 'black', 'bottom': '-50px' }}>
                <li data-target="#carouselExampleIndicators3" data-slide-to="0" className="active"><img src={dash}></img>&nbsp;&nbsp;&nbsp;</li>
                <li data-target="#carouselExampleIndicators3" data-slide-to="1"><img src={dash}></img>&nbsp;&nbsp;&nbsp;</li>
                <li data-target="#carouselExampleIndicators3" data-slide-to="2"><img src={dash}></img></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <video className='tw-w-[100%] tw-h-[200px] mx-auto' onClick={e => play(e, 'video2', 0)} poster={commercial[0]}>
                    <source src='https://www.youtube.com/embed/eXQJNyLEYqY?autoplay=1' type="video/mp4" />
                  </video>
                </div>
                <div class="carousel-item">
                  <video className='tw-w-[100%] tw-h-[200px] mx-auto' onClick={e => play(e, 'video2', 1)} poster={commercial[1]}>
                    <source src='https://www.youtube.com/embed/R58kGs01FBM?autoplay=1' type="video/mp4" />
                  </video>
                </div>
                <div class="carousel-item">
                  <video className='tw-w-[100%] tw-h-[200px] mx-auto' onClick={e => play(e, 'video2', 2)} poster={commercial[2]}>
                    <source src='https://www.youtube.com/embed/hKyNjBpuOjQ?autoplay=1' type="video/mp4" />
                  </video>
                </div>
                <div class="carousel-item">
                  <video className='tw-w-[100%] tw-h-[200px] mx-auto' onClick={e => play(e, 'video2', 3)} poster={commercial[3]}>
                    <source src='https://www.youtube.com/embed/aZWl4QY-LOA?autoplay=1' type="video/mp4" />
                  </video>
                </div>
                <div class="carousel-item ">
                  <video className='tw-w-[100%] tw-h-[200px] mx-auto' onClick={e => play(e, 'video2', 0)} poster={commercial[4]}>
                    <source src='https://www.youtube.com/embed/PbR98T2peEY?autoplay=1' type="video/mp4" />
                  </video>
                </div>
                <div class="carousel-item">
                  <video className='tw-w-[100%] tw-h-[200px] mx-auto' onClick={e => play(e, 'video2', 1)} poster={commercial[5]}>
                    <source src='https://www.youtube.com/embed/x5lvN1pSKNE?autoplay=1' type="video/mp4" />
                  </video>
                </div>
                <div class="carousel-item">
                  <video className='tw-w-[100%] tw-h-[200px] mx-auto' onClick={e => play(e, 'video2', 2)} poster={commercial[6]}>
                    <source src='https://www.youtube.com/embed/EEXXcqRUquo?autoplay=1' type="video/mp4" />
                  </video>
                </div>
                <div class="carousel-item">
                  <video className='tw-w-[100%] tw-h-[200px] mx-auto' onClick={e => play(e, 'video2', 7)} poster={commercial[7]}>
                    <source src='https://www.youtube.com/embed/sLSlt7Fx8mU?autoplay=1' type="video/mp4" />
                  </video>
                </div>
              </div>
              {/* <a class="carousel-control-prev" href="#carouselExampleIndicators1" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only"></span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators1" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only"></span>
                    </a> */}
            </div>
          </div>
          <div class="mx-auto tw-mt-8">
            <div class="wrap">
              <a class="btn-6" onClick={() => navigate("/hair")}>VIEW ALL<span></span></a>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter and awards */}
      <div className='tw-bg-[#232323] min-[900px]:tw-bg-white tw-h-auto'>
        <div className='tw-grid tw-mx-10 min-[900px]:tw-mx-40 min-[900px]:tw-mt-10 tw-pt-4'>
          <div className='tw-columns-1 '>
            <div className='tw-font-sans tw-font-bold tw-text-2xl tw-text-white min-[900px]:tw-text-black underline-small' style={{ 'marginBottom': '15px' }}>Newsletter and awards</div>
            <div className='tw-hidden min-[900px]:tw-grid min-[900px]:tw-grid-cols-3 tw-grid-cols-1 tw-gap-2  tw-mx-8 min-[900px]:tw-mx-48 tw-my-10 mx-auto'>
              <div className="card">
                <img className='mx-auto my-3' src={b1} alt='g' style={{ 'width': '90%', 'height': '300px', 'objectFit': 'cover' }}></img>

                <div className="card-body">
                  <p className="card-text tw-font-sans tw-font-normal">Hair and makeup artist Florian Hurel: “My journey in Bollywood began when I worked with Priyanka Chopra Jonas”</p>
                  <a href="https://urbanasian.com/news/2021/09/hair-and-makeup-artist-florian-hurel-my-journey-in-bollywood-began-when-i-worked-with-priyanka-chopra-jonas/" className="tw-float-right" rel="noreferrer" target='_blank'>Read more</a>
                </div>
              </div>
              <div className="card">
                <img className='mx-auto my-3' src={b2} alt='g' style={{ 'width': '90%', 'height': '300px', 'objectFit': 'cover' }}></img>

                <div className="card-body">
                  <p className="card-text tw-font-sans tw-font-normal" >Celebrity hair and makeup artist Florian Hurel talks about being a part of online live hairstyling event which created Guinness World Records</p>
                  <a href="https://timesofindia.indiatimes.com/life-style/beauty/celebrity-hair-and-makeup-artist-florian-hurel-talks-about-being-a-part-of-online-live-hairstyling-event-which-created-guinness-world-records/articleshow/76203984.cms" className="tw-float-right" rel="noreferrer" target='_blank'>Read more</a>
                </div>
              </div>
              <div className="card">
                <img className='mx-auto my-3' src={b3} alt='g' style={{ 'width': '90%', 'height': '300px', 'objectFit': 'cover' }}></img>

                <div className="card-body">
                  <p className="card-text tw-font-sans tw-font-normal">Florian Hurel: The best award to me is my team’s success</p>
                  <a href="https://urbanasian.com/lifestyle/health/2022/11/florian-hurel-the-best-award-to-me-is-my-teams-success/" className="tw-float-right " rel="noreferrer" target='_blank'>Read more</a>
                </div>
              </div>
            </div>
            <div className='tw-grid min-[900px]:tw-hidden tw-grid-cols-1 tw-gap-2  tw-mx-8 min-[900px]:tw-mx-48 tw-my-4 mx-auto'>
              <div id="carouselExampleIndicators3" class="carousel slide" data-ride="carousel" data-interval="3000">
                {/* <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators1" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators1" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators1" data-slide-to="2"></li>
                    </ol> */}
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div className="card mx-auto">
                      <img className='mx-auto my-3' src={b1} alt='g' style={{ 'width': '90%', 'height': '300px', 'objectFit': 'cover' }}></img>

                      <div className="card-body">
                        <p className="card-text tw-font-sans tw-font-normal">Hair and makeup artist Florian Hurel: “My journey in Bollywood began when I worked with Priyanka Chopra Jonas”</p>
                        <a href="https://urbanasian.com/news/2021/09/hair-and-makeup-artist-florian-hurel-my-journey-in-bollywood-began-when-i-worked-with-priyanka-chopra-jonas/" className="tw-float-right" rel="noreferrer" target='_blank'>Read more</a>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div className="card mx-auto">
                      <img className='mx-auto my-3' src={b2} alt='g' style={{ 'width': '90%', 'height': '300px', 'objectFit': 'cover' }}></img>

                      <div className="card-body">
                        <p className="card-text tw-font-sans tw-font-normal" >Celebrity hair and makeup artist Florian Hurel talks about being a part of online live hairstyling event which created Guinness World Records</p>
                        <a href="https://timesofindia.indiatimes.com/life-style/beauty/celebrity-hair-and-makeup-artist-florian-hurel-talks-about-being-a-part-of-online-live-hairstyling-event-which-created-guinness-world-records/articleshow/76203984.cms" className="tw-float-right" rel="noreferrer" target='_blank'>Read more</a>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div className="card mx-auto">
                      <img className='mx-auto my-3' src={b3} alt='g' style={{ 'width': '90%', 'height': '300px', 'objectFit': 'cover' }}></img>

                      <div className="card-body">
                        <p className="card-text tw-font-sans tw-font-normal">Florian Hurel: The best award to me is my team’s success</p>
                        <a href="https://urbanasian.com/lifestyle/health/2022/11/florian-hurel-the-best-award-to-me-is-my-teams-success/" className="tw-float-right " rel="noreferrer" target='_blank'>Read more</a>
                      </div>
                    </div>
                  </div>

                </div>
                {/* <a class="carousel-control-prev" href="#carouselExampleIndicators1" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only"></span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators1" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only"></span>
                    </a> */}
              </div>



            </div>
            <div class="tw-hidden min-[900px]:tw-block mx-auto">
              <div class="wrap">
                <a class="btn-6" onClick={() => navigate("/blogs")}>VIEW ALL<span></span></a>
              </div>
            </div>
            <div class="tw-block min-[900px]:tw-hidden mx-auto">
              <div class="wrap">
                <a class="btn-7" onClick={() => navigate("/blogs")}>VIEW ALL<span></span></a>
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


      <div id="modal" className="tw-fixed tw-hidden tw-z-50 tw-inset-0 tw-bg-gray-900 tw-bg-opacity-60 tw-overflow-y-auto tw-h-full tw-w-full tw-modal">
        <div className="tw-relative tw-mx-auto tw-h-full tw-w-full tw-shadow-xl tw-rounded-md tw-bg-white " id='video-model'>
          <div className="tw-grid tw-grid-cols-2 gap-4 tw-pt-8 md:tw-mx-24 tw-mx-8">
            <div className='tw-font-sans tw-font-bold' style={{ 'fontSize': '13.3521px', 'lineHeight': '18px', 'textTransform': 'uppercase' }}>Back to home</div>
            <div ><img className='tw-float-right' src={cross} onClick={closeModal} alt='cross' style={{ 'cursor': 'pointer' }}></img></div>
          </div>
          <div className="tw-flex tw-flex-row tw-pt-2 tw-h-[80vh]">
            <div className="tw-basis-1/12 my-auto">
              <div className="md:tw-mx-8 tw-mx-2 tw-float-right" onClick={previousVideo}>
                <span className="" aria-hidden="true"><img src={left} alt='dd'></img></span>
              </div></div>
            <div className="tw-basis-5/6 mx-auto tw-w-full tw-h-full">
              {/* <video className='tw-w-full tw-h-full' controls ref={videoRef}>
                <source src={videoArray[selectedVideo]} type="video/mp4" />
              </video> */}

              <iframe id="ytplayer" type="text/html" ref={videoRef} className='tw-w-full tw-h-full'
                src={videoArray[selectedVideo]}
                frameBorder="0" allowFullScreen title="This is a unique title" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full" />
            </div>
            <div className="tw-basis-1/12 my-auto">
              <div className="md:tw-mx-8 tw-mx-2" onClick={nextVideo}>
                <span className="" aria-hidden="true"><img src={right} alt='dd'></img></span>
              </div>
            </div>
          </div>

          <div className="tw-flex tw-flex-row ">
            <div className="tw-basis-1/12 my-auto"></div>
            <div className="tw-basis-5/6">
              {selectedVideo + 1}/{videoArray.length}
            </div>
            <div className="tw-basis-1/12 my-auto">
            </div>
          </div>

        </div>
      </div>

      <div id="modal-image" className="tw-fixed tw-hidden tw-z-50 tw-inset-0 tw-bg-gray-900 tw-bg-opacity-60 tw-overflow-y-auto tw-h-full tw-w-full tw-modal">
        <div className="tw-relative tw-mx-auto tw-h-full tw-w-full tw-shadow-xl tw-rounded-md tw-bg-white " id='video-model'>
          <div className="tw-grid tw-grid-cols-2 gap-4 tw-pt-8 md:tw-mx-24 tw-mx-8">
            <div className='tw-font-sans tw-font-bold' style={{ 'fontSize': '13.3521px', 'lineHeight': '18px', 'textTransform': 'uppercase' }}>Back to home</div>
            <div ><img className='tw-float-right' src={cross} onClick={closeModalImage} alt='cross' style={{ 'cursor': 'pointer' }}></img></div>
          </div>
          <div className="tw-flex tw-flex-row tw-pt-2 tw-h-[80vh]">
            <div className="tw-basis-1/12 my-auto">
              <div className="md:tw-mx-8 tw-mx-2 tw-float-right" onClick={previousImage}>
                <span className="" aria-hidden="true"><img src={left} alt='dd'></img></span>
              </div></div>
            <div className="tw-basis-5/6 mx-auto tw-w-full tw-h-full">
              <img className='tw-w-full tw-h-full' src={imageArray[selectedImage]} alt='dddd' style={{ 'objectFit': 'contain' }}>
              </img>

            </div>
            <div className="tw-basis-1/12 my-auto">
              <div className="md:tw-mx-8 tw-mx-2" onClick={nextImage}>
                <span className="" aria-hidden="true"><img src={right} alt='dd'></img></span>
              </div>
            </div>
          </div>

          <div className="tw-flex tw-flex-row ">
            <div className="tw-basis-1/12 my-auto"></div>
            <div className="tw-basis-5/6">
              {selectedImage + 1}/{imageArray.length}
            </div>
            <div className="tw-basis-1/12 my-auto">
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default BrandWorkWith