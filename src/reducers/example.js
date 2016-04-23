const initialState = {
    example: "Data"
};

export const EXAMPLE_ACTION_TYPE = 'EXAMPLE ACTION TYPE';

export function example(state = initialState, action) {
    switch (action.type) {

        case EXAMPLE_ACTION_TYPE:
            return {
                ...state,
                example: action.example
            };

        default:
            return state;
    }
}