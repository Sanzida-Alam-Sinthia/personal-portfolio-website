import React from 'react';
import emailjs from 'emailjs-com'
import { Container } from 'react-bootstrap';
const Mailer = () => {
    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_ujx40o2', 'template_h9us0rv', e.target, "VFbczivmyueyYczGk"
        ).then(res => {
            console.log(res)
        }).catch(err => console.log(err))
    }
    return (
        <Container fluid>
            <div className='container '
                style={{
                    marginTop: "50px",
                    marginBottom: "50px",
                    width: '40%',
                    // background: `url(https://freevector-images.s3.amazonaws.com/uploads/vector/preview/40659/FreevectorPurple-BackgroundAS0621_generated.jpg)`,
                    backgroundPosition: "center",
                    backgroundSize: "cover"
                }}>
                <h2 style={{ marginTop: "25px", color: 'white' }}> WANT TO SEND ME A MESSAGE?</h2>
                <form
                    className='row'
                    style={{ color: 'white' }}
                    action=""
                    onSubmit={sendEmail}
                >
                    <label >Name</label>
                    <input
                        style={{
                            marginBottom: "15px"
                        }}
                        type="text" name="name" className='form-control' />
                    <label >Email</label>
                    <input style={{
                        marginBottom: "15px"
                    }}
                        type="email" name="user_email" className='form-control' />
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
        </Container>
    );
};

export default Mailer;