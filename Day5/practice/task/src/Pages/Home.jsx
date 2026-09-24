const Home = () => {
  const studentName="Monica"
  const Age=22
  const course="Python"
  const isActive=true
  const Fees=50000 
  
  
  
  const changeData=isActive?"Active":"Not Active"
  return (
    <>
    <div className="bg-amber-200 text-black p-10">
        <p>Student Name: {studentName}</p>
        <p>Age:{Age}</p>
        <p>Course:{course}</p>
        <p>Fees:{Fees}</p>
        <h2>
          Status:{changeData}
        </h2>
    </div>

    </>
  )
}

export default Home