import React, { useState } from 'react'

export const FaqItem = ({ faq }) => {
    const [showAccordion, setShowAccordion] = useState(false)

    return (
        <>
            <h2 id="accordion-color-heading-1">
                <button onClick={() => setShowAccordion(!showAccordion)} type="button" className="flex items-center justify-between w-full p-5 my-3 font-medium rtl:text-right text-gray-500 border border-gray-200 rounded-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-color-body-1" aria-expanded="true" aria-controls="accordion-color-body-1">
                    <span>{faq.question}</span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>
            <div id="accordion-color-body-1" className={showAccordion ? '' : 'hidden'} aria-labelledby="accordion-color-heading-1">
                <div className="p-5 border border-t-0 mb-7 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                    <p className="mb-2 text-gray-500 dark:text-gray-400">{faq.answer}</p>
                </div>
            </div>
        </>
    )
}
