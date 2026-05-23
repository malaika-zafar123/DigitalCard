function Input({
  label,
  name,
  value,
  onChange,
  type = "text",
  error,
  placeholder,
  inputMode,
  max,
  min,
}) {
  return (
    <div>
      <label className="text-gray-300">{label}</label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        inputMode={inputMode}
        max={max}
        min={min}
        className={`
        w-full
        mt-2
        p-4
        rounded-2xl
        bg-[#0F172A]
        text-white
        outline-none
        ${type === "date" ? "[color-scheme:dark]" : ""}
        ${error ? "border border-red-500" : "border border-transparent"}
        `}
      />

      {error && (
        <p className="text-red-400 text-sm mt-1">{error}</p>
      )}
    </div>
  );
}

export default Input;
