interface ActionCardProps {
  name: string;
  desc: string;
  btnName: string;
  btnName2?: string;
  cardStyles?: string;
}

const ActionCard = ({
  name,
  desc,
  btnName,
  btnName2,
  cardStyles,
}: ActionCardProps) => {
  return (
    <div className={`bg-white rounded-2xl p-4 ${cardStyles}`}>
      <h2 className="text-lg font-semibold mb-2">{name}</h2>
      <p className="text-sm text-tx-color">{desc}</p>
      <div className="flex">
        {" "}
        <button className="bg-light_primary flex-1 text-white px-4 py-2 rounded-md mt-4 text-sm">
          {btnName}
        </button>
        {btnName2 && (
          <button className="bg-light_primary flex-1 text-white px-4 py-2 rounded-md mt-4 text-sm ml-2">
            {btnName2}
          </button>
        )}
      </div>
    </div>
  );
};
export default ActionCard;
