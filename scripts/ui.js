import { store } from './store.js'

// VENUES

const indexVenueContainer = document.querySelector('#index-venue-container')
const venueMessageContainer = document.querySelector('#venue-message-container')
const showVenueContainer = document.querySelector('#show-venue-container')
const signInUpMessageContainer = document.querySelector('#sign-in-up-message-container')

// sign in and sign up

export const onSignUpSuccess = () => {
    signInUpMessageContainer.innerHTML = 'You\'ve created a new user! Now you can sign in.'
}

export const onSignInSuccess = (userToken) => {
    signInUpMessageContainer.innerHTML = ''
    store.userToken = userToken
    authContainer.classList.add('hide')
    indexContainer.classList.remove('hide') 
}

export const onSignUpFailure = () => {
    signInUpMessageContainer.innerHTML = 'You\'ve created a new user! Now Sign In'
}

export const onSignInFailure = () => {
    signInUpMessageContainer.innerHTML = 'Cannot sign in. Make sure your information is correct'
}

////

export const onIndexVenueSuccess = (venues) => {
    venues.forEach(venue => {
        const div = document.createElement('div')
        div.innerHTML = `
            <h3>${venue.name} - ${venue.location.city}, ${venue.location.stateOrProvince} (${venue.location.country})</h3>
            <button data-id="${venue._id}" >Show Venue</button>
        `
        
        indexVenueContainer.appendChild(div)
    })
}

export const onVenueFailure = (error) => {
    venueMessageContainer.innerHTML = `
        <h3>You've got an error! :(</h3>
        <p>${error}</p>
    `
}

export const onCreateVenueSuccess = () => {
    venueMessageContainer.innerText = 'You have added a venue!'
}

export const onShowVenueSuccess = (venue) => {
    const div = document.createElement('div')
    div.innerHTML = `
        <h3>${venue.name}</h3>
        <p>${venue.location}</p>
        <p>${venue.location.city}</p>
        <p>${venue.location.stateOrProvince}</p>
        <p>${venue.location.country}</p>
        <p>${venue.capacity}</p>
        <p>${venue.typeOfShowsBooked}</p>
        <p>${venue.contact.name}</p>
        <p>${venue.contact.email}</p>
        <p>Social Media Links: Instagram (${venue.contact.socialMediaLinks.instagram}), Twitter (${venue.contact.socialMediaLinks.twitter}), Facebook (${venue.contact.socialMediaLinks.facebook})</p>
        <p>${venue._id}</p>

        <form data-id="${venue._id}">
            <input type="text" name="name" value="${venue.name}" />
            <input type="text" name="city" value="${venue.location.city}" />
            <input type="text" name="state or province" value="${venue.location.stateOrProvince}" />
            <input type="text" name="country" value="${venue.location.country}" />
            <input type="text" name="capacity" value="${venue.capacity}" />
            <input type="text" name="type of shows" value="${venue.typeOfShowsBooked}" />
            <input type="text" name="contact name" value="${venue.contact.name}" />
            <input type="text" name="contact email" value="${venue.contact.email}" />
            <input type="text" name="instagram link" value="${venue.contact.socialMediaLinks.instagram}" />
            <input type="text" name="twitter link" value="${venue.contact.socialMediaLinks.twitter}" />
            <input type="text" name="facebook link" value="${venue.contact.socialMediaLinks.facebook}" />
            <input type="submit" value="Update Venue" />
        </form>

        <button data-id="${venue._id}">Delete Venue</button>

    `
    showVenueContainer.appendChild(div)
}

export const onUpdateVenueSuccess = () => {
    VenueMessageContainer.innerText = 'Update successful.)'
}

export const onDeleteVenueSuccess = () => {
    characterMessageContainer.innerText = 'The venue has been deleted.'
}

// SHOWS

const indexShowContainer = document.querySelector('#index-show-container')
const showMessageContainer = document.querySelector('#show-message-container')
const showShowContainer = document.querySelector('#show-show-container')

export const onIndexShowSuccess = (shows) => {
    shows.forEach(show => {
        const div = document.createElement('div')
        div.innerHTML = `
            <h3>${show.artist} (${show.year})</h3>
            <button data-id="${show._id}" >Show Past Gigs</button>
        `

        indexShowContainer.appendChild(div)
    })
}

export const onShowFailure = (error) => {
    showMessageContainer.innerHTML = `
        <h3>You've got an error!</h3>
        <p>${error}</p>
    `
}

export const onCreateShowSuccess = () => {
    showMessageContainer.innerText = 'You have created a show!'
}

export const onShowShowSuccess = (campaign) => {
    const div = document.createElement('div')
    div.innerHTML = `
        <h3>${show.artist} (${show.year}</h3>
        <p>${show._id}</p>

        <form data-id="${show._id}">
            <input type="text" name="gig artist" value="${show.artist}" />
            <input type="text" name="gig year" value="${show.year}" />
            <input type="submit" value="Update Gig" />
        </form>

        <button data-id="${show._id}">Delete Gig</button>

    `
    showShowContainer.appendChild(div)
}

export const onUpdateShowSuccess = () => {
    showMessageContainer.innerText = 'You have updated the show!'
}

export const onDeleteShowSuccess = () => {
    showMessageContainer.innerText = 'Show has been deleted'
}
