async function getGraphqlWithAuth() {
  const { graphql } = await import("@octokit/graphql");

  return graphql.defaults({
    headers: {
      /* eslint-disable no-undef */
      authorization: `token ${process.env.NEXT_PUBLIC_GH_PFP_TOKEN}`,
    },
  });
}

async function parseGitAvatar(username: string) {
  const graphqlWithAuth = await getGraphqlWithAuth();
  const query = `
        query ($username: String!) {
            user(login: $username) {
                avatarUrl
            }
        }
    `;

  const response = (await graphqlWithAuth(query, { username })) as any;

  return response.user.avatarUrl;
}

export { parseGitAvatar };
