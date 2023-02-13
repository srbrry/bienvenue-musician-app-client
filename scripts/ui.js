import { indexVenues } from "./api.js";
import { store } from "./store.js";

// you can benefit from more comments in this file that break down each function, it's purpose, and any fine points of code that need extra explanation. it will help you reorient yourself to your code much quicker if you revisit it in the future. it also helps others who are looking at your code.

// VENUES

const mainPageContainer = document.querySelector("#main-page");
const signUpModal = document.querySelector("#sign-up-modal");
const loginModal = document.querySelector("#login-modal");
const indexVenueContainer = document.querySelector("#index-venue-container");
const venueMessageContainer = document.querySelector(
  "#venue-message-container"
);
const showVenueContainer = document.querySelector("#show-venue-container");
const signInMessageContainer = document.querySelector(
  "#sign-in-message-container"
);
const signUpMessageContainer = document.querySelector(
  "#sign-up-message-container"
);

// sign in and sign up

export const onSignUpSuccess = () => {
  signUpMessageContainer.innerHTML =
    "You've created a new user! Now you can sign in below.";
};

export const onSignInSuccess = (userToken) => {
  indexVenues();
  signInMessageContainer.innerHTML = "";
  store.userToken = userToken;
  signUpModal.classList =
    "mask d-flex align-items-center h-100 gradient-custom-3 d-none";
  loginModal.classList =
    "mask d-flex align-items-center h-100 gradient-custom-3 d-none";
  mainPageContainer.classList.remove("d-none");
};

export const onSignUpFailure = () => {
  signUpMessageContainer.innerHTML = "User created! You can sign in now.";
};

export const onSignInFailure = () => {
  signInMessageContainer.innerHTML =
    "Cannot sign in. Make sure your information is correct";
};

// VENUES

export const onIndexVenueSuccess = (venues) => {
  venues.forEach((venue) => {
    const div = document.createElement("div");
    div.innerHTML = `
            <h3>${venue.name} - ${venue.location.city}, ${venue.location.stateOrProvince} (${venue.location.country})</h3>
            <button data-id="${venue._id}" >Show Venue</button>
        `;

    indexVenueContainer.appendChild(div);
  });
};

export const onVenueFailure = (error) => {
  venueMessageContainer.innerHTML = `
        <h3>You've got an error!</h3>
        <p>${error}</p>
    `;
};

export const onCreateVenueSuccess = () => {
  venueMessageContainer.innerText = "You have added a venue!";
};

export const onShowVenueSuccess = (venue) => {
  const venueDiv = document.createElement("div");
  venueDiv.innerHTML = `
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
            <input type="text" name="instagram handle" value="${venue.contact.socialMediaLinks.instagram}" />
            <input type="text" name="twitter handle" value="${venue.contact.socialMediaLinks.twitter}" />
            <input type="text" name="facebook link" value="${venue.contact.socialMediaLinks.facebook}" />
            <input type="submit" value="Update Venue" />
        </form>

        <button data-id="${venue._id}">Delete Venue</button>
        `;

  if (venue.shows.length > 0) {
    venue.shows.forEach((show) => {
      const showDiv = document.createElement("div");
      showDiv.setAttribute("data-id", `${show._id}`);

      showDiv.innerHTML = `
            <h3>Past Gigs</h3>
            <p>${venue.shows[0].artist} ${venue.shows[0].year}</p>

            <form class="create-show-form">
            <input type="text" name="past gig" placeholder="Artist Name" />
            <input type="number" name="year" placeholder="Year" />
            <input type="text" name="venueId" value="${venue._id}" />
            <input class="add-gig" type="submit" data-id="${show._id}" value="Add Past Gig" />
            </form>
            `;

      showVenueContainer.appendChild(venueDiv, showDiv);
    });
  }
};

export const onUpdateVenueSuccess = () => {
  venueMessageContainer.innerText = "Update successful.)";
};

export const onDeleteVenueSuccess = () => {
  venueMessageContainer.innerText = "The venue has been deleted.";
};

// SHOWS

const indexShowContainer = document.querySelector("#index-show-container");
const showMessageContainer = document.querySelector("#show-message-container");
const showShowContainer = document.querySelector("#show-show-container");

export const onIndexShowSuccess = (shows) => {
  shows.forEach((show) => {
    const div = document.createElement("div");
    div.innerHTML = `
            <h3>${show.artist} (${show.year})</h3>
            <button data-id="${show._id}" >Show Past Gigs</button>
        `;

    indexShowContainer.appendChild(div);
  });
};

export const onShowFailure = (error) => {
  showMessageContainer.innerHTML = `
        <h3>You've got an error!</h3>
        <p>${error}</p>
    `;
};

export const onCreateShowSuccess = () => {
  showMessageContainer.innerText = "You have created a show!";
};

export const onShowShowSuccess = (campaign) => {
  const div = document.createElement("div");
  div.innerHTML = `
        <h3>${show.artist} (${show.year}</h3>
        <p>${show._id}</p>

        <form data-id="${show._id}">
            <input type="text" name="past gig" value="${show.artist}" />
            <input type="text" name="year" value="${show.year}" />
            <input type="submit" value="Update Gig" />
        </form>

        <button data-id="${show._id}">Delete Gig</button>

    `;
  showShowContainer.appendChild(div);
};

export const onUpdateShowSuccess = () => {
  showMessageContainer.innerText = "You have updated the show!";
};

export const onDeleteShowSuccess = () => {
  showMessageContainer.innerText = "Show has been deleted";
};
