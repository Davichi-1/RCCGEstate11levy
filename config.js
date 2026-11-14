// ESTATE SETTINGS. Edit this file in Notepad, save it, and upload it again.
// You never need to open index.html.
window.ESTATE_CONFIG = {
  // From Supabase: Project Settings > API. See GO_LIVE.md, step 4.
  SUPABASE_URL: 'https://qmhqzcydljeoxxephxsl.supabase.co',        // looks like https://abcdefgh.supabase.co
  SUPABASE_ANON_KEY: 'sb_publishable_hp_CaY8bK_zITNHn_EaSfw_zylcR0MQ',   // the long key labelled "anon public"

  // The levy for the year, in naira
  LEVY: 20000,

  // The account residents pay into (shown on their payment page)
  BANK: {
    name: 'Ecobank',
    number: '3282025719',
    holder: 'The Redemption Camp Estate 11 Provincial Chalet Association', // must match the name on the account exactly
  },

  // Optional: a real photo of the estate for the banners, e.g. 'community.jpg' (upload it next to index.html)
  PHOTO: '',
};
