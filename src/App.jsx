import { useState } from "react";

import Sidebar from "./Components/Sidebar";
import PersonalInfo from "./Screen/PersonalInfo";
import EditForm from "./Screen/EditForm";


function App() {

  const [showForm, setShowForm] = useState(false);

  const [user, setUser] = useState({
    name: "Malaika Zafar",
    email: "abc@gmail.com",
    phone: "+92 123456789",
    DateOfBirth: "2006-01-01",

    skills: [

      {
        name: "React",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },

      {
        name: "JavaScript",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },

      {
        name: "Tailwind CSS",
        image:
          "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      },

      {
        name: "HTML",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },

      {
        name: "CSS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },

      {
        name: "GitHub",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },

    ],

    address: "SDK, Pakistan",

    bio: "I am a passionate Frontend Developer.I am continuously learning new technologies to improve my development skills.",

    image:
      "https://plus.unsplash.com/premium_photo-1679064458881-76904cf6d1aa?w=500",
  });


  return (
    <div className="
    min-h-screen
    bg-gradient-to-br
    from-[#0F172A]
    via-[#1E1B4B]
    to-[#312E81] flex
    justify-center  items-center
    p-5
    ">

      <div className="
      flex
      flex-col
      lg:flex-row
      w-full
      max-w-6xl
      rounded-3xl
      overflow-hidden
      bg-[#111827]/40
      backdrop-blur-lg
      shadow-2xl
      ">

        <Sidebar user={user} />


        {
          showForm ? (
            <EditForm
              user={user}
              setUser={setUser}
              setShowForm={setShowForm}
            />
          ) : (
            <PersonalInfo
              user={user}
              setShowForm={setShowForm}
            />

          )
        }


      </div>

    </div>
  );
}

export default App;