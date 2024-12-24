import {
  Antenna,
  Bulb,
  CreditCard,
  Fund,
  Modem,
  Phone,
  Wallet,
} from "../../assets/icons";
import { ActionCard, ServiceCard, StatCard } from "../../components";
import { useUserStore } from "../../store";
import { addCommas } from "../../utils";

const Home = () => {
  const { user } = useUserStore();

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col md:flex-row gap-3 overflow-hidden">
        <StatCard
          cardStyles="flex-1 overflow-hidden md:pl-5"
          value={addCommas(user?.walletBalance as number)}
          label="Wallet Balance"
          Icon={Wallet}
          iconColor="text-[#16DBCC]"
          iconBgColor="bg-[#DCFAF8]"
        />
        <StatCard
          cardStyles="flex-1 overflow-hidden  md:pl-5"
          value={addCommas(user?.totalFunds as number)}
          label="Total Funding"
          Icon={Fund}
          iconColor="text-[#FF82AC]"
          iconBgColor="bg-[#FFE0EB]"
        />
        <StatCard
          cardStyles="flex-1 overflow-hidden  md:pl-5"
          value={addCommas(user?.totalSpent as number)}
          label="Total Spent"
          Icon={CreditCard}
          iconColor="text-[#396AFF]"
          iconBgColor="bg-[#E7EDFF]"
        />
      </div>
      <div className="grid md:grid-cols-4 gap-3">
        <ServiceCard
          Icon={Phone}
          name="Airtime TopUp"
          cardStyles="bg-white h-[200px]"
          imgStyles="text-light_primary"
          nameStyles="font-normal"
          link="/buy-airtime"
        />
        <ServiceCard
          Icon={Antenna}
          name="Buy Data"
          cardStyles="bg-white h-[200px]"
          imgStyles="text-light_primary"
          nameStyles="font-normal"
          link="/buy-data"
        />
        <ServiceCard
          Icon={Bulb}
          name="Electricity Bill"
          cardStyles="bg-white h-[200px]"
          imgStyles="text-light_primary"
          nameStyles="font-normal"
          link="/electricity-bill"
        />
        <ServiceCard
          Icon={Modem}
          name="Cable Subscription"
          cardStyles="bg-white h-[200px]"
          imgStyles="text-light_primary"
          nameStyles="font-normal"
          link="/cable-subscription"
        />
        {/* <ServiceCard
          Icon={Phone}
          name="Airtime TopUp"
          cardStyles="bg-white h-[200px]"
          imgStyles="text-light_primary"
        />
        <ServiceCard
          Icon={Phone}
          name="Airtime TopUp"
          cardStyles="bg-white h-[200px]"
          imgStyles="text-light_primary"
        /> */}
      </div>
      <div className="flex flex-col md:flex-row gap-3">
        <ActionCard
          name="Notifications"
          desc="Paystack Payment successful you account has been credited with sum of #500."
          btnName="All messages"
          link1="/notifications"
        />
        <ActionCard
          name="FAQs"
          desc="Please go through them to have a better knowledge of this platform"
          btnName="View FAQs"
          link1="/#faqs"
        />
        <ActionCard
          name="Support Team"
          desc="Have anything to say to us? Please contact our Support Team on Whatsapp"
          btnName="Whatsapp us"
          btnName2="Whatsapp group"
          link1="/contact"
          link2="/contact"
        />
      </div>
    </div>
  );
};

export default Home;
