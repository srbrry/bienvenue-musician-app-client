// VENUE CRUD EXPORTS

export const indexVenues = () => {
    return fetch(`http://localhost:8002/venues`)
}

export const createVenue = (data) => {
    return fetch(`http://localhost:8002/venues`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const showVenue = (id) => {
    return fetch(`http://localhost:8002/venues/${id}`)
}

export const updateVenue = (data, id) => {
    return fetch(`http://localhost:8002/venues/${id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const deleteVenue = (id) => {
    return fetch(`http://localhost:8002/venues/${id}`, {
        method: 'DELETE'
    })
}

// SHOW CRUD EXPORTS
export const indexShows = () => {
    return fetch(`http://localhost:8002/shows`)
}

export const createShow = (data) => {
    return fetch(`http://localhost:8002/shows`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const showShow = (id) => {
    return fetch(`http://localhost:8002/shows/${id}`)
}

export const updateShow = (data, id) => {
    return fetch(`http://localhost:8002/shows/${id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const deleteShow = (id) => {
    return fetch(`http://localhost:8002/shows/${id}`, {
        method: 'DELETE'
    })
}