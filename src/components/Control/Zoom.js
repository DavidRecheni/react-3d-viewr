import React, { useState } from 'react'
import { FaSearchMinus, FaSearchPlus } from 'react-icons/fa';
import { Input } from '../UI'

export default function Zoom({ setModelScale, modelScale }) {

    const [zoom, setZoom] = useState(modelScale)

    const STEP = 0.01,
        MIN = 0.1,
        MAX = 4

    const zoomChange = (value) => {
        setZoom(value)
        setModelScale(modelScale.map(axis => value * STEP))
    }

    return (
        <>
            <FaSearchMinus />
            <Input type="range" min={MIN} max={MAX} step={STEP} value={zoom} onChange={e => zoomChange(e.target.value)} />
            <FaSearchPlus />
        </>
    )
}
