import React from 'react'
import logo from '../assets/img/home.svg';
import fb from '../assets/img/fb.svg';
import togg from '../assets/img/togg.svg';
import insta from '../assets/img/instagram.svg';
import twitter from '../assets/img/twitter.svg';
import useCollapse from 'react-collapsed';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import cross from '../assets/img/times.svg';

const Header = () => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    const [navbar, setNavbar] = React.useState(false);
    const [ourWork, setourWork] = React.useState(false);
    const [blog, setblog] = React.useState(false);
    const [campaign, setcampaign] = React.useState(false);
    const navigate = useNavigate();
    React.useEffect(() => {
        // if (navbar) {
            // get the element


    }, [navbar])

    const moveto = (id) => {
        setNavbar(false)
        let element = document.getElementById(id)
        if (element) {
            element.scrollIntoView()
        } else {
            navigate('/')
            setTimeout(() => {
                let element = document.getElementById(id)
                element.scrollIntoView()
            }, 100);
        }
    }

    return (
        <header id='nav' className=' overlay' style={{    'position': 'sticky',
            'top': '0',
            'left': '0',
            'background': '#fff',
            'width': '100%'}}>
            <div className='tw-hidden min-[900px]:tw-flex min-[900px]:tw-flex-row ' style={{ height: '60px', margin: '0px 20px' }}>
                <div className='tw-basis-1/3 tw-my-auto tw-mx-auto tw-font-bold tw-font-sans' style={{ 'fontSize': '20px' }} >
                    <span style={{'cursor':'pointer'}} onClick={e => setNavbar(!navbar)}>MENU</span>
                </div>
                <div className='tw-basis-1/3 tw-my-auto' style={{ textAlign: '-webkit-center', }}>
                    <img src={logo} alt='home'></img>
                </div>
                <div className='tw-basis-1/3 tw-my-auto'>
                    <div style={{ display: 'flex', float: 'right' }}>
                        <img src={insta} alt='home' style={{ marginRight: '5px' }}></img>
                        <img src={fb} alt='home' style={{ marginRight: '5px' }}></img>
                        <img src={twitter} alt='home'></img>
                    </div>
                </div>
            </div>
            <div className='min-[900px]:tw-hidden tw-flex tw-flex-row ' style={{ height: '60px', margin: '20px' }}>
                {/* <div className='tw-basis-1/3 tw-my-auto tw-mx-auto tw-font-bold tw-font-sans' style={{ 'fontSize': '20px' }} >
                    <span onClick={e => setNavbar(!navbar)}>MENU</span>
                </div> */}
                <div className='tw-basis-2/3 tw-my-auto' style={{ textAlign: '-webkit-center', }}>
                    <img className='tw-float-left' src={logo} alt='home'></img>
                </div>
                <div className='tw-basis-1/3 tw-my-auto'>
                    {!navbar && <img className='tw-float-right' src={togg} onClick={e => setNavbar(!navbar)} alt='home'></img>}
                    {navbar && <img className='tw-float-right' src={cross} onClick={e => setNavbar(!navbar)} alt='home'></img>}
                    
                </div>
            </div>
            {
                navbar && 
                <>
            <div
                className={`tw-flex-1 tw-justify-self-center overlay-content tw-h-[100vh] min-[900px]:tw-h-auto slide-right min-[900px]:tw-hidden`} style={{ 'marginTop': '2.7em' }}
            >
                <ul className="tw-items-center tw-justify-center">
                    <li className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-4 " style={{
                        'fontFamily': 'Open Sans',
                        'fontStyle': 'normal',
                        'fontWeight': 300,
                        'fontSize': '35px',
                        'lineHeight': '35px',
                        'textTransform': 'uppercase'
                    }}>
                        <span style={{ 'cursor': 'pointer' }} onClick={() => navigate("/")}>Home </span>
                    </li >
                    <li className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-4" style={{
                        'fontFamily': 'Open Sans',
                        'fontStyle': 'normal',
                        'fontWeight': 300,
                        'fontSize': '35px',
                        'lineHeight': '35px',
                        'textTransform': 'uppercase'
                    }}>
                        <span style={{ 'cursor': 'pointer' }} onClick={e => moveto("bio")}>About</span>
                    </li>

                    <li className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-4" style={{
                        'fontFamily': 'Open Sans',
                        'fontStyle': 'normal',
                        'fontWeight': 300,
                        'fontSize': '35px',
                        'lineHeight': '35px',
                        'textTransform': 'uppercase'
                    }}>
                        <span style={{ 'cursor': 'pointer' }} onClick={e => setourWork(!ourWork)}>Our works {ourWork ? <span>-</span> : <span>+</span>}</span>
                    </li>
                    <ul className={`tw-items-center tw-justify-center tw-ml-16 ${ourWork ? "tw-block" : "tw-hidden"}`}>
                        <li className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-2" style={{
                            'fontFamily': 'Open Sans',
                            'fontStyle': 'normal',
                            'fontWeight': 300,
                            'fontSize': '24px',
                            'lineHeight': '24px',
                            'textTransform': 'uppercase'
                        }}>
                            <span style={{ 'cursor': 'pointer' }} onClick={e => navigate("/campaigns")}>Campaigns</span>
                        </li>
                        <li className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-2" style={{
                            'fontFamily': 'Open Sans',
                            'fontStyle': 'normal',
                            'fontWeight': 300,
                            'fontSize': '24px',
                            'lineHeight': '24px',
                            'textTransform': 'uppercase'
                        }}>
                            <span style={{ 'cursor': 'pointer' }} onClick={e => navigate("/celebrity")}>Celebrity appearances</span>
                        </li>

                        <li className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-2" style={{
                            'fontFamily': 'Open Sans',
                            'fontStyle': 'normal',
                            'fontWeight': 300,
                            'fontSize': '24px',
                            'lineHeight': '24px',
                            'textTransform': 'uppercase'
                        }}>
                            <span style={{ 'cursor': 'pointer' }} onClick={e => navigate("/magzine")}>Magazine covers</span>
                        </li>
                    </ul>

                    <li className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-4" style={{
                        'fontFamily': 'Open Sans',
                        'fontStyle': 'normal',
                        'fontWeight': 300,
                        'fontSize': '35px',
                        'lineHeight': '35px',
                        'textTransform': 'uppercase'
                    }}>
                        <span style={{ 'cursor': 'pointer' }} 
                        // onClick={e => setblog(!blog)}
                        onClick={e => navigate("/blogs")}
                        >Blog 
                        {/* {blog ? <span>-</span> : <span>+</span>} */}
                        </span>
                    </li>
                    {/* <ul className={`tw-items-center tw-justify-center tw-ml-16 ${blog ? "tw-block" : "tw-hidden"}`}>
                        <li className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-2" style={{
                            'fontFamily': 'Open Sans',
                            'fontStyle': 'normal',
                            'fontWeight': 300,
                            'fontSize': '24px',
                            'lineHeight': '24px',
                            'textTransform': 'uppercase'
                        }}>
                            <span style={{ 'cursor': 'pointer' }} onClick={e => moveto()}>News coverage</span>
                        </li>
                        <li className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-2" style={{
                            'fontFamily': 'Open Sans',
                            'fontStyle': 'normal',
                            'fontWeight': 300,
                            'fontSize': '24px',
                            'lineHeight': '24px',
                            'textTransform': 'uppercase'
                        }}>
                            <span style={{ 'cursor': 'pointer' }} onClick={e => moveto()}>Blogs</span>
                        </li>
                    </ul> */}

                    <li className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-4" style={{
                        'fontFamily': 'Open Sans',
                        'fontStyle': 'normal',
                        'fontWeight': 300,
                        'fontSize': '35px',
                        'lineHeight': '35px',
                        'textTransform': 'uppercase'
                    }}>
                        <span style={{ 'cursor': 'pointer' }} onClick={e => setcampaign(!campaign)}>Commercials {campaign ? <span>-</span> : <span>+</span>}</span>
                    </li>
                    <ul className={`tw-items-center tw-justify-center tw-ml-16 ${campaign ? "tw-block" : "tw-hidden"}`}>
                    <li className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-2" style={{
                            'fontFamily': 'Open Sans',
                            'fontStyle': 'normal',
                            'fontWeight': 300,
                            'fontSize': '24px',
                            'lineHeight': '24px',
                            'textTransform': 'uppercase'
                        }}>
                            <span style={{ 'cursor': 'pointer' }} onClick={e => navigate("/skin")}>Skin Commercials</span>
                        </li>

                        <li className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-2" style={{
                            'fontFamily': 'Open Sans',
                            'fontStyle': 'normal',
                            'fontWeight': 300,
                            'fontSize': '24px',
                            'lineHeight': '24px',
                            'textTransform': 'uppercase'
                        }}>
                            <span style={{ 'cursor': 'pointer' }} onClick={e => navigate("/hair")}>Hair Commercials</span>
                        </li>
                    </ul>

                    <li className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-4" style={{
                        'fontFamily': 'Open Sans',
                        'fontStyle': 'normal',
                        'fontWeight': 300,
                        'fontSize': '35px',
                        'lineHeight': '35px',
                        'textTransform': 'uppercase'
                    }}>
                        <span style={{ 'cursor': 'pointer' }} onClick={e => navigate("/contact")}>Contact</span>
                    </li>

                </ul>
            </div>
            <div
                className={`tw-flex-1 tw-justify-self-center overlay-content tw-h-[100vh] min-[900px]:tw-h-auto tw-hidden min-[900px]:tw-block`} style={{ 'marginTop': '2.7em' }}
            >
                <ul className="tw-items-center tw-justify-center">
                    <li className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-4 " style={{
                        'fontFamily': 'Open Sans',
                        'fontStyle': 'normal',
                        'fontWeight': 300,
                        'fontSize': '35px',
                        'lineHeight': '35px',
                        'textTransform': 'uppercase'
                    }}>
                        <span style={{ 'cursor': 'pointer' }} onClick={() => navigate("/")}>Home </span>
                    </li >
                    <li className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-4" style={{
                        'fontFamily': 'Open Sans',
                        'fontStyle': 'normal',
                        'fontWeight': 300,
                        'fontSize': '35px',
                        'lineHeight': '35px',
                        'textTransform': 'uppercase'
                    }}>
                        <span style={{ 'cursor': 'pointer' }} onClick={e => moveto("bio")}>About</span>
                    </li>

                    <li className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-4" style={{
                        'fontFamily': 'Open Sans',
                        'fontStyle': 'normal',
                        'fontWeight': 300,
                        'fontSize': '35px',
                        'lineHeight': '35px',
                        'textTransform': 'uppercase'
                    }}>
                        <span style={{ 'cursor': 'pointer' }} onClick={e => setourWork(!ourWork)}>Our works {ourWork ? <span>-</span> : <span>+</span>}</span>
                    </li>
                    <ul className={`tw-items-center tw-justify-center tw-ml-16 ${ourWork ? "tw-block" : "tw-hidden"}`}>
                        <li className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-2" style={{
                            'fontFamily': 'Open Sans',
                            'fontStyle': 'normal',
                            'fontWeight': 300,
                            'fontSize': '24px',
                            'lineHeight': '24px',
                            'textTransform': 'uppercase'
                        }}>
                            <span style={{ 'cursor': 'pointer' }} onClick={e => navigate("/campaigns")}>Campaigns</span>
                        </li>
                        <li className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-2" style={{
                            'fontFamily': 'Open Sans',
                            'fontStyle': 'normal',
                            'fontWeight': 300,
                            'fontSize': '24px',
                            'lineHeight': '24px',
                            'textTransform': 'uppercase'
                        }}>
                            <span style={{ 'cursor': 'pointer' }} onClick={e => navigate("/celebrity")}>Celebrity appearances</span>
                        </li>

                        <li className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-2" style={{
                            'fontFamily': 'Open Sans',
                            'fontStyle': 'normal',
                            'fontWeight': 300,
                            'fontSize': '24px',
                            'lineHeight': '24px',
                            'textTransform': 'uppercase'
                        }}>
                            <span style={{ 'cursor': 'pointer' }} onClick={e => navigate("/magzine")}>Magazine covers</span>
                        </li>
                    </ul>

                    <li className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-4" style={{
                        'fontFamily': 'Open Sans',
                        'fontStyle': 'normal',
                        'fontWeight': 300,
                        'fontSize': '35px',
                        'lineHeight': '35px',
                        'textTransform': 'uppercase'
                    }}>
                        <span style={{ 'cursor': 'pointer' }} 
                        // onClick={e => setblog(!blog)}
                        onClick={e => navigate("/blogs")}
                        >Blog 
                        {/* {blog ? <span>-</span> : <span>+</span>} */}
                        </span>
                    </li>
                    {/* <ul className={`tw-items-center tw-justify-center tw-ml-16 ${blog ? "tw-block" : "tw-hidden"}`}>
                        <li className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-2" style={{
                            'fontFamily': 'Open Sans',
                            'fontStyle': 'normal',
                            'fontWeight': 300,
                            'fontSize': '24px',
                            'lineHeight': '24px',
                            'textTransform': 'uppercase'
                        }}>
                            <span style={{ 'cursor': 'pointer' }} onClick={e => moveto()}>News coverage</span>
                        </li>
                        <li className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-2" style={{
                            'fontFamily': 'Open Sans',
                            'fontStyle': 'normal',
                            'fontWeight': 300,
                            'fontSize': '24px',
                            'lineHeight': '24px',
                            'textTransform': 'uppercase'
                        }}>
                            <span style={{ 'cursor': 'pointer' }} onClick={e => moveto()}>Blogs</span>
                        </li>
                    </ul> */}

                    <li className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-4" style={{
                        'fontFamily': 'Open Sans',
                        'fontStyle': 'normal',
                        'fontWeight': 300,
                        'fontSize': '35px',
                        'lineHeight': '35px',
                        'textTransform': 'uppercase'
                    }}>
                        <span style={{ 'cursor': 'pointer' }} onClick={e => setcampaign(!campaign)}>Commercials {campaign ? <span>-</span> : <span>+</span>}</span>
                    </li>
                    <ul className={`tw-items-center tw-justify-center tw-ml-16 ${campaign ? "tw-block" : "tw-hidden"}`}>
                    <li className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-2" style={{
                            'fontFamily': 'Open Sans',
                            'fontStyle': 'normal',
                            'fontWeight': 300,
                            'fontSize': '24px',
                            'lineHeight': '24px',
                            'textTransform': 'uppercase'
                        }}>
                            <span style={{ 'cursor': 'pointer' }} onClick={e => navigate("/skin")}>Skin Commercials</span>
                        </li>

                        <li className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-2" style={{
                            'fontFamily': 'Open Sans',
                            'fontStyle': 'normal',
                            'fontWeight': 300,
                            'fontSize': '24px',
                            'lineHeight': '24px',
                            'textTransform': 'uppercase'
                        }}>
                            <span style={{ 'cursor': 'pointer' }} onClick={e => navigate("/hair")}>Hair Commercials</span>
                        </li>
                    </ul>

                    <li className="tw-text-white min-[900px]:tw-text-gray-600 min-[900px]:hover:tw-text-gray-900 tw-p-4" style={{
                        'fontFamily': 'Open Sans',
                        'fontStyle': 'normal',
                        'fontWeight': 300,
                        'fontSize': '35px',
                        'lineHeight': '35px',
                        'textTransform': 'uppercase'
                    }}>
                        <span style={{ 'cursor': 'pointer' }} onClick={e => navigate("/contact")}>Contact</span>
                    </li>

                </ul>
            </div>
                </>
            }

        </header>
    )
}

export default Header