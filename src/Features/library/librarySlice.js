import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    arrBook: [{ code: 1, name: "Shikopizki", price: 42, aouther: "Shifra Glik", imgUrl: "../../images/2080602-2.jpg" },
    { code: 2, name: "ShiriMiri", price: 20, aouther: "Menoch Fuchs", imgUrl: "../../images/e9f25ec88c7d02b6c92b661030facecc_300x300.webp" },
    { code: 3, name: "Ptzatza Metakteket", price: 33, aouther: "Peher", imgUrl: "../../images/e46bebac211d0bd188ec42fc88492196.jpg" },
    { code: 4, name: "Dudi Veudi", price: 20, aouther: "Sara Leon", imgUrl: "../../images/66ae3b99e854cb3b8eee496a4899e8e9.jpg" },
    { code: 5, name: "Meolamam Shel Yeladim", price: 38, aouther: "Dan melech", imgUrl: "../../images/351044.jpeg" },
    { code: 6, name: "Elchanan Barach Lakvish", price: 21, aouther: "Menoch Bekerman", imgUrl: "../../images/Cat_487411_194.jpg" },
    ],
    selectedBook: null,
    selectedBookToEdit: null
}

export const librarySlice = createSlice({
    name: 'book',
    initialState:initialState,
    reducers: {
        addBook: (state, action) => {
            state.arrBook.push(action.payload)
        },
        deleteBook: (state, action) => {
            let code=action.payload;
            let index=state.arrBook.findIndex(item=> item.code==code)
            state.arrBook.splice(index,1);
            // state.arrBook.filter(item => item.code == action.payload)
        },
        bookToRead: (state, action) => {
            state.selectedBook = action.payload
        },
        bookToEdit: (state, action) => {
            state.selectedBookToEdit = action.payload
        },
        saveEditedBook: (state, action) => {
            let newArr = state.arrBook.map(item => {
                if (item.code == action.payload.code)
                    return action.payload
                return item
            });
            let newSelectedBook;
            if (state.selectedBook.code == action.payload.code) {
                newSelectedBook = action.payload;
            }
            else
                newSelectedBook = state.selectedBook;
            state.selectedBook=newSelectedBook;
            state.selectedBookToEdit=null;
            state.arrBook=newArr;
        }
    }
});

export const { addBook, deleteBook ,saveEditedBook,bookToEdit,bookToRead} = librarySlice.actions
export default librarySlice.reducer