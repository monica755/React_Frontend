
const Add = () => {

  const languages = ["JavaScript", "Python", "Java", "C++", "React"];

  return (
    <div>
      <h2 className="bg-pink-300 justify-center items-center flex p-3">Programming Languages</h2>
     <div className="bg-pink-300 justify-center items-center text-center">
      {languages.map((language, index) => (
        <p key={index}>{language}</p>
      ))}
    </div>
</div>    

  );
};

export default Add;