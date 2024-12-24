import { UseFormRegister } from "react-hook-form";
import { ArrowDown } from "../assets/icons";

interface SelectInputProps {
  label: string;
  options: string[];
  defaultOpt: string;
  hint?: string;
  name: string;
  register: UseFormRegister<any>;
}

const SelectInput = ({
  label,
  options,
  hint,
  defaultOpt,
  name,
  register,
}: SelectInputProps) => {
  return (
    <div className="flex flex-col gap-1 relative">
      <label className="font-semibold">{label}</label>
      <select
        id={name}
        className="rounded-full w-full p-4 outline-none focus:border-light_primary border border-[#edf1f6]"
        {...register(name)}
      >
        <option disabled value="">
          {defaultOpt}
        </option>
        {options.map((opt, i) => (
          <option key={i} value={i} className="capitalize">
            {opt}
          </option>
        ))}
      </select>
      <ArrowDown className="absolute right-4 top-[50px]" />
      {hint && <span className="text-sm text-tx-color mt-1">{hint}</span>}
    </div>
  );
};

export default SelectInput;
