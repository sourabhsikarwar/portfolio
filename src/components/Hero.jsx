import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "../assets";
import styles from "../style";
import Button from "./Common/Button";
import TextWithHighlights from "./Common/TextWithHighlights";

export default function Hero() {
  return (
    <div className="relative isolate pt-32 pb-24 px-6 sm:px-16">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
        />
      </svg>
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
            clipPath:
              "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
          }}
        />
      </div>
      <div
        className={classNames(
          "mx-auto flex flex-col md:flex-row items-center gap-8",
          styles.boxWidth
        )}
      >
        <motion.div
          className="mx-auto flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Tech greeting badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-secondary/10 backdrop-blur-sm border border-secondary/20 rounded-full px-4 py-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-sm font-semibold text-secondary">
              Hello World! 👋
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="mt-4 text-3xl lg:text-5xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="block">Hello, I'm</span>
            <motion.span
              className="bg-gradient-to-br from-[#6ac1ff] via-[#8aceff] to-white bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform duration-300 relative overflow-hidden"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ backgroundSize: "200% 200%" }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="inline-block"
              >
                Sourabh Sikarwar
              </motion.span>
            </motion.span>
          </motion.h1>

          {/* Role description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TextWithHighlights
              text="A passionate Full Stack Developer crafting digital experiences with modern technologies. Specialized in building scalable web applications using TypeScript, Next.js, and Node.js."
              highlights={[
                "Full Stack Developer",
                "TypeScript",
                "Next.js",
                "Node.js",
              ]}
              tag="p"
              highlightStyle="bold"
              className="mt-4 text-sm lg:text-lg text-gray-400 leading-relaxed max-w-2xl"
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-row items-center gap-4 mt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="solid"
                style="primary"
                href="https://dub.sh/pupdy2l"
                target="_blank"
                rel="noreferrer"
                className="flex items-center w-fit gap-x-6"
              >
                Resume
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outlined"
                style="secondary"
                href="#contact"
                className="border-2 border-secondary/30 text-secondary hover:bg-secondary/10 hover:border-secondary/50 transition-all duration-300"
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Simple profile image */}
        <motion.div
          className="mx-auto flex-1"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <div className="w-full md:w-4/5 mx-auto">
            <img src={profile} alt="Sourabh Sikarwar" className="rounded-md" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
