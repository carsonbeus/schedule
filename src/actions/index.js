import { FETCH_COURSES, TOGGLE_ENROLLED } from './types';



export function toggleEnrolled(id) {
    return {
        type: TOGGLE_ENROLLED,
        payload: id
    }
}

export function fetchCourses() {
    return {
        type: FETCH_COURSES,
        payload: [
            {
                id: 0,
                title: "Up and Running with Redis",
                description: "In this course you'll learn how to work with the efficient Redis database to manage key / value relationships.",
                enrolled: false
            },
            {
                id: 1,
                title: "HTML/CSS Bootcamp",
                description: "Learn HTML5 and CSS3 from scratch, starting with the basics and finishing by building five projects from scratch.",
                enrolled: false
            },
            {
                id: 2,
                title: "UX for Developers",
                description: "This User Experience (UX) course examines how to develop a system for approaching application development and enhancing the experience for users.",
                enrolled: false
            },
            {
                id: 3,
                title: "Up and Running with Redis",
                description: "In this course you'll learn how to work with the efficient Redis database to manage key / value relationships.",
                enrolled: false
            },
            {
                id: 4,
                title: "HTML/CSS Bootcamp",
                description: "Learn HTML5 and CSS3 from scratch, starting with the basics and finishing by building five projects from scratch.",
                enrolled: false
            },
            {
                id: 5,
                title: "UX for Developers",
                description: "This User Experience (UX) course examines how to develop a system for approaching application development and enhancing the experience for users.",
                enrolled: false
            },
            {
                id: 6,
                title: "UX for Developers",
                description: "This User Experience (UX) course examines how to develop a system for approaching application development and enhancing the experience for users.",
                enrolled: false
            },
            {
                id: 7,
                title: "Up and Running with Redis",
                description: "In this course you'll learn how to work with the efficient Redis database to manage key / value relationships.",
                enrolled: false
            },
            {
                id: 8,
                title: "HTML/CSS Bootcamp",
                description: "Learn HTML5 and CSS3 from scratch, starting with the basics and finishing by building five projects from scratch.",
                enrolled: false
            },
            {
                id: 9,
                title: "UX for Developers",
                description: "This User Experience (UX) course examines how to develop a system for approaching application development and enhancing the experience for users.",
                enrolled: false
            },
            {
                id: 10,
                title: "Up and Running with Redis",
                description: "In this course you'll learn how to work with the efficient Redis database to manage key / value relationships.",
                enrolled: false
            },
            {
                id: 11,
                title: "HTML/CSS Bootcamp",
                description: "Learn HTML5 and CSS3 from scratch, starting with the basics and finishing by building five projects from scratch.",
                enrolled: false
            },
            {
                id: 12,
                title: 'This is an Example of a Large Description',
                description: 'Lorem ipsum dolor sit amet, cu dicant nostrud mediocritatem sit, graeci everti nusquam eu vix. Ut oporteat antiopam convenire sea, omittam reformidans eos an. An graeci commodo nec. Perpetua aliquando ius ad, id vis consul propriae. Ea fierent assentior vel, invidunt facilisi sit an, eu quo sumo omnis. Mei te semper principes, an mei invidunt repudiare, summo voluptatum cu eos. In vis dolor ignota, mea erat prompta intellegebat et. Vis ne duis altera dissentiet, id tale fierent mandamus duo, ut suas oportere pri. Cu graeci insolens explicari has. Ad pri doctus feugiat, dicant nostro facilis usu ad.',
                enrolled: false
            }
        ]
    }
}