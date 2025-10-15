import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { renderToStream } from "@remix-run/dom/server";
import { Layout } from "./root";
import { serveStatic } from "@hono/node-server/serve-static";

const app = new Hono();
app.get("/", () => {
  return new Response(renderToStream(<Layout />), {
    headers: {
      "Content-Type": "text/html",
    },
  });
});
app.use("*", serveStatic({ root: "./dist" }));

serve(app);

console.log("http://localhost:3000");
