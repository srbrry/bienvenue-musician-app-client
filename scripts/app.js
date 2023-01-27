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
} from './api.js'


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
	onDeleteShowSuccess
} from './ui.js'

const createVenueForm = document.querySelector('#create-venue-form')
const indexVenueContainer = document.querySelector('#index-venue-container')
const showVenueContainer = document.querySelector('#show-venue-container')

// VENUES

indexVenues()
    .then(res => res.json())
    .then(res => {
        console.log(res)
        onIndexVenueSuccess(res.venues)
    })
    .catch(onVenueFailure)


createVenueForm.addEventListener('submit', (event) => {
    event.preventDefault()

    console.log(event.target['typeOfShowsBooked'].value)

    const venueData = {
			venue: {
				name: event.target['name'].value,
				location: {
                    city: event.target['city'].value,
                    stateOrProvince: event.target['state or province'].value,
                    country: event.target['country'].value,
                },
				capacity: event.target['capacity'].value,
				typeOfShowsBooked: event.target['typeOfShowsBooked'].value,
                contact: {
                    name: event.target['contact name'].value,
                    email: event.target['contact email'].value,
                    socialMediaLinks: {
                        instagram: event.target['instagram link'].value,
                        twitter: event.target['twitter link'].value,
                        facebook: event.target['facebook link'].value,
                    }
                }
			},
		}

    // console.log(venueData)
    createVenue(venueData)
			.then(onCreateVenueSuccess)
			.catch(onVenueFailure)
})

indexVenueContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')
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
            typeOfShowsBooked: event.target['type of shows booked'].value,
            contact: {
                name: event.target['contact name'].value,
                email: event.target['contact email'].value,
                socialMediaLinks: {
                    instagram: event.target['instagram link'].value,
                    twitter: event.target['twitter link'].value,
                    facebook: event.target['facebook link'].value,
                }
            }
        },
	}

    if (!id) return

	updateVenue(venueData, id)
		// this function (onUpdateVenueSuccess) does not need anything to run. NO params
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

indexShows()
    .then(res => res.json())
    .then(res => {
        console.log(res)
        onIndexShowSuccess(res.shows)
    })
    .catch(onShowFailure)


createShowForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const showData = {
			show: {
				artist: event.target['artist'].value,
                year: event.target['year'].value,
			},
		}

    // console.log(showData)
    createShow(showData)
			.then(onCreateShowSuccess)
			.catch(onShowFailure)
})

indexShowContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')
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
            artist: event.target['gig'].value,
            year: event.target['year'].value,
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