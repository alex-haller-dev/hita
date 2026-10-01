type Translation = {
    projects: string
    support: string
    footerTagline: string
    footerSocialMedia: string
    footerOffice: string
    footerContact: string
    footerPhone: string
    footerEmail: string
    footerDonationAccount: string
    footerAccountHolder: string
    footerBank: string
    footerRightsReserved: string
    footerRegistration: string
    footerLegal: string
    footerImprint: string
    footerPrivacy: string
}

export const translationsEn: Translation = {
    projects: 'projects',
    support: 'support',
    footerTagline: 'Health Care Information Technologies for Africa e.V.',
    footerSocialMedia: 'Social media',
    footerOffice: 'Office',
    footerContact: 'Contact',
    footerPhone: 'Phone',
    footerEmail: 'Email',
    footerDonationAccount: 'Donation account',
    footerAccountHolder: 'Account holder',
    footerBank: 'Bank',
    footerRightsReserved: 'All rights reserved',
    footerRegistration:
        'The association is registered under number VR 380 930 in the register of associations at the Freiburg ' +
        'local court. According to the certificate of 4 January 2023, it is recognised as a non-profit organisation ' +
        'by the Tauberbischofsheim tax office, tax number 52001 / 96370.',
    footerLegal: 'Legal',
    footerImprint: 'Legal notice',
    footerPrivacy: 'Privacy policy',
}

export const translationsDe: Translation = {
    projects: 'Projekte',
    support: 'Unterstützen',
    footerTagline: 'Health Care Information Technologies for Africa e.V.',
    footerSocialMedia: 'Soziale Medien',
    footerOffice: 'Geschäftsstelle',
    footerContact: 'Kontakt',
    footerPhone: 'Telefon',
    footerEmail: 'E-Mail',
    footerDonationAccount: 'Spendenkonto',
    footerAccountHolder: 'Kontoinhaber',
    footerBank: 'Bank',
    footerRightsReserved: 'Alle Rechte vorbehalten',
    footerRegistration:
        'Der Verein ist unter der Nummer VR 380 930 beim Vereinsregister Freiburg eingetragen und ist laut ' +
        'Bescheinigung vom 04.01.2023 vom Finanzamt Tauberbischofsheim als gemeinnützig anerkannt und trägt die ' +
        'Steuernummer 52001 / 96370.',
    footerLegal: 'Rechtliches',
    footerImprint: 'Impressum',
    footerPrivacy: 'Datenschutz',
}

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
