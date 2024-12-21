import { useEffect, useState } from "react";
import {
  ContentImgCard,
  CustomButton,
  FAQCard,
  FeatureCard,
  ReviewCard,
  SectionBox,
} from "../components";
import {
  aboutUs,
  clients,
  faqs,
  features,
  heroImg,
  services,
} from "../constants";
import { shortenText } from "../utils";
import {
  Facebook,
  Instagram,
  Telegram,
  Twitter,
  Whatsapp,
} from "../assets/icons";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [activeReview, setActiveReview] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % clients.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="mt-16 min-h-full text-[16px] font-thin">
      <section
        id="home"
        className=" text-white h-fit gap-20 font-thin bg-dark_primary responsive-p text-center md:text-left flex flex-col md:flex-row justify-center items-center"
      >
        <div className="flex leading-relaxed flex-col gap-10 items-center md:items-start justify-center {self-start}">
          <h1 className="text-3xl leading-normal sm:text-4xl lg:leading-snug lg:text-5xl font-extrabold">
            Your One-Stop App for Airtime, Bills & Essential Services
          </h1>
          <p>
            Recharge, pay bills, verify IDs, and print slips—all in one app.
            Quick, secure, and convenient for your everyday needs
          </p>
          <CustomButton
            text="Get Started"
            styles="w-[11rem]"
            hasArrow={true}
            onClick={() => navigate("/register")}
          />
        </div>
        <div className="bg-secondary001 rounded-full p-10 overflow-hidden">
          <img
            src={heroImg}
            alt="Hero Image"
            className="w-[20rem] sm:w-[30rem] lg:w-[40rem] object-contain translate-y-10"
          />
        </div>
      </section>

      <SectionBox title="Features" id="features">
        <div className="w-full flex flex-col sm:flex-row flex-wrap gap-10 mt-10 items-center justify-center">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              cardStyles="md:w-[31.1%] sm:w-[46.8%] bg-[#f5f5f5]"
            />
          ))}
        </div>
      </SectionBox>

      <ContentImgCard
        id="about-us"
        title="About Us"
        description={shortenText(
          "MyAmtApp is an all-in-one virtual top-up (VTU) platform designed to make digital transactions fast, secure, and convenient. With MyAmtApp, users can easily purchase airtime, subscribe to data plans, pay utility bills like electricity (NEPA), and manage cable subscriptions such as GOTV and DSTV. We go beyond basic services by offering seamless access to essential verifications, including NIN, BVN, CAC, and driver’s license verification, with printable slips for added convenience. Whether you need to top up for yourself or others, pay monthly bills, or handle critical verifications, MyAmtApp provides a secure, user-friendly solution tailored for your everyday needs."
        )}
        img={aboutUs}
        imgAlt="About Us"
        buttonText="Learn More"
        btnHasArrow
        hasButton
        buttonStyles="w-[10rem] text-[14px]"
        imgStyles="w-full rounded-3xl"
        titleStyles=" text-3xl font-bold"
        cardStyles="gap-10 md:gap-16"
      />

      <SectionBox
        title="Our Services"
        description="MyAmtApp streamlines airtime top-ups, data subscriptions, bill payments, and verifications (NIN, BVN, CAC, driver’s license) in one secure app. Simplify your transactions anytime, anywhere."
        id="our-services"
        cardStyles="gap-20"
      >
        <div className="w-full flex flex-col sm:flex-row flex-wrap gap-10 items-center justify-center">
          {services.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              cardStyles="bg-white shadow-custom-shadow md:w-[31.1%] sm:w-[46.8%]"
              imgStyles="text-dark_primary"
            />
          ))}
        </div>
      </SectionBox>

      <SectionBox title="What Our Client Says" id="our-clients">
        <div className="w-full flex flex-col sm:flex-row sm:justify-center flex-wrap gap-10 mt-14">
          {clients.map((client, i) => (
            <ReviewCard
              key={i}
              {...client}
              cardStyles={`md:w-[31.1%] sm:w-[46.8%] transition-all duration-500 bg-light_primary ${
                activeReview == i
                  ? "md:scale-[100%]"
                  : "max-sm:hidden md:scale-[90%]"
              }`}
            />
          ))}
        </div>
        <div className="flex flex-row gap-2 items-center justify-center mt-10">
          {clients.map((_, i) => (
            <div
              className={`h-2 w-2 ${
                activeReview == i ? "bg-dark_primary" : "bg-light_primary"
              } rounded-full`}
            ></div>
          ))}
        </div>
      </SectionBox>

      <SectionBox
        title="Frequently Asked Questions (FAQs)"
        id="faqs"
        cardStyles="bg-dark_primary text-white"
      >
        <div className="mt-10 flex flex-col gap-[1px] rounded-2xl overflow-hidden">
          {faqs.map((faq, i) => (
            <FAQCard key={i} {...faq} arrLen={faqs.length} i={i} />
          ))}
        </div>
      </SectionBox>

      <SectionBox
        title="Try MyAmtApp Today"
        description="We offer instant recharge of airtime, databundle, cable TV subscriptions, Electricity bill payments and more."
        id="try-now"
        desStyles="w-[50%] text-gray-600"
        tdStyles="gap-3"
        cardStyles="text-sm"
        titleStyles="text-4xl sm:text-5xl md:text-5xl md:leading-[4rem] text-wrap w-[60%] sm:w-[40%] text-center overflow-hidden"
      >
        <div className="flex flex-col justify-center items-center mt-5 gap-5">
          <CustomButton
            text="Get Started"
            styles="w-[10rem] text-sm"
            hasArrow
            onClick={() => navigate("/register")}
          />
          <span className="text-gray-600">Email: myamtapp@info.com</span>
          <div className="flex gap-5">
            <span className=" bg-light_primary rounded-full p-2">
              <Twitter className="text-white text-xs" />
            </span>
            <span className=" bg-light_primary rounded-full p-2">
              <Facebook className="text-white text-xs" />{" "}
            </span>
            <span className=" bg-light_primary rounded-full p-2">
              <Instagram className="text-white text-xs" />
            </span>
            <span className=" bg-light_primary rounded-full p-2">
              <Telegram className="text-white text-xs" />
            </span>
            <span className=" bg-light_primary rounded-full p-2">
              <Whatsapp className="text-white text-xs" />
            </span>
          </div>
        </div>
      </SectionBox>

      {/* <ArrowUpCircle className="absolute text-white text-4xl right-[3rem]" /> */}
    </main>
  );
};

export default LandingPage;
