const AboutLeft = () => {
   return (
      <div className="relative w-full md:w-2/4">
         <div className="w-[25rem] p-4">
            <img
               className="rounded-md "
               src="https://html.themefax.com/madifax/images/about-img1.jpg"
               alt="Image"
            />
         </div>

         <div className="absolute w-80 right-16 -bottom-[5rem]  p-6">
            <img
               className=" rounded-md"
               src="https://html.themefax.com/madifax/images/about_img2.jpg"
               alt="Image"
            />
         </div>
      </div>
   );
};

export default AboutLeft;
