import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact({ t }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await emailjs.send(
                "service_ez8nqwe",
                "template_a4ivq44",
                formData,
                "zthFHuL46lZJR6jhP"
            );

            setStatus("Message sent successfully!");

            setFormData({
                name: "",
                email: "",
                message: "",
            });
        } catch (error) {
            console.error(error);
            setStatus("Something went wrong. Please try again.");
        }
    };

    return (
        <section className="contact" id="contact">
            <div className="contact-content">

                <p className="section-subtitle">
                    {t.contact.subtitle}
                </p>

                <h2>{t.contact.title}</h2>

                <p className="contact-text">
                    {t.contact.description}
                </p>

                <p className="contact-cta">
                    Let&apos;s build something beautiful together!
                </p>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="6"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">
                        Send Message
                    </button>

                    {status && (
                        <p className="form-status">
                            {status}
                        </p>
                    )}

                </form>
            </div>
        </section>
    );
}

export default Contact;