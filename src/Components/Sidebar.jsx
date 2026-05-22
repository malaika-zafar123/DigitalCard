import SocialIcons from "./SocialIcons";
import { CiLocationOn } from "react-icons/ci";

function Sidebar({ user }) {

  return (

    <div className="
    w-full
    md:w-[320px]
    bg-gradient-to-b
    from-[#312E81]
    via-[#1E1B4B]
    to-[#0F172A]
    p-8
    flex
    flex-col
    items-center
    gap-6
    text-white
    ">

      {/* IMAGE */}

      <img
        src={
          user.image
            ? user.image
            : "https://i.pravatar.cc/300"
        }
        alt=""
        className="
        w-32
        h-32
        rounded-full
        object-cover
        border-4
        border-violet-500
        "
      />

      {/* NAME */}

      <h1 className="
      text-2xl
      font-bold
      ">
        {user.name}
      </h1>

      {/* ROLE */}

      <p className="
      text-gray-400
      ">
        Frontend Developer
      </p>

      {/* LOCATION */}

      <span className="bg-[#0F172A] px-4 py-2 flex gap-3 rounded-xl text-sm text-white">

        <CiLocationOn className="text-xl text-white"/>{user.address}</span>

      {/* BIO */}

      <p className="text-gray-400text-smleading-6text-center"> {user.bio}</p>

      {/* SOCIAL ICONS */}

      <SocialIcons />

      {/* BUTTON */}

      <button className="
      w-full
      bg-gradient-to-r
      from-violet-600
      to-fuchsia-500
      py-3
      rounded-xl
      font-semibold
      hover:scale-105
      transition
      duration-300
      shadow-lg
      ">

        Download 

      </button>

    </div>
  );
}

export default Sidebar;