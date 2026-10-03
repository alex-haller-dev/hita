export type FAQItem = { question: string; answer: string }

export type FAQ = { en: FAQItem[], de: FAQItem[] }

// TODO fill with actual FAQ questions
export const FAQ: FAQ = {
    en: [
            { question: 'test question', answer: 'test answer' },
            { question: 'test question 2', answer: 'test answer 2' }
        ],
    de: [
            { question: 'test frage', answer: 'test antwort' },
            { question: 'test frage 2', answer: 'test antwort 2' }
        ],
}