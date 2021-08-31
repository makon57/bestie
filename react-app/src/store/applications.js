
const CREATE_APPLICATION = 'applications/CREATE_APPLICATION'
const GET_APPLICATIONS = 'applications/GET_APPLICATIONS'

const createApplication = (application) => ({
    type: CREATE_APPLICATION,
    application,
})

const getApplications = (listings) => ({
    type: GET_APPLICATIONS,
    listings,
})

export const createApplicationThunk = (payload) => async (dispatch) => {
    const response = await fetch('api/applications/create', {
        method: "POST",
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify(payload)
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

export const getApplicationsThunk = (listingId) => async (dispatch) => {
    const response = await fetch(`/api/applications/${listingId}`);
    if (response.ok) {
        const data = await response.json();
        if (data.errors) {
            return;
        }

        dispatch(getApplications(data));
        return data
    }
}


let initialState = {}

export default function reducer(state =  initialState, action) {
    let newState = { ...state }
    switch (action.type) {
        case GET_APPLICATIONS:
            return { ...state, ...action.applications }
        case CREATE_APPLICATION:
            newState[action.application.id] = action.application
            return newState
        default:
            return state;
    }
}
