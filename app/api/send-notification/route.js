import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import webpush from 'web-push';

webpush.setVapidDetails(
  'mailto:you@example.com',
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function POST() {
  const { data: subs, error } = await supabase
    .from('push_subscriptions')
    .select('*');

  if (error) {
    console.error('[FETCH SUBS ERROR]', error);
    return NextResponse.json({ error: 'Failed to get subscriptions' }, { status: 500 });
  }

  const payload = JSON.stringify({
    title: '💍 It’s Wedding Day!',
    body: 'Get ready to celebrate with Jillian & Braeden!',
    icon: '/icon.png',
  });

  const results = await Promise.allSettled(
    subs.map((sub) =>
      webpush.sendNotification(
        { endpoint: sub.endpoint, keys: sub.keys },
        payload
      )
    )
  );
  
  results.forEach((result, index) => {
    if (result.status === 'rejected') {
      console.error(`❌ Subscription ${index + 1} failed:`, result.reason);
    }
  });
  
}

export async function GET() {
  return NextResponse.json({
    message: '👋 This endpoint sends wedding push notifications. Use POST to trigger.',
  });
}

