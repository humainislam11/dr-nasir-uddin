import photo1 from './../../../public/3982009-200.png';
import photo2 from './../../../public/theme-icons-02.png';
import photo3 from './../../../public/10620090.png';
import photo4 from './../../../public/pngtree-pulmonology-icon-lungs-symbol-icon-vector-png-image_38127450.png'



const Services = () => {
    return (
        <div className="bg-slate-300">
            <h1 className="text-slate-800 text-3xl font-bold pt-16 pb-5 text-center">Services</h1>
            <p className='text-slate-800 font-medium text-center pb-12 lg:pb-0'>I am Dr. Md. Nasir Uddin Bhuiyan, offering professional services in Maternal & Child Health, Gynaecology & Obstetrics, Public Health, and Respiratory Medicine to ensure quality care and community well-being.</p>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-7 pl-0 lg:pl-32 content-center p-0 lg:p-20'>
                <div >


    <div className=" bg-slate-200 lg:w-96">
  <figure>
    <img
      src={photo1} className='pt-8 pl-20' />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-slate-800 font-bold text-xl"> Gynaecology & Obstetrics</h2>
    <p className='text-slate-800 font-medium'>Providing expert care for women’s health, from preventive check-ups to advanced treatment and delivery services.</p>
    <div className="card-actions justify-end">

    </div>
  </div>
</div>
                </div>

                <div>

                     <div className=" bg-slate-200 lg:w-96">
  <figure>
    <img
      src={photo2} className='pt-8 pl-20' />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-slate-800 font-bold text-xl">Maternal & Child Health</h2>
    <p className='text-slate-800 font-medium'>Ensuring safe pregnancies and healthy growth for both mother and child through expert care, monitoring, and support throughout every stage.</p>
    <div className="card-actions justify-end">

    </div>
  </div>
</div>
                </div>

                <div>

                     <div className=" bg-slate-200 lg:w-96">
  <figure>
    <img
      src={photo3} className='pt-8 pl-20' />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-slate-800 font-bold text-xl">Public Health</h2>
    <p className='text-slate-800 font-medium'>Focusing on community well-being through health education, preventive measures, and initiatives to promote healthier lifestyles.</p>
    <div className="card-actions justify-end">

    </div>
  </div>
</div>
                </div>

                <div>


                     <div className=" bg-slate-200 lg:w-96">
  <figure>
    <img
      src={photo4} className='pt-8 pl-20' />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-slate-800 font-bold text-xl">Respiratory Medicine</h2>
    <p className='text-slate-800 font-medium'>Offering specialized care for respiratory conditions with precise diagnosis, treatment, and long-term management for optimal lung health.</p>
    <div className="card-actions justify-end">

    </div>
  </div>
</div>
                </div>
            </div>
        </div>
    );
};

export default Services;