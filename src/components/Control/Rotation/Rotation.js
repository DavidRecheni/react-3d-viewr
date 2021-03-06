import React from 'react'
import { Translations } from '../../../utils/controls'

export default function Rotation({ rotation, setRotation }) {

    const STEP = 0.01,
        MIN = -2,
        MAX = 2


    return (
        <div>
            <span> Rotation </span>
            <div style={{ display: 'flex' }}>
                <div>
                    <span>x</span>
                    <input style={{ cursor: 'pointer' }} type="range" min={MIN} max={MAX} step={STEP} value={rotation[0]} onChange={(e) => Translations('x', rotation, setRotation, e.target.value)} />

                </div>
                <div>
                    <span >y</span>
                    <input style={{ cursor: 'pointer' }} type="range" min={MIN} max={MAX} step={STEP} value={rotation[1]} onChange={(e) => Translations('y', rotation, setRotation, e.target.value)} />
                </div>
                <div>
                    <span>z</span>
                    <input style={{ cursor: 'pointer' }} type="range" min={MIN} max={MAX} step={STEP} value={rotation[2]} onChange={(e) => Translations('z', rotation, setRotation, e.target.value)} />
                </div>
            </div>
        </div>
    )
}
