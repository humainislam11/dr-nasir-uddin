
const About = () => {
    return (
        <div className="bg-slate-200 p-5 pb-28 lg:h-[5
        900px]">
            <h1 className="text-slate-700 text-3xl font-bold pt-16 text-center">About-Me</h1>

            <p className="pt-6 text-slate-600 font-medium text-center">I am Dr. Md. Nasir Uddin Bhuiyan, a medical professional with expertise in Health & Medical Science, Public Health, and Reproductive Health. I hold MBBS, BCS (Health), PGT (Gynae), MPH (LU), and Ph.D. (RH) degrees. Throughout my career, I have dedicated myself to healthcare service, medical education, and public health, and I take pride in contributing to the development of Bangladesh’s health sector.</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7  pt-10 bg-slate-200">

                <div className="bg-gray-50 p-5">
                    <h1 className="text-2xl text-slate-700 font-bold">Professional Experience</h1>
                    <div className="font-semibold text-slate-500 pl-3 mt-2">
                        <p> Ex-Deputy Director, DG Health</p>
                        <p>Ex-Principal, Institute of Health Technology, Sylhet</p>
                        <p>Ex-Civil Surgeon, Habiganj</p>
                        <p>Ex-Associate Professor, LU & Faculty Adjunct (MPH)</p>
                        <p>Ex-Superintendent, Habiganj Sadar Hospital</p>
                        <p>Ex- UHFPO, Upazila Healh Complex</p>
                        <p>Ex- UHFPO, Duara bazar upazila health complex </p>
                        <p>Ex- EMO, Sunamganj sadar hospital</p>
                        <p>Ex- Medical Officer in different upazila health complex</p>
                        <p>Ex- Teacher of Nursing institute sylhet </p>
                    </div>
                </div>


                <div className="bg-gray-50 p-5">
                     <h1 className="text-2xl text-slate-700 font-bold">Educational Qualifications</h1>
                      <div className="font-semibold text-slate-500 pl-3 mt-2">
                        <p>SSC- Comilla Zila High School</p>
                        <p>HSC- Dhaka College </p>
                        <p>MBBS & BCS (Health)</p>
                        <p> PGT (Gynae) MPH (LU) Ph.D (RH)</p>
                        <p>RCH, SRHS, Health & Medical Science</p>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;