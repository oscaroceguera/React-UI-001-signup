const OPEN_MODAL = 'OPEN_MODAL'
const CLOSE_MODAL = 'CLOSE_MODAL'

export function openModal () {
  return { type: OPEN_MODAL }
}

export function closeModal () {
  return { type: CLOSE_MODAL }
}

const initialState = { mounted: false }

export default function modal (state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        mounted: true
      }
    case CLOSE_MODAL:
      return {
        ...state,
        mounted: false
      }
    default:
      return state
  }
}
