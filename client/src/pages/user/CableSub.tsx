import React, { useState } from "react";
import { CustomButton, FieldInput, SelectInput } from "../../components";

const CableSub = () => {
  const [billForm, setBillForm] = useState({
    cableName: "",
    SmartCardNumber: "",
    cablePlan: "",
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
    <div className="flex flex-col bg-white p-6 rounded-xl gap-5 md:gap-20 md:flex-row-reverse">
      <div className="bg-secondary001 p-6 rounded-lg bg-opacity-50 md:w-[40%] h-fit">
        You can contact DSTV/GOtv's customers care unit on
        01-2703232/08039003788 or the toll free lines: 08149860333, 07080630333,
        and 09090630333 for assistance, STARTIMES's customers care unit on
        (094618888, 014618888)
      </div>
      <div className="flex flex-col gap-6 md:w-[60%]">
        <SelectInput
          label="Cable Name*"
          options={["GOTV", "DSTV", "STARTIME"]}
          defaultOpt="Choose Cable Name"
          value={billForm.cableName}
          onChange={(e) => handleChange(e, "discoName")}
        />
        <FieldInput
          placeholder="IUC Number"
          value={billForm.SmartCardNumber}
          onChange={(e) => handleChange(e, "smartCardNumber")}
          type="number"
          boxStyles="bg-white border-[#edf1f6]"
          label="Smart Card Number / IUC Number*"
        />
        <SelectInput
          label="Cable Plan*"
          options={["Prepaid", "Postpaid"]}
          defaultOpt="Choose Cable Plan"
          value={billForm.cablePlan}
          onChange={(e) => handleChange(e, "cablePlan")}
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

export default CableSub;
