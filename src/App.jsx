import { useState } from "react";

import Sidebar from "./Components/Sidebar";
import PersonalInfo from "./Components/PersonalInfo";
import EditForm from "./Components/EditForm";

function App() {

  const [showForm, setShowForm] = useState(false);

  const [user, setUser] = useState({
    name: "Malaika Zafar",
    email: "abc@gmail.com",
    phone: "92123456789",
    dob: "2005-05-12",
    skills: "React, Tailwind CSS",
    address: "Lahore, Pakistan",
    bio: "I am a passionate Frontend Developer . I enjoy creating responsive and user-friendly websites with clean and modern designs. I am continuously learning new technologies to improve my development skills.",
    image: "https://plus.unsplash.com/premium_photo-1679064458881-76904cf6d1aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGlqYWJpJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
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