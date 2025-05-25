import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

// Page Header
const PageHeader = styled.div`
  height: 40vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/images/contact-header.jpg') no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.background};
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`;

// Contact Section
const ContactSection = styled.section`
  padding: 100px 0;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div``;

const ContactItem = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const ContactIcon = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.round};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  color: ${({ theme }) => theme.colors.background};
  font-size: 1.5rem;
`;

const ContactDetails = styled.div`
  h3 {
    font-size: 1.3rem;
    margin-bottom: 5px;
  }
  
  p {
    color: ${({ theme }) => theme.colors.lightText};
  }
`;

const ContactForm = styled(motion.form)`
  background-color: ${({ theme }) => theme.colors.lightBackground};
  padding: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 1rem;
  transition: border-color ${({ theme }) => theme.transitions.default};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 1rem;
  transition: border-color ${({ theme }) => theme.transitions.default};
  resize: vertical;
  min-height: 150px;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: 1rem;
  transition: border-color ${({ theme }) => theme.transitions.default};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  border: none;
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const SuccessMessage = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.success};
  color: white;
  padding: 15px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-bottom: 20px;
  text-align: center;
`;

const ErrorMessage = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.error};
  color: white;
  padding: 15px;
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-bottom: 20px;
  text-align: center;
`;

// Map Section
const MapSection = styled.section`
  padding: 0 0 100px;
`;

const MapContainer = styled.div`
  height: 400px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    error: false,
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Prepare template parameters for EmailJS
    const templateParams = {
      to_email: 'malkabunger@gmail.com',
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      event_type: formData.eventType,
      event_date: formData.eventDate,
      message: formData.message
    };
    
    // Send email using EmailJS
    // emailjs.send(
    //   'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
    //   'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
    //   templateParams
    // )
    // .then((response) => {
    //   console.log('Email sent successfully:', response);
    //   setIsSubmitting(false);
    //   setFormStatus({
    //     submitted: true,
    //     success: true,
    //     error: false,
    //     message: 'Thank you for your message! I will get back to you as soon as possible.'
    //   });
      
    //   // Reset form
    //   setFormData({
    //     name: '',
    //     email: '',
    //     phone: '',
    //     eventType: '',
    //     eventDate: '',
    //     message: ''
    //   });
      
    //   // Reset success message after 5 seconds
    //   setTimeout(() => {
    //     setFormStatus(prev => ({
    //       ...prev,
    //       submitted: false
    //     }));
    //   }, 5000);
    // })
    // .catch((error) => {
    //   console.error('Email sending failed:', error);
    //   setIsSubmitting(false);
    //   setFormStatus({
    //     submitted: true,
    //     success: false,
    //     error: true,
    //     message: 'Sorry, there was an error sending your message. Please try again or contact directly at malkabunger@gmail.com.'
    //   });
    // });
  };
  
  return (
    <>
      <PageHeader>
        <PageTitle>Contact Me</PageTitle>
      </PageHeader>
      
      <ContactSection>
        <Container>
          <SectionTitle>Get In Touch</SectionTitle>
          <ContactContent>
            <ContactInfo>
              <ContactItem>
                <ContactIcon>
                  <FaPhone />
                </ContactIcon>
                <ContactDetails>
                  <h3>Phone</h3>
                  <p>+1 (555) 123-4567</p>
                </ContactDetails>
              </ContactItem>
              
              <ContactItem>
                <ContactIcon>
                  <FaEnvelope />
                </ContactIcon>
                <ContactDetails>
                  <h3>Email</h3>
                  <p>info@magicperformer.com</p>
                </ContactDetails>
              </ContactItem>
              
              <ContactItem>
                <ContactIcon>
                  <FaMapMarkerAlt />
                </ContactIcon>
                <ContactDetails>
                  <h3>Location</h3>
                  <p>123 Magic Street, Wonderland, WL 12345</p>
                </ContactDetails>
              </ContactItem>
              
              <ContactItem>
                <ContactIcon>
                  <FaClock />
                </ContactIcon>
                <ContactDetails>
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </ContactDetails>
              </ContactItem>
            </ContactInfo>
            
            <ContactForm
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {formStatus.submitted && formStatus.success && (
                <SuccessMessage
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {formStatus.message}
                </SuccessMessage>
              )}
              
              {formStatus.submitted && formStatus.error && (
                <ErrorMessage
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {formStatus.message}
                </ErrorMessage>
              )}
              
              <FormRow>
                <FormGroup>
                  <FormLabel htmlFor="name">Your Name</FormLabel>
                  <FormInput
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <FormInput
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </FormRow>
              
              <FormRow>
                <FormGroup>
                  <FormLabel htmlFor="phone">Phone Number</FormLabel>
                  <FormInput
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel htmlFor="eventType">Event Type</FormLabel>
                  <FormSelect
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Event Type</option>
                    <option value="birthday">Birthday Party</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="wedding">Wedding</option>
                    <option value="school">School Show</option>
                    <option value="festival">Festival/Fair</option>
                    <option value="private">Private Party</option>
                    <option value="other">Other</option>
                  </FormSelect>
                </FormGroup>
              </FormRow>
              
              <FormGroup>
                <FormLabel htmlFor="eventDate">Event Date</FormLabel>
                <FormInput
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="message">Your Message</FormLabel>
                <FormTextarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Please provide details about your event, including location, approximate number of guests, and any special requirements."
                />
              </FormGroup>
              
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </SubmitButton>
            </ContactForm>
          </ContactContent>
        </Container>
      </ContactSection>
      
      <MapSection>
        <Container>
          <MapContainer>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215151265054!2d-73.98784492426862!3d40.75798657138946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1685123456789!5m2!1sen!2sus" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
          </MapContainer>
        </Container>
      </MapSection>
    </>
  );
};

export default Contact;
