import { IconType } from "react-icons";
import { Hidden, Visible } from "../assets/icons";
import { useState } from "react";

interface FieldInputProps {
  placeholder: string;
  Icon?: IconType;
  value: string;
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  boxStyles?: string;
  inputStyles?: string;
  iconStyles?: string;
}

const FieldInput = ({
  placeholder,
  Icon,
  value,
  label,
  onChange,
  type,
  boxStyles,
  inputStyles,
  iconStyles,
}: FieldInputProps) => {
  const [hidden, setHidden] = useState(false);

  return (
    <div className="flex flex-col gap-1 relative">
      {label && <label className="font-semibold">{label}</label>}
      <div
        className={`${boxStyles} border-[1px] border-gray-200 hover:border-light_primary rounded-full flex items-center justify-between h-[55px] px-5`}
      >
        <div className="flex gap-2 items-center overflow-hidden w-full">
          {Icon && (
            <div className="">
              <Icon className={`${iconStyles} text-gray-300`} />
            </div>
          )}

          <input
            type={hidden && type == "password" ? "password" : ""}
            className={`${inputStyles} bg-transparent outline-none placeholder:text-gray-300 placeholder:font-rubik placeholder:font-thin w-[82%]`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </div>
        {type == "password" && (
          <div className="" onClick={() => setHidden(!hidden)}>
            {hidden ? (
              <Hidden className={`${iconStyles} text-gray-300`} />
            ) : (
              <Visible className={`${iconStyles} text-gray-300`} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FieldInput;
