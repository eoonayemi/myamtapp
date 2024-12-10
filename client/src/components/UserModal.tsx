import { useNavigate } from "react-router-dom";
import { Logout, Settings } from "../assets/icons";
import { useEffect, useRef, useState } from "react";

interface UserModalProps {
  styles?: string;
}

const UserModal = ({ styles }: UserModalProps) => {
  const [showUserModal, setShowUserModal] = useState(false);

  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const outsideClickHandler = (e: any) => {
      if (!modalRef.current?.contains(e.target)) {
        setShowUserModal(false);
      }
    };

    document.addEventListener("mousedown", outsideClickHandler);

    return () => document.removeEventListener("mousedown", outsideClickHandler);
  }, []);

  return (
    <div className={`${styles} relative`} ref={modalRef}>
      <div onClick={() => setShowUserModal(!showUserModal)}>
        {" "}
        <img
          src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/6b39933e-73ad-4b24-965c-17884b5a8e77/be9da804-63a0-4d5c-8a09-af29209133ce.png"
          alt="profile-img"
          className="rounded-full w-[35px] object-contain"
        />
      </div>

      {showUserModal && (
        <div className="bg-white shadow-custom-shadow absolute right-0 rounded-xl top-12 text-xs overflow-hidden py-5">
          <div className="flex gap-3 items-center text-my_black py-3 px-5">
            <div className="w-[30px] h-[30px] flex items-center justify-center">
              <img
                src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/6b39933e-73ad-4b24-965c-17884b5a8e77/be9da804-63a0-4d5c-8a09-af29209133ce.png"
                alt="profile-img"
                className="rounded-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span>immanuel_in_dev</span>
              <span className="text-tx-color">immanuel.in.dev@gmail.com</span>
            </div>
          </div>

          {/* <div className="bg-tx-color w-[90%] h-[0.005rem] mx-auto my"></div> */}

          <div>
            {" "}
            <div
              className="flex gap-2 items-center py-3 px-5 hover:bg-white-shade001 cursor-pointer"
              onClick={() => {
                navigate("/account-settings");
              }}
            >
              <Settings className="text-tx-color text-lg" />
              <span>Account Settings</span>{" "}
            </div>
            <div className="flex gap-2 items-center py-3 px-5 hover:bg-white-shade001 cursor-pointer">
              <Logout className="text-tx-color text-lg" />
              <span>Logout</span>{" "}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserModal;
