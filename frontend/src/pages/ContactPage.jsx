import { useState } from 'react';
import { contactApi } from '../services/api';

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  message: ''
};

function ContactPage() {
  const [formData, setFormData] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      await contactApi.create(formData);
      setSuccess('Contact request submitted successfully.');
      setFormData(initialForm);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to submit contact request');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <hr />
      <div className="new_home_web">
        <div className="responsive-container-block big-container">
          <img className="imgBG" src="/images/contactbg.png" />
          <div className="responsive-container-block textContainer">
            <div className="topHead">
              <p className="text-blk heading">
                Get in <span className="orangeText">touch</span>
              </p>
              <div className="orangeLine"></div>
            </div>
            <p className="text-blk subHeading">
              Contact Us for Any Queries or Feedback.
              <br />
              Please fill out the form below and we will get back to you shortly.
            </p>
          </div>
          <div className="responsive-container-block container">
            <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-7 wk-ipadp-10 line">
              <form id="contactForm" className="form-box" onSubmit={onSubmit}>
                <div className="container-block form-wrapper">
                  <div className="responsive-container-block">
                    <div className="left4">
                      <div className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6">
                        <input className="input" name="firstName" placeholder="First Name" value={formData.firstName} onChange={onChange} />
                      </div>
                      <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                        <input className="input" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={onChange} />
                      </div>
                      <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                        <input className="input" name="email" placeholder="Email Address" value={formData.email} onChange={onChange} />
                      </div>
                      <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 lastPhone">
                        <input className="input" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={onChange} />
                      </div>
                    </div>
                    <div className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12">
                      <textarea className="textinput" name="message" placeholder="Message" value={formData.message} onChange={onChange}></textarea>
                    </div>
                  </div>
                  {error && <p className="error">{error}</p>}
                  {success && <p className="success">{success}</p>}
                  <button type="submit" className="send" disabled={loading}>{loading ? 'Submitting...' : 'Send'}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
