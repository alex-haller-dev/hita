type Translation = {
    projects: string
    support: string
}

export const translationsEn: Translation = { projects: 'projects', support: 'support' }
export const translationsDe: Translation = { projects: 'Projekte', support: 'Unterstützen' }

export function translate(key: keyof Translation, locale: string | undefined) {
    switch (locale) {
        case 'en':
            return translationsEn[key]
        case 'de':
            return translationsDe[key]
        default:
            return translationsDe[key]
    }
}