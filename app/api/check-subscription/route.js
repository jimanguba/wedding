import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(req) {
  const { endpoint } = await req.json();

  if (!endpoint) {
    return NextResponse.json({ exists: false }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('push_subscriptions')
    .select('id')
    .eq('endpoint', endpoint)
    .maybeSingle();

  if (error) {
    console.error('[CHECK ERROR]', error);
    return NextResponse.json({ exists: false }, { status: 500 });
  }

  return NextResponse.json({ exists: !!data });
}
