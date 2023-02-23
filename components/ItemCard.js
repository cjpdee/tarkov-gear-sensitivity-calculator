import { getImgName } from "../util/helpers";

export default function ItemCard({ item, folder, selected, onClick, classes }) {
  return (
    <button
      onClick={() => {
        // console.log(item);
        onClick && onClick();
      }}
      className={
        "flex flex-col items-center text-white pt-2 border-r-1 border-b-1 border-outline transition-colors duration-75 " +
        classes +
        (!onClick ? " cursor-default " : "") +
        (() =>
          onClick && selected?.name === item?.name
            ? " bg-highlight border-highlight"
            : " bg-background ")()
      }
    >
      <div className="h-24 flex items-center justify-center">
        <img
          className="outline-2 mb-2 mx-auto block w-auto outline-background max-h-24"
          src={"/img/" + folder + "/" + getImgName(item.img)}
          alt=""
        />
      </div>
      <span className="font-bold">
        {item?.name?.replace(
          /armored|rig|armor|body|vest|concealable|plate carrier|platecarrier|riot helmet|helmet|'s|face shield|face shield-visor|visor/gi,
          ""
        )}
      </span>
      <span className="block text-danger group-hover:text-white transition-colors duration-75">
        {item.turnSpeed}
      </span>
    </button>
  );
}
