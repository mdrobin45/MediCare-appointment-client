const SectionHeader = ({ title, subtitle }) => {
   return (
      <div className="text-center py-6">
         <h3 className="text-md md:text-xl text-center text-secondary font-semibold">
            {subtitle}
         </h3>
         <h2 className="text-3xl lg:text-4xl font-bold py-2">{title}</h2>
      </div>
   );
};

export default SectionHeader;
