import { useState } from "react";

export default function FAQ() {
  // FAQ Data
  const faqData = [
    {
      question: "How can I tell if using AI is the right solution for my problem?",
      answer: "The best way to determine if AI can solve your problem is to schedule a consultation with our team. We'll analyze your specific requirements and help you understand if AI automation would create meaningful productivity gains for your workflow."
    },
    {
      question: "How long does an AI solution take to implement?",
      answer: "Implementation timelines vary based on the complexity of your project. Simple automations can be deployed within a few weeks, while more complex enterprise solutions might take several months. During our initial consultation, we'll provide you with a detailed timeline for your specific project."
    },
    {
      question: "Will we need to make changes in our team?",
      answer: "AI is designed to augment your team's capabilities, not replace them. Our solutions help automate repetitive tasks, allowing your team members to focus on more creative and strategic work. We provide comprehensive training to ensure your team can work effectively alongside the AI tools."
    }
  ];

  // State to track which FAQ item is open
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle function for accordion
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-16">
      {/* Header Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <div className="text-sm text-blue-600 font-semibold uppercase tracking-wide mb-2">FAQ</div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
            You've got questions, we've got <span className="text-blue-600">answers</span>
          </h1>
        </div>

        {/* FAQ Accordion */}
        <div className="mb-20">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-gray-200 cursor-pointer"
            >
              <div 
                className="flex justify-between items-center py-6 w-full text-left" 
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg md:text-xl font-medium text-gray-900">{faq.question}</h3>
                <span className="ml-6 flex-shrink-0">
                  {openIndex === index ? (
                    <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </div>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-blue-500 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-10">
            <div className="uppercase tracking-wide font-semibold text-blue-200 mb-2">TESTIMONIALS</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Ready to <span className="text-blue-200">Get Started?</span></h2>
          </div>
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <p className="text-lg text-blue-100">
              Experience the future of business operations with AI automation—increased 
              speed, accuracy, and adaptability, driving overall productivity gains.
            </p>
          </div>

          <div className="flex justify-center">
            <button 
              className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
            >
              Book Your Free Audit Call
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center mr-2">
                  <span className="font-bold">R</span>
                </div>
                <span>Rio</span>
              </div>
              <p className="text-sm text-gray-400 mt-1">
                Build a powerful agency site with Framer
              </p>
            </div>

            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 5.92375C21.2563 6.25 20.4637 6.46625 19.6375 6.57125C20.4875 6.06375 21.1363 5.26625 21.4412 4.305C20.6488 4.7775 19.7738 5.11125 18.8412 5.2925C18.0887 4.49625 17.0162 4 15.8462 4C13.5912 4 11.7737 5.8175 11.7737 8.04C11.7737 8.36375 11.8013 8.67625 11.8687 8.97125C8.39625 8.79625 5.33875 7.18125 3.24875 4.7475C2.8925 5.36125 2.68875 6.06375 2.68875 6.82C2.68875 8.24 3.42125 9.49875 4.54125 10.2275C3.87625 10.215 3.22625 10.0238 2.66 9.7225C2.66 9.735 2.66 9.75125 2.66 9.7675C2.66 11.7175 4.05375 13.3537 5.8775 13.7325C5.5425 13.8275 5.18125 13.8725 4.81 13.8725C4.54875 13.8725 4.28625 13.8562 4.03625 13.8C4.56625 15.4037 6.06625 16.5487 7.86 16.5837C6.47875 17.6325 4.73625 18.2487 2.85625 18.2487C2.5225 18.2487 2.19625 18.2325 1.87 18.185C3.68375 19.32 5.825 20 8.1025 20C15.835 20 19.96 13.9462 19.96 8.7475C19.96 8.56875 19.9538 8.39625 19.945 8.2275C20.7588 7.6525 21.4425 6.92875 22 6.1175Z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM8.81 17.025H6.125V9.725H8.81V17.025ZM7.475 8.725C6.825 8.725 6.3 8.2 6.3 7.55C6.3 6.9 6.825 6.375 7.475 6.375C8.125 6.375 8.65 6.9 8.65 7.55C8.65 8.2 8.125 8.725 7.475 8.725ZM18.025 17.025H15.35V13.45C15.35 12.4 15.025 11.975 14.325 11.975C13.675 11.975 13.325 12.4 13.325 13.45V17.025H10.65V9.725H13.325V10.85C13.325 10.85 13.95 9.5 15.55 9.5C17.15 9.5 18.025 10.475 18.025 12.575V17.025Z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5.5C13.24 5.5 14.25 6.51 14.25 7.75C14.25 8.99 13.24 10 12 10C10.76 10 9.75 8.99 9.75 7.75C9.75 6.51 10.76 5.5 12 5.5ZM17 17.5H7V16.25C7 14.75 10 14 12 14C14 14 17 14.75 17 16.25V17.5Z" />
                </svg>
              </a>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="text-sm text-gray-400 hover:text-white">About</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">Contact</a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">Blog</a>
            </div>
          </div>
          <div className="text-center mt-8 text-sm text-gray-400">
            © Metro Limited 2023. All rights reserved.
            <span className="ml-4">Designed by Wise</span>
          </div>
        </div>
      </div>
    </div>
  );
} 