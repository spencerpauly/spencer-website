import React from 'react'

const projectImages = [
    {
        id: 0,
        image: "../assets/images/spencerpauly-1.png",
    },
    {
        id: 1,
        image: "assets/images/spotify-9.png",
    },
    {
        id: 2,
        image: "assets/images/sotw-1.png",
    },
    {
        id: 3,
        image: "assets/images/nn-1.png",
    },
    {
        id: 4,
        image: "",
    },
];

function projectImageLoader() {
    return (
        projectImages
    );
}

// async function projectImageLoaderFromDatabase() {
//     const request = await fetch('https://my/images/on/a/cdn');
//     const response = await request.json();
//     return response.images
// }

export default projectImageLoader;