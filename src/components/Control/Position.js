import React from 'react'

import { Container, Input } from '../UI'

import { Translations } from '../../utils/controls'

export default function Position({ position, setPosition }) {

    const STEP = 0.01,
        MIN = -2,
        MAX = 2

    return (
        <div>
            <span> Position </span>
            <Container>
                <Container alignCenter>
                    <span>x</span>
                    <Input type="range" min={MIN} max={MAX} step={STEP} value={position[0]} onChange={(e) => Translations('x', position, setPosition, e.target.value)} />
                </Container>
                <Container alignCenter>
                    <span >y</span>
                    <Input type="range" min={MIN} max={MAX} step={STEP} value={position[1]} onChange={(e) => Translations('y', position, setPosition, e.target.value)} />
                </Container>
                <Container alignCenter>
                    <span>z</span>
                    <Input type="range" min={MIN} max={MAX} step={STEP} value={position[2]} onChange={(e) => Translations('z', position, setPosition, e.target.value)} />
                </Container>
            </Container>
        </div>
    )
}
