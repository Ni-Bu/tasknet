import { ReactComponent as User } from "../img/person.svg";
import { ReactComponent as Password } from "../img/password.svg";

export const loginContent = {
  inputs: [
    {
      name: "email",
      placeholder: "Enter an email",
      type: "email",
      icon: User,
    },
    {
      name: "password",
      placeholder: "Enter a password",
      type: "password",
      icon: Password,
    },
  ],
};
