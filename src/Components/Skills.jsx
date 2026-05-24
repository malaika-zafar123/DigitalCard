function Skills({user}) {


  return (

    <div className="mt-10 ">

      {/* HEADING */}

      <div className="
      flex 
      justify-between
      items-center
      mb-5
      ">

        <h1 className="
        text-2xl
        font-semibold
        text-white
        ">
          Skills
        </h1>

        <button className="
        text-violet-400
        font-medium
        ">
          View All
        </button>

      </div>

      {/* SKILLS */}

      <div className="
    grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    gap-5

      ">

       {
  user.skills.map((skill, index) => (

    <div
      key={index}
      className="
      bg-[#111827]/60
      border
      border-gray-700
      rounded-2xl
      p-5
      flex
      items-center
      gap-4
      hover:border-violet-500
      transition
      duration-300
      "
    >

      <img
        src={skill.image}
        alt=""
        className="
        w-10
        h-10
        "
      />

      <h2 className="
      text-white
      text-lg
      font-medium
      ">
        {skill.name}
      </h2>

    </div>

  ))
}

            </div>

        

      <div className="mt-12 border-t border-gray-300 pt-4 gap-4 text-center text-white text-sm">
        <p>© Copyright <strong className="font-bold text-white">Digital Card</strong>. All Rights Reserved</p>
        <p>Designed by <span className="text-white">Tailwind Css</span> </p>
      </div>
    </div>
  );
}

export default Skills;