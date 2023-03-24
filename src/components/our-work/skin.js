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
import glow1 from '../../assets/img/skin/glow1.jpg'
import glow2 from '../../assets/img/skin/glow2.jpg'
import glow3 from '../../assets/img/skin/glow3.jpg'
import lakme from '../../assets/img/skin/lakme.jpg'
import bio1 from '../../assets/img/skin/bio1.jpg'
import bio2 from '../../assets/img/skin/bio2.jpg'
import bio3 from '../../assets/img/skin/bio3.jpg'
import logo from '../../assets/img/home.svg';

const Skin = () => {
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

    const may = importAll(require.context('../../assets/img/skin/may', false, /\.(png|jpe?g|JPG|svg)$/));
    // const reliance = importAll(require.context('../../assets/img/campign/reliance', false, /\.(png|jpe?g|JPG|svg)$/));
    // const bazaar = importAll(require.context('../../assets/img/magine-cover/BAZAAR', false, /\.(png|jpe?g|svg)$/));
    // const BRIDE = importAll(require.context('../../assets/img/magine-cover/BRIDE', false, /\.(png|jpe?g|svg)$/));
    // const Cosmopolitan = importAll(require.context('../../assets/img/magine-cover/Cosmopolitan', false, /\.(png|jpe?g|svg)$/));
    // const FEMINA = importAll(require.context('../../assets/img/magine-cover/FEMINA', false, /\.(png|jpe?g|svg)$/));
    // const FLIMFARE = importAll(require.context('../../assets/img/magine-cover/FILMFARE', false, /\.(png|jpe?g|svg)$/));
    // const GRAZIA = importAll(require.context('../../assets/img/magine-cover/HELLO', false, /\.(png|jpe?g|svg)$/));
    // const HELLO = importAll(require.context('../../assets/img/magine-cover/BAZAAR', false, /\.(png|jpe?g|svg)$/));
    // const WEDDINGVOWS = importAll(require.context('../../assets/img/magine-cover/WEDDINGVOWS', false, /\.(png|jpe?g|svg)$/));


    const play = (event, id, index) => {
        document.getElementById('nav').style.display = 'none'
        document.getElementById('modal').style.display = 'block'
        document.getElementsByTagName('body')[0].classList.add('tw-overflow-y-hidden')
        setTimeout(() => {
            var img = document.getElementById(id).getElementsByTagName('video');
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
        document.getElementById('nav').style.display = 'block'
        document.getElementById('modal').style.display = 'none'
        document.getElementsByTagName('body')[0].classList.remove('tw-overflow-y-hidden')
    }
    return (
        <div className='min-[900px]:tw-relative tw-h-auto' style={{ 'background': 'linear-gradient(180deg, #3E3E3E 3.02%, #1A1919 73.58%)' }}>
            <div className='tw-w-full'>
                <Header />

                {/* Commercial */}
                <div className='tw-w-full backgroungg7' style={{ 'background': 'linear-gradient(180deg, #3E3E3E 3.02%, #1A1919 73.58%)' }}>
                <div className='tw-hidden min-[900px]:tw-block'>
            <div id="carouselExampleIndicators10" class="carousel slide" data-ride="carousel" data-interval="5000">

              <div class="carousel-inner">
                {/* mobile view */}
                <div class="carousel-item active ">
                  <img class="d-block w-100 tw-h-[600px] tw-object-cover" src={may[2]} alt="First slide" />
                  <div class="carousel-caption" style={{
                    'fontSize': '44px',
                    'color': '#fff',
                    'background': 'rgba(0,0,0,0.6)',
                    'padding': '2px 0px',
                    'position': 'absolute',
                    'left': '0px', 'bottom': '88px','width':'33%'
                  }}>
                    <h5>Skin</h5>
                  </div>
                </div>
                {/* <div class="carousel-item ">
                  <img class="d-block w-100 tw-h-[600px] tw-object-cover" src={may[0]} alt="Second slide" />
                  <div class="carousel-caption" style={{
                    'fontSize': '44px',
                    'color': '#fff',
                    'background': 'rgba(0,0,0,0.6)',
                    'padding': '2px 0px',
                    'position': 'absolute',
                    'left': '0px', 'bottom': '88px','width':'33%'
                  }}>
                    <h5>Skin</h5>
                  </div>
                </div> */}
                {/* <div class="carousel-item ">
                  <img class="d-block w-100 tw-h-[600px] tw-object-cover" src={may[0]} alt="Third slide" />
                   <div class="carousel-caption" style={{
                    'fontSize': '44px',
                    'color': '#fff',
                    'background': 'rgba(0,0,0,0.6)',
                    'padding': '2px 0px',
                    'position': 'absolute',
                    'left': '0px', 'bottom': '88px','width':'33%'
                  }}>
                    <h5>Skin</h5>
                  </div>
                </div> */}
              </div>

            </div>
          </div>
          <div className='min-[900px]:tw-hidden'>
            <div id="carouselExampleIndicators10" class="carousel slide" data-ride="carousel" data-interval="5000">

              <div class="carousel-inner">
                {/* mobile view */}
                <div class="carousel-item active ">
                  <img class="d-block w-100 tw-h-[600px] tw-object-cover" src={may[2]} alt="First slide" />
                  <div class="carousel-caption" style={{
                    'fontSize': '30px',
                    'color': '#fff',
                    'background': 'rgba(0,0,0,0.6)',
                    'padding': '2px 0px',
                    'position': 'absolute',
                    'left': '0px', 'bottom': '88px','width':'35%'
                  }}>
                    <h5>Skin</h5>
                  </div>
                </div>
                {/* <div class="carousel-item ">
                  <img class="d-block w-100 tw-h-[600px] tw-object-cover" src={may[0]} alt="Second slide" />
                  <div class="carousel-caption" style={{
                    'fontSize': '30px',
                    'color': '#fff',
                    'background': 'rgba(0,0,0,0.6)',
                    'padding': '2px 0px',
                    'position': 'absolute',
                    'left': '0px', 'bottom': '88px','width':'35%'
                  }}>
                    <h5>Skin</h5>
                  </div>
                </div> */}
                {/* <div class="carousel-item ">
                  <img class="d-block w-100 tw-h-[600px] tw-object-cover" src={may[0]} alt="Third slide" />
                  <div class="carousel-caption" style={{
                    'fontSize': '30px',
                    'color': '#fff',
                    'background': 'rgba(0,0,0,0.6)',
                    'padding': '2px 0px',
                    'position': 'absolute',
                    'left': '0px', 'bottom': '88px','width':'35%'
                  }}>
                    <h5>Skin</h5>
                  </div>
                </div> */}
              </div>

            </div>
          </div>
                    <div className='tw-grid tw-mx-4 md:tw-mx-40 tw-mb-10 tw-pb-8' >
                        <div className='tw-columns-1 tw-pb-4'>
                            {/* <div className='tw-font-sans tw-font-bold tw-text-3xl tw-mt-4 tw-ml-8 md:tw-mt-8' style={{}}>
                                Skin
                            </div> */}
                            <div className='tw-font-sans tw-font-light tw-text-xl tw-mt-1 tw-ml-8 md:tw-mt-1 tw-text-white' style={{ 'textAlign': 'justify', 'margin': '40px 0px 30px 0px' }}>
                                {/* Glow & Lovely  --  Lakme  --  Biotique  --  Maybelline */}
                                He understands the importance of using high-quality products and techniques to achieve flawless skin and works closely with each client to create a look that highlights their natural beauty.
                            </div>
                        </div>


                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4 fontt' >
                        Manya for Glow & Lovely
                        </div>
                        <div id='glow' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>
                        <div>
                        <video onClick={e => play(e, 'glow', 0)} poster={glow1}>
                                <source src='https://www.youtube.com/embed/LzUDs54BpGs?autoplay=1' type="video/mp4" />
                            </video>
                                {/* <span className='mx-auto ellipsImageName' style={{ 'display': 'flex', 'justifyContent': 'center' }}>Glow & Lovely by Manya</span> */}
                            </div>
                            <div>
                            <video onClick={e => play(e, 'glow', 1)} poster={glow2}>
                                <source src='https://www.youtube.com/embed/-ZGn04ob4Nk?autoplay=1' type="video/mp4" />
                            </video>
                                {/* <span className='mx-auto ellipsImageName' style={{ 'display': 'flex', 'justifyContent': 'center' }}>Glow & Lovely by Manya</span> */}
                            </div>
                            <div>
                            <video onClick={e => play(e, 'glow', 2)} poster={glow3}>
                                <source src='https://www.youtube.com/embed/sLSlt7Fx8mU?autoplay=1' type="video/mp4" />
                            </video>
                                {/* <span className='mx-auto ellipsImageName' style={{ 'display': 'flex', 'justifyContent': 'center' }}>Glow & Lovely by Manya</span> */}
                            </div>
 
                            

                        </div>

                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4 fontt' >
                            Ananya pandey for Lakme
                        </div>
                        <div id='lakme' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>
                        <div>
                        <video onClick={e => play(e, 'lakme', 0)} poster={lakme}>
                                <source src='https://www.youtube.com/embed/EEXXcqRUquo?autoplay=1' type="video/mp4" />
                            </video>
                                {/* <span className='mx-auto ellipsImageName' style={{ 'display': 'flex', 'justifyContent': 'center' }}>Lakme by Ananya</span> */}
                            </div>

                        </div>

                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4 fontt' >
                          Sara ali khan for Biotique
                        </div>
                        <div id='Biotique' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>
                        <div>
                        <video onClick={e => play(e, 'Biotique', 0)} poster={bio1}>
                                <source src='https://www.youtube.com/embed/4j_iTSV74_Q?autoplay=1' type="video/mp4" />
                            </video>
                                {/* <span className='mx-auto ellipsImageName' style={{ 'display': 'flex', 'justifyContent': 'center' }}>Biotique by Sara</span> */}
                            </div>
                            <div>

                            <video onClick={e => play(e, 'Biotique', 1)} poster={bio2}>
                                <source src='https://www.youtube.com/embed/4aAgyGLnngs?autoplay=1' type="video/mp4" />
                            </video>
                                {/* <span className='mx-auto ellipsImageName' style={{ 'display': 'flex', 'justifyContent': 'center' }}>Biotique by Sara</span> */}
                            </div>
                            <div>
                            <video onClick={e => play(e, 'Biotique', 2)} poster={bio3}>
                                <source src='https://www.youtube.com/embed/6dH51aKh3rA?autoplay=1' type="video/mp4" />
                            </video>
                                {/* <span className='mx-auto ellipsImageName' style={{ 'display': 'flex', 'justifyContent': 'center' }}>Biotique by Sara</span> */}
                            </div>


                        </div>


                        <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4 fontt' >
                        Sara ali khan for Maybelline
                        </div>
                        <div id='Maybelline' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-1 tw-mb-10 tw-justify-center'>

                            {may.map((e, i) => (
                                <img className='mx-auto' onClick={e => playImage(e, 'Maybelline', i)} src={e} alt='g' style={{ 'width': '100%', 'height': 'auto', 'objectFit': 'contain', 'margin':'auto' }}></img>
                            ))}
                        </div>





                    </div>

                </div>

                {/* footer */}
                <div className='tw-w-full' >
        <div className='tw-grid min-[900px]:tw-grid-cols-3 tw-grid-cols-1 tw-gap-4 tw-mx-10 md:tw-mx-40 tw-py-8 mx-auto' >
          <img className='mx-auto my-auto min-[900px]:tw-block tw-hidden' src={fo1} alt='g' ></img>
          <div>
            <div className='columns-1'>
              <img className='mx-auto' src={logo} alt='g' ></img>
              {/* <img className='mx-auto' src={fo21} alt='g' ></img> */}
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
          <div className='mx-auto tw-text-white'>&#169;Copyrights 2023</div>
          <div className='mx-auto tw-text-white'>Privacy policy / Cookies policy / Terms of use</div>
        </div>
        <div className=' tw-grid min-[900px]:tw-hidden tw-grid-cols-1 tw-gap-4 tw-mx-10 md:tw-mx-40 tw-py-2 mx-auto' >
          {/* <div></div> */}
          <div className='mx-auto tw-text-white'>&#169;Copyrights 2023
          </div>
          <div className='mx-auto tw-text-white'>Privacy policy / Cookies policy / Terms of use</div>
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
        </div>
    )
}

export default Skin