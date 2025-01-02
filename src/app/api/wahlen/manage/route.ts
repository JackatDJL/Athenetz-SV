import { Account, Client, Databases, ID, Query, Teams } from "appwrite";

export async function GET(request: Request) {
  const data = await request.headers;
  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("athesv")
    .setJWT(data.get("token") || "");
  const teams = new Teams(client);

  try {
    const teamcheck = await teams.list();
    if (
      teamcheck.teams.some(
        (team) => team.$id !== "admin" && team.$id !== "committee"
      )
    ) {
      return Response.json({}, { status: 401 });
    }

    const pollid = data.get("pollid");
    const db = new Databases(client);
    const user = await new Account(client).get();

    if (pollid) {
      return Response.json({}, { status: 501 });
    } else {
      console.log(user.$id);
      const entries = await db.listDocuments("wahlen", "wahlen", [
        Query.select(["name", "date", "owner", "type", "public", "access"]),
        Query.equal("access", [user.$id]),
      ]);
      console.log(entries);
      return Response.json(entries, { status: 200 });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);
    if (error.type === "user_jwt_invalid") {
      return Response.json(error, { status: 401 });
    } else {
      return Response.json(
        { type: error.type, message: error.message },
        { status: 501 }
      );
    }
  }
}

export async function POST(request: Request) {
  const data = await request.headers;
  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("athesv") // Your project ID
    .setJWT(data.get("token") || "");
  const teams = new Teams(client);

  try {
    const value = await teams.list();
    if (
      value.teams.some(
        (team) => team.$id !== "admin" && team.$id !== "committee"
      )
    ) {
      return Response.json({}, { status: 401 });
    }

    const account = new Account(client);
    const AccountData = await account.get();
    const userId = AccountData.$id;

    const db = new Databases(client);
    const name = data.get("name");
    const date = data.get("date");

    if (!name || !date) {
      return Response.json(
        {},
        { status: 400, statusText: "Required Data is Missing" }
      );
    }

    const type = data.get("type");
    const id = ID.unique();

    const dbData = await db.createDocument("wahlen", "wahlen", id, {
      name: name,
      date: date,
      owner: userId,
    });

    if (type) {
      await db.updateDocument("wahlen", "wahlen", id, { type: type });
    }
    return Response.json(dbData, { status: 201 });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error);
    if (error.type === "user_jwt_invalid") {
      return Response.json(error, { status: 401 });
    } else if (error.type == "document_invalid_structure") {
      return Response.json(error, { status: 422 });
    } else {
      return Response.json(error, { status: error.code });
    }
  }
}
