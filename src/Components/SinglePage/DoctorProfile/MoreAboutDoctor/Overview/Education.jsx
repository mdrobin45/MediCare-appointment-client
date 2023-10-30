import { FaRegCircleDot } from "react-icons/fa6";

const Education = ({ doctor }) => {
   const { education } = doctor;
   console.log(education);
   return (
      <div className="lg:max-w-screen-xl md:max-w-full mx-auto py-16 sm:max-w-xl">
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
                                 ? "h-2/3"
                                 : "h-full"
                           }`}
                        />
                     </div>
                     <div className="-mt-1 pb-8">
                        <h2 className="mb-1 text-black text-lg font-bold">
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
