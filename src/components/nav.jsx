import imageAvatar from "../assets/image-avatar.png";
import cardIcon from "../assets/icon-cart.svg";
export default function NavBar() {
  const navigation = [
    { name: "Collections", href: "#", current: true },
    { name: "Men", href: "#", current: false },
    { name: "Women", href: "#", current: false },
    { name: "About", href: "#", current: false },
    { name: "Contact", href: "#", current: false },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className=" w-full flex flex-row gap-2 border-[rgba(0,0,0,0.5)] border-b-[1px] items-center">
      <img src="/logo.svg" alt="" className=" h-fit mr-8" />
      <div className="flex flex-row gap-4">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current
                ? "font-bold text-black border-orange-500 border-b-4"
                : "font-normal text-gray-400",
              "bg-white hover:border-orange-500 hover:font-bold hover:text-black hover:border-b-4 cursor-pointer py-8"
            )}
          >
            {item.name}
          </a>
        ))}
      </div>
      <div className="right-side flex items-center gap-4 ml-auto">
        <img src={cardIcon} alt="" className=" cursor-pointer" />
        <img
          src={imageAvatar}
          alt=""
          className=" hover:border-double rounded-full hover:border-orange-500 hover:border-2 w-16 h-16 cursor-pointer"
        />
      </div>
    </div>
  );
}
