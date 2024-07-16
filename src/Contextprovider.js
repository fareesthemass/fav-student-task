import { useContext } from "react"
import { Arrcontext } from "./App"


function Try(){
    const {arr,fav,setfav} = useContext(Arrcontext)
   
    return(<h1>{arr.map((item,index)=>{
        function add(evt){
            setfav([...fav,item])
            evt.target.className="bg-slate-700 text-white p-1 rounded-md"
        }
        return(<>
        
               <tr> 
                <td>{index+1}.{item}</td>
                <td><button className="bg-black text-white p-1 rounded-md" onClick={add}>Add to fav</button></td>
                </tr>
        
            </>)
    })}</h1>)
}
export default Try