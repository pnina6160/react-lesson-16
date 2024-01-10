import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addBook } from "../librarySlice";
const AddBook = ({f}) => {
    
    let arr = useSelector(state => state.librarySlice.arrBook);
    let myDispatch = useDispatch();
    const [details, setDetails] = useState([arr]);
    const change=(e)=>{
        let inputValue=e.target.value;
        let inputName=e.target.name;
        let codeBook=arr[(arr.length)-1].code;
        let copy={...details,code:codeBook+=1,[inputName]:inputValue};
        setDetails(copy);
        
        

    }
    const save=(e)=>{
        e.preventDefault();
        myDispatch(addBook(details));
        f(false);
 
        
    }

    return ( <form onSubmit={save}>
        <div>
        <label>שם ספר</label>
        <input type="text" name="name" onChange={change}/>
        </div>
        <div>
        <label>שם סופר/ת</label>
        <input type="text" name="aouther" onChange={change}/>
        </div>
        <div>
        <label>מחיר</label>
        <input type="number" name="price" onChange={change}/>
        </div>
        <div>
        <label>תמונה</label>
        <input type="text" name="imgUrl" onChange={change}/>
        </div>
        <input type="submit"/>
    </form> );
}
 
export default AddBook;