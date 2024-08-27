import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import anime from 'animejs';
import styled, { css } from 'styled-components';
import IconLoader from './IconLoader';
import mixins from './mixins';

const theme = {
  bp: {
    mobileS: `max-width: 330px`,
    mobileM: `max-width: 400px`,
    mobileL: `max-width: 480px`,
    tabletS: `max-width: 600px`,
    tabletL: `max-width: 768px`,
    desktopXS: `max-width: 900px`,
    desktopS: `max-width: 1080px`,
    desktopM: `max-width: 1200px`,
    desktopL: `max-width: 1400px`,
  },
  mixins,
};

const LoaderWrapper = styled.div.attrs((props) => ({
  'data-ismounted': props.isMounted,
}))`
  ${({ theme }) => mixins.flexCenter}
  position: fixed;
  max-width: 100vw;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--dark-navy);
  z-index: 99;
  transition: opacity 0.3s ease-in-out;

  ${(props) =>
    props['data-ismounted']
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
          z-index: -1;
        `}

  .logo-wrapper {
    width: max-content;
    max-width: 100px;
    transition: var(--transition);
    svg {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      fill: none;
      user-select: none;
      #B {
        opacity: 0;
      }
    }
  }
`;

const Loader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: '#logo path',
        delay: 300,
        duration: 1500,
        easing: 'easeInOutQuart',
        strokeDashoffset: [anime.setDashoffset, 0],
      })
      .add({
        targets: '#logo #B',
        duration: 700,
        easing: 'easeInOutQuart',
        opacity: 1,
      })
      .add({
        targets: '#logo',
        duration: 500,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.1,
      });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 200);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <LoaderWrapper isMounted={isMounted}>
      <Helmet bodyAttributes={{ class: `hidden` }} />
      <div className="logo-wrapper">
        <IconLoader />
      </div>
    </LoaderWrapper>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;