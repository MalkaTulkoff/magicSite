import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaMagic, FaCalendarAlt, FaSmile, FaTheaterMasks } from 'react-icons/fa';
import TrafficAnimations from '../components/TrafficAnimations';
import BalloonDecoration from '../components/BalloonDecoration';
// Hero Section
const HeroSection = styled.section`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/images/hero-bg.jpg') no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;jx 
  color: ${({ theme }) => theme.colors.background};
  padding: 0 20px;
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 20px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 30px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;

const Button = styled(motion.button)`
  background-color: ${({ theme, secondary }) => 
    secondary ? 'transparent' : theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  border: 2px solid ${({ theme, secondary }) => 
    secondary ? theme.colors.background : theme.colors.primary};
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};
  margin: 0 10px;
  
  &:hover {
    background-color: ${({ theme, secondary }) => 
      secondary ? 'rgba(255, 255, 255, 0.1)' : theme.colors.secondary};
    border-color: ${({ theme, secondary }) => 
      secondary ? theme.colors.background : theme.colors.secondary};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: block;
    width: 100%;
    margin: 10px 0;
  }
`;

// About Preview Section
const AboutPreview = styled.section`
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

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const AboutImage = styled.div`
  position: relative;
  
  img {
    width: 100%;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    width: 100%;
    height: 100%;
    border: 3px solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    z-index: -1;
  }
`;

const AboutText = styled.div`
  h3 {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
  
  p {
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.lightText};
  }
`;

// Services Preview Section
const ServicesPreview = styled.section`
  padding: 100px 0;
  background-color: ${({ theme }) => theme.colors.lightBackground};
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 30px;
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: all ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
`;

const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: 20px;
`;

// Testimonial Section
const TestimonialSection = styled.section`
  padding: 100px 0;
  text-align: center;
`;

const TestimonialCard = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.lightBackground};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

const TestimonialText = styled.p`
  font-size: 1.2rem;
  font-style: italic;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.text};
`;

const TestimonialAuthor = styled.h4`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

// Call to Action Section
const CTASection = styled.section`
  padding: 80px 0;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url('/images/cta-bg.jpg') no-repeat center center/cover;
  color: ${({ theme }) => theme.colors.background};
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

const CTAText = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 30px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 1rem;
  }
`;

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const ButtonLink = styled(Link)`
  display: inline-block;
  background-color: ${({ theme, secondary }) => 
    secondary ? 'transparent' : theme.colors.primary};
  color: ${({ theme }) => theme.colors.background};
  border: 2px solid ${({ theme, secondary }) => 
    secondary ? theme.colors.background : theme.colors.primary};
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};
  margin: 0 10px;
  
  &:hover {
    background-color: ${({ theme, secondary }) => 
      secondary ? 'rgba(255, 255, 255, 0.1)' : theme.colors.secondary};
    border-color: ${({ theme, secondary }) => 
      secondary ? theme.colors.background : theme.colors.secondary};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    display: block;
    width: 100%;
    margin: 10px 0;
  }
`;

const BilingualSection = styled.section`
  padding: 100px 0;
  background-color: ${({ theme }) => theme.colors.lightBackground};
`;

const BilingualContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const HebrewContent = styled.div`
  direction: rtl;
  text-align: right;
  
  h3 {
    font-size: 1.8rem;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.primary};
  }
  
  p {
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.lightText};
    font-size: 1.1rem;
    line-height: 1.8;
  }
`;

const EnglishContent = styled.div`
  text-align: left;
  
  h3 {
    font-size: 1.8rem;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.primary};
  }
  
  p {
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.lightText};
    font-size: 1.1rem;
    line-height: 1.8;
  }
`;

