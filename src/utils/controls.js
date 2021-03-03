
export const Translations = (axis, arrGet, arrSet, value) => {
    let [x, y, z] = arrGet
    if (axis === 'x') {
        x = Number(value)
    } else if (axis === 'y') {
        y = Number(value)
    } else {
        z = Number(value)
    }
    arrSet([x, y, z])
}



