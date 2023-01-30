import { store } from './store.js'

// user ACTIONS

export const signUp = (data) => {
	return fetch(`http://localhost:8002/sign-up`, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
}

export const signIn = (data) => {
	return fetch(`http://localhost:8002/sign-in`, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	})
}

// VENUE CRUD EXPORTS

export const indexVenues = () => {
    return fetch(`http://localhost:8002/venues`, {
		headers: {
			'Authorization': `Bearer ${store.userToken}`,
		},
	})
}

export const createVenue = (data) => {
    return fetch(`http://localhost:8002/venues`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${store.userToken}`,
        },
        body: JSON.stringify(data)
    })
}

export const showVenue = (id) => {
    return fetch(`http://localhost:8002/venues/${id}`, {
		headers: {
			'Authorization': `Bearer ${store.userToken}`,
		},
	})
}

export const updateVenue = (data, id) => {
    return fetch(`http://localhost:8002/venues/${id}`, {
		method: 'PATCH',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${store.userToken}`,
		},
		body: JSON.stringify(data),
	})
}

export const deleteVenue = (id) => {
	return fetch(`http://localhost:8002/venues/${id}`, {
		method: 'DELETE',
		headers: {
			'Authorization': `Bearer ${store.userToken}`,
		},
	})
}

// SHOW CRUD EXPORTS
export const indexShows = () => {
    return fetch(`http://localhost:8002/shows`, {
		headers: {
			Authorization: `Bearer ${store.userToken}`,
		},
	})
}

export const createShow = (data) => {
    return fetch(`http://localhost:8002/shows`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${store.userToken}`,
        },
        body: JSON.stringify(data)
    })
}

export const showShow = (id) => {
    return fetch(`http://localhost:8002/shows/${id}`, {
		headers: {
			Authorization: `Bearer ${store.userToken}`,
		},
	})
}

export const updateShow = (data, id) => {
    return fetch(`http://localhost:8002/shows/${id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${store.userToken}`,
        },
        body: JSON.stringify(data)
    })
}

export const deleteShow = (id) => {
    return fetch(`http://localhost:8002/shows/${id}`, {
        method: 'DELETE',
        headers: {
			'Authorization': `Bearer ${store.userToken}`,
		},
    })
}