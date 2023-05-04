export function Contactinfo() {
    return (
        <>
            <div className="style_contact_left">
                <h3>Contact</h3>
                <h4>Address</h4>
                <p><span className="contact_style">Kharkiv, Ukraine</span></p>
                <h4>Phone:</h4>
                <p><span className="contact_style">+380660075737</span></p>
                <h4>E-mail</h4>
                <a href="https://mail.google.com/"
                ><span className="contact_style">buntikovaleksey@gmail.com</span></a
                >
                <h4>LinkedIn</h4>
                <a href="https://www.linkedin.com/"
                ><span className="contact_style">https://www.linkedin.com</span></a
                >
                <h3 className="languages_margin">Languages</h3>
                <p className="style_languages style_languages_margin">
                    Ukrainian - Native
                </p>
                <p className="style_languages">English - B1</p>
            </div>

        </>
    );
}