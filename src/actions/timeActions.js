import * as types from './actionTypes'

export const updateTime = (minutes, seconds ) => ({type: types.UPDATE_TIME, minutes, seconds})