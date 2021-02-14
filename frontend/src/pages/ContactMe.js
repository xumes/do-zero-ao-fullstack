import React from 'react'

const ContactMe = () => {
    return (
        <div>
            <div>Get in touch</div>
            <div id="areas">
                <div id="form">
                    <form id="contact-form" method="post">
                        Name: <input type="text"/>
                        Email: <input type="email" />
                        Message: <textarea rows='5' />
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div id="network">
                    <div className="social">
                        icon
                        <h3>github.com/xumes</h3>
                    </div>
                    <div className="social">
                        icon
                        <h3>LinkedIn</h3>
                    </div>
                    <div className="social">
                        icon
                        <h3>Youtube</h3>
                    </div>
                    <div className="social">
                        icon
                        <h3>Udemy</h3>
                    </div>
                    <div className="social">
                        icon
                        <h3>Telegram</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe
