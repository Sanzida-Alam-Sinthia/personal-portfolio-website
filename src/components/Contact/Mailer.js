import React from 'react';
import emailjs from 'emailjs-com'
const Mailer = () => {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_ujx40o2', 'template_h9us0rv', e.target, "VFbczivmyueyYczGk"
        ).then(res => {
            console.log(res)
        }).catch(err => console.log(err))
    }
    return (
        <div className='container '
            style={{
                marginTop: "50px",
                marginBottom: "50px",
                width: '40%',
                // background: `url(https://freevector-images.s3.amazonaws.com/uploads/vector/preview/40659/FreevectorPurple-BackgroundAS0621_generated.jpg)`,
                backgroundPosition: "center",
                backgroundSize: "cover"
            }}>
            <h2 style={{ marginTop: "25px" }}> WANT TO SEND ME A MESSAGE?</h2>
            <form
                className='row'
                style={{ margin: "25px 85px 75px 100px" }}
                action=""
                onSubmit={sendEmail}
            >
                <label >Name</label>
                <input type="text" name="name" className='form-control' />
                <label >Email</label>
                <input type="email" name="user_email" className='form-control' />
                <label >Messege</label>
                <textarea name="message" rows="4" className='form-control'></textarea>
                <input
                    type="submit"
                    value='send'
                    className='form-control btn btn-primary'
                    style={{ marginTop: "30px" }}
                />
            </form>
        </div>
    );
};

export default Mailer;