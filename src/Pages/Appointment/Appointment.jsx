import { FaHospital } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const Appointment = () => {
    return (
        <div className="bg-slate-200 mb-10 p-5">
            <div>
                <h1 className="text-3xl font-bold text-center pt-20 text-slate-700 ">Chamber & Appointment</h1>
                <p className="text-center text-slate-600 pt-9 p-5 font-medium">Dr. Nasir Uddin Bhuiyan is a senior medical professional with expertise in Health & Medical Science, Public Health & Reproductive Health. He has served as Deputy Director (DG Health), Civil Surgeon, Principal (IHT Sylhet) & Associate Professor (LU). With long experience in healthcare and medical education, he is dedicated to providing quality patient care.</p>
            </div>

            <div className="text-center content-center bg-slate-100">
                <div className="flex pl-[400px] gap-2 pt-7">
                    <FaHospital className="text-slate-700 mt-[5px]"/>
                    <h1 className="text-center text-[18px] font-bold text-slate-700">New Jansheba Diagnostic Center</h1>
                </div>

                <div className="flex pl-[400px] gap-2 pt-2">
                    <IoLocation className="text-slate-700 mt-[5px]"/>
                    <h1 className="text-center text-[18px] font-bold text-slate-700"> Ketok, Jaoa Bazar, Chhatak, Sunamganj</h1>
                </div>

                 <div className="flex pl-[400px] gap-2 pt-2">
                    <FaPhoneAlt className="text-slate-700 mt-[5px]"/>
                    <h1 className="text-center text-[18px] font-bold text-slate-700">  For Serial : +8801704-618000</h1>
                </div>
            </div>

        </div>
    );
};

export default Appointment;