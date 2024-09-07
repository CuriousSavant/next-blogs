import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

export default function Blog({ ctn }) {
    const [hasLoaded, setHasLoaded] = useState(false);
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

    useEffect(() => {
        if (isVisible) {
            setHasLoaded(true);
        }
    }, [isVisible]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: hasLoaded ? 1 : 0, y: hasLoaded ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            className="p-4 bg-white shadow-lg rounded-xl overflow-hidden"
        >
            <div
                style={{
                    backgroundImage: `url(${ctn.image})`,
                }}
                className="w-full h-52 bg-center bg-no-repeat bg-cover rounded-t-xl"
            ></div>
            <div className="p-4 space-y-4">
                <h1 className="text-2xl font-semibold text-gray-800">{ctn.title}</h1>
                <p className="text-gray-600">{ctn.desc}</p>
                <div className="flex items-center justify-between mt-4">
                    <div className="flex flex-wrap gap-2">
                        {ctn.tag.map((tag, index) => (
                            <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm" key={index}>{tag}</span>
                        ))}
                    </div>
                    <span className="text-xs text-gray-500">{ctn.dateTime}</span>
                </div>
            </div>
        </motion.div>
    );
}
