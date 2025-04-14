import { get } from '@vercel/edge-config';

export async function showAmazonRegistry() {
  const flag = await get('amazon-registry');
  return flag === true;
}
