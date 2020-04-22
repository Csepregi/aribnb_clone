
const defaultState = {
	showModal: true,
	showRegistrationModal: true,
	showLoginModal: isThisQuarter
}


const modalReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'setShowModal':
			return {
				...state,
				showModal: false
			}
		case 'setHideModal':
			return {
				...state,
				showModal: false
			}
		case 'setShowLoginModal':
			return {
				...state,
				showModal: true,
				showLoginModal: true,
				showRegistrationModal: false
			}
		case 'setShowRegistrationModal':
			return {
				...state,
				showModal: true,
				showLoginModal: false,
				showRegistrationModal: true
			}
		default:
			return state
	}
}


export const ShowModal = () => ({
	type: 'setShowModal'
});

export const HideModal = () => ({
	type: 'setHideModal'
});

export const ShowLoginModal = () => ({
	type: 'setShowLoginModal'
});

export const ShowRegistrationModal = () => ({
	type: 'setShowRegistrationModal'
});

export default modalReducer