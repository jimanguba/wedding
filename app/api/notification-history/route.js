import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function GET() {
  const { data, error } = await supabase
    .from("notification_history")
    .select("*")
    .order("sent_at", { ascending: false });

  if (error) return NextResponse.json({ error }, { status: 500 });
  return NextResponse.json(data);
}

export async function DELETE(req) {
  const auth = req.headers.get("authorization");
  const expected = `Bearer ${process.env.NEXT_PUBLIC_ADMIN_SECRET}`;

  if (!auth || auth !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await req.json();

  if (!id) {
    return NextResponse.json({ error: "Missing notification ID" }, { status: 400 });
  }

  const { error } = await supabase
    .from("notification_history")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("🛑 Failed to delete notification:", error);
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
