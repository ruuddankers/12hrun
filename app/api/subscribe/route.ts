import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email, firstName } = await request.json() as {
    email: string;
    firstName: string;
  };

  if (!email || !firstName) {
    return NextResponse.json(
      { error: "Vul alle velden in." },
      { status: 400 }
    );
  }

  const formUid = process.env.KIT_FORM_UID;

  if (!formUid) {
    return NextResponse.json(
      { error: "Aanmelding is tijdelijk niet beschikbaar." },
      { status: 500 }
    );
  }

  // Use the same public subscription endpoint that Kit's embed script uses.
  // No API key required — the form UID is the public identifier.
  const body = new URLSearchParams();
  body.append("email_address", email);
  body.append("first_name", firstName);

  const res = await fetch(
    `https://app.convertkit.com/forms/${formUid}/subscriptions`,
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    }
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: "Aanmelding mislukt. Probeer het opnieuw." },
      { status: 400 }
    );
  }

  return NextResponse.json({ success: true });
}
