import React from 'react'

import { Translations } from '../../../utils/controls'

export default function Position({ position, setPosition }) {

    const STEP = 0.01,
        MIN = -2,
        MAX = 2

    return (
        <div>
            <span> Position </span>
            <div style={{ display: 'flex' }}>
                <div>
                    <span>x</span>
                    <input type="range" min={MIN} max={MAX} step={STEP} value={position[0]} onChange={(e) => Translations('x', position, setPosition, e.target.value)} />
                </div>
                <div>
                    <span >y</span>
                    <input type="range" min={MIN} max={MAX} step={STEP} value={position[1]} onChange={(e) => Translations('y', position, setPosition, e.target.value)} />
                </div>
                <div>
                    <span>z</span>
                    <input type="range" min={MIN} max={MAX} step={STEP} value={position[2]} onChange={(e) => Translations('z', position, setPosition, e.target.value)} />
                </div>
            </div>
        </div>
    )
}
