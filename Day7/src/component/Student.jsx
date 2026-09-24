

const Arr = () =>{
const Student =[{ Name:"MonicaKarthikeyan",Age:22,Course:"Python",City:"Nagai"},
  { Name:"Dhanalaskshimi",Age:20,Course:"Java",City:"Sivagangai"},
  { Name:"Anbupriya",Age:20,Course:"Mern",City:"Villupuram"},
  { Name:"Abishek",Age:22,Course:"Python",City:"sivagangai"},
   { Name:"Bhuvanesh",Age:22,Course:"Mern",City:"Chennai"},
]



  return (
    <>
    <div className="bg-blue-400 flex justify-between item-center gap-5 p-10">
      <h1 className="flex justify-center item-center w-10 p-9">AVAILABLE COURSES</h1>
      
      {
        Student.map((e,i)=>(
          
          <div key={i} className="bg-green-100 rounded-2xl h-50 w-100 gap-2 p-5">
            <p>{e.Name}</p>
             <p>{e.Age}</p>
              <p>{e.Course}</p>
               <p>{e.City}</p>
          <button className="bg-black w-20 text-white m-10 rounded-2xl">Click</button>

          </div>
        
      ))



      }
    
    </div>

    </>
  )
}

export default Arr