import { useEffect, useState } from "react";
import { CustomButton, FieldInput, SelectInput } from "../../components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { CablePlan, CablePlanProvider, CableSubFormData } from "../../types";
import { cableSubFormSchema } from "../../schemas";
import { useAppContext } from "../../contexts/AppContext";
import {
  getCablePlans,
  payCableSubscription,
} from "../../api/cable-subscription";

const CableSub = () => {
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<CableSubFormData>({
    resolver: zodResolver(cableSubFormSchema),
  });
  const { showToast } = useAppContext();

  const [errorMessage, setErrorMessage] = useState("");

  const formNames = ["network", "dataId", "phoneNo", "amount", "dataType"];

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

  const { mutate, isPending: payingSub } = useMutation({
    mutationFn: payCableSubscription,
  });
  const { data, isPending: fetchingPlans } = useQuery<CablePlanProvider>({
    queryKey: ["plans"],
    queryFn: getCablePlans,
  });

  // console.log("Data Plans:", fetchingPlans, data);

  const filteredCablePlans: CablePlan[] =
    data?.cablePlans?.filter(({ decoder }) => decoder === watch("cableName")) ||
    [];

  const amount = filteredCablePlans.filter(
    ({ planId }) => planId == Number(watch("planId"))
  )[0]?.amount;

  useEffect(() => {
    setValue("planId", "");
  }, [watch("cableName"), setValue]);

  useEffect(() => {
    if (watch("planId") == "" || watch("planId") == undefined)
      setValue("amount", 0);
  }, [watch("planId"), setValue]);

  if (fetchingPlans) {
    return <div>Loading...</div>;
  }

  const onSubmit = handleSubmit((data: CableSubFormData) => {
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

  return (
    <div className="flex flex-col bg-white p-6 rounded-xl gap-5 md:gap-20 md:flex-row-reverse">
      <div className="bg-secondary001 p-6 rounded-lg bg-opacity-50 md:w-[40%] h-fit">
        You can contact DSTV/GOtv's customers care unit on
        01-2703232/08039003788 or the toll free lines: 08149860333, 07080630333,
        and 09090630333 for assistance, STARTIMES's customers care unit on
        (094618888, 014618888)
      </div>
      <div className="flex flex-col gap-6 md:w-[60%]">
        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          <SelectInput
            label="Cable Name/Decoder*"
            options={["GOTV", "DSTV", "STARTIMES"]}
            defaultOpt="Choose Cable Name/Decoder"
            name="cableName"
            register={register}
          />

          <FieldInput
            placeholder="8035732868482"
            type="string"
            boxStyles="bg-white border-[#edf1f6]"
            label="Smart Card Number/IUC Number*"
            {...register("smartCardNumber")}
          />

          <SelectInput
            label="Plan*"
            defaultOpt="Choose Cable Plan"
            options={filteredCablePlans}
            name="planId"
            register={register}
          />
          <FieldInput
            placeholder="500"
            type="number"
            boxStyles="bg-[#edf1f6] hover:border-none"
            label="Amount (N)*"
            value={amount || ""}
            disabled
          />
          {errorMessage && (
            <p className="text-red-600 text-xs">{errorMessage}</p>
          )}
          <CustomButton
            type="submit"
            text={payingSub ? "Processing..." : "Buy Now"}
            styles="rounded-full"
            disabled={payingSub}
          />
        </form>
      </div>
    </div>
  );
};

export default CableSub;
