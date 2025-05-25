import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaMagic, FaBirthdayCake, FaBuilding, FaGraduationCap, FaRing, FaCalendarAlt, FaUsers } from 'react-icons/fa';

// Page Header
const PageHeader = styled.div`
  height: 40vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/images/services-header.jpg') no-repeat center center/cover;
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

// Services Intro
const ServicesIntro = styled.section`
  padding: 100px 0 50px;
  text-align: center;
`;

const IntroText = styled.p`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.lightText};
`;

// Service Types Section
const ServiceTypesSection = styled.section`
  padding: 50px 0 100px;
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

// Service Item
const ServiceItem = styled.div`
  margin-bottom: 100px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ServiceContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
  
  ${({ reversed }) => reversed && `
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      direction: rtl;
      
      > * {
        direction: ltr;
      }
    }
  `}
`;

const ServiceImage = styled.div`
  position: relative;
  
  img {
    width: 100%;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const ServiceText = styled.div`
  h3 {
    font-size: 1.8rem;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    
    svg {
      margin-right: 15px;
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
  
  p {
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.lightText};
  }
  
  ul {
    margin-bottom: 20px;
    
    li {
      margin-bottom: 10px;
      color: ${({ theme }) => theme.colors.lightText};
      position: relative;
      padding-left: 25px;
      
      &::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

// Event Types Section
const EventTypesSection = styled.section`
  padding: 100px 0;
  background-color: ${({ theme }) => theme.colors.lightBackground};
`;

const EventsGrid = styled.div`
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

const EventCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: all ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const EventImage = styled.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${EventCard}:hover & img {
    transform: scale(1.1);
  }
`;

const EventContent = styled.div`
  padding: 25px;
`;

const EventTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 10px;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const EventDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: 20px;
`;

// CTA Section
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

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Services = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <>
      <PageHeader>
  
        <PageTitle>Educational Entertainment</PageTitle>
      </PageHeader>
      
      <ServicesIntro>
    
        <Container>
          <SectionTitle>Educational Entertainment That Saves Lives</SectionTitle>
          <IntroText>
            I offer specialized educational entertainment programs focused on road safety awareness. 
            Each performance combines engaging magic, storytelling, and interactive elements to deliver 
            important safety messages in a way that resonates with children and stays with them for life.
          </IntroText>
        </Container>
      </ServicesIntro>
      
      <ServiceTypesSection>
        <Container>
          <ServiceItem id="magic">
            <ServiceContent>
              <ServiceImage>
                <motion.img 
                  src="/images/close-up-magic.jpg" 
                  alt="Educational Magic Shows"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                />
              </ServiceImage>
              <ServiceText>
                <motion.h3
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <FaMagic /> Road Safety Magic Shows
                </motion.h3>
                <motion.p
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  Interactive and educational magic shows that teach children about road safety in a fun and memorable way. 
                  These performances use magic as a tool to illustrate important safety concepts and encourage children to 
                  make safe choices when near roads.
                </motion.p>
                <motion.ul
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <li>Age-appropriate content for different grade levels</li>
                  <li>Interactive elements that reinforce safety messages</li>
                  <li>Visual aids and magical effects that illustrate safety concepts</li>
                  <li>Available in both Hebrew and English</li>
                </motion.ul>
              </ServiceText>
            </ServiceContent>
          </ServiceItem>
          
          <ServiceItem id="workshops">
            <ServiceContent reversed>
              <ServiceImage>
                <motion.img 
                  src="/images/stage-show.jpg" 
                  alt="Educational Workshops"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                />
              </ServiceImage>
              <ServiceText>
                <motion.h3
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <FaCalendarAlt /> Safety Workshops
                </motion.h3>
                <motion.p
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  Hands-on workshops that engage children in activities designed to teach road safety skills. 
                  These workshops combine entertainment with practical exercises to help children understand 
                  and practice safe behavior near roads.
                </motion.p>
                <motion.ul
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <li>Practical demonstrations of road safety principles</li>
                  <li>Role-playing scenarios to practice safe road behavior</li>
                  <li>Interactive games that reinforce safety messages</li>
                  <li>Take-home materials to continue the learning</li>
                </motion.ul>
              </ServiceText>
            </ServiceContent>
          </ServiceItem>
          
          <ServiceItem id="assemblies">
            <ServiceContent>
              <ServiceImage>
                <motion.img 
                  src="/images/theatrical-performance.jpg" 
                  alt="School Assemblies"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                />
              </ServiceImage>
              <ServiceText>
                <motion.h3
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <FaCalendarAlt /> School Assemblies
                </motion.h3>
                <motion.p
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  Large-scale performances designed for school assemblies that deliver important road safety messages 
                  to a wider audience. These shows combine theatrical elements with educational content to create 
                  a memorable experience for the entire school.
                </motion.p>
                <motion.ul
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <li>Engaging performances suitable for large audiences</li>
                  <li>Visual effects and storytelling that capture attention</li>
                  <li>Age-appropriate content for different school levels</li>
                  <li>Follow-up materials for teachers to continue the education</li>
                </motion.ul>
              </ServiceText>
            </ServiceContent>
          </ServiceItem>
        </Container>
      </ServiceTypesSection>
      
      <EventTypesSection>
        
        <Container>
          <SectionTitle>Where I Perform</SectionTitle>
          <EventsGrid>
            <EventCard
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              id="schools"
            >
              <EventImage>
                <img src="/images/school-show.jpg" alt="Schools" />
              </EventImage>
              <EventContent>
                <EventTitle>
                  <FaGraduationCap /> Schools
                </EventTitle>
                <EventDescription>
                  Educational performances and workshops for elementary and middle schools, designed to teach children about road safety in an engaging way.
                </EventDescription>
                <ButtonLink to="/contact">Book Now</ButtonLink>
              </EventContent>
            </EventCard>
            
            <EventCard
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              id="community"
            >
              <EventImage>
                <img src="/images/community-event.jpg" alt="Community Events" />
              </EventImage>
              <EventContent>
                <EventTitle>
                  <FaUsers /> Community Events
                </EventTitle>
                <EventDescription>
                  Special performances for community centers, neighborhood events, and local safety initiatives to promote road safety awareness.
                </EventDescription>
                <ButtonLink to="/contact">Book Now</ButtonLink>
              </EventContent>
            </EventCard>
            
            <EventCard
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              id="municipalities"
            >
              <EventImage>
                <img src="/images/municipal-event.jpg" alt="Municipal Programs" />
              </EventImage>
              <EventContent>
                <EventTitle>
                  <FaBuilding /> Municipal Programs
                </EventTitle>
                <EventDescription>
                  Collaborations with local municipalities and government safety initiatives to deliver road safety education to wider audiences.
                </EventDescription>
                <ButtonLink to="/contact">Book Now</ButtonLink>
              </EventContent>
            </EventCard>
            
            <EventCard
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              id="festivals"
            >
              <EventImage>
                <img src="/images/festival.jpg" alt="Festivals & Fairs" />
              </EventImage>
              <EventContent>
                <EventTitle>
                  <FaCalendarAlt /> Festivals & Fairs
                </EventTitle>
                <EventDescription>
                  Interactive performances and educational booths at public events, festivals, and safety fairs to promote road safety awareness.
                </EventDescription>
                <ButtonLink to="/contact">Book Now</ButtonLink>
              </EventContent>
            </EventCard>
            
            <EventCard
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              id="organizations"
            >
              <EventImage>
                <img src="/images/organization-event.jpg" alt="Organizations" />
              </EventImage>
              <EventContent>
                <EventTitle>
                  <FaBuilding /> Organizations
                </EventTitle>
                <EventDescription>
                  Customized programs for youth organizations, after-school programs, and other educational institutions focused on child safety.
                </EventDescription>
                <ButtonLink to="/contact">Book Now</ButtonLink>
              </EventContent>
            </EventCard>
            
            <EventCard
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              id="special"
            >
              <EventImage>
                <img src="/images/special-event.jpg" alt="Special Events" />
              </EventImage>
              <EventContent>
                <EventTitle>
                  <FaCalendarAlt /> Special Events
                </EventTitle>
                <EventDescription>
                  Tailored performances for special safety campaigns, awareness days, and other events focused on promoting road safety.
                </EventDescription>
                <ButtonLink to="/contact">Book Now</ButtonLink>
              </EventContent>
            </EventCard>
          </EventsGrid>
        </Container>
      </EventTypesSection>
      
      <CTASection>
        <Container>
          <CTATitle>Ready to Book Your Educational Entertainment?</CTATitle>
          <CTAText>
            Contact me today to discuss your event needs and create a customized entertainment package.
          </CTAText>
          <ButtonLink to="/contact">Get in Touch</ButtonLink>
        </Container>
      </CTASection>
    </>
  );
};

export default Services;
