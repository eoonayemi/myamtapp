import React, { useState } from "react";
import { CustomButton, FieldInput, SelectInput } from "../../components";

const ElectricityBill = () => {
  const [billForm, setBillForm] = useState({
    discoName: "",
    meterNumber: "",
    meterType: "",
    amount: "",
    customerPhone: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
    fieldName: string
  ) => {
    setBillForm({
      ...billForm,
      [fieldName]: event.target.value,
    });
  };

  return (
    <div className="flex flex-col bg-white p-6 rounded-xl gap-5 md:gap-20 md:flex-row">
      <div className="flex flex-col gap-6 md:w-[60%]">
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
          value={billForm.discoName}
          onChange={(e) => handleChange(e, "discoName")}
        />
        <FieldInput
          placeholder="Meter No."
          value={billForm.meterNumber}
          onChange={(e) => handleChange(e, "meterNumber")}
          type="number"
          boxStyles="bg-white border-[#edf1f6]"
          label="Meter Number*"
        />
        <SelectInput
          label="Meter Type*"
          options={["Prepaid", "Postpaid"]}
          defaultOpt="Choose Meter Type"
          value={billForm.meterType}
          onChange={(e) => handleChange(e, "meterType")}
        />
        <FieldInput
          placeholder="09135628765"
          value={billForm.customerPhone}
          onChange={(e) => handleChange(e, "customerPhone")}
          type="number"
          boxStyles="bg-white border-[#edf1f6]"
          label="Customer Phone*"
        />
        <FieldInput
          placeholder="500"
          value={billForm.amount}
          onChange={(e) => handleChange(e, "amount")}
          type="number"
          boxStyles="bg-white border-[#edf1f6]"
          label="Amount (N)*"
        />
        <CustomButton
          text="Validate"
          onClick={() => {}}
          styles="rounded-full"
        />
      </div>
    </div>
  );
};

export default ElectricityBill;
