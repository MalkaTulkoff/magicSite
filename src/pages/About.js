import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaAward, FaMagic, FaSmile, FaUsers } from 'react-icons/fa';

// Page Header
const PageHeader = styled.div`
  height: 40vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/images/about-header.jpg') no-repeat center center/cover;
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

// About Section
const AboutSection = styled.section`
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

// Skills Section
const SkillsSection = styled.section`
  padding: 100px 0;
  background-color: ${({ theme }) => theme.colors.lightBackground};
`;

const SkillsGrid = styled.div`
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

const SkillCard = styled(motion.div)`
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

const SkillIcon = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 20px;
`;

const SkillTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
`;

const SkillDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightText};
`;

// Journey Section
const JourneySection = styled.section`
  padding: 100px 0;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  
  &::after {
    content: '';
    position: absolute;
    width: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      left: 31px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  left: ${({ position }) => (position === 'left' ? '0' : '50%')};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    left: 0;
  }
`;

const TimelineContent = styled.div`
  padding: 20px 30px;
  background-color: ${({ theme }) => theme.colors.background};
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.primary};
  }
  
  h4 {
    font-size: 1rem;
    margin-bottom: 15px;
    color: ${({ theme }) => theme.colors.secondary};
  }
  
  p {
    color: ${({ theme }) => theme.colors.lightText};
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  right: -12px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 4px solid ${({ theme }) => theme.colors.primary};
  top: 15px;
  border-radius: 50%;
  z-index: 1;
  
  ${({ position }) => position === 'right' && `
    left: -12px;
  `}
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    left: 18px;
  }
`;

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const About = () => {
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
        <PageTitle>Magic Michael</PageTitle>
      </PageHeader>
      
      <AboutSection>
        <Container>
          <SectionTitle>Who I Am</SectionTitle>
          <AboutContent>
            <AboutImage>
              <img src="/images/performer-profile.jpg" alt="Michael Tulkoff" />
            </AboutImage>
            <AboutText>
              <h3>Educational Entertainer with a Mission to Save Lives</h3>
              <p>
                Hello! I'm Michael Tulkoff (מאיר טולקוף), a professional educational entertainer specializing in road safety awareness. My unique approach combines entertainment with education to create impactful experiences that can potentially save lives.
              </p>
              <p>
                My journey began with a passion for both entertainment and education. I realized that by merging these two worlds, I could create powerful learning experiences that leave a lasting impression, especially on young minds. My performances are designed to educate children about road safety in a way that's engaging, memorable, and fun.
              </p>
              <p>
                What sets my performances apart is the meaningful message behind the entertainment. Every show is carefully crafted to not only amaze and entertain but also to instill important safety lessons that children can carry with them throughout their lives.
              </p>
            </AboutText>
          </AboutContent>
        </Container>
      </AboutSection>
      
      <SkillsSection>
        <Container>
          <SectionTitle>My Expertise</SectionTitle>
          <SkillsGrid>
            <SkillCard
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <SkillIcon>
                <FaMagic />
              </SkillIcon>
              <SkillTitle>Educational Entertainment</SkillTitle>
              <SkillDescription>
                Combining magic and entertainment with valuable educational content about road safety to create engaging learning experiences.
              </SkillDescription>
            </SkillCard>
            
            <SkillCard
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <SkillIcon>
                <FaUsers />
              </SkillIcon>
              <SkillTitle>Child Engagement</SkillTitle>
              <SkillDescription>
                Specialized in connecting with children of all ages and creating age-appropriate content that resonates and educates.
              </SkillDescription>
            </SkillCard>
            
            <SkillCard
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <SkillIcon>
                <FaSmile />
              </SkillIcon>
              <SkillTitle>Bilingual Performances</SkillTitle>
              <SkillDescription>
                Offering shows in both Hebrew and English to reach diverse audiences and communities across Israel.
              </SkillDescription>
            </SkillCard>
            
            <SkillCard
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <SkillIcon>
                <FaAward />
              </SkillIcon>
              <SkillTitle>Customized Programs</SkillTitle>
              <SkillDescription>
                Tailoring educational entertainment programs to match specific age groups, settings, and learning objectives.
              </SkillDescription>
            </SkillCard>
          </SkillsGrid>
        </Container>
      </SkillsSection>
      
      <JourneySection>
        <Container>
          <SectionTitle>My Journey</SectionTitle>
          <Timeline>
            <TimelineItem 
              position="left"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <TimelineDot position="left" />
              <TimelineContent>
                <h3>The Beginning</h3>
                <h4>2005</h4>
                <p>Discovered my passion for magic after receiving my first magic kit. Started performing for family and friends.</p>
              </TimelineContent>
            </TimelineItem>
            
            <TimelineItem 
              position="right"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <TimelineDot position="right" />
              <TimelineContent>
                <h3>First Public Performance</h3>
                <h4>2010</h4>
                <p>Performed my first paid show at a local birthday party, which sparked my journey as a professional entertainer.</p>
              </TimelineContent>
            </TimelineItem>
            
            <TimelineItem 
              position="left"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <TimelineDot position="left" />
              <TimelineContent>
                <h3>Professional Training</h3>
                <h4>2012-2015</h4>
                <p>Studied under renowned magicians, attended workshops, and developed my unique performance style.</p>
              </TimelineContent>
            </TimelineItem>
            
            <TimelineItem 
              position="right"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <TimelineDot position="right" />
              <TimelineContent>
                <h3>Corporate Entertainment</h3>
                <h4>2016</h4>
                <p>Expanded into corporate events, performing for major companies and at business conferences.</p>
              </TimelineContent>
            </TimelineItem>
            
            <TimelineItem 
              position="left"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <TimelineDot position="left" />
              <TimelineContent>
                <h3>Theater Shows</h3>
                <h4>2018</h4>
                <p>Developed and performed my first full-length theater show, combining magic, storytelling, and audience participation.</p>
              </TimelineContent>
            </TimelineItem>
            
            <TimelineItem 
              position="right"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <TimelineDot position="right" />
              <TimelineContent>
                <h3>Present Day</h3>
                <h4>2023-Present</h4>
                <p>Continuing to create magical experiences for audiences of all ages across various venues and events.</p>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Container>
      </JourneySection>
    </>
  );
};

export default About;
