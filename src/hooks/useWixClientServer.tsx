import { createClient, OAuthStrategy } from '@wix/sdk';
import { items } from '@wix/data';
export const getWixClient = async () => {
  const wixClient = createClient({
    modules: { items },
    auth: OAuthStrategy({ clientId: '1a1a115a-255d-40e1-a7b8-e0a0fca973fd' }),
  });
  const tokens = await wixClient.auth.generateVisitorTokens();
  wixClient.auth.setTokens(tokens);
  return wixClient;
};
