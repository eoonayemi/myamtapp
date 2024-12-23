import { useEffect, useState } from "react";
import { Password, UserNoBg } from "../../assets/icons";
import { CustomButton, FieldInput, Logo } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { LoginFormData } from "../../types";
import { loginFormSchema } from "../../schemas";
import { login } from "../../api/auth";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppContext } from "../../contexts/AppContext";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  });
  const navigate = useNavigate();
  const { showToast } = useAppContext();

  const [errorMessage, setErrorMessage] = useState("");

  const formNames = ["email", "password"];

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
    mutationFn: login,
  });

  const onSubmit = (data: LoginFormData) => {
    mutate(data, {
      onSuccess: () => {
        navigate("/dashboard");
        showToast("You're logged in", "success");
      
      },
      onError: (error: any) => {
        showToast(error.message, "error");
        
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
            <h2 className="text-xl font-bold">Login</h2>
            <p className="text-sm">Welcome Back</p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <FieldInput
              placeholder="Email"
              Icon={UserNoBg}
              type="email"
              inputStyles="placeholder:text-[12px]"
              {...register("email")}
            />
            <FieldInput
              placeholder="Password"
              Icon={Password}
              type="password"
              inputStyles="placeholder:text-[12px]"
              {...register("password")}
            />
            {errorMessage && (
              <p className="text-sm text-red-600">{errorMessage}</p>
            )}
            <CustomButton
              text={isPending ? "Logging in..." : "Login"}
              type="submit"
              styles="rounded-[1000rem] text-sm h-[55px]"
              disabled={isPending}
            />
          </form>
          <div className="mx-auto text-sm flex flex-col items-center justify-center gap-2">
            <Link to="/forgot-password" className="text-light_primary">
              Forgot Password?
            </Link>
            <span>
              {" "}
              Don't have an account?{" "}
              <Link to="/register" className="text-light_primary">
                Register here
              </Link>
            </span>
          </div>
        </div>
      </div>

      <div className="hidden md:flex mx-10 h-[30rem] overflow-hidden justify-center lg:w-[70%] md:w-full">
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
          <div className="flex flex-col gap-5 r w-[60%]">
            <div className="self-start">
              <h2 className="text-sm font-bold">Login</h2>
              <p className="text-[11px]">Welcome Back</p>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              <FieldInput
                placeholder="Email"
                Icon={UserNoBg}
                type="email"
                boxStyles="h-[39px] w-full py-5 h-[50px]"
                inputStyles="placeholder:text-[11px] text-[11px]"
                iconStyles="text-[10px]"
                {...register("email")}
              />
              <FieldInput
                placeholder="Password"
                Icon={Password}
                type="password"
                boxStyles=" h-[39px] w-full py-5 h-[50px]"
                inputStyles="placeholder:text-[11px] text-[11px]"
                iconStyles="text-[11px]"
                {...register("password")}
              />
              {errorMessage && (
                <p className="text-sm text-red-600">{errorMessage}</p>
              )}
              <CustomButton
                text={isPending ? "Logging in" : "Login"}
                type="submit"
                disabled={isPending}
                styles="rounded-[1000rem] h-[45px] w-full py-5 text-[11px] flex items-center justify-center"
              />
            </form>
            <div className="mx-auto text-[10px] w-full text-center flex flex-col gap-1">
              <Link
                to="/login"
                className="text-light_primary hover:text-secondary002"
              >
                Forgot Password
              </Link>
              <span>
                {" "}
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-light_primary hover:text-secondary002"
                >
                  Register here
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
