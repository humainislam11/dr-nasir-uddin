import photo from "../../../public/WhatsApp_Image_2025-08-27_at_11.30.47_1723dfd7-removebg-preview.png";

import { FaPhoneAlt } from "react-icons/fa";

const Banner = () => {
    return (
       <div className="hero mx-auto bg- min-h-screen bg-slate-50">
  <div className="hero-content flex-col lg:flex-row gap-2 lg:gap-16">
    <img
      src={photo}      className="max-w-sm w-[324px] lg:w-[450px] bg-slate-200 lg:bg-slate-50 sm:-mb-0 lg:-mb-[52px]" />


    <div className="pt-2 lg:pt-20 p-10 lg:p-0 bg-slate-200 lg:bg-slate-50">
      <h1 className="text-2xl lg:text-5xl text-slate-600 font-bold">DR MD. NASIR UDDIN BHUIYAN</h1>
      <p className="py-6 text-sky-600 font-medium">MBBS & BCS (Health), PGT (Gynae) MPH(LU), Ph.D (RH), RCH <br></br>SRHS, Health & Medical Science</p>
      <p className="font-medium text-slate-500">Rtd.Deputy Director, DG Health (Ministry of Health)<br></br>Rtd. Civil Surgeon, Habiganj<br></br>Rtd. Superintendent Habiganj Sadar Hospital 
<br></br> Principal, Institute of Health Technology, Sylhet</p>
      <a href="tel:+8801707077941" className="btn btn-primary mt-3"><FaPhoneAlt /> Contact Me</a>
    </div>
  </div>
</div>
    );
};

export default Banner;