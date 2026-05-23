import { useState } from "react";
import Input from "./Input";
import { validateUser } from "../utils/validateUser";

function EditForm({ user, setUser, setShowForm }) {
  const [errors, setErrors] = useState({});

  const clearFieldError = (name) => {
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });

    clearFieldError(name);
  };

  const handlePhoneChange = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, "");

    setUser({
      ...user,
      phone: digitsOnly,
    });

    clearFieldError("phone");
  };

  const handleSave = () => {
    const validationErrors = validateUser(user);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setShowForm(false);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="flex-1 p-8">
      <h1 className="text-3xl text-white font-bold mb-8">Edit Profile</h1>

      <div className="grid md:grid-cols-2 gap-5">
        <Input
          label="Name"
          name="name"
          value={user.name}
          onChange={handleChange}
          error={errors.name}
        />

        <Input
          label="Email"
          name="email"
          type="email"
          value={user.email}
          onChange={handleChange}
          error={errors.email}
        />

        <Input
          label="Phone"
          name="phone"
          type="tel"
          inputMode="numeric"
          value={user.phone}
          onChange={handlePhoneChange}
          placeholder="Numbers only"
          error={errors.phone}
        />

        <Input
          label="Date Of Birth"
          name="dob"
          type="date"
          value={user.dob}
          onChange={handleChange}
          max={today}
          error={errors.dob}
        />

        <Input
          label="Skills"
          name="skills"
          value={user.skills}
          onChange={handleChange}
          error={errors.skills}
        />

        <Input
          label="Address"
          name="address"
          value={user.address}
          onChange={handleChange}
          error={errors.address}
        />
      </div>

      <div className="mt-5">
        <label className="text-gray-300">Bio</label>
        <textarea
          name="bio"
          value={user.bio}
          onChange={handleChange}
          placeholder="Write your bio..."
          className={`
        w-full
        mt-2
        p-4
        rounded-2xl
        bg-[#0F172A]
        text-white
        outline-none
        ${errors.bio ? "border border-red-500" : "border border-transparent"}
        `}
          rows="5"
        />
        {errors.bio && (
          <p className="text-red-400 text-sm mt-1">{errors.bio}</p>
        )}
      </div>

      <div className="mt-5">
        <Input
          label="Profile Image URL"
          name="image"
          value={user.image}
          onChange={handleChange}
          placeholder="Paste image URL"
          error={errors.image}
        />
      </div>

      <div className="mt-6">
        <button
          type="button"
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

export default EditForm;