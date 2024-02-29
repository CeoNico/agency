"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ServiceCard = ({ title, subtitle, imgUrl, bgColor }) => {

  const variants = {
    initial: {
      x:-1000,
    },
    animate: {
      x: 0,
    }
  }
  return (
    <motion.div variants={variants} initial="initial" animate="animate" transition={{duration: 1.5}}  className="p-4 grid gap-4">
      <h1 className="text-2xl lg:text-3xl text-center text-white">{title}</h1>
      <p className="text-white">{subtitle}</p>
      <div className=" flex items-center justify-center">
        <Image className="rounded-full" src={imgUrl} height={200} width={200} />
      </div>
    </motion.div>
  );
};

export default ServiceCard;
