const App = () => {

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
