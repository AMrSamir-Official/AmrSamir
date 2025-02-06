"use client";
import { IntroSection } from "@/components";
import CardItem from "@/components/CardItem"; // Import the CardItem component
import { useRef, useState } from "react";
import styled from "styled-components";
import tabContent from "../../constants/Projects";

// Categories and their models
const categories = [
  "SaaS",
  "Startup",
  "Software",
  "Business",
  "Landing Page",
  "Boilerplate",
  "Blog",
  "Portfolio",
  "Documentation",
  "Dashboard",
  "E-Commerce",
];

// Styled Components
const PageContainer = styled.div`
  background-color: #111;
  color: #fff;
  padding: 20px;
`;

const CategoryContainer = styled.div`
  margin-bottom: 40px;
  position: relative;
`;

const CategoryTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
  color: #fff;
`;

const ModelsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 16px;
  padding-bottom: 16px;
  scroll-behavior: smooth;
  position: relative;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: #333;
  }
`;

const NavigationArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: opacity 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  right: 10px;
  &:first-of-type {
    right: unset;
    left: 10px;
  }

  &:last-of-type {
    right: 10px;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export default function ServicesPage() {
  const [models] = useState(tabContent);

  // Using useRef directly for containerRefs
  const containerRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const scroll = (category: string, direction: string) => {
    const container = containerRefs.current[category];
    if (container) {
      const scrollAmount = direction === "left" ? -300 : 300; // Adjust scroll amount as needed
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const isScrollable = (category: string | number, direction: string) => {
    const container = containerRefs.current[category];
    if (container) {
      if (direction === "left") {
        return container.scrollLeft > 0;
      } else {
        return (
          container.scrollLeft < container.scrollWidth - container.clientWidth
        );
      }
    }
    return false;
  };

  return (
    <PageContainer>
      <IntroSection />
      <h1 className="text-5xl center text-center m-2.5 w-full">Services</h1>
      {categories.map((category) => {
        // Check if the category has any models (projects)
        if (!models[category] || models[category].length === 0) return null;

        return (
          <CategoryContainer key={category}>
            <CategoryTitle>{category}</CategoryTitle>
            <ModelsContainer
              ref={(el) => {
                containerRefs.current[category] = el;
              }} // Fix: no need to return the element, just assign it
            >
              {models[category]?.map((model, index) => (
                <CardItem
                  key={model.title}
                  title={model.title}
                  imageUrl={model.imgUrl}
                  description={model.description}
                  price={model.price}
                  demo={model.Demo}
                />
              ))}
            </ModelsContainer>
            <NavigationArrow onClick={() => scroll(category, "left")}>
              &#10094; {/* Left arrow */}
            </NavigationArrow>
            <NavigationArrow onClick={() => scroll(category, "right")}>
              &#10095; {/* Right arrow */}
            </NavigationArrow>
          </CategoryContainer>
        );
      })}
    </PageContainer>
  );
}
