import React from 'react'
import Header from './header'
import a1 from '../assets/img/apperance/1.JPG';
import a2 from '../assets/img/apperance/2.JPG';
import a3 from '../assets/img/apperance/3.JPG';
import fo1 from '../assets/img/footer/1.svg';
import fo2 from '../assets/img/footer/2-1.svg';
import fo21 from '../assets/img/footer/2.svg';
import fo3 from '../assets/img/footer/3.svg';
import fb from '../assets/img/fb.svg';
import insta from '../assets/img/instagram.svg';
import twitter from '../assets/img/twitter.svg';
import b1 from '../assets/img/blog/1.webp';
import b2 from '../assets/img/blog/2.webp';
import b3 from '../assets/img/blog/3.jpg';
import b4 from '../assets/img/blog/4.jpg';

const Blog = () => {
  return (
    <>
      <div className='tw-w-full'>
        <Header />
        <div className='tw-grid tw-mx-4 min-[900px]:tw-mx-40 tw-my-10'>
          <div className='tw-columns-1 '>
            <div className='tw-font-sans tw-font-bold tw-text-2xl' style={{ 'marginBottom': '15px' }}>Our Blog</div>
            <div className='tw-grid min-[900px]:tw-grid-cols-4 tw-grid-cols-1 tw-gap-8  tw-mx-auto min-[900px]:tw-mx-48 tw-my-10 mx-auto'>
              <div className="card mx-auto">
                <img className='mx-auto my-3' src={b1} alt='g' style={{ 'width': '90%', 'height': '300px', 'objectFit': 'cover' }}></img>

                <div className="card-body">
                  <p className="card-text tw-font-sans tw-font-normal">Hair and makeup artist Florian Hurel: “My journey in Bollywood began when I worked with Priyanka Chopra Jonas”</p>
                  <a href="https://urbanasian.com/news/2021/09/hair-and-makeup-artist-florian-hurel-my-journey-in-bollywood-began-when-i-worked-with-priyanka-chopra-jonas/" className="tw-float-right" rel="noreferrer" target='_blank'>Read more</a>
                </div>
              </div>
              <div className="card mx-auto">
                <img className='mx-auto my-3' src={b2} alt='g' style={{ 'width': '90%', 'height': '300px', 'objectFit': 'cover' }}></img>

                <div className="card-body">
                  <p className="card-text tw-font-sans tw-font-normal" >Celebrity hair and makeup artist Florian Hurel talks about being a part of online live hairstyling event which created Guinness World Records</p>
                  <a href="https://timesofindia.indiatimes.com/life-style/beauty/celebrity-hair-and-makeup-artist-florian-hurel-talks-about-being-a-part-of-online-live-hairstyling-event-which-created-guinness-world-records/articleshow/76203984.cms" className="tw-float-right" rel="noreferrer" target='_blank'>Read more</a>
                </div>
              </div>
              <div className="card mx-auto">
                <img className='mx-auto my-3' src={b3} alt='g' style={{ 'width': '90%', 'height': '300px', 'objectFit': 'cover' }}></img>

                <div className="card-body">
                  <p className="card-text tw-font-sans tw-font-normal">Florian Hurel: The best award to me is my team’s success</p>
                  <a href="https://urbanasian.com/lifestyle/health/2022/11/florian-hurel-the-best-award-to-me-is-my-teams-success/" className="tw-float-right " rel="noreferrer" target='_blank'>Read more</a>
                </div>
              </div>

              <div className="card mx-auto">
                <img className='mx-auto my-3' src={b3} alt='g' style={{ 'width': '90%', 'height': '300px', 'objectFit': 'cover' }}></img>

                <div className="card-body">
                  <p className="card-text tw-font-sans tw-font-normal">Florian Hurel wins an award from Elle in the Best Hair Artist category!</p>
                  <a href="https://www.cinebuster.in/florian-hurel-wins-an-award-from-elle-in-the-best-hair-artist-category-l/" className="tw-float-right" rel="noreferrer" target='_blank'>Read more</a>
                </div>
              </div>
              <div className="card mx-auto">
                <img className='mx-auto my-3' src={b4} alt='g' style={{ 'width': '90%', 'height': '300px', 'objectFit': 'cover' }}></img>

                <div className="card-body">
                  <p className="card-text tw-font-sans tw-font-normal" >Makeup artist Florian Hurel shares tips to achieve desired hair colour...</p>
                  <a href="https://www.onmanorama.com/lifestyle/beauty-and-fashion/2022/08/28/makeup-artist-florian-hurel-shares-tips-hair-colour.html" className="tw-float-right" rel="noreferrer" target='_blank'>Read more</a>
                </div>
              </div>
            </div>
            {/* <div className='view-all tw-mx-auto tw-mt-8' style={{ 'position': 'relative', 'border': '3px solid #000' }}>
            <span className='tw-font-sans tw-font-bold' style={{ 'position': 'absolute', 'fontSize': '24px', 'padding': '8px 1px 1px 21px' }}><Link to="/blogs">VIEW ALL</Link></span>
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
    </>
  )
}

export default Blog