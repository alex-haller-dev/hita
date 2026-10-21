export function resolvePath(path: string, locale: string | undefined) {
    switch (locale) {
        case 'en':
            return `/en${path}`
        case 'de':
            return path
        default:
            return path
    }
}