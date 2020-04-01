const users = []

// add a new user
const addUser = ({ id, username, room }) => {
    // clean data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    // validate the data
    if(!username || !room){
        return {
            error: 'Username and room are required!'
        }
    }

    // check for existing user
    const existingUser = users.find( user => {
        return user.room === room && user.username === username
    })

    // validate username
    if(existingUser){
        return {
            error: 'Username is in use!'
        }
    }

    // store user
    const user = { id, username, room }
    users.push(user)
    return { user }
}

// remove the users
const removeUser = (id) => {
    const index = users.findIndex( user => user.id === id)

    if(index !== -1){
        return users.splice(index, 1)[0]
    }
}

// get one user by id
const getUser = (id) => {
    return users.find( user => user.id === id)
}

// get all user in a specific room
const getUsersInRoom = (room) => {
    room = room.trim().toLowerCase()
    return users.filter( user => user.room === room) 
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}
