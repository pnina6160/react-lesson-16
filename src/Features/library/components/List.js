import { useSelector } from "react-redux";
import ListItem from "./ListItem";


const List = () => {
    let arr=useSelector(st=> st.librarySlice.arrBook)
    return ( 
        <>
        <h1>רשימת ספרים</h1>
        <ul>
            {arr.map(item=><li key={item.code}><ListItem one={item}/></li>)}
        </ul>
      
        
        </>
     );
}
 
export default List;