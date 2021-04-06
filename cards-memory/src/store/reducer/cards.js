import { 
    FETCH_CARDS, GEN_ARRAY, ADD_OBJECTS
} from "../actions/actionTypes";

const initialState = {
    cards: []
};

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CARDS:
            return {
                ...state
            };

        case GEN_ARRAY:
            return {
                cards: action.payload
            };

        case ADD_OBJECTS:
            return {
                cards: action.payload
            }

        default:
            return state;
    };
};