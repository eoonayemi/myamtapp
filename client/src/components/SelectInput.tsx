import { UseFormRegister } from "react-hook-form";
import { ArrowDown } from "../assets/icons";
import { DataPlan } from "../types";

interface SelectInputProps {
  label: string;
  options: string[] | DataPlan[] | undefined[];
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
        <option disabled value="" selected>
          {defaultOpt}
        </option>

        {options.length == 0 ? (
          <option value="">No {name}</option>
        ) : (
          options?.map((opt, i) => (
            <option
              key={i}
              value={
                typeof opt === "object" && opt !== null && "dataId" in opt
                  ? String(opt.dataId)
                  : String(opt || ``)
              }
              className="capitalize"
            >
              {typeof opt !== "string" && opt !== undefined
                ? `${opt.size} ${opt.planType} = N${opt.amount} ${opt.validity}`
                : String(opt || `No ${name}`)}
            </option>
          ))
        )}
      </select>
      <ArrowDown className="absolute right-4 top-[50px]" />
      {hint && <span className="text-sm text-tx-color mt-1">{hint}</span>}
    </div>
  );
};

export default SelectInput;
