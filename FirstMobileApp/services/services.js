import * as endpoints from './endpoints'

const URL = 'http://localhost:3298'

const createAccount = async (dataFromCreateAccount) => {
    try {
        const createAccountJSON = await fetch(URL + endpoints.createAccount, {
            method: "POST",
            body: JSON.stringify(dataFromCreateAccount)
        })

        // const accountCreated = await createAccountJSON.json()

    } catch (error) {
        console.log(`Error from createAccount:: ${error}`)
    }
}

const login = async (dataFromLogin) => {
    try {
        await fetch(URL + endpoints.login, {
            method: "POST",
            body: JSON.stringify(dataFromLogin)
        })

        // const accountCreated = await createAccountJSON.json()

    } catch (error) {
        console.log(`Error from Login:: ${error}`)
    }
}

const logout = async (dataFromLogout) => {
    try {
        await fetch(URL + endpoints.logout, {
            method: "POST",
            body: JSON.stringify(dataFromLogout)
        })

        // const accountCreated = await createAccountJSON.json()

    } catch (error) {
        console.log(`Error from Logout:: ${error}`)
    }
}

const recoverPassword = async (dataFromRecoverPassword) => {
    try {
        await fetch(URL + endpoints.recoverPassword, {
            method: "POST",
            body: JSON.stringify(dataFromRecoverPassword)
        })

        // const accountCreated = await createAccountJSON.json()

    } catch (error) {
        console.log(`Error from recoverPassword:: ${error}`)
    }
}

const friendsRequest = async (dataFromFriendsRequest) => {
    try {
        await fetch(URL + endpoints.friendsRequest, {
            method: "POST",
            body: JSON.stringify(dataFromFriendsRequest)
        })

        // const accountCreated = await createAccountJSON.json()

    } catch (error) {
        console.log(`Error from friendsRequest:: ${error}`)
    }
}

const friendsAdd = async (dataFromFriendsAdd) => { // To add a friend
    try {
        await fetch(URL + endpoints.friendsAdd, {
            method: "POST",
            body: JSON.stringify(dataFromFriendsAdd)
        })

        // const accountCreated = await createAccountJSON.json()

    } catch (error) {
        console.log(`Error from friendsAdd:: ${error}`)
    }
}

const getFriends = async (dataFromFriends) => { // To get friends list
    try {
        await fetch(URL + endpoints.friendsAdd, {
            method: "GET",
            body: JSON.stringify(dataFromFriends)
        })

        // const accountCreated = await createAccountJSON.json()

    } catch (error) {
        console.log(`Error from getFriends:: ${error}`)
    }
}

const friendsDelete = async (dataFromFriendsDelete) => {
    try {
        await fetch(URL + endpoints.friendsDelete, {
            method: "DELETE",
            body: JSON.stringify(dataFromFriendsDelete)
        })

        // const accountCreated = await createAccountJSON.json()

    } catch (error) {
        console.log(`Error from friendsDelete:: ${error}`)
    }
}

const invitation = async (dataFromInvitation) => {
    try {
        await fetch(URL + endpoints.invitation, {
            method: "POST",
            body: JSON.stringify(dataFromInvitation)
        })

        // const accountCreated = await createAccountJSON.json()

    } catch (error) {
        console.log(`Error from invitation:: ${error}`)
    }
}

const createInvitation = async (dataFromCreateInvitation) => {
    try {
        await fetch(URL + endpoints.createInvitation, {
            method: "POST",
            body: JSON.stringify(dataFromCreateInvitation)
        })

        // const accountCreated = await createAccountJSON.json()

    } catch (error) {
        console.log(`Error from createInvitation:: ${error}`)
    }
}

module.exports = { createAccount, login, logout, recoverPassword, friendsRequest, friendsAdd, friendsDelete, invitation, createInvitation, getFriends }