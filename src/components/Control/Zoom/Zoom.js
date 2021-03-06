import React, {useState} from 'react'

export default function Zoom({ setModelScale, modelScale }) {

    const [zoom,setZoom] = useState(modelScale)

    const STEP = 0.01,
    MIN = 0.1,
    MAX = 4

    const zoomChange = (value) =>{
        console.log(modelScale)
        setZoom(value)
        setModelScale(modelScale.map(axis => value*STEP))
    }

    return (
        <div>
            <span> Zoom </span>
            <input type="range" min={MIN} max={MAX}  step={STEP} value={zoom} onChange={e => zoomChange(e.target.value)} / >            
        </div>
    )
}
