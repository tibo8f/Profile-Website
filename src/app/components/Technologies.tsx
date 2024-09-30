"use client";

import { FaPython } from "react-icons/fa";
import { MdHtml } from "react-icons/md";
import { RiReactjsLine } from "react-icons/ri";
import { SiAltiumdesigner } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";
import { IoLogoJavascript } from "react-icons/io5";
import { MdCss } from "react-icons/md";
import { SiCsharp } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { BsDatabase } from "react-icons/bs";
import { SiOctave } from "react-icons/si";
import { BiSolidPyramid } from "react-icons/bi";
import { TbBrandOffice } from "react-icons/tb";
import DavinciResolve from "../assets/logo/DaVinci_Resolve.png";
import fusion from "../assets/logo/autodesk_fusion.png";
import Image from "next/image";

const iconVariants = (duration: number) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24" id="technologies">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
        >
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaPython className="text-7xl text-blue-600" />
          </div>
          <p className="text-1xl text-center text-gray-300">Python</p>
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
        >
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <BsDatabase className="text-7xl text-sky-600" />
          </div>
          <p className="text-1xl text-center text-gray-300">SQL Database</p>
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
        >
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiCsharp className="text-7xl text-violet-700" />
          </div>
          <p className="text-1xl text-center text-gray-300">C#</p>
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
        >
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiCplusplus className="text-7xl text-blue-700" />
          </div>
          <p className="text-1xl text-center text-gray-300">C++</p>
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
        >
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </div>
          <p className="text-1xl text-center text-gray-300">React</p>
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
        >
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandNextjs className="text-7xl" />
          </div>
          <p className="text-1xl text-center text-gray-300">NextJs</p>
        </motion.div>

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
        >
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <IoLogoJavascript className="text-7xl text-yellow-400" />
          </div>
          <p className="text-1xl text-center text-gray-300">JavaScript</p>
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
        >
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <MdHtml className="text-7xl" />
          </div>
          <p className="text-1xl text-center text-gray-300">HTML</p>
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
        >
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <MdCss className="text-7xl" />
          </div>
          <p className="text-1xl text-center text-gray-300">CSS</p>
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
        >
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiSolidPyramid className="text-7xl text-blue-500" />
          </div>
          <p className="text-1xl text-center text-gray-300">Blueprism</p>
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
        >
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiAltiumdesigner className="text-7xl text-yellow-600" />
          </div>
          <p className="text-1xl text-center text-gray-300">Altium Designer</p>
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
        >
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiOctave className="text-7xl text-cyan-600" />
          </div>
          <p className="text-1xl text-center text-gray-300">Octave/MatLab</p>
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
        >
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            {/* <SiAutodesk className="text-7xl text-gray-300" /> */}
            <Image
              className="justify-center"
              src={fusion}
              alt="Autodesk Fusion"
              width={70}
              height={70}
            ></Image>
          </div>
          <p className="text-1xl text-center text-gray-300">Fusion 360</p>
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
        >
          <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
            <Image
              className="justify-center"
              src={DavinciResolve}
              alt="Davinci Resolve"
              width={70}
              height={70}
            ></Image>
          </div>
          <p className="text-1xl text-center text-gray-300">Davinci Resolve</p>
        </motion.div>
        <motion.div
          variants={iconVariants(3.8)}
          initial="initial"
          animate="animate"
        >
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandOffice className="text-7xl text-orange-700" />
          </div>
          <p className="text-1xl text-center text-gray-300">Microsoft Office</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
