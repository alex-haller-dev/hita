// The ten disclosures of the "Initiative Transparente Zivilgesellschaft", see https://hita-ev.org/initiative-transparente-zivilgesellschaft/
export type TransparencyLink = { label: string; href: string; external?: boolean }

export type TransparencyItem = { title: string; text: string; link?: TransparencyLink }

export type Transparency = { en: TransparencyItem[], de: TransparencyItem[] }

export const TRANSPARENCY: Transparency = {
    en: [
        {
            title: 'Name, registered office, address and year of foundation',
            text: 'Health Care Information Technologies for Africa e.V. (HITA e.V.) was founded on 25 August 2011 in Konstanz, Germany. The association has its registered office in Bad Mergentheim, Germany.',
        },
        {
            title: 'Statutes and objectives',
            text: 'HITA e.V. aims to support the training of non-medical staff in rural regions of sub-Saharan Africa and thus sustainably improve healthcare, especially in structurally weak areas. To do so, HITA e.V. uses modern information and communication technologies.',
            link: { label: 'Statutes (PDF, German)', href: '/documents/hita-satzung.pdf', external: true },
        },
        {
            title: 'Tax-exempt status',
            text: 'The association is registered under number VR 380 930 in the register of associations in Freiburg. According to the certificate of 4 January 2023 from the Tauberbischofsheim tax office, it is recognised as a non-profit organisation with the tax number 52001 / 96370. The association is exempt from corporation tax under Section 5 (1) No. 9 KStG and from trade tax under Section 3 No. 6 GewStG.',
        },
        {
            title: 'Name and role of key decision-makers',
            text: 'Executive board: Thomas Erkert (chairman), Hildegard Mackert (deputy), Daniel Gerlach (deputy).',
        },
        {
            title: 'Activity report',
            text: 'Our current activity reports are published in our annual reports.',
            link: { label: 'Annual reports', href: '/en/annual-reports' },
        },
        {
            title: 'Staff structure',
            text: 'HITA e.V. currently has no salaried employees. The board and members all work on a voluntary basis.',
        },
        {
            title: 'Source of funds',
            text: 'Our work is financed mainly by donations and membership fees, as documented in our annual reports. We are very grateful to all our supporters!',
            link: { label: 'Annual reports', href: '/en/annual-reports' },
        },
        {
            title: 'Use of funds',
            text: 'The use of funds is documented in our annual reports. The cash report is audited independently every year and then presented to the general assembly.',
            link: { label: 'Annual reports', href: '/en/annual-reports' },
        },
        {
            title: 'Affiliations with third parties',
            text: 'HITA e.V. is an independent non-profit association. To achieve its goals it cooperates with international institutions, including the Ministry of Health, Accra, Ghana (MoU 2010), the School of Nursing and Midwifery (SONAM), University of Health and Allied Sciences, Ho, Ghana (MoU 2017) and the Chances Foundation, Ho, Ghana (MoU 2018).',
        },
        {
            title: 'Legal entities contributing more than 10% of the annual budget',
            text: 'Information on the source of our funds can be found in our annual reports.',
            link: { label: 'Annual reports', href: '/en/annual-reports' },
        },
    ],
    de: [
        {
            title: 'Name, Sitz, Anschrift und Gründungsjahr',
            text: 'Der Verein Health Care Information Technologies for Africa e.V. (HITA e.V.) wurde am 25. August 2011 in Konstanz, Deutschland, gegründet. Der Sitz des Vereins ist in Bad Mergentheim, Deutschland.',
        },
        {
            title: 'Satzung und Ziele',
            text: 'HITA e.V. hat das Ziel, die Ausbildung des nichtärztlichen Personals in ländlichen Regionen Sub-Sahara-Afrikas zu unterstützen und somit die Gesundheitsversorgung besonders in strukturschwachen Gegenden nachhaltig zu verbessern. HITA e.V. setzt dabei moderne Informations- und Kommunikationstechnologien ein.',
            link: { label: 'Vereinssatzung (PDF)', href: '/documents/hita-satzung.pdf', external: true },
        },
        {
            title: 'Angaben zur Steuerbegünstigung',
            text: 'Der Verein ist unter der Nummer VR 380 930 beim Vereinsregister Freiburg eingetragen. Er ist laut Bescheinigung vom 04.01.2023 vom Finanzamt Tauberbischofsheim als gemeinnützig anerkannt und trägt die Steuernummer 52001 / 96370. Der Verein ist nach § 5 Abs. 1 Nr. 9 KStG von der Körperschaftsteuer und nach § 3 Nr. 6 GewStG von der Gewerbesteuer befreit.',
        },
        {
            title: 'Name und Funktion wesentlicher Entscheidungsträger',
            text: 'Vorstand: Thomas Erkert (Vorsitzender), Hildegard Mackert (Stellvertreterin), Daniel Gerlach (Stellvertreter).',
        },
        {
            title: 'Tätigkeitsbericht',
            text: 'Aktuelle Tätigkeitsberichte von HITA e.V. finden Sie in unseren Jahresberichten.',
            link: { label: 'Jahresberichte', href: '/annual-reports' },
        },
        {
            title: 'Personalstruktur',
            text: 'HITA e.V. beschäftigt derzeit keine angestellten Mitarbeiter. Vorstand und Mitglieder engagieren sich ehrenamtlich.',
        },
        {
            title: 'Angaben zur Mittelherkunft',
            text: 'Unsere Arbeit finanziert sich zum größten Teil aus Spenden und Mitgliedsbeiträgen, wie in unseren Jahresberichten dokumentiert. Wir sind allen unseren Unterstützern sehr dankbar!',
            link: { label: 'Jahresberichte', href: '/annual-reports' },
        },
        {
            title: 'Angaben zur Mittelverwendung',
            text: 'Die Angaben zur Mittelverwendung finden Sie in unseren Jahresberichten. Der Kassenbericht wird jedes Jahr unabhängig geprüft und anschließend der ordentlichen Mitgliederversammlung vorgelegt.',
            link: { label: 'Jahresberichte', href: '/annual-reports' },
        },
        {
            title: 'Gesellschaftsrechtliche Verbundenheit mit Dritten',
            text: 'HITA e.V. ist ein unabhängiger gemeinnütziger Verein. Um seine Ziele zu erreichen, kooperiert der Verein mit internationalen Institutionen, darunter das Ministry of Health, Accra, Ghana (MoU von 2010), die School of Nursing and Midwifery (SONAM), University of Health and Allied Sciences, Ho, Ghana (MoU von 2017) und die Chances Foundation, Ho, Ghana (MoU von 2018).',
        },
        {
            title: 'Juristische Personen, deren jährliche Zahlungen mehr als 10 % des Gesamtbudgets ausmachen',
            text: 'Angaben zur Mittelherkunft von HITA e.V. finden Sie in unseren Jahresberichten.',
            link: { label: 'Jahresberichte', href: '/annual-reports' },
        },
    ],
}
