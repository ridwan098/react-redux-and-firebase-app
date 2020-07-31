import React from 'react'

function ProjectDetails(props) {
    const id = props.match.params.id
    return (
        <div className='container section project-details'>
            <div className='card-content'>
                <span className='card-title'>Project Title - {id}</span>
                <p>sdfnaklfndsfkksjFLSDKFJ</p>
            </div>
            <div className='card-action gret lighten-4 grey-text'>
                <div>Posted by Ridwan</div>
                <div>2nd September, 2am</div>
            </div>
        </div>
    )
}

export default ProjectDetails
