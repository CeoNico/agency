"use client";
import Image from "next/image";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useRef } from "react";

const ServiceCard = ({ title, subtitle, imgUrl }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.9 0.9"],
  });

  return (
    <>
      <AnimatePresence>
        <motion.div
          ref={ref}
          style={{
            scale: scrollYProgress,
            opacity: scrollYProgress,

          }}
          className=""
        >
          <div className="p-4 grid gap-4">
            <motion.h1 className="text-2xl lg:text-3xl text-center text-white">
              {title}
            </motion.h1>
            <motion.p className="text-white">{subtitle}</motion.p>
            <div className=" flex items-center justify-center">
              <Image
                className="rounded-3xl p-4"
                src={imgUrl}
                height={400}
                width={400}
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default ServiceCard;
