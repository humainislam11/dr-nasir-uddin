import { FaHospital } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const Appointment = () => {
    return (
        <div className="bg-slate-200 p-5">
            <div>
                <h1 className="text-3xl font-bold text-center pt-20 text-slate-700 ">Chamber & Appointment</h1>
                <p className="text-center text-slate-600 pt-9 p-5 font-medium">Dr. Nasir Uddin Bhuiyan is a senior medical professional with expertise in Health & Medical Science, Public Health & Reproductive Health. He has served as Deputy Director (DG Health), Civil Surgeon, Principal (IHT Sylhet) & Associate Professor (LU). With long experience in healthcare and medical education, he is dedicated to providing quality patient care.</p>
            </div>

            <div className="text-center content-center bg-slate-100 p-2 mb-5">
                <div className="flex lg:pl-[400px] gap-2 pt-7">
                    <FaHospital className="text-slate-700  text-[15px] lg:text-[17px] lg:mt-[5px] "/>
                    <h1 className="text-center text-[14px] lg:text-[18px] font-bold text-teal-400">New Jansheba Diagnostic Center</h1>
                </div>

                <div className="flex pl-0 lg:pl-[400px] gap-2 pt-2">
                    <IoLocation className="text-slate-700  text-[15px] lg:text-[17px] lg:mt-[5px] "/>
                    <h1 className="text-center text-[14px] lg:text-[18px] font-bold text-slate-700"> Koytak, Jaoa Bazar, Chhatak, Sunamganj</h1>
                </div>

                 <div className="flex lg:pl-[400px] gap-2 pt-2">
                    <FaPhoneAlt className="text-slate-700  text-[15px] lg:text-[17px] lg:mt-[5px] "/>
                    <h1 className="text-center text-[14px] lg:text-[18px] font-bold text-slate-700">  For Serial : +8801704-618000</h1>
                </div>
                <div>
                    <h1 className="text-center text-[14px] lg:text-[18px] font-bold text-slate-700 pb-6"> <a className="lg:pl-7 text-slate-800">Visiting Hours:</a> Every Sunday & Tuesday</h1>
                </div>
            </div>



            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                  <div className="text-center content-center bg-slate-100 p-2 lg:p-16">
                <div className="flex gap-2 pt-7">
                    <FaHospital className="text-slate-700  text-[15px] lg:text-[17px] lg:mt-[5px] "/>
                    <h1 className=" text-[14px] lg:text-[18px] font-bold text-teal-400">Bishal Pharmacy</h1>
                </div>

                <div className="flex pl-0  gap-2 pt-2">
                    <IoLocation className="text-slate-700  text-[15px] lg:text-[17px] lg:mt-[5px] "/>
                    <h1 className="text-center text-[13px] lg:text-[18px] font-bold text-slate-700">Koytak Hospital Point, Chhatak, Sunamganj</h1>
                </div>

                 <div className="flex  gap-2 pt-2">
                    <FaPhoneAlt className="text-slate-700  text-[15px] lg:text-[17px] lg:mt-[5px] "/>
                    <h1 className="text-center text-[14px] lg:text-[18px] font-bold text-slate-700">  For Serial : +8801704-618000</h1>
                </div>
                <div>
                    <h1 className="text-center text-[14px] lg:text-[18px] font-bold text-slate-700 pb-6"> <a className=" text-slate-800">Visiting Hours:</a> Every Sunday & Tuesday from 12 PM to 5 PM</h1>
                </div>
            </div>




                 <div className="text-center content-center bg-slate-100 p-2 lg:p-16">
                <div className="flex  gap-2 pt-7">
                    <FaHospital className="text-slate-700  text-[15px] lg:text-[17px] lg:mt-[5px] "/>
                    <h1 className="text-center text-[14px] lg:text-[18px] font-bold text-teal-400">Janoni Pharmacy Gobindaganj </h1>
                </div>

                {/* <div className="flex pl-0  gap-2 pt-2">
                    <IoLocation className="text-slate-700  text-[15px] lg:text-[17px] lg:mt-[5px] "/>
                    <h1 className="text-center text-[14px] lg:text-[18px] font-bold text-slate-700"> Ketok, Jaoa Bazar, Chhatak, Sunamganj</h1>
                </div> */}

                 <div className="flex  gap-2 pt-2">
                    <FaPhoneAlt className="text-slate-700  text-[15px] lg:text-[17px] lg:mt-[5px] "/>
                    <h1 className="text-center text-[14px] lg:text-[18px] font-bold text-slate-700">  For Serial : +8801709367564</h1>
                </div>
                <div>
                    <h1 className="text-center text-[14px] lg:text-[18px] font-bold text-slate-700 pb-6"> <a className=" text-slate-800">Visiting Hours:</a> Every Saturday from 3 PM to 6 PM</h1>
                </div>
            </div>


            
            </div>

        </div>
    );
};

export default Appointment;