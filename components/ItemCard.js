import { getImgName } from "../util/helpers";

export default function ItemCard({ item, folder, selected, onClick }) {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
      className={
        "flex flex-col items-center text-white pt-2 border-r-1 border-b-1 border-outline" +
        (!onClick && "cursor-default ") +
        (() =>
          onClick && selected?.name === item?.name
            ? " bg-highlight border-highlight"
            : " bg-background ")()
      }
    >
      <img
        className="outline-2 mb-2 mx-auto block h-full w-auto outline-background max-h-28"
        src={"/img/" + folder + "/" + getImgName(item.img)}
        alt=""
      />
      <span className="font-bold">
        {item.name.replace(
          /armored|rig|armor|body|vest|concealable|plate carrier|platecarrier|riot helmet|helmet|'s|face shield|face shield-visor|visor/gi,
          ""
        )}
      </span>
      <span className="block text-danger">{item.turnSpeed}</span>
    </button>
  );
}