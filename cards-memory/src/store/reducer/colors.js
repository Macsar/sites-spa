import { FETCH_COLORS4, FETCH_COLORS8, FETCH_COLORS16 } from "../actions/actionTypes";

const initialState = {
	colors4: [
		'#90caf9', '#f44336', '#ff9800', '#2196f3'
	],

    colors8: [
        '#90caf9', '#f44336', '#ff9800', '#2196f3',
        '#4caf50', '#ffeb3b', '#ff9100', '#00b0ff',
    ],

    colors16: []
};

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_COLORS4:
            return {
                ...state
            };
        
		case FETCH_COLORS8:
            return {
                ...state
            };

        case FETCH_COLORS16:
            return {
                ...state
            };

        default:
            return state;
    };
};