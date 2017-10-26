import { CALCULATION_PENDING, CALCULATION_STARTED, CALCULATION_SUCCESS, CALCULATION_FAILURE } from '../actions'

const initialState = {
    items: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CALCULATION_PENDING:
            return {
                ...state,
                items: [
                    ...state.items,
                    {
                        id: action.payload.id,
                        value: action.payload.value,
                        type: 'pending',
                        data: null,
                    }
                ]
            }
        case CALCULATION_STARTED:
            return {
                ...state,
                items: updateItems(state.items, { 
                    id: action.payload.id,
                    type: 'calculating',
                }),
            }
        case CALCULATION_SUCCESS:
            return {
                ...state,
                items: updateItems(state.items, {
                    id: action.payload.id,
                    type: action.payload.type,
                    data: action.payload.data,
                })
            }
        case CALCULATION_FAILURE:
            return {
                ...state,
                items: updateItems(state.items, {
                    id: action.payload.id,
                    type: 'error',
                    data: action.payload.message,
                })
            }
        default:
            return state
    }
}

const updateItems = (items, update) => {
    const index = items.findIndex((item) => item.id === update.id)

    if (index === -1) {
        return [
            ...items,
            update,
        ]
    }
    
    return [
        ...items.slice(0, index),
        {
            ...items[index],
            ...update,
        },
        ...items.slice(index + 1),
    ]
}
