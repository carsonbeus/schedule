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
            }
        ]
    }
}