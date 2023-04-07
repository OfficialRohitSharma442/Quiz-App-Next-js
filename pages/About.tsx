import Accordion from "@/components/Accordion";
import { themes } from "@/context/context";
import { useContext } from "react";
const About = () => {
  const { dark, setDark } = useContext(themes);
  return (
    <>
      <div className={`${dark ? "dark" : " "}`}>
        <div className=" h-[calc(100vh-44px)] dark:bg-[#192734]  dark:text-white">
          <div className="">
            <Accordion
              title="Accordion One "
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quo eligendi suscipit soluta perspiciatis, porro nemo enim expedita dolore nesciunt sit eaque, modi consequuntur nobis, eum accusamus voluptatum ducimus! Dicta fugiat alias eligendi, itaque inventore dolores ut possimus earum fuga, harum, quibusdam tenetur sequi sed velit voluptatem perferendis. Illum, dolore. "
            />
            <Accordion
              title="Accordion One "
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quo eligendi suscipit soluta perspiciatis, porro nemo enim expedita dolore nesciunt sit eaque, modi consequuntur nobis, eum accusamus voluptatum ducimus! Dicta fugiat alias eligendi, itaque inventore dolores ut possimus earum fuga, harum, quibusdam tenetur sequi sed velit voluptatem perferendis. Illum, dolore. "
            />
            <Accordion
              title="Accordion One "
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quo eligendi suscipit soluta perspiciatis, porro nemo enim expedita dolore nesciunt sit eaque, modi consequuntur nobis, eum accusamus voluptatum ducimus! Dicta fugiat alias eligendi, itaque inventore dolores ut possimus earum fuga, harum, quibusdam tenetur sequi sed velit voluptatem perferendis. Illum, dolore. "
            />
            <Accordion
              title="Accordion One "
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quo eligendi suscipit soluta perspiciatis, porro nemo enim expedita dolore nesciunt sit eaque, modi consequuntur nobis, eum accusamus voluptatum ducimus! Dicta fugiat alias eligendi, itaque inventore dolores ut possimus earum fuga, harum, quibusdam tenetur sequi sed velit voluptatem perferendis. Illum, dolore. "
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
