import { useContext } from "react"
import { Arrcontext } from "./App"
function Fav(){
    const {setfav,fav}=useContext(Arrcontext)
    return(<h1>
        {fav.map((item,index)=>{
            
            function Remove(reindex){
                console.log(reindex)
               var newone = fav.filter((_,index)=>{
                    console.log(index)
                    if(reindex===index){
                        return false
                    }
                    else{
                        return true
                    }               
                })
                setfav(newone)
            }

            return(
            <tr><td>{index+1}.{item}</td> <td><button className="bg-red-400 border rounded-md p-1" onClick={()=>{Remove(index)}}>Remove</button></td></tr>
        )
        })}
    </h1>)
}

export default Fav