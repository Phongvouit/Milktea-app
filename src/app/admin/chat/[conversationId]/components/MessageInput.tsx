"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import clsx from "clsx";

interface MessageInputProps {
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  placehoder?: string;
}

const MessageInput: React.FC<MessageInputProps> = ({
  id,
  type,
  required,
  register,
  errors,
  placehoder,
}) => {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        autoComplete={id}
        {...register(id, { required })}
        placeholder={placehoder}
        className={clsx(
          `
             text-black
            font-light
            py-2
            px-4
            bg-neutral-100
            w-full
            rounded-full
            focus:outline-none
            `,
          errors[id] && "focus:ring-rose-500"
        )}
      />
    </div>
  );
};

export default MessageInput;
