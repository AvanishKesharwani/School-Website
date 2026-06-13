"use client";

import { useState, useActionState } from "react";
import { useFormStatus } from "react-dom";
import { authenticate } from "./actions";
import { GraduationCap, Eye, EyeOff, Lock, Mail, AlertCircle } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-[#E85D22] text-white font-bold py-3.5 rounded-xl hover:bg-[#D94F16] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {pending ? "Signing in..." : "Sign In to Dashboard"}
    </button>
  );
}

export default function SignInPage() {
  const [errorMessage, dispatch] = useActionState(authenticate, undefined);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F5FAFF] p-6 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[#0F2747]/5 blur-3xl" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-[#E85D22]/5 blur-3xl" />
      </div>

      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 md:p-10 relative z-10 border border-gray-100">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-[#0F2747] rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-[#0F2747] mb-2">Admin Portal</h1>
          <p className="text-gray-500 text-sm">Secure access to Manka Public School CMS</p>
        </div>

        <form action={dispatch} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#0F2747]" htmlFor="email">
              Admin Email or Username
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email"
                type="text"
                name="email"
                placeholder="your.name@example.com"
                required
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold text-[#0F2747]" htmlFor="password">
                Password
              </label>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder=""
                required
                className="w-full pl-11 pr-12 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#007BFF] focus:border-transparent transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-[#0F2747] transition-colors"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-[#E85D22] focus:ring-[#E85D22] border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
              Remember me
            </label>
          </div>

          <SubmitButton />

          {errorMessage && (
            <div className="flex items-center gap-2 mt-4 p-3 rounded-lg bg-red-50 text-red-600 text-sm font-medium border border-red-100">
              <AlertCircle className="h-5 w-5 shrink-0" />
              <p>{errorMessage}</p>
            </div>
          )}
        </form>
      </div>
    </main>
  );
}
