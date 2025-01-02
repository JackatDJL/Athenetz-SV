/* eslint-disable @typescript-eslint/no-unused-vars */
import { Account, Client, Databases, ID, Query, Teams } from "appwrite";

export async function GET(request: Request) {
  const data = await request.headers;
  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("athesv")
    .setJWT(data.get("token") || "");
  const teams = new Teams(client);

  try {
    if (!data.get("token")) {
      return Response.json({}, { status: 401 });
    }

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
      const entries = await db.getDocument("wahlen", "wahlen", pollid, [
        Query.select(["name", "date", "owner", "type", "public"]),
      ]);

      return Response.json(entries, { status: 200 });
    } else {
      const entries = await db.listDocuments("wahlen", "wahlen", [
        Query.select(["name", "date", "owner", "type", "public"]),
        Query.equal("access", [user.$id]),
      ]);
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
  const data = await request.json();
  const header = request.headers;
  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("athesv") // Your project ID
    .setJWT(header.get("token") || "");
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
    const name = data.name;
    const date = data.date;

    if (!name || !date) {
      return Response.json(
        {},
        { status: 400, statusText: "Required Data is Missing" }
      );
    }

    const type = data.type;
    const id = ID.unique();

    let dbData = await db.createDocument("wahlen", "wahlen", id, {
      name: name,
      date: date,
      owner: userId,
    });

    if (type) {
      dbData = await db.updateDocument("wahlen", "wahlen", id, { type: type });
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

export async function PATCH(request: Request) {
  const data = await request.json();
  const header = request.headers;
  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("athesv") // Your project ID
    .setJWT(header.get("token") || "");
  const teams = new Teams(client);

  try {
    const id = data.id;
    if (!id) {
      return Response.json(
        {},
        { status: 400, statusText: "Required Data is Missing" }
      );
    }
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

    const oldData = await db.getDocument("wahlen", "wahlen", id, [
      Query.select(["name", "date", "type", "public", "access"]),
    ]);

    const name = data.name || oldData.name;
    const date = data.date || oldData.date;
    const type = data.type || oldData.type;
    const ispublic = data.public || oldData.public;
    const access = data.access || oldData.access;

    const updatedDoc = await db.updateDocument("wahlen", "wahlen", id, {
      name: name,
      date: date,
      type: type,
      public: ispublic,
      access: access,
    });

    return Response.json(updatedDoc, { status: 200 });
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
