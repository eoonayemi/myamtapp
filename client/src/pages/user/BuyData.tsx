import React, { useEffect, useState } from "react";
import { CustomButton, FieldInput, SelectInput } from "../../components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

const BuyData = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  });
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  const formNames = [
    "username",
    "email",
    "phoneNo",
    "password",
    "currentPassword",
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

  const { mutate, isPending } = useMutation({
    mutationFn: registerUser,
  });

  const onSubmit = (data: RegisterFormData) => {
    mutate(data, {
      onSuccess: () => {
        navigate("/login");
        console.log("Registration successful");
        alert("Registration successful");
      },
      onError: (error: any) => {
        alert(error.message || "Registration failed");
      },
    });
  };


  return (
    <div className="flex flex-col bg-white p-6 rounded-xl gap-5 md:gap-20 md:flex-row-reverse">
      <div className="flex flex-col gap-1 font-normal md:w-[40%]">
        <h2 className="font-semibold mb-2">Codes for Data Balance</h2>
        <span className="bg-secondary001 p-3 bg-opacity-50">
          MTN [SME] *461*4#
        </span>
        <span className="bg-secondary002 p-3 bg-opacity-50">
          MTN [Gifting] *131*4# or *460*260#
        </span>
        <span className="bg-lime-400 p-3 bg-opacity-50">
          9mobile [Gifting] *228#
        </span>
        <span className="bg-red-400 p-3 bg-opacity-50">Airtel *140#</span>
        <span className="bg-green-400 p-3 bg-opacity-50">Glo *127*0#</span>
      </div>
      <div className="flex flex-col gap-6 md:w-[60%]">
        <SelectInput
          label="Network*"
          options={["MTN", "Airtel", "Glo", "9Mobile"]}
          defaultOpt="Choose Network"
          name="network"
          register={register}
        />
        <SelectInput
          label="Data Type*"
          hint="Select Plan Type SME or GIFTING or CORPORATE GIFTING"
          options={["SME", "SME2", "CORPORATE GIFTING", "GIFTING"]}
          defaultOpt="Choose Data Type"
          name="dataType"
          register={register}
        />
        <SelectInput
          label="Plan*"
          defaultOpt="Choose Data Plan"
          name="dataPlan"
          register={register}
        />
        <FieldInput
          placeholder="08035732862"
          type="number"
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
        <CustomButton text="Buy Now" onClick={() => {}} styles="rounded-full" />
      </div>
    </div>
  );
};

export default BuyData;
