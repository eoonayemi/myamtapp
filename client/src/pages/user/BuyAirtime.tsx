import { useEffect, useState } from "react";
import { CustomButton, FieldInput, SelectInput } from "../../components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AirtimeFormData } from "../../types";
import { airtimeFormSchema } from "../../schemas";
import { useAppContext } from "../../contexts/AppContext";
import { buyAirtime } from "../../api/airtime";

const BuyData = () => {
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<AirtimeFormData>({
    resolver: zodResolver(airtimeFormSchema),
  });
  const { showToast } = useAppContext();

  const [errorMessage, setErrorMessage] = useState("");

  const formNames = [
    "network",
    "airtimeType",
    "phoneNo",
    "amount",
    "amountToPay",
  ];

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

  const { mutate, isPending: buyingData } = useMutation({
    mutationFn: buyAirtime,
  });

  useEffect(() => {
    setValue("airtimeType", "VTU");
  }, [watch("network"), setValue]);

  const onSubmit = handleSubmit((data: AirtimeFormData) => {
    // return console.log(data);
    mutate(data, {
      onSuccess: () => {
        showToast("Data purchased successful", "success");
        alert("Registration successful");
      },
      onError: (error: Error) => {
        showToast(error.message, "error");
      },
    });
  });

  // interface OnSubmitEvent extends React.FormEvent<HTMLFormElement> {}

  // const onSubmit = (e: OnSubmitEvent) => {
  //   e.preventDefault();
  //   console.log("Button clicked");
  // };

  return (
    <div className="flex flex-col bg-white p-6 rounded-xl gap-5 md:gap-20 md:flex-row">
      <div className="flex flex-col gap-6 md:w-[60%]">
        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          <SelectInput
            label="Network*"
            options={["MTN", "AIRTEL", "GLO", "9MOBILE"]}
            defaultOpt="Choose Network"
            name="network"
            register={register}
          />
          <SelectInput
            label="Airtime Type*"
            options={["VTU", "Share and Sell"]}
            defaultOpt="Choose Airtime Type"
            name="airtimeType"
            register={register}
          />

          <FieldInput
            placeholder="08035732862"
            type="string"
            boxStyles="bg-white border-[#edf1f6]"
            label="Mobile Number*"
            {...register("phoneNo")}
          />

          <FieldInput
            placeholder="500"
            type="number"
            boxStyles="bg-white border-[#edf1f6]"
            label="Amount (N)*"
            {...register("amount")}
          />

          <FieldInput
            placeholder="500"
            type="number"
            boxStyles="bg-white border-[#edf1f6]"
            label="Amount to Pay (N)*"
            value={watch("amount") && Number(watch("amount")) + 50}
            disabled
          />

          {errorMessage && (
            <p className="text-red-600 text-xs">{errorMessage}</p>
          )}
          <CustomButton
            type="submit"
            text={buyingData ? "Processing..." : "Buy Now"}
            styles="rounded-full"
            disabled={buyingData}
          />
        </form>
      </div>
    </div>
  );
};

export default BuyData;
