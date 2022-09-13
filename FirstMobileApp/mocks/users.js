
const datata = true

const setMeetingStatus = (datata) => {
    if (datata === true) {
        return 'HOLA'
    } else {
        return 'CHAU'
    }
}

setMeetingStatus(datata)
export default [
    {
        user: "Lichi",
        password: "cocacola",
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
                meetingStatus: 'Hola', //// variable that have to change
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
