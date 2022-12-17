const initState = {
    isLoading: false,
};

export type StateReducerType = {
    isLoading: boolean
}

export const loadingReducer = (state: StateReducerType = initState, action: LoadingActionType): StateReducerType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case 'CHANGE_LOADING':
            return {
                isLoading: action.isLoading
            };
        default:
            return state;
    }
};

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
});
