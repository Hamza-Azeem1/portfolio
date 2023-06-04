import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HiOutlineChatAlt2 } from 'react-icons/hi';
import { FiSend } from 'react-icons/fi';
import contacts from './data/contactDetails';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_ksk5es2', 'template_7vfsh8k', form.current, 'pyh0a-vwzAtbDy5NB')
            .then(
                (result) => {
                    console.log(result.text);
                    toast.success('Email sent successfully!', {
                        position: toast.POSITION.TOP_CENTER,
                        onClose: () => {
                            setTimeout(() => {
                                window.location.reload();
                            }, 3000);
                        },
                    });
                },
                (error) => {
                    console.log(error.text);
                    toast.error('Failed to send email. Please try again.', {
                        position: toast.POSITION.TOP_CENTER,
                        onClose: () => {
                            setTimeout(() => {
                                window.location.reload();
                            }, 3000);
                        },
                    });
                }
            );
    };

    return (
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 text-left mt-20 max-w-xl px-6">
                <h1 className="font-bold text-2xl text-white mt-12 mb-8">Contact Me</h1>
                <ul className="font-semi-bold">
                    {contacts.map((contact) => (
                        <li className="flex" key={contact.id}>
                            <i className="text-2xl text-gray-500 dark:text-gray-400 mr-4">{contact.icon}</i>
                            <span className="text-lg mb-4 text-white">{contact.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-full lg:w-1/2 mt-10">
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="max-w-xl mx-auto m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
                >
                    <div className="flex items-center mb-8">
                        <HiOutlineChatAlt2 className="mr-2 text-white text-3xl" />
                        <p className="font-bold text-white text-2xl">Contact Form</p>
                    </div>
                    <div className="text-gray-200 font-lg">
                        <label htmlFor="name">Full Name:</label>
                        <input
                            className="w-full px-5 py-2 border border-gray-300 border-opacity-50 text-black bg-gray-400 rounded-md shadow-sm text-md"
                            type="text"
                            required
                            name="name"
                            placeholder="Your name"
                        />
                    </div>
                    <div className="text-gray-200 font-lg mt-5">
                        <label htmlFor="email" label="message" name="user_message">
                            Email id:
                        </label>
                        <input
                            className="w-full px-5 py-2 border border-gray-300 border-opacity-50 text-black bg-gray-400 rounded-md shadow-sm text-md"
                            type="email"
                            name="email"
                            placeholder="example@domain.com"
                            required
                        />
                    </div>
                    <div className="mt-6">
                        <label className="text-gray-200 block text-lg text-dark mb-2" htmlFor="email_body">
                            Message:
                        </label>
                        <textarea
                            className="w-full px-5 py-2 border border-gray-300 border-opacity-50 text-black bg-gray-400 rounded-md shadow-sm text-md"
                            id="message"
                            name="message"
                            cols="14"
                            rows="6"
                            aria-label="Message"
                        ></textarea>
                    </div>
                    <div className="flex items-center">
                        <button
                            type="submit"
                            className="cursor-pointer font-general-medium w-full lg:w-1/2 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500"
                        >
                            <FiSend size={24} />
                            Send message
                        </button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Contact;
