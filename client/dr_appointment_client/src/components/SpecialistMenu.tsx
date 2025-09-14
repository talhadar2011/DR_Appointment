
import doc1 from '../assets/doc1.webp';
import doc2 from '../assets/doc2.webp';
import doc3 from '../assets/doc3.webp';
import doc4 from '../assets/doc4.webp'; 
export default function SpecialistMenu() {
     
  return (
  <>
    <section  >
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
      <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-cyan-800">Our Team Of Doctors</h2>
          <p className="font-semibold  text-gray-500 lg:mb-16 sm:text-xl dark:text-cyan-800 ">We have the Best Doctor's in the world with their years of experience your health is in safe hands.</p>
      </div> 
      <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-cyan-800 dark:border-gray-700">
              <div>
                <img 
                src={doc1}
                alt="Hero image"
                width="500"
                height="500"
                fetchPriority="high"
                loading="eager"
                decoding="async"
                />
              </div>
              <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <div >Dr Bonnie Green</div>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-200">CEO & Web Developer</span>
                  <p className="mt-3 mb-4 font-light text-gray-0 dark:text-gray-200">Bonnie drives the technical strategy of the flowbite platform and brand.</p>
                 
              </div>
          </div> 
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-cyan-800 dark:border-gray-700">
              <div>
                  <img   width={"227px"} height={"227px"} className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={doc2} alt="Jese Avatar"/>
              </div>
              <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <div >Dr Jese Leos</div>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-200">Cardiologist</span>
                  <p className="mt-3 mb-4 font-light text-gray-200 dark:text-gray-200">Jese drives the technical strategy of the flowbite platform and brand.</p>
                
              </div>
          </div> 
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-cyan-800 dark:border-gray-700">
              <div >
                  <img   width={"227px"} height={"227px"} className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={doc3} alt="Michael Avatar"/>
              </div>
              <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <div >Dr Michael Gough</div>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-200">Senior Front-end Developer</span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-200">Michael drives the technical strategy of the flowbite platform and brand.</p>
                 
              </div>
          </div> 
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-cyan-800 dark:border-gray-700">
              <div>
                  <img   width={"227px"} height={"227px"} className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={doc4} alt="Sofia Avatar"/>
              </div>
              <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      <div >Dr Lana Byrd</div>
                  </h3>
                  <span className="text-gray-500 dark:text-gray-200">Marketing & Sale</span>
                  <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-200">Lana drives the technical strategy of the flowbite platform and brand.</p>
                  
              </div>
          </div>  
      </div>  
  </div>
</section>
  </>
  )
}
