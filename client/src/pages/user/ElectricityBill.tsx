import { useEffect, useState } from "react";
import { CustomButton, FieldInput, SelectInput } from "../../components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { ElectricityBillFormData } from "../../types";
import { electricityBillFormSchema } from "../../schemas";
import { useAppContext } from "../../contexts/AppContext";
import { payElectricityBill } from "../../api/electricity-bill";

const ElectricityBill = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ElectricityBillFormData>({
    resolver: zodResolver(electricityBillFormSchema),
  });
  const { showToast } = useAppContext();

  const [errorMessage, setErrorMessage] = useState("");

  const formNames = [
    "discoName",
    "meterNumber",
    "meterType",
    "amount",
    "customerPhone",
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
    mutationFn: payElectricityBill,
  });

  const onSubmit = handleSubmit((data: ElectricityBillFormData) => {
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
            label="Disco Name*"
            options={[
              "Ikeja Electric",
              "Eko Electric",
              "Abuja Electric",
              "Kano Electric",
              "Enugu Electric",
              "Port Harcourt Electric",
              "Kaduna Electric",
              "Jos Electric",
              "Benin Electric",
              "Yola Electric",
              "Ibadan Electric",
            ]}
            defaultOpt="Choose Disco Name"
            name="discoName"
            register={register}
          />

          <FieldInput
            placeholder="803573286275858"
            type="string"
            boxStyles="bg-white border-[#edf1f6]"
            label="Meter Number*"
            {...register("meterNumber")}
          />

          <SelectInput
            label="Meter Type*"
            options={["Prepaid", "Postpaid"]}
            defaultOpt="Choose Airtime Type"
            name="meterType"
            register={register}
          />

          <FieldInput
            placeholder="500"
            type="number"
            boxStyles="bg-white border-[#edf1f6]"
            label="Amount (N)*"
            {...register("amount")}
          />

          <FieldInput
            placeholder="08035732862"
            type="string"
            boxStyles="bg-white border-[#edf1f6]"
            label="Customer Phone*"
            {...register("customerPhone")}
          />

          <FieldInput
            placeholder="500"
            type="number"
            boxStyles="bg-[#edf1f6] hover:border-none"
            label="Amount to Pay (N)"
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

export default ElectricityBill;
