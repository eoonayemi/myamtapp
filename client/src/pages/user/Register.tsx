import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Email, NoFillPhone, Password, UserNoBg } from "../../assets/icons";
import { CustomButton, FieldInput, Logo } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import { registerFormSchema } from "../../schemas";
import { useEffect, useState } from "react";
import { RegisterFormData } from "../../types";
import { register as registerUser } from "../../api/auth";

const Register = () => {
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <FieldInput
              placeholder="Username"
              Icon={UserNoBg}
              type="text"
              inputStyles="placeholder:text-[12px]"
              {...register("username")}
            />
            <FieldInput
              placeholder="Email"
              Icon={UserNoBg}
              type="email"
              inputStyles="placeholder:text-[12px]"
              {...register("email")}
            />
            <FieldInput
              placeholder="Phone Number"
              Icon={NoFillPhone}
              type="text"
              inputStyles="placeholder:text-[12px]"
              {...register("phoneNo")}
            />
            <FieldInput
              placeholder="Password"
              Icon={Password}
              type="password"
              inputStyles="placeholder:text-[12px]"
              {...register("password")}
            />
            <FieldInput
              placeholder="Current Password"
              Icon={Password}
              type="password"
              inputStyles="placeholder:text-[12px]"
              {...register("currentPassword")}
            />
            {errorMessage && (
              <p className="text-sm text-red-600">{errorMessage}</p>
            )}
            <CustomButton
              type="submit"
              text={`${isPending ? "Please wait..." : "Register"}`}
              styles="rounded-[1000rem] text-sm h-[55px]"
              disabled={isPending}
            />
          </form>
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

      <div className="hidden md:flex mx-10 h-[40rem] overflow-hidden justify-center lg:w-[70%] md:w-full">
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
          <div className="flex flex-col gap-5 w-[60%]">
            <div className="self-start">
              <h2 className="text-sm font-bold">Register</h2>
              <p className="text-[11px]">Welcome to MyAmtApp</p>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              <FieldInput
                placeholder="Username"
                Icon={UserNoBg}
                type="text"
                boxStyles="w-full py-5 h-[50px]"
                inputStyles="placeholder:text-[11px] text-[11px]"
                iconStyles="text-[10px]"
                {...register("username")}
              />
              <FieldInput
                placeholder="Email"
                Icon={Email}
                type="email"
                boxStyles="w-full py-5 h-[50px]"
                inputStyles="placeholder:text-[11px] text-[11px]"
                iconStyles="text-[10px]"
                {...register("email")}
              />
              <FieldInput
                placeholder="Phone Number"
                Icon={NoFillPhone}
                type="text"
                boxStyles="w-full py-5 h-[50px]"
                inputStyles="placeholder:text-[11px] text-[11px]"
                iconStyles="text-[10px]"
                {...register("phoneNo")}
              />
              <FieldInput
                placeholder="Password"
                Icon={Password}
                type="password"
                boxStyles="w-full py-5 h-[50px]"
                inputStyles="placeholder:text-[11px] text-[11px]"
                iconStyles="text-[11px]"
                {...register("password")}
              />
              <FieldInput
                placeholder="Confirm Password"
                Icon={Password}
                type="password"
                boxStyles="w-full py-5 h-[50px]"
                inputStyles="placeholder:text-[11px] text-[11px]"
                iconStyles="text-[11px]"
                {...register("currentPassword")}
              />
              {errorMessage && (
                <p className="text-xs text-red-600">{errorMessage}</p>
              )}
              <CustomButton
                type="submit"
                text={`${isPending ? "Please wait..." : "Register"}`}
                styles="rounded-[1000rem] h-[50px] w-full p-5 text-[11px] flex items-center justify-center"
                disabled={isPending}
              />
            </form>
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
