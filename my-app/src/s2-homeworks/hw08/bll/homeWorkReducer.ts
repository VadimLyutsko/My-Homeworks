import {UserType} from '../HW8';

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name

            return action.payload === 'up' ? state.sort((a, b) => a.name > b.name ? 1 : -1) : state.sort((a, b) => a.name > b.name ? -1 : 1);

        }
        case 'check': {
            return state.filter(item => item.age >= 18);   // need to fix
        }
        default:
            return state;
    }
};
