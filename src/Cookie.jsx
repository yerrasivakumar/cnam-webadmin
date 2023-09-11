
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

const CookieConsent = () => {
  const [cookies, setCookie] = useCookies(['cookieAccepted'])


  const handleAccept = () => {
    setCookie('cookieAccepted', true, { path: '/' ,maxAge:360000000});
  };
  const handleReject = () => {
    setCookie('cookieAccepted', false, { path: '/' ,maxAge:360000000});
  };
  // useEffect(()=>{
  //   // setCookie('cookieAccepted', false, { path: '/' });
  //   console.log(cookies.cookieAccepted);
  // },[])

  return (
    cookies.cookieAccepted===undefined && (
      <div className="cookie-consent">
        <p style={{fontSize:'13px'}}>We use cookies to enhance browser experience, serve personalized ads or content, and analyze our traffic</p>
        <button onClick={handleReject}>Reject All</button>
        <button onClick={handleAccept}>Accept All</button>
        
      </div>
    )
  );
};

export default CookieConsent;
