const Button = ({
    text = "",
    size = "medium",
    bgColor = "bg-[#087f5b]",
    textColor = "text-white",
    customClasses = "",
    onClick,
    targetId,
    isScrolled = false,
  }) => {
    const sizeClasses =
      size === "small"
        ? "w-[6rem] h-[2rem]"
        : size === "large"
        ? "w-[12rem] h-[3rem]"
        : "w-[9rem] h-[2.625rem]";
  
    const handleClick = () => {
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
      if (onClick) onClick();
    };
  
    return (
      <button
        className={`rounded-[0.5625rem] transition-colors font-[700] ${sizeClasses} ${bgColor} ${textColor} ${customClasses} ${
          isScrolled ? "bg-[#087f5b] text-white" : "bg-[#087f5b] text-white"
        }`}
        onClick={handleClick}
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  