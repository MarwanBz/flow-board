"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

// import AnimatedTitle from "@/components/animated-title";
// import { AuroraGradient } from "@/components/aurora-gradient";
// import { BackgroundBeam } from "@/components/background-beam";
// import { Button } from "@/components/ui/button";
// import { FAQ } from "@/components/faq";
// import { Header } from "@/components/header";
// import { Locale } from "@/lib/i18n-config";
// import { WhyTaskio } from "@/components/why-taskio";
// import { getDictionary } from "@/lib/get-dictionary";
// import { useInView } from "react-intersection-observer";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [dict, setDict] = useState<any>(null);

  useEffect(() => {
    getDictionary(lang).then(setDict);
  }, [lang]);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  if (!dict) return null;

  const isRTL = lang === "ar";

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className="taskio-landing relative min-h-screen bg-black text-white overflow-hidden"
    >
      <BackgroundBeam />
      <AuroraGradient />
      <Header dict={dict} />

      <motion.div
        className="container mx-auto px-4 py-24 relative z-10"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
      >
        {/* Hero Section */}
        <motion.div
          className="flex flex-col items-center text-center space-y-8 mb-16 mt-16"
          variants={fadeInUp}
        >
          <AnimatedTitle text={dict.title} />
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-2xl font-semibold"
            variants={fadeInUp}
          >
            {dict.valueProposition}
          </motion.p>
          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-2xl"
            variants={fadeInUp}
          >
            {dict.description}
          </motion.p>
          <motion.div className="space-y-4" variants={fadeInUp}>
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-8 py-4 button-hover-effect"
            >
              {dict.cta}
            </Button>
            <p className="text-sm text-gray-400">
              {dict.limitedOffer.text}: {dict.limitedOffer.description}
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={staggerChildren}
        >
          <WhyTaskio dict={dict} />

          {/* Features Section */}
          <motion.div className="mt-24" variants={fadeInUp}>
            <h2 className="text-3xl font-bold text-center mb-12">
              {dict.features.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {dict.features.list.map((feature: any, index: number) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-lg bg-gray-900 bg-opacity-50 hover:bg-opacity-70 transition-colors backdrop-blur-sm"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <h3 className="text-xl font-semibold mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <FAQ dict={dict} />

          {/* Final CTA */}
          <motion.div className="mt-24 text-center" variants={fadeInUp}>
            <h2 className="text-3xl font-bold mb-8">
              Ready to boost your team's productivity?
            </h2>
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-8 py-4 button-hover-effect"
            >
              {dict.cta}
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
