import image from "../assets/images/image.png";

const Hero = () => {
    return (
        <div className="aspect-video border border-light dark:border-dark overflow-hidden relative rounded-3xl shadow-2xl">
            <div className="absolute inset-0">
                <img className="object-cover" src={image} />
                <div className="absolute bg-linear-to-r dark:from-dark dark:via-dark/75 from-light inset-0 to-transparent via-light/75" />
            </div>
            <div className="flex flex-col gap-2 h-full justify-center max-w-[55%] p-10 relative">
                <div className="dark:text-slate-400 flex gap-2 items-center text-slate-500 text-sm">
                    <span className="[font-variation-settings:'wght'300] material-symbols-outlined select-none">
                        person
                    </span>
                    <span className="font-bold tracking-wider">ABOUT ME</span>
                </div>
                <h1 className="dark:text-white font-black text-6xl text-slate-900 tracking-tight">
                    Hello there,
                    <br />
                    I'm Jarkko 👋
                </h1>
                <p className="dark:text-slate-300 font-medium text-lg text-slate-600">
                    I'm a full-stack developer from Helsinki with a Master's
                    degree in Computer Science. I value writing testable and
                    maintainable code, and enjoy working as part of a team. My
                    goal is to always deliver software that meets the needs of
                    both the business and the users.
                </p>
            </div>
        </div>
    );
};

export default Hero;
