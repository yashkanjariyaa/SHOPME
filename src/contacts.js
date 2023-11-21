import React from "react";

function Contacts(){
    return(
        <div>
            <div>
                <ul className="navBarHome">
                    <li><a className='navlink homeLink' href='../'>Home</a></li>
                    <li><a className='navlink homeLink' href='../about'>About</a></li>
                    <li><a className='navlink homeLink' href='../contacts'>Contacts</a></li>
                </ul>
            </div>
            <h2 className="tag">Contacts.</h2>
            <div className="intro">
                <h1 id='homeHeading'>SHOPME.</h1>
                <p className="para paraContacts">
                Contact Us
                    We value your feedback and inquiries. Feel free to reach out to us using the<br></br> information provided below. Our dedicated support team is here to assist you and provide prompt responses to any questions you may have.<br></br>

                    **Customer Support:**<br></br>
                    For assistance with orders, product information, or general inquiries, please<br></br> email us at [support@example.com](mailto:support@example.com) or call our toll-free number: 1-800-123-4567.<br></br>

                    **Business Inquiries:**<br></br>
                    If you are a supplier, partner, or would like to collaborate with us, please contact<br></br> our business team at [partnerships@example.com](mailto:partnerships@example.com).<br></br>

                    **Media and Press:**<br></br>
                    Members of the media can get in touch with our press relations team at <br></br>[media@example.com](mailto:media@example.com) for press releases, interviews, and media resources.<br></br>

                    **Feedback and Suggestions:**<br></br>
                    We value your ideas and suggestions to improve our services. Share your thoughts <br></br>with us at [feedback@example.com](mailto:feedback@example.com).<br></br>
                    <br></br>
                    Thank you for choosing SHOPME. We look forward to hearing from you <br></br>and providing the best assistance possible.
                </p>
            </div>
        </div>
    )
}
export default Contacts;