import './Contact.css'

export default function Contact() {
    return (
        <div className='contact'>
            <div className="box">
                <h3>Contact us</h3>
                <div className="item">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d48777.52153841193!2d44.4694528!3d40.173568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sam!4v1769871058041!5m2!1sru!2sam" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <div className="container">
                        <input type="text" placeholder="Full name" id="Full name"></input>
                        <label for="Full name"></label>

                        <input type="mail" placeholder="E-mail" id="E-mail"></input>
                        <label for="E-mail"></label>

                        <input type="phone" placeholder="Phone" id="Phone"></input>
                        <label for="Phone"></label>

                        <input type="text" placeholder="Message" id="Message"></input>
                        <label for="Message"></label>

                        <button>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

