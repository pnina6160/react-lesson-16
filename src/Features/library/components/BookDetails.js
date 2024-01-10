import { useSelector } from "react-redux";

const BookDetails = () => {
    let select=useSelector(state=>state.librarySlice.selectedBook)
    return (  <div>
        פרטי ספרים:
        <h2>{select.name}   :שם ספר </h2>
        <h2>{select.code}   :קוד ספר</h2>
        <h2>{select.aouther}   :סופר/ת</h2>
        <h2>{select.price}   :מחיר</h2>
        <img src={select.imgUrl} style={{width:"300px"}}/>

    </div>);
}
 
export default BookDetails;