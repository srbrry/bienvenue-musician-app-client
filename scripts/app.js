import { 
	indexVenues, 
	indexShows,
	createVenue,
	createShow,
	showVenue,
	showShow,
	updateVenue,
	updateShow,
	deleteVenue,
	deleteShow,
    signUp,
    signIn,
} from './api.js'
import { store } from './store.js'
import { 
	onIndexVenueSuccess,
	onIndexShowSuccess,
	onVenueFailure,
	onShowFailure,
	onCreateVenueSuccess,
	onCreateShowSuccess,
	onShowVenueSuccess, 
	onShowShowSuccess,
	onUpdateVenueSuccess,
	onUpdateShowSuccess,
	onDeleteVenueSuccess,
	onDeleteShowSuccess,
    onSignInSuccess,
    onSignUpSuccess,
    onSignInFailure,
    onSignUpFailure,
} from './ui.js'

const createVenueForm = document.querySelector('#create-venue-form')
const indexVenueContainer = document.querySelector('#index-venue-container')
const showVenueContainer = document.querySelector('#show-venue-container')

const browseVenuesButton = document.querySelector('#browse-venues')
const loginHere = document.querySelector('#login-here-anchor')

const signInForm = document.querySelector('#sign-in-form')
const signUpForm = document.querySelector('#sign-up-form')
const signUpModal = document.querySelector('#sign-up-modal');
const loginModal = document.querySelector('#login-modal');

// you can benefit from more comments in this file that break down each function, it's purpose, and any fine points of code that need extra explanation. it will help you reorient yourself to your code much quicker if you revisit it in the future. it also helps others who are looking at your code.

// SIGN IN and UP button and page functionality

signUpForm.addEventListener('submit', (event) => {
	event.preventDefault()
	const userData = {
		credentials: {
			email: event.target['email'].value,
			password: event.target['password'].value,
		},
	}
	signUp(userData)
        .then(onSignUpSuccess)
        .catch(onSignUpFailure)
})

signInForm.addEventListener('submit', (event) => {
	event.preventDefault()
	const userData = {
		credentials: {
			email: event.target['email'].value,
			password: event.target['password'].value,
		},
	}
	signIn(userData)
		.then((res) => res.json())
		.then((res) => onSignInSuccess(res.token))
		.then(indexVenues)
		.then((res) => res.json())
		.then((res) => onIndexVenueSuccess(res.venues))
		.then(indexShows)
		.then((res) => res.json())
		.then((res) => onIndexShowSuccess(res.shows))
		.catch(onSignInFailure)
})

// login anchor on sign up page

loginHere.addEventListener('click', () => {
    signUpModal.classList = 'mask d-flex align-items-center h-100 gradient-custom-3 d-none'
    loginModal.classList = 'mask d-flex align-items-center h-100 gradient-custom-3'
})

// VENUES

indexVenues()
    .then(res => res.json())
    .then(res => {
        // console.log(res)
        onIndexVenueSuccess(res.venues)
    })
    .catch(onVenueFailure)

// browse venues button

browseVenuesButton.addEventListener('click', () => {
    indexVenueContainer.classList.remove('d-none')
})


createVenueForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const venueData = {
			venue: {
				name: event.target['name'].value,
				location: {
                    city: event.target['city'].value,
                    stateOrProvince: event.target['state or province'].value,
                    country: event.target['country'].value,
                },
				capacity: event.target['capacity'].value,
				typeOfShowsBooked: event.target['type of shows'].value,
                contact: {
                    name: event.target['contact person'].value,
                    email: event.target['contact email'].value,
                    socialMediaLinks: {
                        instagram: event.target['instagram handle'].value,
                        twitter: event.target['twitter handle'].value,
                        facebook: event.target['facebook link'].value,
                    }
                }
			},
		}

    createVenue(venueData)
			.then(onCreateVenueSuccess)
			.catch(onVenueFailure)
})

indexVenueContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')
	// take the console.logs out of the main production branch
    // console.log(id)

    if (!id) return

    showVenue(id)
			.then((res) => res.json())
			.then((res) => onShowVenueSuccess(res.venue))
			.catch(onVenueFailure)
})

showVenueContainer.addEventListener('submit', (event) => {
	event.preventDefault()

	const id = event.target.getAttribute('data-id')

	const venueData = {
        venue: {
            name: event.target['name'].value,
            location: {
                city: event.target['city'].value,
                stateOrProvince: event.target['state or province'].value,
                country: event.target['country'].value,
            },
            capacity: event.target['capacity'].value,
            typeOfShowsBooked: event.target['type of shows'].value,
            contact: {
                name: event.target['contact person'].value,
                email: event.target['contact email'].value,
                socialMediaLinks: {
                    instagram: event.target['instagram handle'].value,
                    twitter: event.target['twitter handle'].value,
                    facebook: event.target['facebook link'].value,
                }
            }
        },
	}

    if (!id) return

	updateVenue(venueData, id)
		.then(onUpdateVenueSuccess)
		.catch(onVenueFailure)
})

showVenueContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')

    if (!id) return

	deleteVenue(id)
		.then(onDeleteVenueSuccess)
		.catch(onVenueFailure)
})


// SHOW

const createShowForm = document.querySelector('#create-show-form')
const indexShowContainer = document.querySelector('#index-show-container')
const showShowContainer = document.querySelector('#show-show-container')

// non-working code should be on a development branch, not on the main production branch

// indexShows()
//     .then(res => res.json())
//     .then(res => {
//         console.log(res)
//         onIndexShowSuccess(res.shows)
//     })
//     .catch(onShowFailure)


// createShowForm.addEventListener('submit', (event) => {
//     event.preventDefault()

//     const showData = {
// 			show: {
// 				artist: event.target['past gig'].value,
//                 year: event.target['year'].value,
//                 venueId: event.target['venueId'].value
// 			},
// 		}

//     // console.log(showData)
//     createShow(showData)
// 			.then(onCreateShowSuccess)
// 			.catch(onShowFailure)
// })

showVenueContainer.addEventListener('submit', (event) => {
    event.preventDefault()

if (event.target.classList.contains("create-show-form")) {
    const showData = {
            show: {
                artist: event.target['past gig'].value,
                year: event.target['year'].value,
                venueId: event.target['venueId'].value
            },
        }
	// bye bye to the console logs
    // console.log(showData)
    createShow(showData)
            .then(onCreateShowSuccess)
            .catch(onShowFailure)
}
})

indexShowContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')
	// bye bye to this console.log as well
    // console.log(id)

    if (!id) return

    showShow(id)
			.then((res) => res.json())
			.then((res) => onShowShowSuccess(res.show))
			.catch(onShowFailure)
})

showShowContainer.addEventListener('submit', (event) => {
	event.preventDefault()

	const id = event.target.getAttribute('data-id')

	const showData = {
		show: {
            artist: event.target['past gig'].value,
            year: event.target['year'].value,
            venueId: event.target['venueId'].value
        },
	}

    if (!id) return

	updateShow(showData, id)
		.then(onUpdateShowSuccess)
		.catch(onShowFailure)
})

showShowContainer.addEventListener('click', (event) => {
	const id = event.target.getAttribute('data-id')

    if (!id) return

	deleteShow(id)
		.then(onDeleteShowSuccess)
		.catch(onShowFailure)
})