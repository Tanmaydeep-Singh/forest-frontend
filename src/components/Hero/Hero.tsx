"use client"
import React, { useEffect, useState } from 'react'
import MapDetail from './MapDetail'
import DetailsBar from './DetailsBar'
import dynamic from 'next/dynamic';

function Hero() {
    const [location, setLocation] = useState({});  

    
const DynamicImportedComponent = dynamic(() => import('./MapDetail'), {
    ssr: false,
    loading: () => <p>loading..</p>
  });

    useEffect(() => {
        if('geolocation' in navigator) {
            // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
            navigator.geolocation.getCurrentPosition(({ coords }) => {
                const { latitude, longitude } = coords;
                setLocation({ latitude, longitude });
            })
        }
    }, []);
  return (
    <div className=" w-[100%]">
    
        {/* { <DynamicImportedComponent />} */}
        <DetailsBar/>

    </div>
  )
}

export default Hero

