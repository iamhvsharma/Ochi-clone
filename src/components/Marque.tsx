import { motion } from "framer-motion";

const Marque = () => {
    
  return <div className="w-full py-20 rounded-t-3xl bg-[#004d43]">
    <div className="flex text whitespace-nowrap gap-8 border-t-2 border-b-2 overflow-hidden border-zinc-500">
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration:5}} className="text-[15vw] leadning-none tracking-tighter -mb-[4vw] -mt-[4vw]    font-bold">WE ARE OCHI</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease: "linear", repeat: Infinity, duration:5}} className="text-[15vw] leadning-none tracking-tighter -mb-[4vw] -mt-[4vw] font-bold">WE ARE OCHI</motion.h1>
    </div>
  </div>;
};

export default Marque;
