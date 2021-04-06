import { 
    FETCH_CARDS, FETCH_COLORS8, FETCH_COLORS16, 
    GEN_ARRAY, ADD_OBJECTS
} from './actionTypes';

export function fetchCards() {
    return {
        type: FETCH_CARDS
    };
};

export function fetchColors8() {
    return {
        type: FETCH_COLORS8
    };
};

export function fetchColors16() {
    return {
        type: FETCH_COLORS16
    };
};

export function genArray(array) {
    return {
        type: GEN_ARRAY,
        payload: array
    };
};

export function addObjects(array) {
    return {
        type: ADD_OBJECTS,
        payload: array
    }
};