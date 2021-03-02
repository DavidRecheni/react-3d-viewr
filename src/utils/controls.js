
const STEP = 0.1

export const Translations = {
    left: (axis, arrGet, arrSet) => {
        let [x, y, z] = arrGet
        if (axis === 'x') {
            x += STEP
        } else if (axis === 'y') {
            y += STEP
        } else {
            z += STEP
        }
        arrSet([x, y, z])
    },
    right: (axis, arrGet, arrSet) => {
        let [x, y, z] = arrGet
        if (axis === 'x') {
            x -= STEP
        } else if (axis === 'y') {
            y -= STEP
        } else {
            z -= STEP
        }
        arrSet([x, y, z])
    }

}


