import photo1 from "./../../../public/publication/Screenshot 2025-09-13 210809.png"
import photo2 from "./../../../public/publication/Screenshot 2025-09-13 210904.png"
import photo3 from "./../../../public/publication/Screenshot 2025-09-13 212119.png"
const Publications = () => {
    return (
        <div className="bg-slate-100 p-6">
            <h1 className="text-3xl font-bold pt-8 pb-8 text-slate-800 text-center">Publications</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                
                                     <div className=" bg-slate-200">
                  <figure>
                    <img
                      src={photo1} className='w-[392px]' />
                  </figure>
                  <div className="card-body">
                    <a href="https://www.iosrjournals.org/iosr-jnhs/papers/vol8-issue5/Series-7/E0805072125.pdf" className=" text-slate-800 font-bold text-1xl">Evaluation of Knowledge on Antenatal Care Of Maternal and 
Child Health Workforcesatselected Sub-District Level Health 
Centers in Bangladesh-2017. </a>
                    
                    <div className="card-actions justify-end">
                
                    </div>
                  </div>
                </div>





                
                                     <div className=" bg-slate-200">
                  <figure>
                    <img
                      src={photo2} className='w-[391px]' />
                  </figure>
                  <div className="card-body">
                    <a href="https://www.jetir.org/papers/JETIR1907S64.pdf" className=" text-slate-800 font-bold text-1xl">Prevalence of Pregnancy Induced hypertension 
among Gestational Mothers Admitted in Gynae 
Units in a Tertiary Level Hospital, Sylhet </a>
                    <div className="card-actions justify-end">
                
                    </div>
                  </div>
                </div>



                
                     <div className=" bg-slate-200">
  <figure>
    <img
      src={photo3} className='w-[392px]' />
  </figure>
  <div className="card-body">
    <a href="https://www.iosrjournals.org/iosr-jdms/papers/Vol18-issue10/Series-1/O1810018286.pdf" className=" text-slate-800 font-bold text-1xl"> Prevalence of pregnancy induced hypertension among the 
pregnant women in selected Rural Health Center in Sunamganj, 
Bangladesh. </a>
    <div className="card-actions justify-end">

    </div>
  </div>
</div>

            </div>
        </div>
    );
};

export default Publications;