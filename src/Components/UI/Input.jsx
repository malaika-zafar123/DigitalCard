function Input({
    label,
    name,
    value,
    onChange,
    type = "text"
}){
    return (
        <>
        <label className="text-gray-300" >{label}</label>
        <input 
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full
        mt-2
        p-4
        rounded-2xl
        bg-[#0F172A]
        text-white
        "

        />
        </>
    )
}

export default Input;