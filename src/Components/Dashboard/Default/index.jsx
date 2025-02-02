import React, { Fragment, useEffect, useRef, useState } from "react";
import { Container, Row } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import './DashBoard.css'
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import ReplyIcon from '@mui/icons-material/Reply';
import NorthIcon from '@mui/icons-material/North';
import { FaCopy } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
import IntegrationNotistack from "./CopySuccsessful";
import { CiShare1 } from "react-icons/ci";
import { FaWallet } from "react-icons/fa6";






const Dashboard = () => {

  const [visibleItems, setVisibleItems] = useState(15); // Number of items to display initially

  const [isSeeMoreVisible, setIsSeeMoreVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsButtonVisible(true);
      } else {
        setIsButtonVisible(false);
        setIsSeeMoreVisible(false); // Reset visibility on larger screens
      }
    };

    // Initial check on component mount
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSeeMoreClick = () => {
    setIsSeeMoreVisible(true);
    setIsButtonVisible(false);
  };


  const textToCopyRef = useRef(null);

  const handleCopyClick = () => {
    // Select the text inside the span
    textToCopyRef.current.select();
    // Copy the selected text to the clipboard
    document.execCommand('copy');
    // Deselect the text after copying
    window.getSelection().removeAllRanges();
  };

  const platformdata = [
    {
      usericon: (<PersonAddAltRoundedIcon sx={{ fontSize: "15px" }} />),
      newuser: 'New User Join',
      UserId: '869255',
      jioningtiming: '7 minutes',
      className: 'NewUser'
    },
    {
      usericon: (<FaWallet style={{ color: 'green' }} />),
      newuser: '+5 BUSD in x4',
      UserId: '869255',
      jioningtiming: '7 minutes',
      className: 'transaction'
    },
    {
      usericon: (<FaWallet style={{ color: 'green' }} />),
      newuser: '+5 BUSD in x4',
      UserId: '869255',
      jioningtiming: '7 minutes',
      className: 'transaction'
    },
    {
      usericon: (<PersonAddAltRoundedIcon sx={{ fontSize: "15px" }} />),
      newuser: 'New User Join',
      UserId: '869255',
      jioningtiming: '7 minutes',
      className: 'NewUser'
    },
    {
      usericon: (<FaWallet style={{ color: 'green' }} />),
      newuser: '+5 BUSD in x4',
      UserId: '869255',
      jioningtiming: '7 minutes',
      className: 'transaction'
    },
    {
      usericon: (<FaWallet style={{ color: 'green' }} />),
      newuser: '+5 BUSD in x4',
      UserId: '869255',
      jioningtiming: '7 minutes',
      className: 'transaction'
    },
    {
      usericon: (<PersonAddAltRoundedIcon sx={{ fontSize: "15px" }} />),
      newuser: 'New User Join',
      UserId: '869255',
      jioningtiming: '7 minutes',
      className: 'NewUser'
    },
    {
      usericon: (<FaWallet style={{ color: 'green' }} />),
      newuser: '+5 BUSD in x4',
      UserId: '869255',
      jioningtiming: '7 minutes',
      className: 'transaction'
    },
    {
      usericon: (<FaWallet style={{ color: 'green' }} />),
      newuser: '+5 BUSD in x4',
      UserId: '869255',
      jioningtiming: '7 minutes',
      className: 'transaction'
    },
    {
      usericon: (<PersonAddAltRoundedIcon sx={{ fontSize: "15px" }} />),
      newuser: 'New User Join',
      UserId: '869255',
      jioningtiming: '7 minutes',
      className: 'NewUser'
    },
    {
      usericon: (<FaWallet style={{ color: 'green' }} />),
      newuser: '+5 BUSD in x4',
      UserId: '869255',
      jioningtiming: '7 minutes',
      className: 'transaction'
    },
    {
      usericon: (<FaWallet style={{ color: 'green' }} />),
      newuser: '+5 BUSD in x4',
      UserId: '869255',
      jioningtiming: '7 minutes',
      className: 'transaction'
    },
    {
      usericon: (<PersonAddAltRoundedIcon sx={{ fontSize: "15px" }} />),
      newuser: 'New User Join',
      UserId: '869255',
      jioningtiming: '7 minutes',
      className: 'NewUser'
    },
    {
      usericon: (<FaWallet style={{ color: 'green' }} />),
      newuser: '+5 BUSD in x4',
      UserId: '869255',
      jioningtiming: '7 minutes',
      className: 'transaction'
    },
    {
      usericon: (<FaWallet style={{ color: 'green' }} />),
      newuser: '+5 BUSD in x4',
      UserId: '869255',
      jioningtiming: '7 minutes',
      className: 'transaction'
    },
    {
      usericon: (<PersonAddAltRoundedIcon sx={{ fontSize: "15px" }} />),
      newuser: 'New User Join',
      UserId: '869255',
      jioningtiming: '7 minutes',
      className: 'NewUser'
    },
    {
      usericon: (<FaWallet style={{ color: 'green' }} />),
      newuser: '+5 BUSD in x4',
      UserId: '869255',
      jioningtiming: '7 minutes',
      className: 'transaction'
    },
    {
      usericon: (<FaWallet style={{ color: 'green' }} />),
      newuser: '+5 BUSD in x4',
      UserId: '869255',
      jioningtiming: '7 minutes',
      className: 'transaction'
    },


  ]

  const showMoreItems = () => {
    setVisibleItems(visibleItems + 15); // Increase the number of visible items
  };

  const boxdata3 = [
    { name: 'x3/x4', link: ' 0x5ac...B97' },
    { name: 'x3/x4', link: ' 0x5ac...B97' },
    { name: 'x3/x4', link: ' 0x5ac...B97' },
    { name: 'x3/x4', link: ' 0x5ac...B97' },
    { name: 'x3/x4', link: ' 0x5ac...B97' }
  ]

  return (
    <div className="dashboard-container">

      <Fragment>
        <Breadcrumbs mainTitle="Dashboard" parent="Dashboard" title="Default" />
        <Container fluid={true}>

          {/* <DashBoardWidgets /> */}
          <Row style={{ marginBottom: '50px' }}>


            <div className="dashboard-main-container">
              <div className="dashboard-inner-container">

                <div className="main-upper-left-div">

                  <div className="user-img-box">
                    <img width={'120px'} src="/images/UnknownUser.webp" alt="" />
                  </div>
                  <div>
                    <span style={{ color: '#8B9FA8', fontSize: '23px', fontWeight: '800' }}>ID 468</span>
                  </div>
                  <div className={`see-more ${isSeeMoreVisible ? 'visible' : ''}`}>

                    <div>
                      <span style={{ color: '#black', fontSize: '16px', fontWeight: '600' }}>0xb37e...0868</span>
                    </div>
                    <div style={{ color: 'gray' }}>
                      Invited 01.06.2023 by <span className="ID-box">ID 1</span>
                    </div>
                  </div>

                  {isButtonVisible && <button className="see-more-1" onClick={handleSeeMoreClick}><IoEyeSharp /> Show See More</button>}

                </div>
                <div className="main-upper-right-div">
                  <div className="right-inner-row">
                    <div>
                      <span className="right-box-1-heading"> Referral link </span>
                    </div>
                    <div className="right-inner-flex-box">
                      <div>
                        {/* Use a ref to access the span text */}
                        <input
                          ref={textToCopyRef}
                          type="text"
                          value="metablocktechnologies.io"
                          readOnly
                          style={{ color: '#406AFF', fontSize: '18px', fontWeight: '800', border: 'none', outline: 'none', background: 'transparent', width: '250px' }}
                        />
                      </div>
                      <div className="copy-button" onClick={handleCopyClick}>

                        <IntegrationNotistack />
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              {/* <a className="group absolute bottom-[-10px] sm:bottom-[-13px] z-[11] left-1/2 -translate-x-1/2 p-2.5" href="/social?user=468">
              <div className="flex items-center justify-center flex-row  space-x-2 "><div className="p-[3px] sm:p-[2px] w-[120px] sm:w-[105px]" style={{ backgroundImage: 'url("/social/likecounter/likeCounterBg.png")', backgroundRepeat: 'round', backgroundSize: 'cover' }}><div className="flex justify-between items-center bg-[#072230] group-hover:bg-transparent rounded px-2 py-0.5 space-x-3 "><span className="text-[#D885FF] group-hover:text-white group-hover:font-normal font-light text-xs sm:text-[10px]">Social</span><div className="flex space-x-1"><img className="sm:w-2.5" src="/social/likecounter/likeIcon.svg" /><span className="text-white font-light group-hover:font-normal text-xs sm:text-[10px]">0</span>
              </div></div></div>
              </div>
              </a> */}


            </div>




            <div className="dashboard-container-1" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
              <div className="dashboard-left-box" >

                <div className="first-container-box-left">
                  <b>Team</b>
                  <h5>27</h5>
                  <div className="icon-redius" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="zero-number"> 0</div>
                    <div className="reload-icon"> <img src="/images/activity_white.webp" alt="" /></div>
                  </div>
                </div>
                <div className="first-container-box-left">
                  <b>Total Referral</b>
                  <h5>27</h5>
                  <div className="icon-redius" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="zero-number"> 0</div>
                    <div className="reload-icon"> <img src="/images/activity_white.webp" alt="" /></div>
                  </div>
                </div>
                {/* <div className="first-container-box-left">
                  <b>Current Slot</b>
                  <h5>27</h5>
                  <div className="icon-redius" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="zero-number"> 0</div>
                    <div className="reload-icon"> <img src="/images/activity_white.webp" alt="" /></div>
                  </div>
                </div> */}
              </div>
              <div className="dashboard-right-box" >
               
                <div className="first-container-box-left">
                  <b>Total Profit</b>
                  <h5>27</h5>
                  <div className="icon-redius" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="zero-number"> 0</div>
                    <div className="reload-icon"> <img src="/images/activity_white.webp" alt="" /></div>
                  </div>
                </div>
                <div className="first-container-box-left">
                  <b>Today Profit</b>
                  <h5>27</h5>
                  <div className="icon-redius" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className="zero-number"> 0</div>
                    <div className="reload-icon"> <img src="/images/activity_white.webp" alt="" /></div>
                  </div>
                </div>
              </div>

            </div>

            <div className="announsment">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className="Announcment-text" >
                  Announcment :
                </div>
                <div style={{ width: '80%', paddingLeft: '15px' }}>
                  <marquee className="hurryup" behavior="smooth" direction="right" >
                    {/* User New For OFF 50% !Up Hurry. */}
                    Hurry up! 50% OFF For New User
                  </marquee>
                </div>
              </div>
            </div>


            <Row className="m-0">
              <div className="dashboard-main-box">
                <div className="dashboard-container">

                  <div className="dashboard-container-box dashboard-boxes"  >
                    <div>
                      <div> <span style={{ fontSize: '34px', fontWeight: '500' }}>
                        0
                      </span>
                      </div>
                      <div> <span>
                        Referral Income
                      </span>
                      </div>
                    </div>
                  </div>
                  <div className="dashboard-container-box dashboard-boxes" >
                    <div>
                      <div> <span style={{ fontSize: '34px', fontWeight: '500' }}>
                        0
                      </span>
                      </div>
                      <div> <span>
                        Level Income
                      </span>
                      </div>
                    </div>
                  </div>

                  <div className="dashboard-container-box dashboard-boxes" >
                    <div>
                      <div> <span style={{ fontSize: '34px', fontWeight: '500' }}>
                        0
                      </span>
                      </div>
                      <div> <span>
                        Package Upgrade Income
                      </span>
                      </div>
                    </div>
                  </div>
                  <div className="dashboard-container-box dashboard-boxes" >
                    <div>
                      <div> <span style={{ fontSize: '34px', fontWeight: '500' }}>
                        0
                      </span>
                      </div>
                      <div> <span>
                        Slot Income
                      </span>
                      </div>
                    </div>
                  </div>

                  <div className="dashboard-container-box dashboard-boxes" >
                    <div>
                      <div> <span style={{ fontSize: '34px', fontWeight: '500' }}>
                        0
                      </span>
                      </div>
                      <div> <span>
                        Total Income
                      </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </Row>

            <Row className="m-0">
              <div className="main-package-slot-container">
                <div className="inner-package-slot-container">
                  <div className="inner-left-package-container">
                    <div className="package-first-flex">
                      <div>
                        <div>
                          <span className="package-header">
                            Package
                          </span>
                        </div>

                      </div>

                      <div>
                        <div>
                          <span className="package-header">
                            10 BUSD
                          </span>
                        </div>
                        <div>

                        </div>
                      </div>
                    </div>

                    <div className="empty-div-row">
                      <div className="empty-main-div">
                        <div className="empty-row-1-div">
                          <div className="empty-div empty-div-2-1"></div>
                          <div className="empty-div empty-div-1-1">
                            <svg
                              className="fill-current text-white"
                              width="24"
                              height="24"
                              viewBox="0 0 20 20"
                              fill="white" // Set the fill property to "white"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10 17.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Zm0-11.334a.5.5 0 0 1 .5.5V10a.5.5 0 0 1-1 0V6.667a.5.5 0 0 1 .5-.5Zm0 6.668a.5.5 0 0 0 0 1h.01a.5.5 0 0 0 0-1H10Z"
                              ></path>
                            </svg>

                          </div>
                          <div className="empty-div empty-div-1-1">
                            <svg
                              className="fill-current text-white"
                              width="24"
                              height="24"
                              viewBox="0 0 20 20"
                              fill="white" // Set the fill property to "white"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10 17.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Zm0-11.334a.5.5 0 0 1 .5.5V10a.5.5 0 0 1-1 0V6.667a.5.5 0 0 1 .5-.5Zm0 6.668a.5.5 0 0 0 0 1h.01a.5.5 0 0 0 0-1H10Z"
                              ></path>
                            </svg>
                          </div>
                          <div className="empty-div"></div>
                        </div>
                        <div className="empty-row-1-div">
                          <div className="empty-div"></div>
                          <div className="empty-div"></div>
                          <div className="empty-div"></div>
                          <div className="empty-div"></div>
                        </div>
                        <div className="empty-row-1-div">
                          <div className="empty-div"></div>
                          <div className="empty-div"></div>
                          <div className="empty-div"></div>
                          <div className="empty-div"></div>
                        </div>
                      </div>
                      <div className="empty-right-div">
                        <div>
                          <span style={{ color: '#E1444D', fontSize: '14px' }}>
                            Missed Profits
                          </span>
                        </div>
                        <div>
                          <span style={{ color: '#E1444D', fontSize: '20px', fontWeight: '700' }}>
                            40 USD</span>
                        </div>
                        <div className="preview-button">
                          <button>Preview</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="inner-left-package-container inner-right-slot-container">
                    <div className="package-first-flex">
                      <div>
                        <div>
                          <span className="package-header">
                            Slot
                          </span>
                        </div>

                      </div>

                      <div>
                        <div>
                          <span className="package-header">
                            10 BUSD
                          </span>
                        </div>
                        <div>

                        </div>
                      </div>
                    </div>

                    <div className="empty-div-row">
                      <div className="empty-main-div">
                        <div className="empty-row-1-div">
                          <div className="empty-div empty-div-2-1"></div>
                          <div className="empty-div empty-div-2-1"></div>
                          <div className="empty-div empty-div-2-1"></div>
                          <div className="empty-div"></div>
                        </div>
                        <div className="empty-row-1-div">
                          <div className="empty-div"></div>
                          <div className="empty-div"></div>
                          <div className="empty-div"></div>
                          <div className="empty-div"></div>
                        </div>
                        <div className="empty-row-1-div">
                          <div className="empty-div"></div>
                          <div className="empty-div"></div>
                          <div className="empty-div"></div>
                          <div className="empty-div"></div>
                        </div>
                      </div>
                      <div className="empty-right-div-box-2">
                        <div className="preview-button-right-box ">
                          <button>Preview</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* inner-right-slot-container */}
                </div>
              </div>
            </Row>

            {/* <Row>
              <div className="dashboard-main-box">
                <div className="dashboard-container dashboard-container-2">

               
                  <div className="dashboard-container-box dashboard-boxes" >

                    <span>total Memeber
                    </span>
                  </div>

                  <div className="dashboard-container-box dashboard-boxes" >
                    <span>today member
                    </span>
                  </div>
                  <div className="dashboard-container-box dashboard-boxes" >
                    <span>total referral</span>
                  </div>

                  <div className="dashboard-container-box dashboard-boxes" >
                    <span>total deposite</span>
                  </div>

                </div>
              </div>

            </Row> */}


            <div className="platform-heading">
              <span>Platform recent activity</span>
            </div>

            <div className="platform-container-main overscroll-y-container">
              <div className="platform-left-container">
                <div className="platform-left-box" >
                  <div></div>
                  {platformdata.slice(0, visibleItems).map((data, index) => (
                    <div className="table-in-row-1" key={index}>
                      <div className="table-left-div">
                        <div className="table-user-icon" style={{ fontSize: '15px' }}>
                          {data.usericon}
                        </div>
                        <div className={data.className}>

                          <div className="new-user-heading">
                            <span>{data.newuser}</span>
                          </div>
                          <div className="ID-box">ID {data.UserId}</div>
                        </div>
                      </div>

                      <div className="table-right-div">
                        <span>
                          <CiShare1 size={'18px'} style={{ fontWeight: '800' }} />
                        </span>
                        <span>{data.jioningtiming}</span>
                      </div>
                    </div>

                  ))}

                  {/* {platformdata.slice(0, visibleItems).map((data, index) => (

                    <div className="table-in-row-1" key={index}>
                      <div className="table-left-div">
                        <div className="table-user-icon">
                          <PersonAddAltRoundedIcon sx={{ fontSize: '16px' }} />
                        </div>
                        <div className="ID-box">ID {data.UserId}</div>
                        <div className="new-user-heading">
                          <span>{data.newuser}</span>
                        </div>
                      </div>

                      <div className="table-right-div">
                        <span>
                          <CiShare1 size={'18px'} style={{ fontWeight: '800' }} />
                        </span>
                        <span>{data.jioningtiming}</span>
                      </div>
                    </div>

                  ))} */}




                  {platformdata.length > visibleItems && (
                    <div className="see-more-div">
                      <div className="see-more-button" onClick={showMoreItems}>

                        <IoEyeSharp />  See More
                      </div>
                    </div>
                  )}

                </div>

              </div>

              <div className="platform-right-container">
                <div className="platform-right-box-1" >
                  <div>
                    <span className="right-box-1-heading">
                      Members total
                    </span>
                  </div>

                  <div>
                    <div style={{ color: 'white', fontSize: '23px', fontWeight: '700' }}>
                      <span>1452 555</span>
                    </div>
                    <div style={{ color: 'lightgreen', fontSize: '17px' }}>
                      <span><NorthIcon sx={{ fontSize: '16px' }} />554</span>
                    </div>
                  </div>
                </div>

                <div className="platform-right-box-2">
                  <div>
                    <span className="right-box-1-heading">
                      Members received
                    </span>
                  </div>

                  <div style={{ borderBottom: '1px solid #363737', paddingBottom: '5px' }}>
                    <div style={{ color: 'white', fontSize: '23px', fontWeight: '700' }}>
                      <span> 1452 555</span>
                    </div>
                    <div style={{ color: 'lightgreen', fontSize: '17px' }}>
                      <span>
                        {/* <NorthIcon sx={{ fontSize: '16px' }} /> */}
                        + 554</span>
                    </div>
                  </div>

                  <div>
                    <div style={{ color: 'white', fontSize: '23px', fontWeight: '700' }}>
                      <span>1452 555</span>
                    </div>
                    <div style={{ color: 'lightgreen', fontSize: '17px' }}>
                      <span>
                        {/* <NorthIcon sx={{ fontSize: '16px' }} /> */}
                        + 554</span>
                    </div>
                  </div>
                </div>

                <div className="platform-right-box-3">
                  <div>
                    <span className="right-box-3-heading-main">
                      Forsage BUSD Contracts
                    </span>
                  </div>
                  {boxdata3.map((data1, index) => {
                    return (
                      <div key={index} className="right-box-3-data-div">
                        <div className="right-box-3-data-div-left">
                          <span >
                            {data1.name}
                          </span>
                        </div>

                        <div className="right-box-3-data-div-right">
                          <span >
                            {data1.link}
                          </span>
                          <span style={{ cursor: 'pointer' }} title="copy link"><FaCopy /></span>
                          <span ><FaLink fontSize={'medium'} /></span>
                        </div>
                      </div>
                    )
                  })}

                  <div>
                    <span className="right-box-1-heading">
                      Transactions made
                    </span>
                  </div>

                  <div style={{ borderBottom: '1px solid #363737', paddingBottom: '5px' }}>
                    <div style={{ color: 'white', fontSize: '23px', fontWeight: '700' }}>
                      <span>1452 555</span>
                    </div>
                    <div style={{ color: 'lightgreen', fontSize: '17px' }}>
                      <span>
                        {/* <NorthIcon sx={{ fontSize: '16px' }} /> */}
                        + 554</span>
                    </div>
                  </div>

                  <div>
                    <span className="right-box-1-heading">
                      Turnover, BUSD
                    </span>
                  </div>

                  <div style={{ borderBottom: '1px solid #363737', paddingBottom: '5px' }}>
                    <div style={{ color: 'white', fontSize: '23px', fontWeight: '700' }}>
                      <span>1452 555</span>
                    </div>
                    <div style={{ color: 'lightgreen', fontSize: '17px' }}>
                      <span>
                        {/* <NorthIcon sx={{ fontSize: '16px' }} /> */}
                        + 554</span>
                    </div>
                  </div>

                </div>


              </div>

            </div>

          </Row>
        </Container>
      </Fragment>
    </div>
  );
};

export default Dashboard;
