import React, { useState } from "react";
import { CustomButton, FieldInput, SelectInput } from "../../components";
import { ninSlips } from "../../constants";

const NINVerification = () => {
  const [verificationForm, setVerificationForm] = useState({
    slipType: 0,
    ninNumber: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
    fieldName: string
  ) => {
    setVerificationForm({
      ...verificationForm,
      [fieldName]: event.target.value,
    });
  };

  const ninSlip = ninSlips[verificationForm.slipType];

  console.log(verificationForm.slipType);

  return (
    <div className="flex flex-col bg-white p-6 rounded-xl gap-5 md:gap-10 {md:flex-row} min:h-full">
      <div
        className={`overflow-hidden ${
          ninSlip.name == "Premium" ? "rounded-3xl" : "rounded-2xl"
        } border md:w-[50%] h-fit`}
      >
        <div className="bg-light_primary text-white uppercase text-sm p-3 text-center font-normal">
          {ninSlip.name} Slip
        </div>
        <div className={`${ninSlip.name == "Premium" && "p-2"}`}>
          <img src={ninSlip.img} />
        </div>
      </div>
      <div className="font-normal">Price: N{ninSlip.price}.00</div>

      <div className="flex flex-col gap-6 md:w-[50%]">
        <SelectInput
          label="Slip Type*"
          options={[
            "Information Slip",
            "Regular Slip",
            "Standard Slip",
            "Premium Slip",
          ]}
          defaultOpt="Choose Slip Type"
          value={verificationForm.slipType}
          onChange={(e) => handleChange(e, "slipType")}
        />
        <FieldInput
          placeholder="NIN Number"
          value={verificationForm.ninNumber}
          onChange={(e) => handleChange(e, "ninNumber")}
          type="number"
          boxStyles="bg-white border-[#edf1f6]"
          label="NIN Number*"
        />
        <CustomButton text="Verify" onClick={() => {}} styles="rounded-full" />
      </div>
    </div>
  );
};

export default NINVerification;
