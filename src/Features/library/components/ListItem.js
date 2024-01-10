import { useDispatch } from "react-redux";
// import { deleteBook, selectBookToEdit, selectBookToRead } from "../library/action/book";
import {addBook, deleteBook ,saveEditedBook,bookToEdit,bookToRead} from '../librarySlice'
import { useSelector } from 'react-redux';
import BookDetails from '../components/BookDetails';

const ListItem = ({one}) => {
   let dispatch =useDispatch();
   let select=useSelector(sta=>sta.librarySlice.selectedBook);

    return ( <>
    
    <h2>{one.name}</h2>
    <input  onClick={()=>{dispatch( deleteBook(one.code))}} type="button" value="מחק" />
    <input type="button" onClick={()=>{dispatch( bookToEdit(one))}} value="ערוך"/>
    <input type="button" onClick={()=>{dispatch(bookToRead(one))}} value="הצג פרטי ספר"/>
    {select&&select.code==one.code&&<BookDetails/>}
   
    </> );
}
 
export default ListItem;