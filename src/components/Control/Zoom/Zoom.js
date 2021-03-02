import React from 'react'

export default function Zoom({ setModelScale, modelScale }) {

    const zoomIn = () => {
        setModelScale(modelScale.map(e => e + .01))
    }

    const zoomOut = () => {
        setModelScale(modelScale.map(e => e - .01))
    }

    return (
        <div>
            <span> Zoom </span>
            <button onClick={_ => zoomOut()}> - </button>
            <button onClick={_ => zoomIn()}> + </button>
        </div>
    )
}
