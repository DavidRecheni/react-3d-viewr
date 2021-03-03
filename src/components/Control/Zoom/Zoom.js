import React, {useState} from 'react'

export default function Zoom({ setModelScale, modelScale }) {

    const [zoom,setZoom] = useState(0)

    const STEP = -.03

    const zoomChange = (value) =>{
        console.log(modelScale)
        setZoom(value)
        setModelScale(modelScale.map(axis => value*STEP))
    }


    return (
        <div>
            <span> Zoom </span>
            <input type="range" min="-2" max="2" value={zoom} onChange={e => zoomChange(e.target.value)} / >            
        </div>
    )
}
