import { Account, Client, Databases, ID, Teams } from "appwrite";

export async function GET() {
  console.log("GET request received");
  return Response.json({}, { status: 501 });
}

export async function POST(request: Request) {
  console.log("POST request received");
  const data = await request.headers;
  console.log("Request headers fetched");
  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("athesv") // Your project ID
    .setJWT(data.get("token") || "");
  console.log("Client initialized with JWT token");
  const teams = new Teams(client);
  let quit = false;

  const accessCheckPromise = teams.list();
  console.log("Access check promise initiated");

  accessCheckPromise
    .then(
      async (value) => {
        console.log("Access check promise resolved");
        if (
          value.teams.some(
            (team) => team.$id === "admin" || team.$id === "committee"
          )
        ) {
          console.log("User is part of admin or committee team");
          const account = new Account(client);

          const AccountData = await account.get();
          console.log("Account data fetched");

          const userId = AccountData.$id;

          const db = new Databases(client);

          const name = data.get("name");
          const date = data.get("date");

          if (!name || !date) {
            console.log("Required data is missing");
            quit = true;
            return Response.json(
              {},
              { status: 400, statusText: "Required Data is Missing" }
            );
          }

          const type = data.get("type");
          const id = ID.unique();

          const dbPromise = db.createDocument("wahlen", "wahlen", id, {
            name: name,
            date: date,
            owner: userId,
          });
          console.log("Database promise initiated for document creation");

          dbPromise
            .then(
              async (data) => {
                console.log("Database promise resolved for document creation");
                if (type) {
                  const updatePromise = db.updateDocument(
                    "wahlen",
                    "wahlen",
                    id,
                    {
                      type: type,
                    }
                  );
                  console.log("Update promise initiated for document type");
                  updatePromise
                    .then(
                      (data) => {
                        console.log(
                          "Update promise resolved for document type"
                        );
                        quit = true;
                        return Response.json(data, { status: 201 });
                      },
                      (reason) => {
                        console.error(
                          "Update promise rejected for document type",
                          reason
                        );
                        throw reason;
                      }
                    )
                    .catch((reason) => {
                      console.error(
                        "Update promise caught error for document type",
                        reason
                      );
                      throw reason;
                    });
                } else {
                  console.log("No type provided, skipping update");
                  quit = true;
                  return Response.json(data, { status: 201 });
                }
              },
              (reason) => {
                console.error(
                  "Database promise rejected for document creation",
                  reason
                );
                throw reason;
              }
            )
            .catch((reason) => {
              console.error(
                "Database promise caught error for document creation",
                reason
              );
              throw reason;
            });
        } else {
          console.log("User is not part of admin or committee team");
          quit = true;
          return Response.json({}, { status: 401 });
        }
      },
      (reason) => {
        console.error("Access check promise rejected", reason);
        if (reason.type == "user_jwt_invalid") {
          console.log("JWT token is invalid");
          quit = true;
          return Response.json({}, { status: 401 });
        } else {
          console.error("Unknown error in access check promise", reason);
          throw reason;
        }
      }
    )
    .catch(() => {
      console.error("Access check promise caught error");
      quit = true;
      return Response.json({}, { status: 501 });
    });
  if (!quit) {
    console.log("Quit flag is false, returning default response");
    return Response.json({}, { status: 245 });
  }
}
