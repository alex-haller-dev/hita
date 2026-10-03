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
    heroEyebrow: string
    heroTitle: string
    heroTitleHighlight: string
    heroText: string
    heroDonate: string
    heroProjects: string
    heroStatLabs: string
    heroStatComputers: string
    heroStatVolunteers: string
    heroImageAlt: string
    heroImageCaptionTitle: string
    heroImageCaptionText: string
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
    heroEyebrow: 'Non-profit association since 2009',
    heroTitle: 'Better healthcare and education in Africa',
    heroTitleHighlight: 'through information technology',
    heroText: 'HITA e.V. sets up computer labs in schools and nursing colleges, trains teachers and health workers, and supports hospitals in rural Ghana – on a voluntary basis and together with local partners.',
    heroDonate: 'Donate now',
    heroProjects: 'Our projects',
    heroStatLabs: 'training institutions with computer labs',
    heroStatComputers: 'computers installed',
    heroStatVolunteers: 'volunteer work',
    heroImageAlt: 'HITA team members and Ghanaian partners at the handover of laptops in the Volta Region',
    heroImageCaptionTitle: '10 new HITA PC labs',
    heroImageCaptionText: '300 laptops and smartboards for schools in the Volta Region, Ghana',
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
    heroEyebrow: 'Gemeinnütziger Verein seit 2009',
    heroTitle: 'Bessere Gesundheits\u00ADversorgung und Bildung in Afrika',
    heroTitleHighlight: 'durch Informations\u00ADtechnologie',
    heroText: 'HITA e.V. richtet Computer-Labore an Schulen und Pflegeschulen ein, schult Lehr- und Pflegekräfte und unterstützt Krankenhäuser im ländlichen Ghana – ehrenamtlich und gemeinsam mit Partnern vor Ort.',
    heroDonate: 'Jetzt spenden',
    heroProjects: 'Unsere Projekte',
    heroStatLabs: 'Ausbildungsstätten mit PC-Laboren',
    heroStatComputers: 'installierte Computer',
    heroStatVolunteers: 'ehrenamtliche Arbeit',
    heroImageAlt: 'HITA-Mitglieder und ghanaische Partner bei der Übergabe von Laptops in der Volta-Region',
    heroImageCaptionTitle: '10 neue HITA PC-Labs',
    heroImageCaptionText: '300 Laptops und Smartboards für Schulen in der Volta-Region, Ghana',
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
