

const Stud = () =>{
const Student =[{ Id:123,Name:"MonicaKarthikeyan",Department:"IT",Salary:"30000"},
  { Id:123,Name:"Dhanalaskshimi",Department:"IT",Salary:"50000"},
  { Id:123,Name:"Anbupriya",Department:"IT",Salary:"60000"},
  { Id:123,Name:"Abishek",Department:"IT",Salary:"30000"},
   { Id:123,Name:"Bhuvanesh",Department:"IT",Salary:"60000"},
]



  return (
    <>
    <div className="bg-yellow-400 flex justify-between item-center gap-5 p-10">
      
      {
        Student.map((e,i)=>(
          
          <div key={i} className="bg-pink-100 rounded-2xl h-50 w-100 gap-2 p-5">
            <p>{e.Id}</p>
             <p>{e.Name}</p>
              <p>{e.Department}</p>
               <p>{e.Salary}</p>
          <button className="bg-red-500 w-20 text-white m-10 rounded-2xl">Click</button>

          </div>
        
      ))



      }
    
    </div>

    </>
  )
}

export default Stud