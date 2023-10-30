import { FaRegCircleDot } from "react-icons/fa6";

const Experience = ({ doctor }) => {
   const { experience } = doctor;
   console.log(experience);
   return (
      <div className="lg:max-w-screen-xl md:max-w-full mx-auto pt-6 sm:max-w-xl">
         <h2 className="text-xl font-bold text-black pb-6">Work Experience</h2>
         <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
            <div>
               {experience.map((item, id) => (
                  <div key={id} className="flex">
                     <div className="flex flex-col items-center mr-4">
                        <div>
                           <div className="flex items-center justify-center rounded-full">
                              <FaRegCircleDot className="text-secondary" />
                           </div>
                        </div>
                        <div
                           className={`w-px bg-gray-300 ${
                              experience.indexOf(item) === experience.length - 1
                                 ? "h-[2rem]"
                                 : "h-full"
                           }`}
                        />
                     </div>
                     <div className="-mt-1 pb-8">
                        <h2 className="mb-1 text-black text-md font-semibold">
                           {item.title}
                        </h2>
                        <p>{item.year}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Experience;
