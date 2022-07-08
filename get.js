function get(src, path) {
    path = path.split('.')
    for (let i = 0; i < path.length; i++) {
        src = src[path[i]]
        if (src === undefined) {
            return undefined
        }
    }
    return src;
}

