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
      <div className="container-page event-shell overflow-hidden">

        {/* Newsletter */}
        <div id="updates" className="border-b border-foreground/[0.14] p-6 md:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-16">
            <div className="md:w-64 shrink-0">
              <h2 className="display-tight text-xl font-black uppercase text-foreground">
                Op de hoogte blijven
              </h2>
              <p className="mt-3 text-sm leading-7 text-foreground/62">
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

        {/* Footer bar */}
        <footer className="flex items-center justify-between gap-6 px-6 py-5 md:px-10 md:py-6">
          <div className="flex items-center gap-6">
            <Image
              src="/12h-run-logo-text.svg"
              alt="12h.run"
              width={220}
              height={69}
              className="h-8 w-auto md:h-10"
            />
            <p className="hidden text-sm font-medium text-foreground/40 md:block">
              12H Run Berkel-Enschot | 2027
            </p>
          </div>
          <a
            href="mailto:dankersruud@gmail.com"
            className="text-sm font-bold uppercase tracking-[0.12em] text-foreground/62 hover:text-foreground"
          >
            Contact
          </a>
        </footer>

      </div>
    </div>
  );
}
