import React from 'react'
import Header from '../header'
import fo1 from '../../assets/img/footer/1.svg';
import fo2 from '../../assets/img/footer/2-1.svg';
import fo21 from '../../assets/img/footer/2.svg';
import fo3 from '../../assets/img/footer/3.svg';
import fb from '../../assets/img/fb.svg';
import insta from '../../assets/img/instagram.svg';
import twitter from '../../assets/img/twitter.svg';
import cross from '../../assets/img/times.svg';
import left from '../../assets/img/left-arrow.svg';
import right from '../../assets/img/right-arrow.svg';

import nourish from '../../assets/img/campign/nourish.jpg'
import sketchers from '../../assets/img/campign/sketchers.jpg'
import jio from '../../assets/img/campign/jio.jpg'
import melange from '../../assets/img/campign/melange.jpg'
import flipkart from '../../assets/img/campign/flipkart.jpg'
import hair1 from '../../assets/img/hair/hair1.jpg'
import hair2 from '../../assets/img/hair/hair2.jpg'
import godrej1 from '../../assets/img/hair/godrej1.jpg'
import godrej2 from '../../assets/img/hair/godrej2.jpg'
import dabur1 from '../../assets/img/hair/dabur1.jpg'
import tres1 from '../../assets/img/hair/tres1.jpg'
import tres2 from '../../assets/img/hair/tres2.jpg'
import pan1 from '../../assets/img/hair/pan1.jpg'
import kesh1 from '../../assets/img/hair/kesh1.jpg'
import dove1 from '../../assets/img/hair/dove1.jpg'
import mama1 from '../../assets/img/hair/mama1.jpg'
import mama2 from '../../assets/img/hair/mama2.jpg'
import tiru1 from '../../assets/img/hair/tiru1.jpg'
import para1 from '../../assets/img/hair/para1.jpg'
import sch1 from '../../assets/img/hair/sch1.jpg'
import sch2 from '../../assets/img/hair/sch2.jpg'


