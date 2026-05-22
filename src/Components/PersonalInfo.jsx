import Skills from "./Skills";

function PersonalInfo({
  user,
  setShowForm,
}) {

  return (

    <div className="
    flex-1
    p-8
    text-white
    ">

      {/* TOP BUTTON */}

      <div className="flex justify-end">

        <button
          onClick={() => setShowForm(true)}
          className="
          bg-[#111827]/60
          border
          border-violet-500
          px-5
          py-3
          rounded-2xl
          "
        >
          Edit Profile
        </button>

      </div>

      {/* PERSONAL INFO */}

      <div className="mt-10">

        <h1 className="
        text-3xl
        font-bold
        mb-8
        ">
          Personal Info
        </h1>

        <div className="
        space-y-5
        ">

          <Info
            title="Email"
            value={user.email}
          />

          <Info
            title="Phone"
            value={user.phone}
          />

          <Info
            title="Date of Birth"
            value={user.dob}
          />

          <Info
            title="Address"
            value={user.address}
          />

        </div>

      </div>

      {/* SKILLS SECTION LAST MEIN */}

      <Skills />

    </div>
  );
}

function Info({
  title,
  value,
}) {

  return (

    <div className="
    bg-[#111827]/60
    border
    border-gray-700
    rounded-2xl
    p-5
    ">

      <h2 className="
      text-gray-400
      text-lg
      ">
        {title}
      </h2>

      <p className="
      text-white
      mt-2
      text-xl
      ">
        {value}
      </p>

    </div>
  );
}

export default PersonalInfo;