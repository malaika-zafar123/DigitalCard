import Input from "../Components/UI/Input";

function EditForm({
  user,
  setUser,
  setShowForm,
}) {

  const handleChange = (e) => {

    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSave = () => {
    if (!user.email.includes("@")){
      alert("Invalid Email");
      return
    }

    if (user.phone.length < 11){
      alert("Phone number must be 11 digits");
      return
    }

    if (!user.DateOfBirth){
      alert("Enter your Date of Birth ");
      return
    }
    setShowForm(false);
  };

  return (
    <div className="flex-1 p-8">

      <h1 className="
      text-3xl
      text-white
      font-bold
      mb-8
      ">
        Edit Profile
      </h1>

      <div className="
      grid 
      lg:grid-cols-2
      md:grid-cols-2
      gap-5
      ">

        <Input
          label="Name"
          name="name"
          value={user.name}
          onChange={handleChange}
        />

        <Input
          label="Email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />

        <Input
          label="Phone"
          name="phone"
          value={user.phone}
          onChange={handleChange}
        />

        <Input
          label="Date Of Birth"
          name="Date of Birth"
          value={user.DateOfBirth}
          onChange={handleChange}
          type="date"
        />

        <Input
          label="Skills"
          name="skills"
          value={user.skills}
          onChange={handleChange}
        />

        <Input
          label="Address"
          name="address"
          value={user.address}
          onChange={handleChange}
        />

      </div>

      <textarea
        name="bio"
        value={user.bio}
        onChange={handleChange}
        placeholder="Write your bio..."
        className="
        w-full
        mt-5
        p-4
        rounded-2xl
        bg-[#0F172A]
        text-white
        outline-none
        "
        rows="5"
      />

      <input
        type="text"
        name="image"
        value={user.image}
        onChange={handleChange}
        placeholder="Paste image URL"
        className="
        w-full
        mt-5
        p-4
        rounded-2xl
        bg-[#0F172A]
        text-white
        outline-none
        "
      />

      <div className="flex gap-4 mt-6">

        <button
          onClick={handleSave}
          className="
          bg-gradient-to-r
          from-violet-600
          to-fuchsia-500
          px-6
          py-3
          rounded-xl
          text-white
          "
        >
          Save
        </button>

      </div>

    </div>
  );
}

// function Input({
//   label,
//   name,
//   value,
//   onChange,
// }) {

//   return (
//     <div>

//       <label className="text-gray-300">
//         {label}
//       </label>

//       <input
//         type="text"
//         name={name}
//         value={value}
//         onChange={onChange}
//         className="
//         w-full
//         mt-2
//         p-4
//         rounded-2xl
//         bg-[#0F172A]
//         text-white
//         outline-none
//         "
//       />

//     </div>
//   );
// }

export default EditForm;