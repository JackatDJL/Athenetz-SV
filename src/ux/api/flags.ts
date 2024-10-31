import { unstable_flag as flag } from '@vercel/flags/next';
 
/**
 * Naming Conventions:
 * 
 * - Use `gk_` prefix for "GateKeeper" flags
 *   this is like a key to a door, it's either open (true) or closed (false)
 */

export const gk_Main = flag({
  key: 'GateKeeper_Main',
  decide: () => false,
});