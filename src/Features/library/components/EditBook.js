import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { saveEditBook } from "../../../library/action/book";
import {saveEditedBook} from '../librarySlice'
// import { addBook } from "../../library/librarySlice";

const EditBook = () => {
    let forEdit = useSelector(state => state.librarySlice.selectedBookToEdit);
    let myDispatch = useDispatch();

    const [details, setDetails] = useState({ ...forEdit });
    const change = (e) => {
        setDetails({ ...details, [e.target.name]: e.target.value })
    }
    const save = (e) => {
        e.preventDefault();
        myDispatch(saveEditedBook(details))
    }

    return (<form onSubmit={save}>
        <div>
        <label>שם ספר</label>
        <input type="text" name="name" onChange={change} value={details.name} />
        </div>
        <div>
        <label>סופר/ת</label>
        <input type="text" name="aouther" onChange={change} value={details.aother} />
        </div>
        <div>
        <label>מחיר</label>
        <input type="number" name="price" onChange={change} value={details.price} />
        </div>
        <input type="submit" />
    </form>);
}

export default EditBook;