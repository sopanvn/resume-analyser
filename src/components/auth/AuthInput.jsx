function AuthInput({ type, placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-blue-500"
    />
  );
}

export default AuthInput;