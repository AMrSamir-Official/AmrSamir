"use client"; // Add this line to indicate client-side rendering

import styled, { keyframes } from "styled-components";

// Keyframes for animations
const worm1 = keyframes`
  from {
    stroke-dashoffset: 0;
  }
  50% {
    animation-timing-function: steps(1);
    stroke-dashoffset: -358;
  }
  50.01% {
    animation-timing-function: linear;
    stroke-dashoffset: 358;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

const worm2 = keyframes`
  from {
    stroke-dashoffset: 358;
  }
  50% {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: -358;
  }
`;

// Styled components
const Main = styled.main`
  @apply grid place-items-center h-screen;
  padding: 1.5em 0;
  background-color: hsl(var(--hue), 90%, 95%);
  color: hsl(var(--hue), 90%, 5%);
  font: 1em/1.5 sans-serif;
  transition: background-color 0.3s;

  /* Dark theme */
  @media (prefers-color-scheme: dark) {
    --bg: hsl(var(--hue), 90%, 5%);
    --fg: hsl(var(--hue), 90%, 95%);
  }
`;

const Ip = styled.svg`
  width: 16em;
  height: 8em;
`;

const IpTrack = styled.g`
  stroke: hsl(var(--hue), 90%, 90%);
  transition: stroke 0.3s;
`;

const IpWorm1 = styled.path`
  animation: ${worm1} 2s linear infinite;
`;

const IpWorm2 = styled.path`
  animation: ${worm2} 2s linear infinite;
`;

const Loading = () => (
  <Main className="w-full flex h-full min-h-[70vh] justify-center">
    <Ip xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 128">
      <defs>
        <linearGradient id="grad1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5ebd3e" />
          <stop offset="33%" stopColor="#ffb900" />
          <stop offset="67%" stopColor="#f78200" />
          <stop offset="100%" stopColor="#e23838" />
        </linearGradient>
        <linearGradient id="grad2" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0%" stopColor="#e23838" />
          <stop offset="33%" stopColor="#973999" />
          <stop offset="67%" stopColor="#009cdf" />
          <stop offset="100%" stopColor="#5ebd3e" />
        </linearGradient>
      </defs>
      <g fill="none" strokeLinecap="round" strokeWidth="16">
        <IpTrack stroke="#ddd">
          <path d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56" />
          <path d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64" />
        </IpTrack>
        <g strokeDasharray="180 656">
          <IpWorm1
            stroke="url(#grad1)"
            strokeDashoffset="0"
            d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56"
          />
          <IpWorm2
            stroke="url(#grad2)"
            strokeDashoffset="358"
            d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64"
          />
        </g>
      </g>
    </Ip>
  </Main>
);

export default Loading;
