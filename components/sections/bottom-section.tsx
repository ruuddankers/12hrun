"use client";

import Image from "next/image";
import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function BottomSection() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, email }),
      });

      const data = await res.json() as { error?: string };

      if (!res.ok) {
        setErrorMsg(data.error ?? "Er ging iets mis. Probeer het opnieuw.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMsg("Er ging iets mis. Probeer het opnieuw.");
      setStatus("error");
    }
  }

  return (
    <div className="bg-background px-3 py-10 md:px-5">
      <div className="container-page event-shell overflow-hidden md:flex md:divide-x md:divide-foreground/[0.14]">

        {/* Op de hoogte blijven */}
        <div id="updates" className="flex-1 overflow-hidden border-b border-foreground/[0.14] md:border-b-0">
          <div className="border-b border-foreground/[0.14] px-6 py-4">
            <h2 className="display-tight text-xl font-black uppercase text-foreground">
              Op de hoogte blijven
            </h2>
          </div>
          <div className="flex flex-col gap-8 p-6 md:flex-row md:items-center md:gap-12 md:p-8">
            <div className="flex-1">
              <p className="text-sm leading-7 text-foreground/62">
                Meld je aan en ontvang updates over 12H Run Berkel-Enschot.
              </p>
            </div>
            <div className="flex-1">
              {status === "success" ? (
                <p className="text-sm font-semibold text-accent">
                  Aanmelding gelukt.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <input
                      type="text"
                      placeholder="Voornaam"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      disabled={status === "loading"}
                      className="flex-1 border border-foreground/10 bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-foreground/24 focus:border-foreground/30 focus:outline-none disabled:opacity-40"
                    />
                    <input
                      type="email"
                      placeholder="E-mailadres"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={status === "loading"}
                      className="flex-1 border border-foreground/10 bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-foreground/24 focus:border-foreground/30 focus:outline-none disabled:opacity-40"
                    />
                  </div>
                  {status === "error" && (
                    <p className="text-xs text-foreground/40">{errorMsg}</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="display-tight self-start bg-accent px-8 py-3 text-sm font-black uppercase tracking-[0.1em] text-background transition-opacity hover:opacity-90 disabled:opacity-50"
                  >
                    {status === "loading" ? "Bezig…" : "Aanmelden"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex flex-1 flex-col gap-10 p-6 md:items-end md:justify-between md:p-8 lg:flex-row lg:items-end">
          <div>
            <Image
              src="/12h-run-logo-text.svg"
              alt="12h.run"
              width={220}
              height={69}
              className="h-10 w-auto md:h-12"
            />
            <p className="mt-5 text-sm font-medium text-foreground/56">
              12H Run Berkel-Enschot | 23 mei 2027
            </p>
          </div>
          <div className="grid gap-2 text-sm font-bold uppercase tracking-[0.12em] text-foreground/62">
            <a href="mailto:hello@12h.run" className="hover:text-foreground">
              Contact
            </a>
          </div>
        </footer>

      </div>
    </div>
  );
}