const Hair = () => {
    const [imageArray, setimageArray] = React.useState([])
    let [selectedImage, setSelectedImage] = React.useState(0)
    const [videoArray, setvideoArray] = React.useState([])
    let [selectedVideo, setSelectedVideo] = React.useState(0)

    function importAll(r) {
        return r.keys().map((r));
    }


    const nextImage = () => {
        // debugger
        if (selectedImage < (imageArray.length - 1)) {
            setSelectedImage(selectedImage + 1)

        }
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

    const previousImage = () => {
        // debugger
        if (selectedImage !== 0) {
            setSelectedImage(selectedImage - 1)
        }
    }

    const closeModalImage = () => {
        document.getElementById('nav').style.display = 'block'

        document.getElementById('modal-image').style.display = 'none'
        document.getElementsByTagName('body')[0].classList.remove('tw-overflow-y-hidden')
    }

    const streak = importAll(require.context('../../assets/img/hair/steak', false, /\.(png|jpe?g|JPG|svg)$/));
    const sch = importAll(require.context('../../assets/img/hair/sch', false, /\.(png|jpe?g|JPG|svg)$/));


    const play = (event, id, index) => {
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
        }, 500);
    }


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

    const closeModal = () => {
        setvideoArray([])
        document.getElementById('modal').style.display = 'none'
        document.getElementsByTagName('body')[0].classList.remove('tw-overflow-y-hidden')
    }
    return (
        <>
            <div className='tw-w-full'>
                <Header />

                {/* Commercial */}
                <div className='tw-w-full'>
                    <div className='tw-grid tw-mx-10 md:tw-mx-40 tw-mb-10 tw-pb-8' >
                        <div className='tw-columns-1 tw-pb-4'>
                            <div className='tw-font-sans tw-font-bold tw-text-3xl tw-mt-4 tw-ml-8 md:tw-mt-8' style={{}}>
                                Hair Commercial
                            </div>
                            <div className='tw-font-sans tw-font-light tw-text-xl tw-mt-1 tw-ml-8 md:tw-mt-1'>
                            Hair & Care  --  Godrej  --  Dabur  --  TRESemme  --  Pantene  --  Kash King -- Dove  --  Mamaearth  --  Tirumalaa  --  Parachute  --  Schwarzkopf   --  Streak
                            </div>
                        </div>


                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
                            Hair & Care
                        </div>
                        <div id='hair' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>

                            <video onClick={e => play(e, 'hair', 0)} poster={hair1}>
                                <source src='https://www.youtube.com/embed/eXQJNyLEYqY?autoplay=1' type="video/mp4" />
                            </video>
                            <video onClick={e => play(e, 'hair', 0)} poster={hair2}>
                                <source src='https://www.youtube.com/embed/R58kGs01FBM?autoplay=1' type="video/mp4" />
                            </video>
                        </div>

                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
                        Godrej
                        </div>
                        <div id='Godrej' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>
                        <video onClick={e => play(e, 'Godrej', 0)} poster={godrej1}>
                                <source src='https://www.youtube.com/embed/hKyNjBpuOjQ?autoplay=1' type="video/mp4" />
                            </video>
                            <video onClick={e => play(e, 'Godrej', 0)} poster={godrej2}>
                                <source src='https://www.youtube.com/embed/NBI69E-HGkU?autoplay=1' type="video/mp4" />
                            </video>
                        </div>


                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
                            Dabur
                        </div>
                        <div id='dabur' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>

                            <video onClick={e => play(e, 'dabur', 0)} poster={dabur1}>
                                <source src='https://www.youtube.com/embed/GbwTDTa3KgA?autoplay=1' type="video/mp4" />
                            </video>
                        </div>

                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
                            TRESemme
                        </div>
                        <div id='tresemme' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>

                            <video onClick={e => play(e, 'tresemme', 0)} poster={tres1}>
                                <source src='https://www.youtube.com/embed/8fGpeQaWKBE?autoplay=1' type="video/mp4" />
                            </video>

                            <video onClick={e => play(e, 'tresemme', 0)} poster={tres2}>
                                <source src='https://www.youtube.com/embed/8fGpeQaWKBE?autoplay=1' type="video/mp4" />
                            </video>
                        </div>

                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
                            Pantene
                        </div>
                        <div id='pantene' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>

                            <video onClick={e => play(e, 'pantene', 0)} poster={pan1}>
                                <source src='https://www.youtube.com/embed/pYUML21X1fM?autoplay=1' type="video/mp4" />
                            </video>
                        </div>

                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
                            Kesh King
                        </div>
                        <div id='kesh' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8  tw-mb-10 tw-justify-center'>
                            {/* {bazaar.map((e,i) => (
                <img className='mx-auto' onClick={e => playImage(e, 'bazaar', i)} src={e} alt='g' style={{ 'width': '90%', 'height': '400px', 'objectFit': 'cover' }}></img>
              ))} */}
                            <video onClick={e => play(e, 'kesh', 0)} poster={kesh1}>
                                <source src='https://www.youtube.com/embed/mLW1u4ERU6o?autoplay=1' type="video/mp4" />
                            </video>
                        </div>

                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
                            Dove
                        </div>
                        <div id='dove' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>
                            {/* {BRIDE.map((e,i) => (
                <img className='mx-auto' onClick={e => playImage(e, 'bride', i)} src={e} alt='g' style={{ 'width': '90%', 'height': '400px', 'objectFit': 'cover' }}></img>
              ))} */}
                            <video onClick={e => play(e, 'dove', 0)} poster={dove1}>
                                <source src='https://www.youtube.com/embed/x5lvN1pSKNE?autoplay=1' type="video/mp4" />
                            </video>
                        </div>

                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
                            Mama Earth
                        </div>
                        <div id='mama' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>
                            <video onClick={e => play(e, 'mama', 0)} poster={mama1}>
                                <source src='https://www.youtube.com/embed/PbR98T2peEY?autoplay=1' type="video/mp4" />
                            </video>
                            <video onClick={e => play(e, 'mama', 0)} poster={mama2}>
                                <source src='https://www.youtube.com/embed/wso1IbTklTo?autoplay=1' type="video/mp4" />
                            </video>
                        </div>

                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
                            Tirumalaa
                        </div>
                        <div id='Tirumalaa' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>
                            {/* {HELLO.map((e,i) => (

                <img className='mx-auto' onClick={e => playImage(e, 'Tirumalaa', i)} src={e} alt='g' style={{ 'width': '90%', 'height': '400px', 'objectFit': 'cover' }}></img>
              ))} */}
                            <video onClick={e => play(e, 'Tirumalaa', 0)} poster={tiru1}>
                                <source src='https://www.youtube.com/embed/-bD4cqf0pzg?autoplay=1' type="video/mp4" />
                            </video>
                        </div>

                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
                            Parachute
                        </div>
                        <div id='Parachute' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>
                            <video onClick={e => play(e, 'Parachute', 0)} poster={para1}>
                                <source src='https://www.youtube.com/embed/37ZXneJcYro?autoplay=1' type="video/mp4" />
                            </video>
                        </div>

                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
                            Schwarzkopf
                        </div>
                        <div id='Schwarzkopf' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>
                            <video onClick={e => play(e, 'Schwarzkopf', 0)} poster={sch1}>
                                <source src='https://www.youtube.com/embed/cEOJw1OpJWI?autoplay=1' type="video/mp4" />
                            </video>
                            <video onClick={e => play(e, 'Schwarzkopf', 0)} poster={sch2}>
                                <source src='https://www.youtube.com/embed/AepxyLNoQeI?autoplay=1' type="video/mp4" />
                            </video>
                                                        {sch.map((e,i) => (
                <img className='mx-auto' onClick={e => playImage(e, 'Schwarzkopf', i)} src={e} alt='g' style={{ 'width': '90%', 'height': '400px', 'objectFit': 'cover' }}></img>
              ))}
                        </div>

                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
                            Streak
                        </div>
                        <div id='strek' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>
                                                       {streak.map((e,i) => (
                <img className='mx-auto' onClick={e => playImage(e, 'streak', i)} src={e} alt='g' style={{ 'width': '90%', 'height': '400px', 'objectFit': 'cover' }}></img>
              ))}
                        </div>


                    </div>

                </div>

                {/* footer */}
                <div className='tw-w-full' style={{ 'background': 'rgba(229, 229, 229, 0.5)' }}>
                    <div className='tw-grid tw-grid-cols-3 tw-gap-4 tw-mx-10 md:tw-mx-40 tw-my-10 tw-py-8 mx-auto' >
                        <img className='mx-auto my-auto' src={fo1} alt='g' ></img>
                        <div>
                            <div className='columns-1'>
                                <img className='mx-auto' src={fo2} alt='g' ></img>
                                <img className='mx-auto' src={fo21} alt='g' ></img>
                                <div className='tw-grid tw-grid-cols-3 tw-gap-4 tw-mx-40 mt-4'>
                                    <img className='mx-auto' src={fb} alt='g' ></img>
                                    <img className='mx-auto' src={insta} alt='g' ></img>
                                    <img className='mx-auto' src={twitter} alt='g' ></img>
                                </div>
                            </div>
                        </div>
                        <img className='mx-auto my-auto' src={fo3} alt='g' ></img>
                    </div>
                    <hr className='w-full' />
                    <div className='tw-grid tw-grid-cols-3 tw-gap-4 tw-mx-10 md:tw-mx-40 tw-mt-4 tw-py-4 mx-auto' >
                        <div></div>
                        <div className='mx-auto'>&#169;Copyrights 2023</div>
                        <div className='mx-auto'>Privacy policy / Cookies policy / Terms of use</div>
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

                            <iframe id="ytplayer" type="text/html" className='tw-w-full tw-h-full'
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
        </>
    )
}

export default Hair