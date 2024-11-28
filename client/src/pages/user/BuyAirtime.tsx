import React, { useState } from "react";
import { CustomButton, FieldInput, SelectInput } from "../../components";

const BuyAirtime = () => {
  const [dataForm, setDataForm] = useState({
    network: "",
    airtimeType: "",
    mobileNumber: "",
    amount: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
    fieldName: string
  ) => {
    setDataForm({
      ...dataForm,
      [fieldName]: event.target.value,
    });
  };

  return (
    <div className="flex flex-col bg-white p-6 rounded-xl gap-5 md:gap-20 md:flex-row">
      <div className="flex flex-col gap-6 md:w-[60%]">
        <SelectInput
          label="Network*"
          options={["MTN", "Airtel", "Glo", "9Mobile"]}
          defaultOpt="Choose Network"
          value={dataForm.network}
          onChange={(e) => handleChange(e, "network")}
        />
        <SelectInput
          label="Airtime Type*"
          hint="Select Plan Type SME or GIFTING or CORPORATE GIFTING"
          options={["VTU", "Share and Sell"]}
          defaultOpt="Choose Airtime Type"
          value={dataForm.airtimeType}
          onChange={(e) => handleChange(e, "airtimeType")}
        />
        <FieldInput
          placeholder="08035732862"
          value={dataForm.mobileNumber}
          onChange={(e) => handleChange(e, "mobileNumber")}
          type="number"
          boxStyles="bg-white border-[#edf1f6]"
          label="Mobile Number*"
        />
        <FieldInput
          placeholder="500"
          value={dataForm.amount}
          onChange={(e) => handleChange(e, "amount")}
          type="number"
          boxStyles="bg-white border-[#edf1f6]"
          label="Amount (N)*"
        />
        <CustomButton text="Buy Now" onClick={() => {}} styles="rounded-full" />
      </div>
    </div>
  );
};

export default BuyAirtime;
