import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // Stub for Stripe webhook handler
  return NextResponse.json({ received: true });
}
