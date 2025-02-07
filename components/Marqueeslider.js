import React from 'react'
import Image from "next/image";
import Marquee from "react-fast-marquee";

const Marqueeslider = () => {
  return (
    <>
       <div className='marquee-container'>
      <Marquee pauseOnHover={true}>
      <div className="marquee-logo-img">
            <Image src="/images/1.webp" alt="logo" width={100} height={100} />
        </div>
        <div className="marquee-logo-img">
            <Image src="/images/2.webp" alt="logo" width={100} height={100} />
        </div>
        <div className="marquee-logo-img">
            <Image src="/images/3.webp" alt="logo" width={100} height={100} />
        </div>
        <div className="marquee-logo-img">
            <Image src="/images/4.webp" alt="logo" width={100} height={100} />
        </div>
        <div className="marquee-logo-img">
            <Image src="/images/5.webp" alt="logo" width={100} height={100} />
        </div>
        <div className="marquee-logo-img">
            <Image src="/images/6.webp" alt="logo" width={100} height={100} />
        </div>
        <div className="marquee-logo-img">
            <Image src="/images/7.webp" alt="logo" width={100} height={100} />
        </div>
        <div className="marquee-logo-img">
            <Image src="/images/8.webp" alt="logo" width={100} height={100} />
        </div>
        <div className="marquee-logo-img">
            <Image src="/images/9.webp" alt="logo" width={100} height={100} />
        </div>
      </Marquee>
      <Marquee direction="right" pauseOnHover={true}>
        <div className="marquee-logo-img">
            <Image src="/images/logo1.webp" alt="logo" width={100} height={100} />
        </div>
        <div className="marquee-logo-img">
            <Image src="/images/logo2.webp" alt="logo" width={100} height={100} />
        </div>
        <div className="marquee-logo-img">
            <Image src="/images/logo3.webp" alt="logo" width={100} height={100} />
        </div>
        <div className="marquee-logo-img">
            <Image src="/images/logo4.webp" alt="logo" width={100} height={100} />
        </div>
        <div className="marquee-logo-img">
            <Image src="/images/logo5.webp" alt="logo" width={100} height={100} />
        </div>
        <div className="marquee-logo-img">
            <Image src="/images/logo6.webp" alt="logo" width={100} height={100} />
        </div>
        <div className="marquee-logo-img">
            <Image src="/images/logo7.webp" alt="logo" width={100} height={100} />
        </div>
        <div className="marquee-logo-img">
            <Image src="/images/logo8.webp" alt="logo" width={100} height={100} />
        </div>
        <div className="marquee-logo-img">
            <Image src="/images/logo9.webp" alt="logo" width={100} height={100} />
        </div>
      </Marquee>
    </div>
    </>
  )
}

export default Marqueeslider
