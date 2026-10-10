// TODO: deprecate and replace with getRelativeLocaleUrl, you can delete this file when you are done
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