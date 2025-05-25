import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Page Header
const PageHeader = styled.div`
  height: 40vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/images/gallery-header.jpg') no-repeat center center/cover;
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

// Gallery Section
const GallerySection = styled.section`
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

// Gallery Tabs
const GalleryTabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const Tab = styled.button`
  background: ${({ active, theme }) => 
    active ? theme.colors.primary : 'transparent'};
  color: ${({ active, theme }) => 
    active ? theme.colors.background : theme.colors.text};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  padding: 10px 30px;
  margin: 0 10px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ active, theme }) => 
      active ? theme.colors.primary : 'rgba(108, 99, 255, 0.1)'};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 8px 20px;
    margin: 0 5px;
    font-size: 0.9rem;
  }
`;

// Photo Gallery
const PhotoGrid = styled(motion.div)`
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

const PhotoItem = styled(motion.div)`
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.small};
  cursor: pointer;
  height: 300px;
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const PhotoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

// Video Gallery
const VideoGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const VideoItem = styled(motion.div)`
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.small};
  cursor: pointer;
  height: 300px;
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const VideoThumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  
  ${VideoItem}:hover & {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

// Modal
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 50px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 20px;
  }
`;

const ModalContent = styled(motion.div)`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  overflow: hidden;
  
  img {
    max-width: 100%;
    max-height: 80vh;
    display: block;
    border-radius: ${({ theme }) => theme.borderRadius.small};
  }
  
  iframe {
    width: 80vw;
    height: 45vw;
    max-width: 1000px;
    max-height: 562.5px;
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.small};
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1001;
  
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1001;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
  
  &.prev {
    left: 20px;
  }
  
  &.next {
    right: 20px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
  }
`;

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('photos');
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Sample data for photos
  const photos = [
    { id: 1, src: '/images/gallery/photo1.jpg', alt: 'Close-up Magic Performance' },
    { id: 2, src: '/images/gallery/photo2.jpg', alt: 'Stage Show' },
    { id: 3, src: '/images/gallery/photo3.jpg', alt: 'Birthday Party Performance' },
    { id: 4, src: '/images/gallery/photo4.jpg', alt: 'Corporate Event' },
    { id: 5, src: '/images/gallery/photo5.jpg', alt: 'Wedding Entertainment' },
    { id: 6, src: '/images/gallery/photo6.jpg', alt: 'School Show' },
    { id: 7, src: '/images/gallery/photo7.jpg', alt: 'Festival Performance' },
    { id: 8, src: '/images/gallery/photo8.jpg', alt: 'Private Party Magic' },
    { id: 9, src: '/images/gallery/photo9.jpg', alt: 'Theater Show' }
  ];
  
  // Sample data for videos
  const videos = [
    { 
      id: 1, 
      thumbnail: '/images/gallery/video-thumb1.jpg', 
      title: 'Card Magic Compilation',
      videoId: 'dQw4w9WgXcQ' // YouTube video ID
    },
    { 
      id: 2, 
      thumbnail: '/images/gallery/video-thumb2.jpg', 
      title: 'Stage Illusion Highlights',
      videoId: 'dQw4w9WgXcQ' // YouTube video ID
    },
    { 
      id: 3, 
      thumbnail: '/images/gallery/video-thumb3.jpg', 
      title: 'Corporate Event Performance',
      videoId: 'dQw4w9WgXcQ' // YouTube video ID
    },
    { 
      id: 4, 
      thumbnail: '/images/gallery/video-thumb4.jpg', 
      title: 'Magic Workshop for Kids',
      videoId: 'dQw4w9WgXcQ' // YouTube video ID
    }
  ];
  
  const openModal = (item, index, type) => {
    setSelectedItem({ ...item, type });
    setCurrentIndex(index);
  };
  
  const closeModal = () => {
    setSelectedItem(null);
  };
  
  const navigateModal = (direction) => {
    const items = selectedItem.type === 'photo' ? photos : videos;
    let newIndex = currentIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % items.length;
    } else {
      newIndex = (currentIndex - 1 + items.length) % items.length;
    }
    
    setCurrentIndex(newIndex);
    setSelectedItem({ ...items[newIndex], type: selectedItem.type });
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1 
      } 
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };
  
  const contentVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.3 }
    }
  };
  
  return (
    <>
      <PageHeader>
        <PageTitle>Gallery</PageTitle>
      </PageHeader>
      
      <GallerySection>
        <Container>
          <SectionTitle>Magical Moments</SectionTitle>
          
          <GalleryTabs>
            <Tab 
              active={activeTab === 'photos'} 
              onClick={() => setActiveTab('photos')}
            >
              Photos
            </Tab>
            <Tab 
              active={activeTab === 'videos'} 
              onClick={() => setActiveTab('videos')}
            >
              Videos
            </Tab>
          </GalleryTabs>
          
          <AnimatePresence mode="wait">
            {activeTab === 'photos' ? (
              <PhotoGrid
                key="photos"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {photos.map((photo, index) => (
                  <PhotoItem
                    key={photo.id}
                    variants={itemVariants}
                    onClick={() => openModal(photo, index, 'photo')}
                  >
                    <PhotoImage src={photo.src} alt={photo.alt} />
                  </PhotoItem>
                ))}
              </PhotoGrid>
            ) : (
              <VideoGrid
                key="videos"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {videos.map((video, index) => (
                  <VideoItem
                    key={video.id}
                    variants={itemVariants}
                    onClick={() => openModal(video, index, 'video')}
                  >
                    <VideoThumbnail src={video.thumbnail} alt={video.title} />
                    <PlayButton>
                      <FaPlay />
                    </PlayButton>
                  </VideoItem>
                ))}
              </VideoGrid>
            )}
          </AnimatePresence>
        </Container>
      </GallerySection>
      
      <AnimatePresence>
        {selectedItem && (
          <ModalOverlay
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <CloseButton onClick={closeModal}>
              <FaTimes />
            </CloseButton>
            
            <NavigationButton 
              className="prev" 
              onClick={() => navigateModal('prev')}
            >
              <FaChevronLeft />
            </NavigationButton>
            
            <NavigationButton 
              className="next" 
              onClick={() => navigateModal('next')}
            >
              <FaChevronRight />
            </NavigationButton>
            
            <ModalContent
              variants={contentVariants}
              initial="hidden"
              animate="visible"
            >
              {selectedItem.type === 'photo' ? (
                <img src={selectedItem.src} alt={selectedItem.alt} />
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${selectedItem.videoId}?autoplay=1`}
                  title={selectedItem.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
