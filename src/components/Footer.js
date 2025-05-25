import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.darkBackground};
  color: ${({ theme }) => theme.colors.background};
  padding: 60px 0 20px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  margin-bottom: 20px;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.accent};
`;

const FooterLink = styled(Link)`
  display: block;
  margin-bottom: 10px;
  transition: color ${({ theme }) => theme.transitions.default};
  
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
`;

const SocialIcon = styled.a`
  color: ${({ theme }) => theme.colors.background};
  font-size: 1.5rem;
  transition: color ${({ theme }) => theme.transitions.default};
  
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  
  svg {
    margin-right: 10px;
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.lightText};
`;

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterSection>
            <FooterTitle>Magic Performer</FooterTitle>
            <p>Bringing joy and wonder to audiences of all ages with captivating performances that create lasting memories.</p>
            <SocialIcons>
              <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </SocialIcon>
              <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </SocialIcon>
              <SocialIcon href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </SocialIcon>
              <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </SocialIcon>
            </SocialIcons>
          </FooterSection>
          
          <FooterSection>
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/services">Services</FooterLink>
            <FooterLink to="/gallery">Gallery</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterSection>
          
          <FooterSection>
            <FooterTitle>Services</FooterTitle>
            <FooterLink to="/services#birthday">Birthday Parties</FooterLink>
            <FooterLink to="/services#corporate">Corporate Events</FooterLink>
            <FooterLink to="/services#weddings">Weddings</FooterLink>
            <FooterLink to="/services#schools">School Shows</FooterLink>
            <FooterLink to="/services#festivals">Festivals</FooterLink>
          </FooterSection>
          
          <FooterSection>
            <FooterTitle>Contact Us</FooterTitle>
            <ContactItem>
              <FaPhone />
              <span>+1 (555) 123-4567</span>
            </ContactItem>
            <ContactItem>
              <FaEnvelope />
              <span>info@magicperformer.com</span>
            </ContactItem>
            <ContactItem>
              <FaMapMarkerAlt />
              <span>123 Magic Street, Wonderland, WL 12345</span>
            </ContactItem>
          </FooterSection>
        </FooterContent>
        
        <Copyright>
          &copy; {new Date().getFullYear()} Magic Performer. All rights reserved.
        </Copyright>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
