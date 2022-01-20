import Head from "next/head";
import { ReactElement } from "react";

interface IHeadProps {
  name: string;
}

export function PageHead(props: IHeadProps): ReactElement {
  return (
    <Head>
      <title>{props.name} • Michael Schroeder</title>

      {/* <meta name="viewport" content="width=device-width, initial-scale=0.5" /> */}
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="author" content="Michael Schroeder" />
      <meta name="copyright" content="Michael Schroeder" />
      <meta name="rating" content="General" />
      <meta name="url" content="https://schrodo.co" />
      <meta
        name="description"
        content="Michael Schroeder - Software Engineerr"
      />
      <meta name="twitter:creator" content="@schrodobaggin" />
      <meta name="twitter:site" content="@schrodobaggin" />
      <meta
        name="keywords"
        content="Software Engineer, Developer"
      />

      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋🏻</text></svg>"
      />
    </Head>
  );
}
