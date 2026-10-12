export type FAQItem = { question: string; answer: string }

export type FAQ = { en: FAQItem[], de: FAQItem[] }

export const FAQ: FAQ = {
    en: [
        {
            question: 'What does HITA e.V. do?',
            answer: 'HITA e.V. supports healthcare systems in rural Africa, with a focus on Ghana. We establish computer labs at nursing and midwifery training institutions, integrate eLearning into official curricula, train teachers and healthcare workers, and support hospitals with modern information technology – entirely on a volunteer basis.',
        },
        {
            question: 'Where is HITA active?',
            answer: 'HITA focuses primarily on rural Ghana in West Africa. We work with hospitals, nursing schools, secondary schools, and NGOs across various regions, including the Volta Region, the Western Region, and the Greater Accra Region.',
        },
        {
            question: 'Are donations tax-deductible?',
            answer: 'Yes. HITA e.V. is recognised as a non-profit organisation by the Tauberbischofsheim tax office (tax number 52001/96370). For donations up to €300, a bank statement is sufficient as proof for your tax return. For larger amounts, we issue a formal donation receipt.',
        },
        {
            question: 'How can I donate?',
            answer: 'You can transfer a donation directly to our bank account at Deutsche Bank: IBAN DE86 6907 0024 0050 6006 00, BIC DEUTDEDB690. Please include your address so we can send you a donation receipt if needed. You can also find more details on our support page.',
        },
        {
            question: 'How can I become a member?',
            answer: 'We offer three membership tiers: full membership (€60/year), reduced membership for students, retirees and the unemployed (€30/year), and corporate/organisational membership (€250/year). Contact us at geschaeftsstelle@hita-ev.org to request an application form.',
        },
        {
            question: 'Can I volunteer for HITA?',
            answer: 'Yes! We are always looking for motivated volunteers with expertise in education, development cooperation, healthcare, and information technology. Volunteer work can be done both on-site in Ghana and remotely from home, as well as in our office and for public relations. Contact info@hita-ev.org to learn more.',
        },
    ],
    de: [
        {
            question: 'Was macht HITA e.V.?',
            answer: 'HITA e.V. unterstützt Gesundheitssysteme in ländlichen Regionen Afrikas, mit Schwerpunkt in Ghana. Wir richten Computer-Labore an Pflege- und Hebammenschulen ein, integrieren eLearning in offizielle Studienpläne, schulen Lehr- und Pflegekräfte und unterstützen Krankenhäuser mit moderner Informationstechnologie – vollständig ehrenamtlich.',
        },
        {
            question: 'Wo ist HITA aktiv?',
            answer: 'HITA konzentriert sich vor allem auf das ländliche Ghana in Westafrika. Wir arbeiten mit Krankenhäusern, Pflegeschulen, weiterführenden Schulen und NGOs in verschiedenen Regionen zusammen, unter anderem in der Volta-Region, der Western Region und der Greater Accra Region.',
        },
        {
            question: 'Sind Spenden steuerlich absetzbar?',
            answer: 'Ja. HITA e.V. ist vom Finanzamt Tauberbischofsheim als gemeinnützig anerkannt (Steuernummer 52001/96370). Bei Spenden bis zu 300 € genügt ein Kontoauszug als Nachweis für die Steuererklärung. Bei höheren Beträgen stellen wir eine förmliche Zuwendungsbestätigung aus.',
        },
        {
            question: 'Wie kann ich spenden?',
            answer: 'Sie können eine Spende direkt auf unser Konto bei der Deutschen Bank überweisen: IBAN DE86 6907 0024 0050 6006 00, BIC DEUTDEDB690. Bitte geben Sie Ihre Adresse an, damit wir Ihnen bei Bedarf eine Spendenquittung zusenden können. Weitere Informationen finden Sie auf unserer Unterstützungsseite.',
        },
        {
            question: 'Wie kann ich Mitglied werden?',
            answer: 'Wir bieten drei Mitgliedschaftsstufen an: Vollmitgliedschaft (60 €/Jahr), ermäßigte Mitgliedschaft für Studierende, Rentner und Arbeitslose (30 €/Jahr) sowie Unternehmens-/Fördermitgliedschaft (250 €/Jahr). Schreiben Sie uns an geschaeftsstelle@hita-ev.org, um ein Aufnahmeformular zu erhalten.',
        },
        {
            question: 'Kann ich mich bei HITA ehrenamtlich engagieren?',
            answer: 'Ja! Wir suchen immer motivierte Freiwillige mit Fachkenntnissen in den Bereichen Bildung, Entwicklungszusammenarbeit, Gesundheitswesen und Informationstechnologie. Die Mitarbeit ist sowohl vor Ort in Ghana als auch aus der Ferne von zu Hause sowie in der Geschäftsstelle und der Öffentlichkeitsarbeit möglich. Schreiben Sie uns an info@hita-ev.org, um mehr zu erfahren.',
        },
    ],
}
