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
import colT from '../../assets/img/campign/colgate.jpg'
import rexonaT from '../../assets/img/campign/rexona.jpg'
import pumaT from '../../assets/img/campign/puma.jpg'
import fixderma from '../../assets/img/campign/fixderma.jpg'
import fbb from '../../assets/img/campign/fbb.jpg'
import one from '../../assets/img/campign/one.jpg'
import nourish from '../../assets/img/campign/nourish.jpg'
import mama from '../../assets/img/campign/mama.jpg'
import sketchers from '../../assets/img/campign/sketchers.jpg'
import jio from '../../assets/img/campign/jio.jpg'
import melange from '../../assets/img/campign/melange.jpg'
import flipkart from '../../assets/img/campign/flipkart.jpg'
import cadbury from '../../assets/img/campign/cadbury.JPG'
import ceris from '../../assets/img/campign/ceris.jpg'

const Campaigns = () => {
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

    const noor = importAll(require.context('../../assets/img/campign/nooraniyat', false, /\.(png|jpe?g|JPG|svg)$/));
    const reliance = importAll(require.context('../../assets/img/campign/reliance', false, /\.(png|jpe?g|JPG|svg)$/));
    const bazaar = importAll(require.context('../../assets/img/magine-cover/BAZAAR', false, /\.(png|jpe?g|svg)$/));
    const BRIDE = importAll(require.context('../../assets/img/magine-cover/BRIDE', false, /\.(png|jpe?g|svg)$/));
    const Cosmopolitan = importAll(require.context('../../assets/img/magine-cover/Cosmopolitan', false, /\.(png|jpe?g|svg)$/));
    const FEMINA = importAll(require.context('../../assets/img/magine-cover/FEMINA', false, /\.(png|jpe?g|svg)$/));
    const FLIMFARE = importAll(require.context('../../assets/img/magine-cover/FILMFARE', false, /\.(png|jpe?g|svg)$/));
    const GRAZIA = importAll(require.context('../../assets/img/magine-cover/HELLO', false, /\.(png|jpe?g|svg)$/));
    const HELLO = importAll(require.context('../../assets/img/magine-cover/BAZAAR', false, /\.(png|jpe?g|svg)$/));
    const WEDDINGVOWS = importAll(require.context('../../assets/img/magine-cover/WEDDINGVOWS', false, /\.(png|jpe?g|svg)$/));


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
                                Campaigns
                            </div>
                            <div className='tw-font-sans tw-font-light tw-text-xl tw-mt-1 tw-ml-8 md:tw-mt-1'>
                                Nooraniyat  --  Reliance Jewels  --  Cadbury  --  Ceris  --  Colgate  --  REXONA -- PUMA  --  Fixderma  --  FBB  --  One Plus  --  Nourish  --  Mama Earth   --  Sketchers  --  Melange  -- JIO --  Flipkart
                            </div>
                        </div>


                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
                            Nooraniyat
                        </div>
                        <div id='Nooraniyat' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>

                            {noor.map((e, i) => (

                                <img className='mx-auto' onClick={e => playImage(e, 'Nooraniyat', i)} src={e} alt='g' style={{ 'width': '90%', 'height': '400px', 'objectFit': 'cover' }}></img>
                            ))}
                        </div>

                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
                        Reliance Jewels
                        </div>
                        <div id='reliance' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>

                            {reliance.map((e, i) => (

                                <img className='mx-auto' onClick={e => playImage(e, 'reliance', i)} src={e} alt='g' style={{ 'width': '90%', 'height': '400px', 'objectFit': 'cover' }}></img>
                            ))}
                        </div>


                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
                            Cadbury
                        </div>
                        <div id='cadbury' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>

                            <video onClick={e => play(e, 'cadbury', 0)} poster={cadbury}>
                                <source src='https://www.youtube.com/embed/1LLKXt4Y4Uo?autoplay=1' type="video/mp4" />
                            </video>
                        </div>

                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
                            Ceris
                        </div>
                        <div id='ceris' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>

                            <video onClick={e => play(e, 'ceris', 0)} poster={ceris}>
                                <source src='https://www.youtube.com/embed/1LLKXt4Y4Uo?autoplay=1' type="video/mp4" />
                            </video>
                        </div>

                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
                            Colgate
                        </div>
                        <div id='colgate' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>

                            <video onClick={e => play(e, 'colgate', 0)} poster={colT}>
                                <source src='https://www.youtube.com/embed/crgys_Vvf5Y?autoplay=1' type="video/mp4" />
                            </video>
                        </div>

                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
                            REXONA
                        </div>
                        <div id='rexona' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8  tw-mb-10 tw-justify-center'>
                            {/* {bazaar.map((e,i) => (
                <img className='mx-auto' onClick={e => playImage(e, 'bazaar', i)} src={e} alt='g' style={{ 'width': '90%', 'height': '400px', 'objectFit': 'cover' }}></img>
              ))} */}
                            <video onClick={e => play(e, 'rexona', 0)} poster={rexonaT}>
                                <source src='https://www.youtube.com/embed/HhgnhVD8P3E?autoplay=1' type="video/mp4" />
                            </video>
                        </div>

                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
                            PUMA
                        </div>
                        <div id='puma' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>
                            {/* {BRIDE.map((e,i) => (
                <img className='mx-auto' onClick={e => playImage(e, 'bride', i)} src={e} alt='g' style={{ 'width': '90%', 'height': '400px', 'objectFit': 'cover' }}></img>
              ))} */}
                            <video onClick={e => play(e, 'puma', 0)} poster={pumaT}>
                                <source src='https://www.youtube.com/embed/xoVhnuCzHdA?autoplay=1' type="video/mp4" />
                            </video>
                        </div>

                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
                            Fixderma
                        </div>
                        <div id='Fixderma' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>
                            {/* {HELLO.map((e,i) => (

                <img className='mx-auto' onClick={e => playImage(e, 'Fixderma', i)} src={e} alt='g' style={{ 'width': '90%', 'height': '400px', 'objectFit': 'cover' }}></img>
              ))} */}
                            <video onClick={e => play(e, 'Fixderma', 0)} poster={fixderma}>
                                <source src='https://www.youtube.com/embed/guIhyeITCGw?autoplay=1' type="video/mp4" />
                            </video>
                        </div>

                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
                            FBB
                        </div>
                        <div id='fbb' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>
                            <video onClick={e => play(e, 'fbb', 0)} poster={fbb}>
                                <source src='https://www.youtube.com/embed/c7yoHJgvgWM?autoplay=1' type="video/mp4" />
                            </video>
                        </div>

                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
                            One Plus
                        </div>
                        <div id='one' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>
                            <video onClick={e => play(e, 'one', 0)} poster={one}>
                                <source src='https://www.youtube.com/embed/k3zs-V1bOC0?autoplay=1' type="video/mp4" />
                            </video>
                        </div>

                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
                            Nourish
                        </div>
                        <div id='Nourish' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>
                            <video onClick={e => play(e, 'Nourish', 0)} poster={nourish}>
                                <source src='https://www.youtube.com/embed/YEvJ1qTydA4?autoplay=1' type="video/mp4" />
                            </video>
                        </div>

                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
                            Mama Earth
                        </div>
                        <div id='mama' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>
                            <video onClick={e => play(e, 'mama', 0)} poster={mama}>
                                <source src='https://www.youtube.com/embed/G44P6OE_YWc?autoplay=1' type="video/mp4" />
                            </video>
                        </div>

                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
                            Sketchers
                        </div>
                        <div id='Sketchers' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>
                            <video onClick={e => play(e, 'Sketchers', 0)} poster={sketchers}>
                                <source src='https://www.youtube.com/embed/w-1f7ITyeNg?autoplay=1' type="video/mp4" />
                            </video>
                        </div>

                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
                            Melange
                        </div>
                        <div id='Melange' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>
                            <video onClick={e => play(e, 'Melange', 0)} poster={melange}>
                                <source src='https://www.youtube.com/embed/hhjaB8Rz0SQ?autoplay=1' type="video/mp4" />
                            </video>
                        </div>

                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
                            JIO
                        </div>
                        <div id='jio' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>
                            <video onClick={e => play(e, 'jio', 0)} poster={jio}>
                                <source src='https://www.youtube.com/embed/XUYxCyTuGxs?autoplay=1' type="video/mp4" />
                            </video>
                        </div>

                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
                            Flipkart
                        </div>
                        <div id='flipkart' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>
                            <video onClick={e => play(e, 'flipkart', 0)} poster={flipkart}>
                                <source src='https://www.youtube.com/embed/vmxAHV1httQ?autoplay=1' type="video/mp4" />
                            </video>
                        </div>
                        \
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

export default Campaigns