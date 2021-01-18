import React from 'react';

function VideosComposant({ video }) {
    return ( video ?
        <div>`${video.id} ${video.url}` </div>
    : null );
}
export default VideosComposant