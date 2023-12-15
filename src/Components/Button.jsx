const Button = ({ children }) => {
  return (
    <>
      <a
        href="#"
        class="animate-background inline-block rounded-lg bg-gray-900 from-pink-500 via-red-500 to-yellow-500 bg-[length:400%_400%] p-0.5 [animation-duration:_6s] hover:bg-gradient-to-r dark:bg-gray-800"
      >
        <span
          class="block rounded-md bg-white px-5 py-3 text-sm font-medium text-gray-900 dark:bg-gray-900 dark:text-white"
        >
          Get Started
        </span>
      </a>

    </>
  );
};

export default Button;