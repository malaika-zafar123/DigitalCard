import Skills from "./Skills";
import Info from "./Info";
import { formatDisplayDate } from "../utils/formatDate";

function PersonalInfo({ user, setShowForm }) {
  return (
    <div className="flex-1 p-8 text-white">
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

      <div className="mt-10">
        <h1 className="text-3xl font-bold mb-8">Personal Info</h1>

        <div className="space-y-5">
          <Info title="Email" value={user.email} />
          <Info title="Phone" value={user.phone} />
          <Info title="Date of Birth" value={formatDisplayDate(user.dob)} />
          <Info title="Address" value={user.address} />
        </div>
      </div>

      <Skills />
    </div>
  );
}

export default PersonalInfo;
