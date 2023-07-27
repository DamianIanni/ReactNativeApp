import * as endpoints from './endpoints'

const URL = 'http://192.168.0.37:3298/api/createAccount'

export const createAccount = async (dataFromCreateAccount) => {
    try {
        const createAccountJSON = await fetch(URL , {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "User-Agent": "PostmanRuntime/7.29.2",
            },
            body: JSON.stringify(dataFromCreateAccount)
        });
        const json = await createAccountJSON.json()
        
    } catch (error) {
        console.log("LOGUEATE CAPO")
        alert(`Error from createAccount:: ${error}`)
    }
}

export const login = async (dataFromLogin) => {
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

export const logout = async (dataFromLogout) => {
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

export const recoverPassword = async (dataFromRecoverPassword) => {
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

export const friendsRequest = async (dataFromFriendsRequest) => {
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

export const friendsAdd = async (dataFromFriendsAdd) => { // To add a friend
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

export const getFriends = async (dataFromFriends) => { // To get friends list
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

export const friendsDelete = async (dataFromFriendsDelete) => {
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

export const invitation = async (dataFromInvitation) => {
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

export const createInvitation = async (dataFromCreateInvitation) => {
    try {
        const invitationFetch = await fetch(URL + endpoints.createInvitation, {
            method: "POST",
            body: JSON.stringify(dataFromCreateInvitation)
        })

        const invitation = await invitationFetch.json()
        console.log("INVITATION-----------------<<<><><>>>",invitation)

    } catch (error) {
        console.log(`Error from createInvitation:: ${error}`)
    }
}

export default { createAccount, login, logout, recoverPassword, friendsRequest, friendsAdd, friendsDelete, invitation, createInvitation, getFriends }