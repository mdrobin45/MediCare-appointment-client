import { FaRegCircleDot } from "react-icons/fa6";

const Education = ({ doctor }) => {
   const { education } = doctor;
   return (
      <div className="lg:max-w-screen-xl md:max-w-full mx-auto pt-10 sm:max-w-xl">
         <h2 className="text-xl font-bold text-black pb-6">Education</h2>
         <div className="grid gap-6 row-gap-10 lg:grid-cols-2">
            <div>
               {education.map((item, id) => (
                  <div key={id} className="flex">
                     <div className="flex flex-col items-center mr-4">
                        <div>
                           <div className="flex items-center justify-center rounded-full">
                              <FaRegCircleDot className="text-secondary" />
                           </div>
                        </div>
                        <div
                           className={`w-px bg-gray-300 ${
                              education.indexOf(item) === education.length - 1
                                 ? "h-[4rem]"
                                 : "h-full"
                           }`}
                        />
                     </div>
                     <div className="-mt-1 pb-8">
                        <h2 className="mb-1 text-black text-md font-semibold">
                           {item.institution}
                        </h2>
                        <p>{item.degree}</p>
                        <p>Passing Year: {item.graduationYear}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Education;
