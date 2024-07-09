import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";

function useRegistration(user) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    console.log("hello");
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Account created successfully!");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      router.push("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  // If have user redirect to homepage
  useEffect(() => {
    if (user?.email) {
      router.push("/");
    }
  }, [router, user?.email]);

  return {
    handleRegister,
    setEmail,
    email,
    password,
    setPassword,
    setConfirmPassword,
    confirmPassword,
  };
}

export default useRegistration;
