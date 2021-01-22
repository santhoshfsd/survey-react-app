# survey-client-app

node_modules


react has it own server.
react has built config for babel and webpack
why two servers


# Concurrent Run

# App Structure

index -  bootup logic, Data control (redux)

App.js - Rendering control (react router)


Redux - handling the state of the application

React-Redux
provider - store
makes the store available wherever it requires

combine reducers -- auth and business
Component
-calls an action creator -  dispatches / returns an action
-action - sent to the reducers
-reducers - update the states in the store

Create Redux Store -
Render a provider tag - by react-redux library
knows how read changes from the redux store


createStore - accepts the reducers, initial state value, middleware()