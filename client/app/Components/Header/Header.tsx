"use client";
import { useTasks } from "@/context/taskContext";
import { useUserContext } from "@/context/userContext";
import { github, moon, profile } from "@/utils/Icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

function Header() {
  const { user } = useUserContext();
  const { openModalForAdd, activeTasks } = useTasks();

  const router = useRouter();

  const { name } = user;

  const userId = user._id;

  return (
    <header className="px-6 my-4 w-full flex items-center justify-between bg-[#f9f9f9]">
      <div>
        <h1 className="text-lg font-medium">
          <span role="img" aria-label="wave">
            👋
          </span>
          {userId ? `Bienvenido/a, ${name}!` : "Bienvenido a TickTask"}
        </h1>
        <p className="text-sm">
          {userId ? (
            <>
              Tienes{" "}
              <span className="font-bold text-[#3aafae]">
                {activeTasks.length}
              </span>
              &nbsp;Tareas activas
            </>
          ) : (
            "Por favor, inicia sesión o regístrate para ver tus tareas"
          )}
        </p>
      </div>
      <div className="h-[50px] flex items-center gap-[10.4rem]">
        <button
          className="px-8 py-3 bg-[#1abc9c] text-white rounded-[50px]
          hover:bg-[#3aafae] hover:text-white transition-all duration-200 ease-in-out"
          onClick={() => {
            if (userId) {
              openModalForAdd();
            } else {
              router.push("/login");
            }
          }}
        >
          {userId ? "Agregar una nueva tarea" : "Iniciar Sesion / Registrarse"}
        </button>

        <div className="flex gap-4 items-center">
          <Link
            href="https://github.com/nachog8/TickTask"
            passHref
            target="_blank"
            rel="noopener noreferrer"
            className="h-[40px] w-[40px] text-black rounded-full flex items-center justify-center text-lg border-2 border-[#E6E6E6]"
          >
            {github}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
