import { useNavigate } from "react-router-dom";

interface ActionCardProps {
  name: string;
  desc: string;
  btnName: string;
  btnName2?: string;
  cardStyles?: string;
  link1: string;
  link2?: string;
}

const ActionCard = ({
  name,
  desc,
  btnName,
  btnName2,
  cardStyles,
  link1,
  link2,
}: ActionCardProps) => {
  const navigate = useNavigate();

  return (
    <div className={`bg-white rounded-2xl p-4 ${cardStyles}`}>
      <h2 className="text-lg font-semibold mb-2">{name}</h2>
      <p className="text-sm text-tx-color">{desc}</p>
      <div className="flex">
        {" "}
        <button
          className="bg-light_primary flex-1 text-white px-4 py-2 rounded-md mt-4 text-sm"
          onClick={() => navigate(link1)}
        >
          {btnName}
        </button>
        {btnName2 && (
          <button
            className="bg-light_primary flex-1 text-white px-4 py-2 rounded-md mt-4 text-sm ml-2"
            onClick={() => navigate(link2 || "")}
          >
            {btnName2}
          </button>
        )}
      </div>
    </div>
  );
};
export default ActionCard;
