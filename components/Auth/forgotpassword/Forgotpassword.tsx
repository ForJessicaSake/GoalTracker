import Link from "next/link";
import React from "react";
import Button from "../../Micro/Button/Button";
import AuthFrame from "../AuthFrame";

const Forgotpassword = () => {
  const [password, setPassword] = React.useState({
    newPassword: "",
    confirmPassword: "",
  });

  return (
    <AuthFrame>
      <h1 className="text-3xl font-semibold tracking-tight">Reset password</h1>
      <form className="mt-10 flex flex-col">
        <input
          required
          className="field"
          placeholder="Email"
          type="email"
        />
        <input
          className="field mt-4"
          placeholder="New password"
          type="Password"
          required
          value={password.newPassword}
          onChange={(e) =>
            setPassword({ ...password, newPassword: e.target.value })
          }
        />
        <input
          className="field mt-4"
          placeholder="Confirm password"
          type="Password"
          required
          value={password.confirmPassword}
          onChange={(e) =>
            setPassword({ ...password, confirmPassword: e.target.value })
          }
        />
        <Button className="mt-6 rounded-lg bg-accent text-sm font-semibold text-ink">
          Submit
        </Button>
        <p className="mt-8 text-sm text-mist">
          <Link href="/login" className="text-accent">
            Back to sign in
          </Link>
        </p>
      </form>
    </AuthFrame>
  );
};

export default Forgotpassword;
