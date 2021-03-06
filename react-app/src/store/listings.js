const ALL_LISTINGS = 'listings/ALL_LISTINGS';
const CREATE_LISTING = 'listings/CREATE_LISTING';
const EDIT_LISTING = 'listings/EDIT_LISTING';
const DELETE_LISTING = 'listings/DELETE_LISTING'

const getAllListings = (listings) => ({
    type: ALL_LISTINGS,
    listings,
})

const createListing = (listing) => ({
    type: CREATE_LISTING,
    listing,
})

const editListing = (listing) => ({
    type: EDIT_LISTING,
    listing
})

const deleteListing = (listingId) => ({
    type: DELETE_LISTING,
    listingId
})

export const fetchAllListings = () => async (dispatch) => {
    const response = await fetch('/api/listings/');
    if (response.ok) {
        const data = await response.json();

        if (data.errors) {
            return;
        }

        dispatch(getAllListings(data));
        return data
    }
}

export const fetchCreateListing = (user_id, name, gender, age, pet_type, description, image_url) => async (dispatch) => {

    const response = await fetch('/api/listings/create', {
        method: "POST",
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify({
            user_id,
            name,
            gender,
            age,
            pet_type,
            description,
            image_url,
        })
    })


    if (response.ok) {
        const data = await response.json()
        dispatch(createListing(data))
        return
    } else if (response.status === 500) {
        const data = await response.json();
        if (data.errors) {
            return data;
        }
    } else {
        return ['An error occurred. Please try again.']
    }
}


export const fetchEditListing = (id, name, gender, age, pet_type, description, image_url) => async (dispatch) => {
    const response = await fetch(`/api/listings/${id}`, {
        method: "PUT",
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify({
            name,
            gender,
            age,
            pet_type,
            description,
            image_url
        })
    })

    if (response.ok) {
        const data = await response.json()
        dispatch(editListing(data))
        return
    } else if (response.status === 500) {
        const data = await response.json();
        if (data.errors) {
            return data;
        }
    } else {
        return ['An error occurred. Please try again.']
    }

}

export const fetchDeleteListing = (id) => async (dispatch) => {
    const response = await fetch(`/api/listings/${id}`, {
        method: "DELETE"
    })

    const data = await response.json()
    if (response.ok) {
        dispatch(deleteListing(id))
        return data
    }
    if (data.errors) {
        return;
    }

}

let initialState = {}

export default function reducer(state = initialState, action) {
    let newState = { ...state }
    switch (action.type) {
        case ALL_LISTINGS:
            return { ...state, ...action.listings };
        case CREATE_LISTING:
            newState[action.listing.id] = action.listing
            return newState
        case EDIT_LISTING:
            newState[action.listing.id] = action.listing
            return newState
        case DELETE_LISTING:
            delete newState[action.listingId]
            return newState
        default:
            return state;
    }
}
