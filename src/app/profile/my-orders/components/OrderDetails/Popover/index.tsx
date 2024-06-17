"use client";
import { memo, ReactElement, useEffect, useState } from "react";

const Popover = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-80 bg-rose-600 rounded-full text-white text-xl p-4 py-2 hover:bg-rose-800 duration-300"
      >
        Докладване за проблем
      </button>
      {isOpen ? (
        <div
          onClick={() => {
            setIsOpen(false);
          }}
          className="w-dvw h-dvh fixed bg-black/30 top-0 left-0 z-50 overflow-hidden"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="w-1/3 h-fit bg-white absolute top-1/3 left-1/3 rounded-xl p-8"
          >
            <h2 className="mb-2 text-black">
              Ако се сблъскате с проблем, просто ни се обадете! Ще ви отговорим
              в рамките на 20 минути.
            </h2>
            <div className="relative inline w-full">
              <label className="text-lg absolute font-sans text-black/60 left-4 -top-0.5">
                +359
              </label>
              <input
                className={`text-xl p-2 px-4 pl-16 rounded-full border font-sans w-1/2`}
                placeholder="Телефонен номер"
                type="tel"
                maxLength={10}
              />
            </div>
            <p className="my-2">Или</p>
            <input
              className={`text-xl p-2 px-4 rounded-full border font-sans w-1/2 text-black/60 mb-2`}
              value="watopbg@gmail.com"
              type="email"
              readOnly
            />
            <p className="mb-4">
              Пишете ни на имейл и ние ще се постараем да ви отговорим в рамките
              на 2 работни дни.
            </p>
            <div className="w-full flex justify-end">
              <button
                onClick={() => {
                  setIsOpen(false);
                }}
                className="px-4 py-2 rounded-full hover:underline hover:text-rose-600 duration-300"
              >
                Отмяна
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                }}
                className="px-4 py-2 bg-rose-600 rounded-full text-white w-32 hover:bg-rose-800 duration-300"
              >
                Готово
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default memo(Popover);
