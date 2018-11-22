// state argument is not application state, only the state this reducer is
// responsible for
export default function (state = null, action) {

    switch (action.type) {
        case 'BOOK_SELECTED':
            // the returned object should be always fresh new object
            return action.payload;
    }

    return state;

}