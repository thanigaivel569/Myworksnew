/*
* The users reducer will always return an array of users no matter what
* You need to return something, so if there are no users then just return an empty array
* */
const data = [
    {
        id: 1,
        first: "Stone",
        last: "gold",
        age: 24,
        description: " Stone gold is a Wrestler.",
        thumbnail: "http://i.imgur.com/7yUvePI.jpg"
    },
    {
        id: 2,
        first: "The",
        last: "Undertaker",
        age: 22,
        description: "23 times wrestle mania winner.",
        thumbnail: "http://i.imgur.com/52xRlm8.png"
    },
    {
        id: 3,
        first: "Gold",
        last: "Berg",
        age: 22,
        description: "gold berg is specialist in sphere.",
        thumbnail: "http://i.imgur.com/4EMtxHB.png"
    }
];

export default function (state = data, action) {
    switch (action.type) {
        case 'modify':
            return state.map((n) => {
                if (n.id == action.payload.id) {
                    return action.payload;
                }
                return n;
            });


        case 'DELETE':
            {
                return state.filter(user => user.id != action.payload.id);

            }
        default:
            return state;
    }
}
