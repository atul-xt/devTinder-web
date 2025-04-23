import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    HTMLIcon, CSSIcon, JavaScriptIcon, TypeScriptIcon, ReactIcon, NextJSIcon,
    VueJSIcon, AngularIcon, NodeJSIcon, ExpressIcon, MongoDBIcon, GraphQLIcon,
    MySQLIcon, PostgreSQLIcon, PythonIcon, DjangoIcon, PytorchIcon,
    JavaIcon, SpringIcon, CsharpIcon, GitIcon, GitHubIcon,
    TailwindCSSIcon, ReduxIcon, FirebaseIcon, BootstrapIcon, CppIcon,
    DartIcon, FigmaIcon, FlutterIcon, GoIcon, GSAPIcon, PostmanIcon,
    JqueryIcon, KotlinIcon, PHPIcon, LaravelIcon, PrismaIcon, RedisIcon,
    RubyIcon, RustIcon, ThreeJSIcon, WordpressIcon,
    iconMap
} from "../utils/skillsIcon";


const SwipeDeck = ({ cards }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [swipeDirection, setSwipeDirection] = useState(null);
    const [swipeResult, setSwipeResult] = useState("");
    const [showAbout, setShowAbout] = useState(false);

    const handleSwipe = (direction) => {
        if (direction === "right") {
            setSwipeResult("interested");
        } else if (direction === "left") {
            setSwipeResult("ignored");
        }

        setSwipeDirection(direction);
        setTimeout(() => {
            setCurrentIndex((prev) => prev + 1);
            setSwipeDirection(null);
        }, 300);
    };

    if (!cards || cards.length === 0) {
        return <div className="min-h-[620px] w-full bg-gray-100 flex items-center justify-center overflow-hidden">
            <div className="w-80 h-[500px] bg-gray-300 animate-pulse rounded-2xl shadow-xl">

            </div>
        </div>;
    }

    console.log(cards);


    const topCard = cards[currentIndex];
    const nextCard = cards[currentIndex + 1];

    const swipeVariants = {
        enter: { opacity: 0, scale: 0.95 },
        center: { opacity: 1, scale: 1 },
        exitLeft: { x: -300, opacity: 0, rotate: -20 },
        exitRight: { x: 300, opacity: 0, rotate: 20 },
    };

    const onDragEnd = (event, info) => {
        if (info.offset.x > 100) {
            handleSwipe("right");
        } else if (info.offset.x < -100) {
            handleSwipe("left");
        }
    };

    return (
        <div className="relative w-full min-h-[620px] bg-gray-100 flex items-center justify-center overflow-hidden">
            {nextCard && (
                <div className="absolute w-80 h-[440px] bg-white rounded-2xl shadow-xl scale-95 translate-y-3 opacity-70">
                    <div className="relative h-full">
                        <img
                            src={nextCard?.profileUrl}
                            alt={nextCard?.firstName}
                            className="w-full h-full object-cover rounded-xl"
                        />
                        <div className="absolute bottom-0 p-5">
                            <h2 className="text-xl font-bold">{nextCard?.firstName}</h2>
                            <p className="text-sm text-gray-600">{nextCard?.about}</p>
                        </div>
                    </div>
                </div>
            )}
            <AnimatePresence>
                {topCard && (
                    <motion.div
                        key={topCard?.firstName}
                        className="absolute w-80 h-[500px] bg-white rounded-2xl shadow-xl z-10"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        initial="enter"
                        animate="center"
                        exit={swipeDirection === "right" ? "exitRight" : "exitLeft"}
                        variants={swipeVariants}
                        whileDrag={{ rotate: 10 }}
                        onDragEnd={(e, info) => onDragEnd(e, info)}
                        style={{ touchAction: "pan-y" }}
                    >
                        <div className="relative h-full">
                            <img
                                src={topCard?.profileUrl}
                                alt={topCard?.firstName}
                                className="w-full h-full object-cover rounded-xl"
                            />
                            <div className="absolute bottom-0 p-5 z-10 w-full">
                                <h2 className="text-2xl text-white"><span className="font-semibold">{topCard?.firstName}</span> {topCard?.age}</h2>
                                <div className="mt-1 bg-gray-100/20 w-full rounded-r-2xl rounded-bl-2xl p-2">
                                    <div className="flex items-center gap-2 text-white">
                                        <img className="h-4 w-4 mb-2" src="assets/quotes.webp" alt="QuoteIcon" />
                                        <span className="font-semibold text-sm">About me</span>
                                    </div>
                                    <div role="button" onClick={() => setShowAbout(true)} className="pl-6">
                                        <p className="italic text-white text-sm line-clamp-1">{topCard?.about}</p>
                                        <div className="mt-1 flex gap-2 flex-wrap">
                                            {topCard?.skills.map((skill, index) => {
                                                const IconComponent = iconMap[skill.toLowerCase()];
                                                return (
                                                    <span key={index} className="flex items-center py-1 rounded text-sm">
                                                        {IconComponent && <IconComponent />}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-60 inset-0 bg-gradient-to-t from-black to-transparent rounded-xl" />
                    </motion.div>
                )}
            </AnimatePresence>
            <AnimatePresence>
                {showAbout && (
                    <motion.div initial={{ y: 600 }} animate={{ y: 0 }} exit={{ y: 600 }} transition={{ type: "spring", stiffness: 100, damping: 20 }} className="absolute w-full bottom-0 z-10 px-2 flex items-center justify-center">
                        <div className="relative shadow-md w-96 h-[600px] rounded-2xl overflow-hidden mb-3" >
                            <span role="button" tabIndex="0" onClick={() => setShowAbout(false)} className="absolute right-5 top-5 bg-white rounded-full p-1.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="-0.5 0 25 25" fill="none">
                                    <path d="M3 21.32L21 3.32001" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M3 3.32001L21 21.32" stroke="#000000" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                            {topCard && (
                                <div className="h-full w-full overflow-y-auto">
                                    <div className="h-96 overflow-hidden">
                                        <img className="w-full h-full object-cover" src={topCard?.profileUrl} alt={topCard?.firstName} />
                                    </div>
                                    <div className="bg-white flex flex-col gap-5 items-center p-4">
                                        <div className="bg-cyan-100 rounded-3xl w-full py-2 px-5">
                                            <div className="flex gap-1 items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-4">
                                                    <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
                                                </svg>
                                                <span className="font-semibold">It's me </span>
                                            </div>
                                            <h2 className="pl-4 font-light text-2xl">{`${topCard.firstName} ${topCard.lastName}`} <span className="font-semibold">{topCard?.age}</span></h2>
                                        </div>
                                        <div className="bg-purple-100 rounded-3xl w-full py-2 px-5">
                                            <div className="flex gap-1 items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
                                                    <path fillRule="evenodd" d="M1 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V6Zm4 1.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2 3a4 4 0 0 0-3.665 2.395.75.75 0 0 0 .416 1A8.98 8.98 0 0 0 7 14.5a8.98 8.98 0 0 0 3.249-.604.75.75 0 0 0 .416-1.001A4.001 4.001 0 0 0 7 10.5Zm5-3.75a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Zm0 6.5a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5a.75.75 0 0 1-.75-.75Zm.75-4a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z" clipRule="evenodd" />
                                                </svg>
                                                <span className="font-semibold">About me </span>
                                            </div>
                                            <h2 className="pl-4 font-medium italic text-sm">{topCard?.about} I have lots of knowldege everypne is djh dkhkd dkjhkd </h2>
                                        </div>
                                        <div className="bg-yellow-200 rounded-3xl w-full py-2 px-5">
                                            <div className="flex gap-1 items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
                                                    <path d="M13.024 9.25c.47 0 .827-.433.637-.863a4 4 0 0 0-4.094-2.364c-.468.05-.665.576-.43.984l1.08 1.868a.75.75 0 0 0 .649.375h2.158ZM7.84 7.758c-.236-.408-.79-.5-1.068-.12A3.982 3.982 0 0 0 6 10c0 .884.287 1.7.772 2.363.278.38.832.287 1.068-.12l1.078-1.868a.75.75 0 0 0 0-.75L7.839 7.758ZM9.138 12.993c-.235.408-.039.934.43.984a4 4 0 0 0 4.094-2.364c.19-.43-.168-.863-.638-.863h-2.158a.75.75 0 0 0-.65.375l-1.078 1.868Z" />
                                                    <path fillRule="evenodd" d="m14.13 4.347.644-1.117a.75.75 0 0 0-1.299-.75l-.644 1.116a6.954 6.954 0 0 0-2.081-.556V1.75a.75.75 0 0 0-1.5 0v1.29a6.954 6.954 0 0 0-2.081.556L6.525 2.48a.75.75 0 1 0-1.3.75l.645 1.117A7.04 7.04 0 0 0 4.347 5.87L3.23 5.225a.75.75 0 1 0-.75 1.3l1.116.644A6.954 6.954 0 0 0 3.04 9.25H1.75a.75.75 0 0 0 0 1.5h1.29c.078.733.27 1.433.556 2.081l-1.116.645a.75.75 0 1 0 .75 1.298l1.117-.644a7.04 7.04 0 0 0 1.523 1.523l-.645 1.117a.75.75 0 1 0 1.3.75l.644-1.116a6.954 6.954 0 0 0 2.081.556v1.29a.75.75 0 0 0 1.5 0v-1.29a6.954 6.954 0 0 0 2.081-.556l.645 1.116a.75.75 0 0 0 1.299-.75l-.645-1.117a7.042 7.042 0 0 0 1.523-1.523l1.117.644a.75.75 0 0 0 .75-1.298l-1.116-.645a6.954 6.954 0 0 0 .556-2.081h1.29a.75.75 0 0 0 0-1.5h-1.29a6.954 6.954 0 0 0-.556-2.081l1.116-.644a.75.75 0 0 0-.75-1.3l-1.117.645a7.04 7.04 0 0 0-1.524-1.523ZM10 4.5a5.475 5.475 0 0 0-2.781.754A5.527 5.527 0 0 0 5.22 7.277 5.475 5.475 0 0 0 4.5 10a5.475 5.475 0 0 0 .752 2.777 5.527 5.527 0 0 0 2.028 2.004c.802.458 1.73.719 2.72.719a5.474 5.474 0 0 0 2.78-.753 5.527 5.527 0 0 0 2.001-2.027c.458-.802.719-1.73.719-2.72a5.475 5.475 0 0 0-.753-2.78 5.528 5.528 0 0 0-2.028-2.002A5.475 5.475 0 0 0 10 4.5Z" clipRule="evenodd" />
                                                </svg>
                                                <span className="font-semibold">Skills </span>
                                            </div>
                                            <div className="mt-1 flex gap-2 flex-wrap">
                                                {topCard?.skills.map((skill, index) => {
                                                    const IconComponent = iconMap[skill.toLowerCase()];
                                                    return (
                                                        <span key={index} className="flex items-center gap-2 py-1 bg-white text-black p-1 rounded-sm text-sm">
                                                            <span className="font-semibold">{skill.charAt(0).toUpperCase() + skill.slice(1)}</span>
                                                            {IconComponent && <IconComponent />}
                                                        </span>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SwipeDeck;
