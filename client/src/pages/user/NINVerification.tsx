import { useEffect, useState } from "react";
import { CustomButton, FieldInput, SelectInput } from "../../components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { NINVerifyFormData } from "../../types";
import { ninVerifyFormSchema } from "../../schemas";
import { useAppContext } from "../../contexts/AppContext";
import { ninSlips } from "../../constants";
import { verifyNIN } from "../../api/verification";
import { FingerPrint } from "../../assets/icons";

const NINVerification = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<NINVerifyFormData>({
    resolver: zodResolver(ninVerifyFormSchema),
  });
  const { showToast } = useAppContext();

  const [errorMessage, setErrorMessage] = useState("");

  const formNames = ["slipType", "ninNumber"];

  useEffect(() => {
    const detectFormErrors = () => {
      formNames.forEach((name) => {
        if ((errors as any)[name]) {
          console.log((errors as any)[name]);
          return setErrorMessage((errors as any)[name].message);
        }
      });
    };
    detectFormErrors();
  }, [errors]);

  const { mutate, isPending: verifyingNIN } = useMutation({
    mutationFn: verifyNIN,
  });

  const onSubmit = handleSubmit((data: NINVerifyFormData) => {
    // return console.log(data);
    mutate(data, {
      onSuccess: () => {
        showToast("NIN verification successful", "success");
        alert("Registration successful");
      },
      onError: (error: Error) => {
        showToast(error.message, "error");
      },
    });
  });

  const slipKey = watch("slipType")?.split(" ")[0] || "Information";
  const ninSlip = ninSlips.find((slip) => slip.name === slipKey) || ninSlips[0];

  console.log(slipKey);

  return (
    <div className="flex flex-col bg-white p-6 rounded-xl gap-5 md:gap-10 {md:flex-row} min-h-full">
      <div className=" flex items-center justify-center xl:w-[70%] ">
        <div
          className={`overflow-hidden ${
            ninSlip.name == "Premium" ? "rounded-3xl" : "rounded-2xl"
          } border w-fit h-fit`}
        >
          <div className="bg-light_primary text-white uppercase text-sm p-3 text-center font-normal">
            {ninSlip.name} Slip
          </div>

          <div>
            <img src={ninSlip.img} className=" md:h-[330px] md:w-[600px]" />
          </div>
        </div>
      </div>

      <div className="font-normal">Price: N{ninSlip.price}.00</div>

      <div className="flex flex-col gap-6 xl:w-[70%]">
        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          <SelectInput
            label="Slip Type*"
            options={[
              "Information Slip",
              "Regular Slip",
              "Standard Slip",
              "Premium Slip",
            ]}
            defaultOpt="Choose Slip Type"
            name="slipType"
            register={register}
          />

          <FieldInput
            placeholder="NIN Number"
            type="string"
            boxStyles="bg-white border-[#edf1f6]"
            label="NIN Number*"
            {...register("ninNumber")}
          />

          {errorMessage && (
            <p className="text-red-600 text-xs">{errorMessage}</p>
          )}

          <div className="flex items-center">
            <CustomButton
              type="submit"
              text={verifyingNIN ? "Verify..." : "Verify Now"}
              styles="rounded-full md:w-fit w-full px-10 font-normal bg-[#005ddd]"
              Icon={FingerPrint}
              disabled={verifyingNIN}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default NINVerification;
