import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import webpush from "web-push";

webpush.setVapidDetails(
  "mailto:you@example.com",
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(req) {
  const { title, body } = await req.json();

  const payload = JSON.stringify({
    title: title || "💌 Wedding Day!",
    body: body || "Get ready to celebrate!",
    icon: "/icon.png",
  });

  const { data: subs, error } = await supabase
    .from("push_subscriptions")
    .select("*");

  if (error) {
    console.error("🔴 Error fetching subs:", error);
    return NextResponse.json({
      success: false,
      error: "Failed to fetch subscriptions",
    });
  }

  const results = await Promise.allSettled(
    subs.map((sub) =>
      webpush.sendNotification(
        {
          endpoint: sub.endpoint,
          keys: sub.keys,
        },
        payload
      )
    )
  );

  const failedCount = results.filter((r) => r.status === "rejected").length;
  const { error: logError } = await supabase
    .from("notification_history")
    .insert([
      {
        title: title || "💌 Wedding Day!",
        message: body || "Get ready to celebrate!",
      },
    ]);

  if (logError) {
    console.error("🛑 Failed to save to history:", logError);
  }

  return NextResponse.json({
    success: true,
    failedCount,
  });
}

export async function GET() {
  return NextResponse.json({
    message:
      "👋 This endpoint sends wedding push notifications. Use POST to trigger.",
  });
}
