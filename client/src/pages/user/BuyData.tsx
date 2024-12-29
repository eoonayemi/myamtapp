import { useEffect, useState } from "react";
import { CustomButton, FieldInput, SelectInput } from "../../components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { BuyDataFormData, DataPlan, DataProvider } from "../../types";
import { buyDataFormSchema } from "../../schemas";
import { buyData, getDataPlans } from "../../api/data";
import { useAppContext } from "../../contexts/AppContext";
import { dataTypes } from "../../constants";

const BuyData = () => {
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<BuyDataFormData>({
    resolver: zodResolver(buyDataFormSchema),
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

  const { mutate, isPending: buyingData } = useMutation({
    mutationFn: buyData,
  });
  const { data, isPending: fetchingPlans } = useQuery<DataProvider>({
    queryKey: ["plans"],
    queryFn: getDataPlans,
  });

  const filteredDataPlans: DataPlan[] =
    data?.dataPlans?.filter(
      ({ network, planType }) =>
        network === watch("network") && planType === watch("dataType")
    ) || [];

  const amount = filteredDataPlans.filter(
    ({ dataId }) => dataId == Number(watch("dataId"))
  )[0]?.amount;

  useEffect(() => {
    setValue("dataId", "");
  }, [watch("dataType"), setValue]);

  useEffect(() => {
    setValue("dataType", "");
  }, [watch("network"), setValue]);

  useEffect(() => {
    if (watch("dataId") == "" || watch("dataId") == undefined)
      setValue("amount", amount);
  }, [watch("dataId"), setValue]);

  if (fetchingPlans) {
    return <div>Loading...</div>;
  }

  const currentNetwork = watch("network");

  const filteredDataTypes = dataTypes
    .filter(({ name }) => data?.name === name)
    .map((item) => item[currentNetwork as keyof typeof item])
    .flat();

  const onSubmit = handleSubmit((data: BuyDataFormData) => {
    return console.log(data);
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
    <div className="flex flex-col bg-white p-6 rounded-xl gap-5 md:gap-20 md:flex-row-reverse">
      <div className="flex flex-col gap-1 font-normal md:w-[40%]">
        <h2 className="font-semibold mb-2">Codes for Data Balance</h2>
        <span className="bg-secondary001 p-3 bg-opacity-50">
          MTN [SME] *461*4#
        </span>
        <span className="bg-secondary002 p-3 bg-opacity-50">
          MTN [Gifting] *131*4# or *460*260#zz
        </span>
        <span className="bg-lime-400 p-3 bg-opacity-50">
          9mobile [Gifting] *228#
        </span>
        <span className="bg-red-400 p-3 bg-opacity-50">Airtel *140#</span>
        <span className="bg-green-400 p-3 bg-opacity-50">Glo *127*0#</span>
      </div>
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
            label="Data Type*"
            hint="Select Plan Type SME or GIFTING or CORPORATE GIFTING"
            options={filteredDataTypes}
            defaultOpt="Choose Data Type"
            name="dataType"
            register={register}
          />
          <SelectInput
            label="Plan*"
            defaultOpt="Choose Data Plan"
            options={filteredDataPlans}
            name="dataId"
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
            value={amount || ""}
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
