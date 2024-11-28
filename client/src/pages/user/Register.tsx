import { useState } from "react";
import { Email, Password, UserNoBg } from "../../assets/icons";
import { CustomButton, FieldInput, Logo } from "../../components";
import { Link } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    currentPassword: "",
  });
  const handleRegister = () => {};
  return (
    <>
      <div className="md:hidden flex flex-col items-center justify-center gap-8 bg-white">
        <Logo
          isWhite={false}
          boxStyles="flex-col gap-2"
          imgStyles="h-[30px]"
          textStyles="text-lg"
        />
        <div className="flex flex-col gap-5">
          <div>
            <h2 className="text-xl font-bold">Register</h2>
            <p className="text-sm">Welcome to MyAmtApp</p>
          </div>
          <FieldInput
            placeholder="Username"
            Icon={UserNoBg}
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            type="text"
            inputStyles="placeholder:text-[12px]"
          />
          <FieldInput
            placeholder="Email"
            Icon={UserNoBg}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            type="email"
            inputStyles="placeholder:text-[12px]"
          />
          <FieldInput
            placeholder="Password"
            Icon={Password}
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            type="password"
            inputStyles="placeholder:text-[12px]"
          />
          <FieldInput
            placeholder="Confirm Password"
            Icon={Password}
            value={form.currentPassword}
            onChange={(e) =>
              setForm({ ...form, currentPassword: e.target.value })
            }
            type="password"
            inputStyles="placeholder:text-[12px]"
          />
          <CustomButton
            text="Register"
            onClick={handleRegister}
            styles="rounded-full text-sm h-[55px]"
          />
          <div className="mx-auto text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-light_primary hover:text-dark_primary"
            >
              Login here
            </Link>
          </div>
        </div>
      </div>

      <div className="hidden md:flex mx-10 h-[35rem] overflow-hidden justify-center lg:w-[70%] md:w-full">
        <div className="custom-gradient w-[55%] text-white flex items-center rounded-s-3xl overflow-hidden">
          <div className="ml-20">
            {" "}
            <Logo isWhite imgStyles="h-[20px]" textStyles="text-lg" />
            <p className="text-[11px] mt-1">The best top-up app in Nigeria</p>
            <CustomButton
              text="Learn More"
              onClick={() => {}}
              styles="rounded-full text-[9px] h-[20px] flex items-center justify-center bg-[#0575e6] mt-3"
            />
          </div>

          <div className="relative -translate-x-[350px] translate-y-[100px] opacity-30">
            <div className=" absolute h-[300px] w-[300px] border-[1px] border-light_primary rounded-full"></div>
            <div className=" absolute h-[300px] w-[300px] border-[1px] border-light_primary rounded-full left-[50px] top-[15px]"></div>
          </div>
        </div>
        <div className="bg-white flex flex-col items-center justify-center gap-8  w-[40%] py-20 rounded-e-3xl">
          {/* <Logo
            isWhite={false}
            boxStyles="flex-col gap-2"
            imgStyles="h-[20px]"
            textStyles="text-sm"
          /> */}
          <div className="flex flex-col gap-5 items-center w-[60%]">
            <div className="self-start">
              <h2 className="text-sm font-bold">Register</h2>
              <p className="text-[11px]">Welcome to MyAmtApp</p>
            </div>
            <FieldInput
              placeholder="Username"
              Icon={UserNoBg}
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              type="text"
              boxStyles="w-full py-5"
              inputStyles="placeholder:text-[11px] text-[11px]"
              iconStyles="text-[10px]"
            />
            <FieldInput
              placeholder="Email"
              Icon={Email}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              type="email"
              boxStyles="w-full py-5"
              inputStyles="placeholder:text-[11px] text-[11px]"
              iconStyles="text-[10px]"
            />
            <FieldInput
              placeholder="Password"
              Icon={Password}
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              type="password"
              boxStyles="w-full py-5"
              inputStyles="placeholder:text-[11px] text-[11px]"
              iconStyles="text-[11px]"
            />
            <FieldInput
              placeholder="Confirm Password"
              Icon={Password}
              value={form.currentPassword}
              onChange={(e) =>
                setForm({ ...form, currentPassword: e.target.value })
              }
              type="password"
              boxStyles="w-full py-5"
              inputStyles="placeholder:text-[11px] text-[11px]"
              iconStyles="text-[11px]"
            />
            <CustomButton
              text="Register"
              onClick={handleRegister}
              styles="rounded-full h-[39px] w-full p-5 text-[11px] flex items-center justify-center"
            />
            <div className="mx-auto text-[10px] w-full text-center">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-light_primary hover:text-secondary002"
              >
                Login here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
