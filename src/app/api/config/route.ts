import Config from "./config.json";

/**
 * @name api/config endpoint
 * @async
 * @api
 *
 * @returns Config Data
 *
 */
export async function GET() {
  return Response.json(Config, { status: 200 });
}

// This should fetch from Server in the Future
