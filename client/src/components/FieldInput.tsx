import { Hidden, Visible } from "../assets/icons";
import { useState, forwardRef } from "react";
import { IconType } from "react-icons";

interface FieldInputProps {
  placeholder: string;
  Icon?: IconType;
  label?: string;
  type: string;
  boxStyles?: string;
  inputStyles?: string;
  iconStyles?: string;
  // value?: string;
  // onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FieldInput = forwardRef<HTMLInputElement, FieldInputProps>(
  (
    {
      placeholder,
      Icon,
      label,
      type,
      boxStyles,
      inputStyles,
      iconStyles,
      ...props
    },
    ref
  ) => {
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
              type={hidden && type === "password" ? "password" : type}
              className={`${inputStyles} bg-transparent outline-none placeholder:text-gray-300 placeholder:font-rubik placeholder:font-thin placeholder:text-md w-[82%]`}
              placeholder={placeholder}
              ref={ref}
              {...props}
            />
          </div>
          {type === "password" && (
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
  }
);

FieldInput.displayName = "FieldInput";

export default FieldInput;
