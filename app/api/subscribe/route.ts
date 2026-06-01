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

  const apiKey = process.env.KIT_API_KEY;
  const formId = process.env.KIT_FORM_ID;

  if (!apiKey || !formId) {
    return NextResponse.json(
      { error: "Aanmelding is tijdelijk niet beschikbaar." },
      { status: 500 }
    );
  }

  const res = await fetch(
    `https://api.convertkit.com/v3/forms/${formId}/subscribe`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ api_key: apiKey, email, first_name: firstName }),
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
