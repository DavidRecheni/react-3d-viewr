import React from 'react'

import { Translations } from '../../../utils/controls'

export default function Position({ position, setPosition }) {

    const STEP = 0.1

    const translateRight = axis => {
        Translations.right(axis,position,setPosition)
    }

    const translateLeft =  axis => {
        Translations.left(axis,position,setPosition)
    }

    return (
        <div>
            <span> Position </span>
            <div style={{ display: 'flex' }}>
                <div>
                    <span>x</span>
                    <button onClick={() => { translateLeft('x') }}>-</button>
                    <button onClick={() => { translateRight('x') }}>+</button>
                </div>
                <div>
                    <span >y</span>
                    <button onClick={() => { translateLeft('y') }}>-</button>
                    <button onClick={() => { translateRight('y') }}>+</button>
                </div>
                <div>
                    <span>z</span>
                    <button onClick={() => { translateLeft('z') }}>-</button>
                    <button onClick={() => { translateRight('z') }}>+</button>
                </div>
            </div>
        </div>
    )
}
