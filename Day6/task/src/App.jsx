 const App = () => {
  const arr=["JAVA","PYTHON","MERN","SQL","REACT"]
  return (
    <>
   <div className="bg-red-300 text-white flex gap-3 justify-center items-center p-3 h-10">
   <h2>Course</h2>
   </div>
   <div className="flex justify-center items-center">
   <div className="bg-green-200 w-50 text-black text-center justify-center p-2 rounded-3xl">
    
   {
    arr.map((arr,index)=>(
      <p key={index}>{arr}</p>
    ))
  }

   </div>
   </div>
    </>
    
  
  const Student = {
    name: "Monicakarthikeyan",
    age: 22,
    course: "React",
    city: "Chennai"
  };

  return (
    <div className="bg-pink-200">
      <h2>Student Details</h2>

      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>
      <p>City: {student.city}</p>
    </div>
  );
};

export default App;


  )
}
export default App

