import { useEffect, useState } from "react";
import { CustomButton, FieldInput } from "../../components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { BVNVerifyFormData } from "../../types";
import { BVNVerifyFormSchema } from "../../schemas";
import { useAppContext } from "../../contexts/AppContext";
import { bvnSlipDetails } from "../../constants";
import { verifyBVN } from "../../api/verification";
import { FingerPrint } from "../../assets/icons";

const BVNVerification = () => {
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<BVNVerifyFormData>({
    resolver: zodResolver(BVNVerifyFormSchema),
    defaultValues: {
      slipType: "basic",
    },
  });
  const { showToast } = useAppContext();

  const [errorMessage, setErrorMessage] = useState("");

  const formNames = ["slipType", "bvnNumber"];

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

  const { mutate, isPending: verifyingBVN } = useMutation({
    mutationFn: verifyBVN,
  });

  const onSubmit = handleSubmit((data: BVNVerifyFormData) => {
    // return console.log(data);
    mutate(data, {
      onSuccess: () => {
        showToast("BVN verification successful", "success");
        alert("Registration successful");
      },
      onError: (error: Error) => {
        showToast(error.message, "error");
      },
    });
  });

  return (
    <div className="flex flex-col bg-white p-6 rounded-xl gap-12 md:gap-10 {md:flex-row} min-h-full">
      <div className="flex md:flex-row flex-col gap-4 lg:w-[60%] h-fit items-center justify-center">
        {bvnSlipDetails.map((plan) => (
          <div
            key={plan.id}
            onClick={() => setValue("slipType", plan.name)}
            className={`flex flex-col items-center justify-center relative lg:w-[350px] w-[250px] h-[200px] p-6 rounded-lg border-2 cursor-pointer transition-all duration-200
            ${
              plan.name === watch("slipType")
                ? "border-blue-500 bg-white shadow-lg"
                : "border-gray-200 bg-white hover:border-gray-300"
            }
          `}
          >
            {/* Content */}
            <div className="flex flex-col items-center justify-center h-full">
              <div className="text-3xl font-bold text-gray-700 mb-3">
                {`₦${plan.price}`}
              </div>
              <div className="text-lg text-gray-600 text-center">
                {plan.title}
              </div>
            </div>

            {/* Radio button indicator */}
            <div className="absolute top-[9.5rem]">
              <div
                className={`
              w-[1.2rem] h-[1.2rem] rounded-full border-2 flex items-center justify-center
              ${
                plan.name === watch("slipType")
                  ? "border-blue-500 bg-blue-500"
                  : "border-gray-300"
              }
            `}
              >
                {plan.name === watch("slipType") && (
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-6 lg:w-[60%]">
        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          <FieldInput
            placeholder="BVN Number"
            type="string"
            boxStyles="bg-white border-[#edf1f6]"
            label="BVN Number*"
            {...register("bvnNumber")}
          />

          {errorMessage && (
            <p className="text-red-600 text-xs">{errorMessage}</p>
          )}

          <div className="flex items-center">
            <CustomButton
              type="submit"
              text={verifyingBVN ? "Verify..." : "Verify Now"}
              styles="rounded-full md:w-fit px-10 font-normal bg-[#005ddd]"
              Icon={FingerPrint}
              disabled={verifyingBVN}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BVNVerification;
