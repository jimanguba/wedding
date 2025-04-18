import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST(req) {
  const body = await req.json();
  const { endpoint, keys } = body;

  if (!keys?.p256dh || !keys?.auth) {
    return NextResponse.json({ error: 'Missing p256dh or auth keys' }, { status: 400 });
  }

  const { error } = await supabase
    .from('push_subscriptions')
    .upsert({ endpoint, keys });

  if (error) {
    console.error('[SUBSCRIPTION ERROR]', error);
    return NextResponse.json({ error: 'Failed to save subscription' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}

