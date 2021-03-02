import React from 'react'
import { Translations } from '../../../utils/controls'

export default function Rotation({ rotation, setRotation }) {

    const rotateLeft = axis => {
        Translations.left(axis, rotation, setRotation)
    }

    const rotateRight = axis => {
        Translations.right(axis, rotation, setRotation)
    }


    return (
        <div>
            <span> Rotation </span>
            <div style={{ display: 'flex' }}>
                <div>
                    <span>x</span>
                    <button onClick={() => { rotateLeft('x') }}>-</button>
                    <button onClick={() => { rotateRight('x') }}>+</button>
                </div>
                <div>
                    <span >y</span>
                    <button onClick={() => { rotateLeft('y') }}>-</button>
                    <button onClick={() => { rotateRight('y') }}>+</button>
                </div>
                <div>
                    <span>z</span>
                    <button onClick={() => { rotateLeft('z') }}>-</button>
                    <button onClick={() => { rotateRight('z') }}>+</button>
                </div>
            </div>
        </div>
    )
}
