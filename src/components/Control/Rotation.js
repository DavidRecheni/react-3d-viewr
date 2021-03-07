import React from 'react'
import { Translations } from '../../utils/controls'
import { Container, Input } from '../UI'

export default function Rotation({ rotation, setRotation }) {

    const STEP = 0.01,
        MIN = -2,
        MAX = 2

    return (
        <div>
            <span> Rotation </span>
            <Container>
                <Container alignCenter>
                    <span>x</span>
                    <Input type="range" min={MIN} max={MAX} step={STEP} value={rotation[0]} onChange={(e) => Translations('x', rotation, setRotation, e.target.value)} />
                </Container>
                <Container alignCenter>
                    <span >y</span>
                    <Input type="range" min={MIN} max={MAX} step={STEP} value={rotation[1]} onChange={(e) => Translations('y', rotation, setRotation, e.target.value)} />
                </Container>
                <Container alignCenter>
                    <span>z</span>
                    <Input type="range" min={MIN} max={MAX} step={STEP} value={rotation[2]} onChange={(e) => Translations('z', rotation, setRotation, e.target.value)} />
                </Container>
            </Container>
        </div>
    )
}
