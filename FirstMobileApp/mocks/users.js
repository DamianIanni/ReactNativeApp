import React from "react"

export const pushMeetingCreated = (data) => {
    console.log("JSON RECIBIDO------------------->>", JSON.stringify(data, null, 2))
    // console.log("JSON RECIBIDO------------------->>", JSON.stringify(mock[6].meetingRecived, null, 2))
    // mock[6].meetingRecived
}


export default [
    {
        user: "Lichi",
        password: "cocacola",
        friends: [
            {
                id: 0,
                name: "Rodrigo",
            },
            {
                id: 1,
                name: "Catri",
            },
            {
                id: 2,
                name: "Nicolino",
            },
            {
                id: 3,
                name: "Fran",
            },
            {
                id: 4,
                name: "Gaby",
            }
        ],
        meetingRecived: [
            {
                sent: false, //// variable that have to change
                name: 'Catri',
                locate: 'Monte Grande',
                date: 'March 18, Monday',
                hour: '7:30',
                time: 'PM',

            }
        ],
        meetingSend: [
            {
                sent: true,  //// variable that have to change
                name: 'Rodrigo',
                locate: 'Monte Grande',
                date: 'March 18, Monday',
                hour: '7:30',
                time: 'PM',
                meetingStatus: null, //// variable that have to change
                meetingResponse: true //// variable that have to change
            }
        ]
    },
    {
        user: "Catri",
        password: "filosofia"
    },
    {
        user: "ElGordo",
        password: "awper"
    },
    {
        user: "ElNene",
        password: "mierdaconpatas"
    },
    {
        user: "Nicolino",
        password: "ezeiza"
    },
    {
        user: "Gabytou",
        password: "carteles"
    },
    {
        user: "Rodri",
        password: "mogolico",
        friends: [
            {
                id: 0,
                name: "Damian",
            },
            {
                id: 1,
                name: "Catri",
            },
            {
                id: 2,
                name: "Nicolino",
            },
            {
                id: 3,
                name: "Fran",
            },
            {
                id: 4,
                name: "Gaby",
            },
            {
                id: 5,
                name: "Lichi",
            }
        ],
        meetingRecived: [
            {
                sent: false,
                name: 'Lichi',
                locate: 'Monte Grande',
                date: 'March 18, Monday',
                hour: '7:30',
                time: 'PM'
            },
            {
                sent: false,
                name: 'Mauro',
                locate: 'Burzaco',
                date: 'December 5, Sunday',
                hour: '9:30',
                time: 'PM'
            },
            {
                sent: false,
                name: 'Nicolino',
                locate: 'Burzaco',
                date: 'December 5, Sunday',
                hour: '9:30',
                time: 'PM'
            },
            {
                sent: false,
                name: 'Thomas',
                locate: 'Burzaco',
                date: 'December 5, Sunday',
                hour: '9:30',
                time: 'PM'
            }
        ],
        meetingSend: [
            {
                sent: true, //// variable that have to change
                name: 'Lichi',
                locate: 'Monte Grande',
                date: 'March 18, Monday',
                hour: '8:30',
                time: 'PM',
                meetingStatus: 'Your meeting invitation was accepted', //// variable that have to change
                meetingResponse: true //// variable that have to change
            }
        ]
    }
]
