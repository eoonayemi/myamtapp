import React, { useState } from "react";
import { CustomButton, FieldInput, SelectInput } from "../../components";

const BuyData = () => {
  const [dataForm, setDataForm] = useState({
    network: "",
    dataType: "",
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
          value={dataForm.network}
          onChange={(e) => handleChange(e, "network")}
        />
        <SelectInput
          label="Data Type*"
          hint="Select Plan Type SME or GIFTING or CORPORATE GIFTING"
          options={["SME", "SME2", "CORPORATE GIFTING", "GIFTING"]}
          defaultOpt="Choose Data Type"
          value={dataForm.dataType}
          onChange={(e) => handleChange(e, "dataType")}
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

export default BuyData;
