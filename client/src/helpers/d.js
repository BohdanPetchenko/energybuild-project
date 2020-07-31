export default function d([skip, path], obj) {
    path = path.split('.')
    path[0] || path.shift()

    for (let i of path) {
        if (obj[i]) {
            obj = obj[i]
        }
        else {
            return
        }
    }
    return obj

}