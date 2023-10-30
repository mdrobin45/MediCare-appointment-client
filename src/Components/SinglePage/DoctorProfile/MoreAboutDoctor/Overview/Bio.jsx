const Bio = ({ doctor }) => {
   const { bio } = doctor;
   return (
      <div>
         <h2 className="text-2xl font-bold text-black pb-2">About Me</h2>
         <p>{bio}</p>
      </div>
   );
};

export default Bio;
