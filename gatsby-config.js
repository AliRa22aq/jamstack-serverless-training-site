module.exports = {
    plugins: [
        "gatsby-plugin-typescript",
        {   
            resolve: `gatsby-source-contentful`,
            options: {
              spaceId: `fshydxrtmrhy`,
              // Learn about environment variables: https://gatsby.dev/env-vars
              accessToken: "BnSnkNtSx41PD05h7UIcwRkcxBMVLEST9oDo1DPro1Y",
            },
          },
    ]
}