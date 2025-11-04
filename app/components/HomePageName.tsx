import { CiBellOn } from "react-icons/ci";
import { BiRightArrow } from "react-icons/bi";
import { BiLeftArrow } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { useScramble } from "use-scramble";

export default function HomePageName() {
  const nameRef = useScramble({
    text: "Alex",
    playOnMount: true,
    speed: 0.1,
    range: [65, 76, 69, 88, 83, 73, 79, 78],
    overdrive: false,
  });
  const surnameRef = useScramble({
    text: "Sison",
    playOnMount: true,
    speed: 0.1,
    range: [65, 76, 69, 88, 83, 73, 79, 78],
    overdrive: false,
  });
  const frontendRef = useScramble({
    text: "3d Artist",
    playOnMount: true,
    speed: 0.2,
    range: [65, 76, 69, 88, 83, 73, 79, 78],
    overdrive: false,
  });

  const scrambleText = () => {
    nameRef.replay();
    surnameRef.replay();
  };
  return (
    <div
      className="lg:text-7xl text-white z-50 hover:cursor-pointer md:mt-0 items-center text-center lg:text-start justify-center lg:px-0 lg:max-w-7xl lg:mx-auto"
      onMouseEnter={scrambleText}
    >
      <div className="flex lg:justify-end justify-center lg:w-[1100px] w-screen mt-42 lg:mt-0">
        <div className="text-sm font-mono items-center flex"></div>
      </div>
      <span className="font-sans text-red-500">./</span>
      <span
        ref={nameRef.ref}
        className=" font-overcamebold md:text-8xl text-7xl mt-48"
      />
      <span
        className="font-overcameoutline md:text-8xl text-7xl text-red-500"
        ref={surnameRef.ref}
      />
      <span className="font-sans text-red-500">/.</span>
      <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
        <span className="flex items-center justify-center lg:justify-start pt-8 lg:pt-0">
          <CiBellOn className="text-lg mr-1 text-red-500 font-bold" />
          <p className="text-sm font-mono" ref={frontendRef.ref}></p>
        </span>
        <div className="flex items-center space-x-4 text-4xl mt-16">
          <BiRightArrow className="text-red-500" />
          <a href="https://www.instagram.com/alexismortelsison" target="_blank">
            <AiOutlineInstagram />
          </a>
          <a href="https://github.com/alexmortelsison" target="_blank">
            <AiFillGithub />
          </a>
          <AiOutlineMail />
          <BiLeftArrow className="text-red-500" />
        </div>
      </div>
    </div>
  );
}
