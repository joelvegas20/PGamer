import React , {useState , useEffect} from 'react'

// export default function HomeView() {

//   const [currentPage, setCurrentPage] = useState(1); 
//   const [videojuegosState, setVideojuegosState] = useState([]);



//  useEffect( async () => {

//   return  setVideojuegosState( await getAllVideogames(currentPage))
  

// }, [currentPage]);

//   return (
//     <div>
//       <div>
//       <span><button onClick={(event)=>{
//         if(currentPage > 1){
//           setCurrentPage(currentPage-1)
//         } 

//       } } >prev</button></span>
//         <button onClick={()=> setCurrentPage(1)}>1</button>
//         <button onClick={()=> setCurrentPage(2)}>2</button>
//         <button onClick={()=> setCurrentPage(3)}>3</button>
//       <span><button onClick={()=> setCurrentPage(currentPage+1)}>next</button></span>
//       </div>
    
//       {
//         videojuegosState.length === 0 ? "Cargando....":videojuegosState.map((game)=> {
//           return <div>
//             <hr></hr>
//             <span>{game.id}</span>
//             <span>{game.name}</span>
//             <hr></hr>
//           </div>
//         })
//       }
//     </div>
//   )
// }



export default function Homeview() {

    const [currentPage, setCurrentPage] = useState(1);
    const [videojuegosState, setVideojuegosState] = useState([]);

    useEffect(() => {

        // traer los datos
        


    }, [currentPage]);


  return (
    <div>

        <div>
            <span><button>prev</button></span>
            <button>1</button>
            <button>2</button>
            <button>k3</button>
            <span><button>next</button></span>
        </div>
        <div>
        {
            videojuegosState.length === 0 ? "Cargando....":videojuegosState.map((game)=> {
            return <div>
                <hr></hr>
                <span>{game.id}</span>
                <span>{game.name}</span>
                <hr></hr>
            </div>
            })
        }

        </div>
        {/* pagination */}
    </div>
  )
}
