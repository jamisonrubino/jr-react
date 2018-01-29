import axios from 'axios'
require('dotenv/config')

export function toggleDirectionsInputs() {
  return {
    type: 'TOGGLE_DIRECTIONS_INPUTS',
    payload: true
  }
}
export function updateOrigin(input) {
  return {
    type: 'UPDATE_ORIGIN',
    payload: input
  }
}
export function updateDestination(input) {
  return {
    type: 'UPDATE_DESTINATION',
    payload: input
  }
}

export function fetchTripTime(origin, destination) {
  const key = `AIzaSyBY9BvN0BupJ25Dm_I-yBVj2iDmyPuuFBk`
  const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${key}`
  const request = axios.get(url)
  
  console.log("directions request: ", request)

  return {
    type: 'FETCH_TRIP_TIME',
    payload: request
  }
}
