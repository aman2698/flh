import React from 'react'
import Header from './header'
import f1 from '../assets/img/film/1.mp4';
import f2 from '../assets/img/film/2.mp4';
import f3 from '../assets/img/film/3.mp4';
import fo1 from '../assets/img/footer/1.svg';
import fo2 from '../assets/img/footer/2-1.svg';
import fo21 from '../assets/img/footer/2.svg';
import fo3 from '../assets/img/footer/3.svg';
import fb from '../assets/img/fb.svg';
import insta from '../assets/img/instagram.svg';
import twitter from '../assets/img/twitter.svg';
const Commercial = () => {
  return (
    <>
      <div className='tw-w-full'>
        <Header />

        {/* Commercial */}
        <div className='tw-w-full'>
          <div className='tw-grid tw-mx-10 min-[900px]:tw-mx-40 tw-mb-10 tw-py-8' >
            <div className='tw-columns-1'>
              <div className='tw-font-sans tw-font-bold tw-text-3xl tw-mt-4 tw-ml-8 min-[900px]:tw-mt-8' style={{}}>
                Commercials
              </div>
              <div className='tw-font-sans tw-font-light tw-text-xl tw-mt-1 tw-ml-8 min-[900px]:tw-mt-1'>
                Skin Commercials -- Hair Commercials  --  Campaigns
              </div>
            </div>


            <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  min-[900px]:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
              Skin Commercials
            </div>
            <div className='tw-grid min-[900px]:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8  tw-mx-8 min-[900px]:tw-mx-48 tw-mb-10 mx-auto'>
              <video controls="controls" preload="metadata">
                <source src={f1} type="video/mp4" />
              </video>
              <video controls="controls" preload="metadata">
                <source src={f2} type="video/mp4" />
              </video>
              <video controls="controls" preload="metadata">
                <source src={f3} type="video/mp4" />
              </video>
              <video controls="controls" preload="metadata">
                <source src={f1} type="video/mp4" />
              </video>
              <video controls="controls" preload="metadata">
                <source src={f2} type="video/mp4" />
              </video>
              <video controls="controls" preload="metadata">
                <source src={f3} type="video/mp4" />
              </video>
              <video controls="controls" preload="metadata">
                <source src={f1} type="video/mp4" />
              </video>
              <video controls="controls" preload="metadata">
                <source src={f2} type="video/mp4" />
              </video>
            </div>

            <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  min-[900px]:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
              Hair Commercials
            </div>
            <div className='tw-grid min-[900px]:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8  tw-mx-8 min-[900px]:tw-mx-48 tw-mb-10 mx-auto'>
              <video controls="controls" preload="metadata">
                <source src={f1} type="video/mp4" />
              </video>
              <video controls="controls" preload="metadata">
                <source src={f2} type="video/mp4" />
              </video>
              <video controls="controls" preload="metadata">
                <source src={f3} type="video/mp4" />
              </video>
              <video controls="controls" preload="metadata">
                <source src={f1} type="video/mp4" />
              </video>
              <video controls="controls" preload="metadata">
                <source src={f2} type="video/mp4" />
              </video>
              <video controls="controls" preload="metadata">
                <source src={f3} type="video/mp4" />
              </video>
              <video controls="controls" preload="metadata">
                <source src={f1} type="video/mp4" />
              </video>
              <video controls="controls" preload="metadata">
                <source src={f2} type="video/mp4" />
              </video>
            </div>

            <div className='tw-grid-cols-1 tw-font-sans tw-font-semibold tw-my-2  min-[900px]:tw-my-4' style={{ 'fontSize': '14px', 'lineHeight': '19px' }}>
              Campaigns
            </div>
            <div className='tw-grid min-[900px]:tw-grid-cols-4 tw-grid-cols-2 tw-gap-8  tw-mx-8 min-[900px]:tw-mx-48 tw-mb-10 mx-auto'>
              <video controls="controls" preload="metadata">
                <source src={f1} type="video/mp4" />
              </video>
              <video controls="controls" preload="metadata">
                <source src={f2} type="video/mp4" />
              </video>
              <video controls="controls" preload="metadata">
                <source src={f3} type="video/mp4" />
              </video>
              <video controls="controls" preload="metadata">
                <source src={f1} type="video/mp4" />
              </video>
              <video controls="controls" preload="metadata">
                <source src={f2} type="video/mp4" />
              </video>
              <video controls="controls" preload="metadata">
                <source src={f3} type="video/mp4" />
              </video>
              <video controls="controls" preload="metadata">
                <source src={f1} type="video/mp4" />
              </video>
              <video controls="controls" preload="metadata">
                <source src={f2} type="video/mp4" />
              </video>
            </div>
            {/* <div className='view-all tw-mx-auto tw-mt-8' style={{ 'position': 'relative', 'border': '3px solid #fff' }}>
            <span className='tw-font-sans tw-font-bold' style={{ 'position': 'absolute', 'fontSize': '24px', 'padding': '8px 1px 1px 21px', 'color': '#fff' }}>VIEW ALL</span>
          </div> */}
          </div>

        </div>

        {/* footer */}
        <div className='tw-w-full' style={{ 'background': 'rgba(229, 229, 229, 0.5)' }}>
          <div className='tw-grid tw-grid-cols-3 tw-gap-4 tw-mx-10 min-[900px]:tw-mx-40 tw-my-10 tw-py-8 mx-auto' >
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
          <div className='tw-grid tw-grid-cols-3 tw-gap-4 tw-mx-10 min-[900px]:tw-mx-40 tw-mt-4 tw-py-4 mx-auto' >
            <div></div>
            <div className='mx-auto'>&#169;Copyrights 2023</div>
            <div className='mx-auto'>Privacy policy / Cookies policy / Terms of use</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Commercial