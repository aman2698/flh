import React from 'react'
import Header from '../header'
import fo1 from '../../assets/img/footer/1.svg';
import fo2 from '../../assets/img/footer/2-1.svg';
import fo21 from '../../assets/img/footer/2.svg';
import fo3 from '../../assets/img/footer/3.svg';
import fb from '../../assets/img/fb.svg';
import insta from '../../assets/img/instagram.svg';
import twitter from '../../assets/img/twitter.svg';
import a1 from '../../assets/img/apperance/1.JPG';
import a2 from '../../assets/img/apperance/2.JPG';
import a3 from '../../assets/img/apperance/3.JPG';
import a4 from '../../assets/img/apperance/4.JPG';
const Magzine = () => {
  return (
    <>
      <div className='tw-w-full'>
        <Header />

        {/* Commercial */}
        <div className='tw-w-full'>
          <div className='tw-grid tw-mx-10 md:tw-mx-40 tw-mb-10 tw-pb-8' >
            <div className='tw-columns-1 tw-pb-4'>
              <div className='tw-font-sans tw-font-bold tw-text-3xl tw-mt-4 tw-ml-8 md:tw-mt-8' style={{}}>
              Magazine Cover
              </div>
              <div className='tw-font-sans tw-font-light tw-text-xl tw-mt-1 tw-ml-8 md:tw-mt-1'>
              Vogue  --  Elle -- Harpers Bazaar  --  Hello  --  Travel & Leisure  --  Cosmopolitan  --  Femina wedding  --  First Look
              </div>
            </div>


            <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
            Vogue
            </div>
            <div className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>
            <img className='mx-auto' src={a1} alt='g' style={{ 'width': '220px', 'height': '300px', 'objectFit': 'cover' }}></img>
            <img className='mx-auto' src={a2} alt='g' style={{ 'width': '220px', 'height': '300px', 'objectFit': 'cover' }}></img>
            <img className='mx-auto' src={a3} alt='g' style={{ 'width': '220px', 'height': '300px', 'objectFit': 'cover' }}></img>
            <img className='mx-auto' src={a4} alt='g' style={{ 'width': '220px', 'height': '300px', 'objectFit': 'cover' }}></img>
            </div>

            <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4'  style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
              Elle
            </div>
            <div className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8  tw-mb-10 tw-justify-center'>
            <img className='mx-auto' src={a1} alt='g' style={{ 'width': '220px', 'height': '300px', 'objectFit': 'cover' }}></img>
            <img className='mx-auto' src={a2} alt='g' style={{ 'width': '220px', 'height': '300px', 'objectFit': 'cover' }}></img>
            <img className='mx-auto' src={a3} alt='g' style={{ 'width': '220px', 'height': '300px', 'objectFit': 'cover' }}></img>
            <img className='mx-auto' src={a4} alt='g' style={{ 'width': '220px', 'height': '300px', 'objectFit': 'cover' }}></img>
            </div>

            <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
            Harpers Bazaar
            </div>
            <div className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>
            <img className='mx-auto' src={a1} alt='g' style={{ 'width': '220px', 'height': '300px', 'objectFit': 'cover' }}></img>
            <img className='mx-auto' src={a2} alt='g' style={{ 'width': '220px', 'height': '300px', 'objectFit': 'cover' }}></img>
            <img className='mx-auto' src={a3} alt='g' style={{ 'width': '220px', 'height': '300px', 'objectFit': 'cover' }}></img>
            <img className='mx-auto' src={a4} alt='g' style={{ 'width': '220px', 'height': '300px', 'objectFit': 'cover' }}></img>
            </div>

            <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
            Hello
            </div>
            <div className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>
            <img className='mx-auto' src={a1} alt='g' style={{ 'width': '220px', 'height': '300px', 'objectFit': 'cover' }}></img>
            <img className='mx-auto' src={a2} alt='g' style={{ 'width': '220px', 'height': '300px', 'objectFit': 'cover' }}></img>
            <img className='mx-auto' src={a3} alt='g' style={{ 'width': '220px', 'height': '300px', 'objectFit': 'cover' }}></img>
            <img className='mx-auto' src={a4} alt='g' style={{ 'width': '220px', 'height': '300px', 'objectFit': 'cover' }}></img>
            </div>

            <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
            Travel & Leisure
            </div>
            <div className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>
            <img className='mx-auto' src={a1} alt='g' style={{ 'width': '220px', 'height': '300px', 'objectFit': 'cover' }}></img>
            <img className='mx-auto' src={a2} alt='g' style={{ 'width': '220px', 'height': '300px', 'objectFit': 'cover' }}></img>
            <img className='mx-auto' src={a3} alt='g' style={{ 'width': '220px', 'height': '300px', 'objectFit': 'cover' }}></img>
            <img className='mx-auto' src={a4} alt='g' style={{ 'width': '220px', 'height': '300px', 'objectFit': 'cover' }}></img>
            </div>

            <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
            Cosmopolitan
            </div>
            <div className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>
            <img className='mx-auto' src={a1} alt='g' style={{ 'width': '220px', 'height': '300px', 'objectFit': 'cover' }}></img>
            <img className='mx-auto' src={a2} alt='g' style={{ 'width': '220px', 'height': '300px', 'objectFit': 'cover' }}></img>
            <img className='mx-auto' src={a3} alt='g' style={{ 'width': '220px', 'height': '300px', 'objectFit': 'cover' }}></img>
            <img className='mx-auto' src={a4} alt='g' style={{ 'width': '220px', 'height': '300px', 'objectFit': 'cover' }}></img>
            </div>

            <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
            Femina wedding
            </div>
            <div className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>
            <img className='mx-auto' src={a1} alt='g' style={{ 'width': '220px', 'height': '300px', 'objectFit': 'cover' }}></img>
            <img className='mx-auto' src={a2} alt='g' style={{ 'width': '220px', 'height': '300px', 'objectFit': 'cover' }}></img>
            <img className='mx-auto' src={a3} alt='g' style={{ 'width': '220px', 'height': '300px', 'objectFit': 'cover' }}></img>
            <img className='mx-auto' src={a4} alt='g' style={{ 'width': '220px', 'height': '300px', 'objectFit': 'cover' }}></img>
            </div>

            <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  md:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
            First Look
            </div>
            <div className='tw-grid md:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8 tw-mb-10 tw-justify-center'>
            <img className='mx-auto' src={a1} alt='g' style={{ 'width': '220px', 'height': '300px', 'objectFit': 'cover' }}></img>
            <img className='mx-auto' src={a2} alt='g' style={{ 'width': '220px', 'height': '300px', 'objectFit': 'cover' }}></img>
            <img className='mx-auto' src={a3} alt='g' style={{ 'width': '220px', 'height': '300px', 'objectFit': 'cover' }}></img>
            <img className='mx-auto' src={a4} alt='g' style={{ 'width': '220px', 'height': '300px', 'objectFit': 'cover' }}></img>
            </div>
            {/* <div className='view-all tw-mx-auto tw-mt-8' style={{ 'position': 'relative', 'border': '3px solid #fff' }}>
            <span className='tw-font-sans tw-font-bold' style={{ 'position': 'absolute', 'fontSize': '24px', 'padding': '8px 1px 1px 21px', 'color': '#fff' }}>VIEW ALL</span>
          </div> */}
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
    </>
  )
}

export default Magzine