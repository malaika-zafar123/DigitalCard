function Info({ title, value }) {
  return (
    <div
      className="
    bg-[#111827]/60
    border
    border-gray-700
    rounded-2xl
    p-5
    "
    >
      <h2 className="text-gray-400 text-lg">{title}</h2>

      <p className="text-white mt-2 text-xl">{value || "—"}</p>
    </div>
  );
}

export default Info;
