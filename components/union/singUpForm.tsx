"use client";
import React from "react";
import { FormEvent } from "react";

export default function LoginForm() {

  const handelSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch(`/api/auth/register`,{
      method: 'POST',
      body: JSON.stringify({
        email: formData.get('email'),
        password: formData.get('password'),
      }),
    });
    console.log({response})
  };

  return (
    <>
      <form
        className="max-w-[450px] w-full mx-auto border rounded-xl p-4 shadow-md"
        onSubmit={handelSubmit}
      >
        <div className="mb-5">
          <div className="font-bold mb-2">メールアドレス</div>
          <div className="flex items-start gap-8">
            <input name="email" type="email" />
          </div>
        </div>

        <div className="mb-5">
          <div className="font-bold mb-2">パスワード</div>
          <div className="flex items-start gap-8">
            <input name="password" type="password" />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            className="max-w-[250px] py-3 text-sm"
            type="submit"
          >
            登録
          </button>
        </div>
      </form>
    </>
  );
}
