"use client";
import CardItem from "@/components/CardItem";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import tabContent from "../../constants/Projects";
// التصنيفات
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

// **تصميم الصفحة الداكن**
const TabsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-height: 200vh;
  background-color: #111;
  color: #fff;
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

const TabList = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  background-color: #222;
  padding: 16px;
  border-right: 2px solid #444;
  overflow: auto;
  @media (max-width: 650px) {
    flex-direction: row;
    overflow-y: hidden;
    width: 100%;
  }
`;

const Tab = styled(motion.div)`
  padding: 12px 16px;
  margin: 4px 0;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
  min-width: fit-content;
  transition: background 0.3s ease, color 0.3s ease;
  background-color: ${({ "data-is-active": isActive }) =>
    isActive ? "#0070f3" : "transparent"};
  color: ${({ "data-is-active": isActive }) => (isActive ? "#fff" : "#aaa")};

  &:hover {
    background-color: ${({ "data-is-active": isActive }) =>
      isActive ? "#0070f3" : "#333"};
  }
`;

const ContentContainer = styled.div`
  display: grid;
  overflow: auto;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-template-rows: auto;
  gap: 16px;
  padding: 24px;
  justify-items: center;
  align-items: start;
  flex: 1;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  }
`;

// card

export default function TabsVertical() {
  const [activeTab, setActiveTab] = useState<string>(categories[0]);

  return (
    <TabsContainer>
      <TabList>
        {categories.map(
          (category) =>
            // تحقق من وجود مشاريع في الفئة قبل إظهار التبويب
            tabContent[category]?.length > 0 && (
              <Tab
                key={category}
                data-is-active={activeTab === category}
                onClick={() => setActiveTab(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </Tab>
            )
        )}
      </TabList>
      <AnimatePresence mode="wait">
        <ContentContainer
          key={activeTab}
          as={motion.div}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.3 }}
        >
          {tabContent[activeTab]?.map((e) => (
            <CardItem
              key={e.title}
              title={e.title}
              imageUrl={e.imgUrl}
              description={e.description}
              price={e.price}
              demo={e.Demo}
            />
          ))}
        </ContentContainer>
      </AnimatePresence>
    </TabsContainer>
  );
}
