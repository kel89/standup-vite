export const people = [
    { done: false, name: "Daniel", role: "SRE Dude", imageUrl: null },
    { done: false, name: "Alyssa", role: "", imageUrl: null },
    { done: false, name: "Jace", role: "", imageUrl: null },
    { done: false, name: "Ben", role: "", imageUrl: null },
    { done: false, name: "Gui", role: "", imageUrl: null },
    { done: false, name: "Jesse", role: "", imageUrl: null },
    {
        done: false,
        name: "Kenny",
        role: "",
        imageUrl: "assets/a320_transparent.png",
    },
    { done: false, name: "Mike", role: "", imageUrl: null },
    { done: false, name: "Kyle", role: "", imageUrl: null },
    { done: false, name: "Dave", role: "", imageUrl: null },
    { done: false, name: "Olive", role: "", imageUrl: null },
];

export const status_sections = [
    { done: false, name: "Code Reviews" },
    { done: false, name: "Prod/UI Reviews" },
    { done: false, name: "Blocked" },
];

export const TOTAL_SECONDS = Math.round(
    (14 * 60) / (people.length + status_sections.length)
);
