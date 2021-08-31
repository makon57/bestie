
const CREATE_APPLICATION = 'applications/CREATE_APPLICATION'
const GET_APPLICATIONS = 'applications/GET_APPLICATIONS'
const GET_USER_APPLICATIONS = 'applications/GET_USER_APPLICATIONS'
const DELETE_APPLICATION = 'applications/DELETE_APPLICATION'
const EDIT_APPLICATION = 'applications/EDIT_APPLICATION'


const createApplication = (application) => ({
    type: CREATE_APPLICATION,
    application,
})

const getApplications = (listings) => ({
    type: GET_APPLICATIONS,
    listings,
})

const editApplication = (application) => ({
    type: EDIT_APPLICATION,
    application
})

const getUserApplications = (applications) => ({
    type: GET_USER_APPLICATIONS,
    applications,
})

const deleteApplication = (applicationId) => ({
    type: DELETE_APPLICATION,
    applicationId
})

export const createApplicationThunk = (
    listingId,
    userId,
    name,
    age,
    email,
    cellphone,
    address,
    city,
    state,
    zipcode,
    homeType,
    pets,
    household,
    vetName,
    vetCellphone,
    ) => async (dispatch) => {
    

    const response = await fetch('/api/applications/create', {
        method: "POST",
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify({
            listingId,
            userId,
            name,
            age,
            email,
            cellphone,
            address,
            city,
            state,
            zipcode,
            homeType,
            pets,
            household,
            vetName,
            vetCellphone,
        })
    })

    const data = await response.json()
    if (response.ok) {
        dispatch(createApplication(data))
        return data
    }
    if (data.errors) {
        return data
    }
}

export const getUserApplicationsThunk = (userId) => async (dispatch) => {
    const response = await fetch(`/api/users/${userId}/applications`);
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return;
        }

        dispatch(getUserApplications(data));
        return data
    }
}


export const fetchEditApplication = (
        id,
        name,
        age,
        email,
        cellphone,
        address,
        city,
        state,
        zipcode,
        homeType,
        pets,
        household,
        vetName,
        vetCellphone,
    ) => async (dispatch) => {

    const response = await fetch(`/api/listings/${id}`, {
        method: "PUT",
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify({
            name,
            age,
            email,
            cellphone,
            address,
            city,
            state,
            zipcode,
            homeType,
            pets,
            household,
            vetName,
            vetCellphone,
        })
    })
    const data = await response.json()
    if (response.ok) {
        dispatch(editApplication(data))
        return data
    }
    if (data.errors) {
        return data
    }

}


export const fetchDeleteApplication = (id) => async (dispatch) => {
    const response = await fetch(`/api/applications/${id}`, {
        method: "DELETE"
    })

    const data = await response.json()
    if (response.ok) {
        dispatch(deleteApplication(id))
        return data
    }
    if (data.errors) {
        return data;
    }

}



let initialState = {}

export default function reducer(state =  initialState, action) {
    let newState = { ...state }
    switch (action.type) {
        case GET_APPLICATIONS:
            return { ...state, ...action.applications }
        case GET_USER_APPLICATIONS:
            newState = {...action.applications }
            return newState
        case CREATE_APPLICATION:
            newState[action.application.id] = action.application
            return newState
        case DELETE_APPLICATION:
            delete newState[action.applicationId]
            return newState
        default:
            return state;
    }
}
