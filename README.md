# **Lab: Welcome to React, Next.js & TailwindCSS**

This lab shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3) with [Next.js.](https://nextjs.org/) It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

<br>



## **Practical Steps**

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

1. Go to [Next.js.](https://nextjs.org/) website and choose examples ---> styling ---> with-tailwindcss


2. Execute: ```npx create-next-app --example with-tailwindcss <app name>```

3. Cd into the app 



4. Go into "*pages*" folder and delete the "api" folder.
	
    - Change the extension of:

            _app.tsx ---> _app.js 

            index.tsx---> index.js





5. Go to "*tsconfig.json*" and change:

    ```
    
    "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", "pages/_app.js", "pages/index.js"],

    to:

    "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", "**/*.js",  "**/*.jsx", "pages/_app.js", "pages/index.js"],

    ```

6. Delete everything in "**index,js**" except for:```export default Home```

7. Delete the unnecessary typescript syntax from "**index.js**" and "*_app.js*" 


8. This step is done to separate components, rather than keep them all in "*index.js*";

	in "*pages*" folder, create a new folder "*components*", 
	inside "components" create ---> all the necessary components:

        - "*Header*"
        - "*Footer*"
        - "*Main*" contains <form>


9. Write the functionally and styling in each component, not forgetting to import the functions into "*index.js*".

10. To run the server using npm, execute: ```npm run dev```

