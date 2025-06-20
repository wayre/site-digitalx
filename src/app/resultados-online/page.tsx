"use client"; // Necessário para componentes com interatividade no Next.js App Router
import React, { useState, FormEvent } from "react";
import Image from "next/image";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(""); // Limpa mensagens anteriores

    // Validação básica
    if (!username || !password) {
      setMessage("Por favor, preencha o usuário e a senha.");
      return;
    }

    // Lógica de autenticação (simulada)
    // Em um aplicativo real, você faria uma chamada de API aqui
    console.log("Tentativa de login com:", { username, password });
    if (username === "aluno" && password === "senha123") {
      setMessage("Login bem-sucedido! Redirecionando...");
      // Aqui você pode redirecionar o usuário ou atualizar o estado da aplicação
      // Exemplo: setTimeout(() => window.location.href = '/exames', 1000);
    } else {
      setMessage("Usuário ou senha inválidos.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 p-4 sm:p-6 md:p-8 font-sans">
      <div className="bg-white p-8 md:p-12 rounded-xl shadow-2xl w-full max-w-md text-center">
        <Image
          src="/logo-digitalx.svg"
          alt="Digital X"
          width={110}
          height={55}
          className="min-w-[90px] m-auto mb-4"
        />
        <h1 className="mb-2 text-xl font-semibold text-slate-700">
          Acesso aos Exames
        </h1>
        <p className="text-slate-500 text-sm mb-6">
          Faça login com seu usuário e senha para visualizar os resultados dos
          seus exames.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-slate-600 mb-1 text-left"
            >
              Usuário
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Digite seu usuário"
              className="mt-1 block w-full px-4 py-3 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder-slate-400 transition duration-150 ease-in-out"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-600 mb-1 text-left"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              className="mt-1 block w-full px-4 py-3 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm placeholder-slate-400 transition duration-150 ease-in-out"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
          >
            Entrar
          </button>
        </form>
        {message && (
          <p
            className={`mt-6 text-sm ${
              message.includes("bem-sucedido")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
