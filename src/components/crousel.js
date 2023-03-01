import React from 'react'
import image1 from '../assets/img/carousel/2.JPG'
import image2 from '../assets/img/carousel/1.JPG'
import image3 from '../assets/img/carousel/3.JPG'
import giff from '../assets/img/circle.gif'

const Crousel = () => {
    let [path, setPath] = React.useState('')
    let [count, setcount] = React.useState(1)
    let [gif, setGif] = React.useState(true)
    React.useEffect(() => {
        setPath(image1)
        let interval = setInterval(() => {
            toggle()
            
        }, 5000);

        return () => {
            clearInterval(interval)
        }
    }, [])

    React.useEffect(() => {
        document.querySelectorAll('.fade-out').forEach(e =>{
            e.classList.add('fade-out-active');
        })
        setTimeout(() => {
            document.querySelectorAll('.fade-out').forEach(e =>{
                e.classList.remove('fade-out-active');
            })
            
        }, 500);
        setTimeout(() => {
            document.querySelectorAll('.zoom-in').forEach(e =>{
                e.classList.add('zoom-in-active');
            })
        }, 500);
        if (count ==2) {
            
            setGif(false)
        }
    }, [count])
    

    const toggle = () => {


        if (count == 1) {
            setPath(image1)
            setcount(count++)
            // setGif(false)
        } else if (count == 2) {
            setPath(image2)
            setcount(count++)
        } else {
            setPath(image3)
            setcount(count--)
            setcount(count--)
        }

        // setcount(count++)



    }



    return (
        <div className='crousel-component'>
            <div className="tw-hidden min-[900px]:tw-grid min-[900px]:tw-grid-cols-3">
                <div className="min-[900px]:tw-col-span-2 ">
                    <div className="tw-grid min-[900px]:tw-grid-cols-4 tw-mt-10 min-[900px]:tw-mt-24" style={{
                    }}>
                        <span></span>
                        {count === 1 && <span className=' fade-out zoom-in tw-font-sans tw-font-bold min-[900px]:tw-col-span-2 tw-text-center min-[900px]:tw-text-left' style={{ fontSize: '50px', lineHeight: '57px', color: '#fff', 'marginTop': '10%' }}>
                            Makeup Artist & Hair Specialist
                        </span>}
                            {count === 2 && <span className=' fade-out zoom-in tw-font-sans tw-font-bold min-[900px]:tw-col-span-2 tw-text-center min-[900px]:tw-text-left' style={{ fontSize: '50px', lineHeight: '57px', color: '#fff', 'marginTop': '10%' }}>
                            Makeup Artist & Hair Specialist
                        </span>}
                            {count === 3 && <span className=' fade-out zoom-in tw-font-sans tw-font-bold min-[900px]:tw-col-span-2 tw-text-center min-[900px]:tw-text-left' style={{ fontSize: '50px', lineHeight: '57px', color: '#fff', 'marginTop': '10%' }}>
                            Makeup Artist & Hair Specialist
                        </span>}
                        
                        <span></span>
                    </div>
                    <div className="tw-grid min-[900px]:tw-grid-cols-4 min-[900px]:tw-mt-10" style={{
                    }}>
                        <span></span>
                        {count === 1 && <span className=' fade-out zoom-in tw-font-sans tw-font-bold tw-col-span-2 tw-text-center min-[900px]:tw-text-left' style={{ fontSize: '42px', lineHeight: '57px', color: '#fff' }}>
                            Florian Hurel
                        </span>}
                            {count === 2 && <span className=' fade-out zoom-in tw-font-sans tw-font-bold tw-col-span-2 tw-text-center min-[900px]:tw-text-left' style={{ fontSize: '42px', lineHeight: '57px', color: '#fff' }}>
                            Florian Hurel
                        </span>}
                            {count === 3 && <span className=' fade-out zoom-in tw-font-sans tw-font-bold tw-col-span-2 tw-text-center min-[900px]:tw-text-left' style={{ fontSize: '42px', lineHeight: '57px', color: '#fff' }}>
                            Florian Hurel
                        </span>}
                        {/* <span className=' fade-out zoom-in tw-font-sans tw-font-bold tw-col-span-2 tw-text-center min-[900px]:tw-text-left' style={{ fontSize: '42px', lineHeight: '57px', color: '#fff' }}>
                            Florian Hurel
                        </span> */}
                        <span></span>
                    </div>
                    <div className="tw-grid min-[900px]:tw-grid-cols-4" style={{
                        padding: '1em',
                        'marginTop': '10px',
                        'position':'relative'
                    }}>
                        <span></span>
                        <p className=' fade-out zoom-in tw-font-sans tw-font-light tw-col-span-3 tw-text-center min-[900px]:tw-text-left' style={{ fontSize: '18px', lineHeight: '27px', color: '#fff', 'white-space': 'break-spaces', 'text-transform': 'uppercase', width: '90%' }}>
                            <span className='tw-font-semibold'>BIO</span><span>   <span style={{'position':'relative', 'width':'30px','display':'inline-block'}} className="horizonal-line"> </span>      Brands worked with    <span style={{'position':'relative', 'width':'30px','display':'inline-block'}} className="horizonal-line"> </span>     Business holded   Magazine Covers   <span style={{'position':'relative', 'width':'30px','display':'inline-block'}} className="horizonal-line"> </span>    Commercial</span>
                        </p>
                            {gif && <img src={giff} style={{
                                'height': '100px',
                                'position': 'absolute',
                                'right': '-5%',
                                'z-index': '999'
                            }} alt='gif'></img>
                            }
                    </div>
                </div>
                <div className="animation">
                    {count === 1 && <div class="outer">
                        <div class="underlay">
                            <img src={image1} style={{ 'height': '600px' }} alt="loading logo" />
                        </div>
                    </div>}
                    {count === 2 && <div class="outer">
                        <div class="underlay">
                            <img src={image2} style={{ 'height': '600px' }} alt="loading logo" />
                        </div>
                    </div>}
                    {count === 3 && <div class="outer">
                        <div class="underlay">
                            <img src={image3} style={{ 'height': '600px' }} alt="loading logo" />
                        </div>
                    </div>}

                </div>
            </div>
            <div className='tw-grid min-[900px]:tw-hidden'>
                <div className='tw-columns-1 '>
                    <div className='tw-w-full' style={{'background':'#232323',"padding":'20px 1px'}}>
                        <div className="animation tw-mx-auto tw-mt-2 tw-w-[80vw]" style={{'position':'relative'}} >
                        {gif && <img src={giff} style={{
                                'height': '80px',
                                'position': 'absolute',
                                'left': '-1%',
                                'z-index': '999',
                                'top':'10%'
                            }} alt='gif'></img>}
                            {count === 1 && <div className=' outer2 tw-mx-auto' >
                                <div class="underlay2 tw-mx-auto">
                                    <img src={image1} className='tw-mx-auto' style={{ 'height': '300px' }} alt="loading logo" />
                                </div>
                            </div>}
                            {count === 2 && <div className=' outer2 tw-mx-auto' style={{ 'height': '300px' }}>
                                <div class="underlay2">
                                    <img src={image2} className='tw-mx-auto' style={{ 'height': '300px' }} alt="loading logo" />
                                </div>
                            </div>}
                            {count === 3 && <div className=' outer2 tw-mx-auto' style={{ 'height': '300px' }}>
                                <div class="underlay2">
                                    <img src={image3} className='tw-mx-auto' style={{ 'height': '300px' }} alt="loading logo" />
                                </div>
                            </div>}

                        </div>
                    </div>
                    <div className='tw-w-full'>
                        <div className="tw-grid tw-mt-2 tw-mx-10" style={{
                        }}>
                            <span></span>
                            <span className='tw-font-sans tw-font-bold tw-text-center min-[900px]:tw-text-left' style={{ fontSize: '35px', lineHeight: '57px', color: '#000' }}>
                                Makeup Artist & Hair Specialist
                            </span>
                            <span></span>
                        </div>
                        <div className="tw-grid tw-mt-2" style={{
                        }}>
                            <span></span>
                            <span className='tw-font-sans tw-font-normal tw-text-center min-[900px]:tw-text-left' style={{ fontSize: '30px', lineHeight: '40px', color: '#000' }}>
                                Florian Hurel
                            </span>
                            <span></span>
                        </div>
                        {/* <div className="tw-grid tw-mt-2 tw-mx-auto" style={{
                            'padding': '1px 40px'
                        }}>
                            <span></span>
                            <p className='tw-font-sans tw-font-light tw-text-left' style={{ fontSize: '18px', lineHeight: '27px', color: '#fff', 'white-space': 'break-spaces', 'text-transform': 'uppercase', width: '90%' }}>
                                <span className='tw-font-semibold'>BIO</span><span> ---  Brands worked with   ---   Business holded  Magazine Covers   ----  Commercial</span>
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Crousel