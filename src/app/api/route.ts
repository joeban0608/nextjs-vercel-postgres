export async function GET() {
  const res = new Response("Hello, Next.js!", {
    status: 200,
  });

  return Response.json(res);
}
