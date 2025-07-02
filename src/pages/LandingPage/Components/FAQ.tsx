import { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
const dataOfFAQs = [
    {
        id: 1,
        question: 'What happens when I borrow a book?',
        answer: 'When you borrow a book, you specify the quantity and due date. The system checks if the requested quantity is available. If it is, the borrow action is processed, reducing the books available count and marking it unavailable if stock hits zero.',
    },
    {
        id: 2,
        question: 'Can I edit a book’s details after adding it?',
        answer: 'Yes! From the book list, click the Edit button to update any information (title, author, ISBN, copies, etc.). All changes are saved via API and immediately reflected in the UI. You cannot set copies to more than the original available copies.',
    },
    {
        id: 3,
        question: 'How is borrowing activity summarized?',
        answer: "The Borrow Summary page aggregates total borrow quantities for each book based on API data. It shows Book Title, ISBN, and the total number of times each book has been borrowed—providing a clear overview of lending trends."
    },
    {
        id: 4,
        question: 'What does deleting a book do?',
        answer: 'Clicking Delete prompts a confirmation dialog. Upon confirmation, the book is removed from the database via API and immediately disappears from the UI.',
    },
    {
        id: 5,
        question: 'Can I see details of a specific book?',
        answer: "Yes, clicking a book in the list opens its detailed view, showing full information including description, genre, ISBN, total copies, and currently available copies.",
    },
    {
        id: 6,
        question: 'Is there a limit to how many copies I can borrow at once?',
        answer: "Yes—during borrowing, the system enforces that the requested quantity does not exceed the book's current availability. You'll receive a validation error if you attempt to borrow more than what's available.",
    },
    {
        id: 7,
        question: 'What if I accidentally enter the wrong borrow quantity or due date?',
        answer: "Currently, editing borrow records isn’t supported in this minimal version. But you can delete the book or adjust the available copies manually via the edit-book interface if needed. Borrow summary remains for reference.",
    },
];


const FAQs = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="xl:px-20 lg:px-16 md:px-12 px-6 xl:mt-20 lg:mt-16 md:mt-14 mt-10 xl:mb-24 lg:mb-20 md:mb-16 mb-14">
            <div>
                <h1 className="xl:text-4xl/normal md:text-3xl/normal text-2xl/normal font-bold text-center text-black">Frequently Asked Questions</h1>
                <p className="text-center lg:w-[60%] md:w-[75%] w-[90%] mx-auto xl:text-xl lg:text-lg md:text-lg text-sm lg:mt-2 md:mt-[6px] mt-2 text-black">Explore our frequently asked questions for comprehensive information!</p>
            </div>
            <div className="lg:mt-12 md:mt-10 mt-8 flex flex-col gap-3 ">
                {
                    dataOfFAQs?.map((faq) => (
                        <div key={faq?.id} className="border-2 rounded-xl border-amber-700 shadow-lg">
                            <button
                                className="flex items-center justify-between w-full xl:p-5 lg:p-4 md:p-5 px-3 py-4 text-left focus:outline-none"
                                onClick={toggleAccordion}>
                                <span className="w-[93%] xl:text-xl lg:text-lg md:text-base text-[15px]   font-semibold"><span className="font-bold text-black">Question 0{faq?.id}: </span>{faq?.question}</span>
                                <span className='w-[5%] flex justify-end'>
                                    {
                                        isOpen ? <FaAngleUp /> : <FaAngleDown />
                                    }
                                </span>
                            </button>
                            {isOpen && (
                                <div className="xl:p-5 lg:p-4 md:p-5 px-3 py-4 bg-amber-100 rounded-b-xl">
                                    <p className="text-black xl:text-xl lg:text-lg md:text-base text-[15px] font-medium">
                                        <span className="font-bold border-b-2 border-black">Answer:</span> {faq?.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default FAQs;