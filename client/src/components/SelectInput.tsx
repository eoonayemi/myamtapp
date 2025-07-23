import { UseFormRegister } from "react-hook-form";
import { ArrowDown } from "../assets/icons";
import { CablePlan, DataPlan } from "../types";

interface SelectInputProps {
  label: string;
  options: string[] | DataPlan[] | CablePlan[];
  defaultOpt: string;
  hint?: string;
  name: string;
  dv?: string;
  register: UseFormRegister<any>;
}

const SelectInput = ({
  label,
  options,
  hint,
  defaultOpt,
  name,
  register,
  dv,
}: SelectInputProps) => {
  return (
    <div className="flex flex-col gap-1 relative">
      <label className="font-semibold">{label}</label>
      <select
        id={name}
        className="rounded-full w-full p-4 outline-none focus:border-light_primary border border-[#edf1f6]"
        defaultValue=""
        {...register(name)}
      >
        <option disabled value="">
          {defaultOpt}
        </option>

        {options && options.length > 0 && dv !== "not set"
          ? options.map((opt, i) => (
              <option
                key={i}
                value={
                  typeof opt === "object" &&
                  opt !== null &&
                  ("dataId" in opt || "planId" in opt)
                    ? String("dataId" in opt ? opt.dataId : opt.planId)
                    : String(opt || "")
                }
                className="capitalize"
              >
                {
                  (() => {
                    if (
                      typeof opt === "object" &&
                      opt !== null &&
                      "dataId" in opt
                    ) {
                      const dataPlan = opt as DataPlan;
                      return `${dataPlan.size} ${dataPlan.planType} = N${dataPlan.amount} ${dataPlan.validity}`;
                    }
                    if (
                      typeof opt === "object" &&
                      opt !== null &&
                      "planId" in opt
                    ) {
                      const cablePlan = opt as CablePlan;
                      return cablePlan.name;
                    }
                    return String(opt || `No ${name}`);
                  })() as string
                }
              </option>
            ))
          : null}
      </select>
      <ArrowDown className="absolute right-4 top-[50px]" />
      {hint && <span className="text-sm text-tx-color mt-1">{hint}</span>}
    </div>
  );
};

export default SelectInput;
