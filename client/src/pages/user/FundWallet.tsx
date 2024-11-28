import { useState } from "react";
import { CustomButton, FieldInput } from "../../components";
import SecuredByPaystack from "../../assets/images/secured-by-paystack.png";

const FundWallet = () => {
  const [amount, setAmount] = useState("");
  return (
    <div className="flex flex-col bg-white p-6 rounded-xl gap-5 md:gap-20 md:flex-row-reverse h-full">
      <div className="flex flex-col gap-1 font-normal md:w-[40%]">
        <h2 className="font-semibold mb-2">Payment</h2>
        <span className="bg-secondary001 p-6 bg-opacity-50 rounded-lg">
          Accept Cards, Transfer, Bank Deposit etc.
        </span>
      </div>
      <div className="flex flex-col gap-10 md:w-[60%]">
        <FieldInput
          placeholder="500"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          boxStyles="bg-white border-[#edf1f6]"
          label="Amount (N)*"
        />
        {Number(amount) > 0 && (
          <>
            <div className="flex justify-between items-center mt-4">
              {" "}
              <span className="font-normal">Transaction charge</span>{" "}
              <span>N{10}</span>
            </div>
            <hr />
            <div className="flex justify-between items-center">
              {" "}
              <span className="font-normal">Total</span>{" "}
              <span>N{Number(amount) + 10}</span>
            </div>
          </>
        )}

        <CustomButton
          text="Continue to Funding"
          onClick={() => {}}
          styles="rounded-full"
        />
        <div>
          <img src={SecuredByPaystack} alt="Secured By Paystack" />
        </div>
      </div>
    </div>
  );
};

export default FundWallet;
