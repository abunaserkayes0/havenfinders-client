import React from "react";
import { Github } from "lucide-react";
import google from "/google.png";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
export default function SocialMedia() {
  const { signInWithGoogle, signInWithGithub } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();

  const handelSocialMedia = (socialProvider) => {
    socialProvider()
      .then((result) => {
        if (result.user) {
          Swal.fire({
            title: "Sign In Successfully",
            icon: "success",
            showConfirmButton: false,
            timer: 1000,
          });
          navigate(state);
        }
      })
      .catch((error) => {
        if (error) {
          Swal.fire({
            title: "Sign In Successfully",
            icon: "error",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      });
  };

  return (
    <div className="flex flex-col items-center justify-evenly gap-2 my-2">
      <button
        onClick={() => handelSocialMedia(signInWithGoogle)}
        className="bg-black btn flex items-center rounded text-white px-20 gap-2 text-lg hover:text-black"
      >
        Google <img className="w-5 h-5" src={google} alt="Google Icon" />
      </button>
      <button
        onClick={() => handelSocialMedia(signInWithGithub)}
        className="bg-black btn flex items-center rounded text-white px-20 gap-2 text-lg hover:text-black"
      >
        Github <Github size={20} />
      </button>
    </div>
  );
}
