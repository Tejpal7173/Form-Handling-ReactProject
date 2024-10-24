import Button from './button';
import "./form.css";
import { MdOutlineMessage, MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { useState } from 'react';

export default function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        text: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const onSubmit = (event) => {
        event.preventDefault();
        // Optionally, you can log or handle the form data here
        console.log(formData);

        // Reset the form
        setFormData({
            name: "",
            email: "",
            text: "",
    });
    };

    return (
        <section className="form-container">
            <div className='btn-container'>
                <div className="top-btn">
                    <Button icon={<MdOutlineMessage fontSize="24px" />} text="VIA SUPPORT CHAT" />
                    <Button icon={<IoCall fontSize="24px" />} text="VIA CALL" />
                </div>
                <Button isOutline={true} icon={<MdEmail fontSize="24px" />} text="VIA E-MAIL FORM" />

                <form onSubmit={onSubmit}>
                    <div className='form-control'>
                        <label htmlFor='name'>Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    </div>
                    <div className='form-control'>
                        <label htmlFor='email'>E-mail</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className='form-control'>
                        <label htmlFor='text'>TextArea</label>
                        <textarea name="text" rows="10" value={formData.text} onChange={handleChange} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: "end" }}>
                        <Button text="SUBMIT" />
                    </div>
                </form>
                <div>Data: {JSON.stringify(formData)}</div>
            </div>
            <div className="contact-img">
                <img src="/image/24.jpeg" alt="service" />
            </div>
        </section>
    );
}
