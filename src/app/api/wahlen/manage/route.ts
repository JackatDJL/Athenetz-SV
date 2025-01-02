import { Account, Client } from "appwrite";

export async function GET() {
  return Response.json({}, { status: 501 });
}

export async function POST(request: Request) {
  const data = request.headers;
  console.log(data);
  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("<PROJECT_ID>") // Your project ID
    .setJWT(data.get("token") || "");

  const account = new Account(client);

  const promise = account.get();

  promise.then(
    (response) => {
      return Response.json(response, { status: 200 });
    },
    (reason) => {
      return Response.json(reason, { status: 400 });
    }
  );

  return Response.json({}, { status: 500 });
}
