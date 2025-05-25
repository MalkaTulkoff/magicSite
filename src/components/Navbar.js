import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  background: ${({ scrolled, theme }) => 
    scrolled ? theme.colors.background : 'transparent'};
  box-shadow: ${({ scrolled, theme }) => 
    scrolled ? theme.shadows.small : 'none'};
  z-index: 1000;
  transition: all ${({ theme }) => theme.transitions.default};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 20px;
  }
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme, scrolled }) => 
    scrolled ? theme.colors.primary : theme.colors.background};
  font-family: ${({ theme }) => theme.fonts.heading};
  
  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${({ theme, scrolled }) => 
    scrolled ? theme.colors.text : theme.colors.background};
    
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 250px;
    height: 100vh;
    background: ${({ theme }) => theme.colors.background};
    padding-top: 80px;
    transition: all 0.5s ease;
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const NavItem = styled.li`
  margin-left: 30px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 20px 0;
  }
`;

const NavLink = styled(Link)`
  position: relative;
  color: ${({ theme, scrolled, active }) => 
    active 
      ? theme.colors.secondary 
      : scrolled || window.innerWidth <= 768
        ? theme.colors.text 
        : theme.colors.background};
  font-weight: 500;
  padding: 5px 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    color: ${({ theme, active }) => 
      active ? theme.colors.secondary : theme.colors.text};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ active }) => (active ? '100%' : '0')};
    height: 2px;
    background-color: ${({ theme }) => theme.colors.secondary};
    transition: width ${({ theme }) => theme.transitions.default};
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const closeMenu = () => {
    setIsOpen(false);
  };
  
  return (
    <Nav scrolled={scrolled}>
      <Logo to="/" scrolled={scrolled}>
        Magic<span>Michael</span>
      </Logo>
      
      <MenuIcon onClick={toggleMenu} scrolled={scrolled}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      
      <NavMenu isOpen={isOpen}>
        <NavItem>
          <NavLink 
            to="/" 
            scrolled={scrolled} 
            active={location.pathname === '/'} 
            onClick={closeMenu}
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink 
            to="/about" 
            scrolled={scrolled} 
            active={location.pathname === '/about'} 
            onClick={closeMenu}
          >
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink 
            to="/services" 
            scrolled={scrolled} 
            active={location.pathname === '/services'} 
            onClick={closeMenu}
          >
            Services
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink 
            to="/gallery" 
            scrolled={scrolled} 
            active={location.pathname === '/gallery'} 
            onClick={closeMenu}
          >
            Gallery
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink 
            to="/contact" 
            scrolled={scrolled} 
            active={location.pathname === '/contact'} 
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </NavItem>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
