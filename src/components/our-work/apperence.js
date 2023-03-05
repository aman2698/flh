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
const Apperance = () => {
  const [imageArray, setimageArray] = React.useState([])
  let [selectedImage, setSelectedImage] = React.useState(0)

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

  const daisy = importAll(require.context('../../assets/img/CA/DAISY SHAH', false, /\.(png|jpe?g|svg)$/));
  const deepika = importAll(require.context('../../assets/img/CA/DEEPIKA/CHAPAAK PROMOTIONS', false, /\.(png|jpe?g|svg)$/));
  const kangna = importAll(require.context('../../assets/img/CA/KANGNA', false, /\.(png|jpe?g|svg)$/));
  const sara = importAll(require.context('../../assets/img/CA/SARA ALI KHAN', false, /\.(png|jpe?g|svg)$/));
  const tamannah = importAll(require.context('../../assets/img/CA/TAMANNAH/CANNES 2022', false, /\.(png|jpe?g|svg)$/));

  return (
    <>
      <div className='tw-w-full'>
        <Header />

        {/* Commercial */}
        <div className='tw-w-full'>
          <div className='tw-grid tw-mx-10 md:tw-mx-40 tw-mb-10 tw-pb-8' >
            <div className='tw-columns-1 tw-pb-4'>
              <div className='tw-font-sans tw-font-bold tw-text-3xl tw-mt-4 tw-ml-8 md:tw-mt-8' style={{}}>
                Celebrity Apperence
              </div>
              <div className='tw-font-sans tw-font-light tw-text-xl tw-mt-1 tw-ml-8 md:tw-mt-1'>
                <span>Daisy</span>  --  <span>Deepika</span> -- <span>Kangna</span>  --  <span>Sara ali khan</span>  --  <span>Tamannah</span>
              </div>
            </div>


            <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
            Daisy
            </div>
            <div id='vogue' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>
              {daisy.map((e,i) => (

                <img className='mx-auto' onClick={e => playImage(e, 'vogue', i)} src={e} alt='g' style={{ 'width': '90%', 'height': '400px', 'objectFit': 'cover' }}></img>
              ))}
            </div>

            <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
            Deepika
            </div>
            <div id='bazaar' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8  tw-mb-10 tw-justify-center'>
              {deepika.map((e,i) => (

                <img className='mx-auto' onClick={e => playImage(e, 'bazaar', i)} src={e} alt='g' style={{ 'width': '90%', 'height': '400px', 'objectFit': 'cover' }}></img>
              ))}
            </div>

            <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
            Kangna
            </div>
            <div id='bride' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>
              {kangna.map((e,i) => (

                <img className='mx-auto' onClick={e => playImage(e, 'bride', i)} src={e} alt='g' style={{ 'width': '90%', 'height': '400px', 'objectFit': 'cover' }}></img>
              ))}
            </div>

            <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
            Sara ali khan
            </div>
            <div id='hello' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>
              {sara.map((e,i) => (

                <img className='mx-auto' onClick={e => playImage(e, 'hello', i)} src={e} alt='g' style={{ 'width': '90%', 'height': '400px', 'objectFit': 'cover' }}></img>
              ))}
            </div>

            <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
            Tamannah
            </div>
            <div id='gazia' className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>
              {tamannah.map((e,i) => (

                <img className='mx-auto' onClick={e => playImage(e, 'gazia', i)} src={e} alt='g' style={{ 'width': '90%', 'height': '400px', 'objectFit': 'cover' }}></img>
              ))}
            </div>
            {/* <div className='view-all tw-mx-auto tw-mt-8' style={{ 'position': 'relative', 'border': '3px solid #fff' }}>
            <span className='tw-font-sans tw-font-bold' style={{ 'position': 'absolute', 'fontSize': '24px', 'padding': '8px 1px 1px 21px', 'color': '#fff' }}>VIEW ALL</span>
          </div> */}
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
    </>
  )
}

export default Apperance