const Home = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  return (
    <>
      <HeroSection>
        <TrafficAnimations count={3} />
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Magic Michael
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Creating unforgettable moments of wonder and joy while educating about road safety
          </HeroSubtitle>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <ButtonLink to="/services">View Services</ButtonLink>
            <ButtonLink to="/contact" secondary="true">Contact Now</ButtonLink>
          </motion.div>
        </HeroContent>
      </HeroSection>
      
      <BilingualSection>
     
        <Container>
          <SectionTitle>My Mission</SectionTitle>
          <BilingualContent>
            <HebrewContent>
              <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3>השליחות שלי</h3>
                
                <p>
                היי אני מאיר טולקוף  שמעתם פעם על בדרן חינוכי? זו העבודה והאהבה שלי. המשיכו לקרוא, צפו, בקרו וצרו קשר.
                </p>
                <p>
                אולי ילדים באמת יכולים להשתנות באמצעות מופע קסום? ייתכן שהופעה ,יום אחד עוד תציל את חייהם
                </p>
                <p>
                  השליחות שלי היא
                  להציל חיים דרך
                  בדרנות חינוכית בנושא
                  זהירות בדרכים
                </p>
                
              </motion.div>
            </HebrewContent>
            
            <EnglishContent>
              <motion.div
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h3>My Mission</h3>
                <p>
                  Ever heard of an Educational Entertainer? That's my job and my love. I'm Michael Tulkoff.
                </p>
                <p>
                  Read on, view, visit and please contact us.
                </p>
                <p>
                  What if children could truly have their lives impacted for the better by a magical show? It just might be that performance is one day a reason for saving their lives.
                </p>
              </motion.div>
            </EnglishContent>
          </BilingualContent>
        </Container>
      </BilingualSection>
      
      <AboutPreview>
       
        <Container>
          <SectionTitle>About Me</SectionTitle>
          <AboutContent>
            <AboutImage>
              <img src="/images/performer.jpg" alt="Magic Performer" />
            </AboutImage>
            <AboutText>
              <h3>Professional Entertainment for Your Event</h3>
              <p>
                With over 10 years of experience in the entertainment industry, I specialize in creating magical moments that captivate audiences of all ages. My performances combine magic, comedy, and audience interaction to create a unique and memorable experience.
              </p>
              <p>
                Whether you're planning a birthday party, corporate event, or wedding celebration, I offer customized performances that will leave your guests amazed and entertained.
              </p>
              <ButtonLink to="/about">Learn More</ButtonLink>
            </AboutText>
          </AboutContent>
        </Container>
      </AboutPreview>
      
      <ServicesPreview>
        <Container>
          <SectionTitle>My Services</SectionTitle>
          <ServicesGrid>
            <ServiceCard
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ServiceIcon>
                <FaMagic />
              </ServiceIcon>
              <ServiceTitle>Magic Shows</ServiceTitle>
              <ServiceDescription>
                Interactive magic performances tailored to your event and audience age range.
              </ServiceDescription>
              <ButtonLink to="/services#magic">Learn More</ButtonLink>
            </ServiceCard>
            
            <ServiceCard
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ServiceIcon>
                <FaCalendarAlt />
              </ServiceIcon>
              <ServiceTitle>Special Events</ServiceTitle>
              <ServiceDescription>
                Custom entertainment packages for birthdays, weddings, and corporate events.
              </ServiceDescription>
              <ButtonLink to="/services#events">Learn More</ButtonLink>
            </ServiceCard>
            
            <ServiceCard
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ServiceIcon>
                <FaTheaterMasks />
              </ServiceIcon>
              <ServiceTitle>Theatrical Performances</ServiceTitle>
              <ServiceDescription>
                Larger stage shows with elaborate illusions and audience participation.
              </ServiceDescription>
              <ButtonLink to="/services#theatrical">Learn More</ButtonLink>
            </ServiceCard>
          </ServicesGrid>
        </Container>
      </ServicesPreview>
      
      <TestimonialSection>
        <Container>
          <SectionTitle>What People Say</SectionTitle>
          <TestimonialCard
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <TestimonialText>
              "The performance at my daughter's birthday party was absolutely amazing! All the kids were completely engaged, and the adults were just as entertained. I've never seen such a perfect blend of magic and comedy that appeals to all ages."
            </TestimonialText>
            <TestimonialAuthor>- Sarah Johnson, Birthday Party</TestimonialAuthor>
          </TestimonialCard>
        </Container>
      </TestimonialSection>
      
      <CTASection>
        <Container>
          <CTATitle>Ready to Add Magic to Your Event?</CTATitle>
          <CTAText>
            Contact me today to discuss how I can create a custom entertainment experience for your special occasion.
          </CTAText>
          <ButtonLink to="/contact">Get in Touch</ButtonLink>
        </Container>
      </CTASection>
    </>
  );
};

export default Home;
