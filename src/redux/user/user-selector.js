import {createSelector} from 'reselect'

const currentUser = state => state.user

export const selectCurrentUser = createSelector(
    [currentUser],
    user => user.currentUser
)
