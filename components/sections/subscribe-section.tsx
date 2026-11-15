"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function SubscribeSection() {
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
    <section id="updates" className="bg-background px-3 py-10 md:px-5">
      <div className="container-page event-shell overflow-hidden">
        <div className="border-b border-foreground/[0.14] px-6 py-4">
          <h2 className="display-tight text-xl font-black uppercase text-foreground">
            Op de hoogte blijven
          </h2>
        </div>

        <div className="flex flex-col gap-8 p-6 md:flex-row md:items-center md:gap-16 md:p-10">
          <div className="flex-1">
            <p className="text-sm leading-7 text-foreground/62">
              Meld je aan en ontvang updates over 12H van
              Berkel-Enschot.
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
    </section>
  );
}
