import { db } from "@vercel/postgres";

const client = await db.connect();

async function listCarrocel() {
	const data = await client.sql`
    SELECT id, nome, informacoes_gerais, data
    FROM evento 
    ORDER BY data desc 
    LIMIT 5 ;
  `;

	return data.rows;
}

export async function GET() {
 
  try {
  	return Response.json(await listCarrocel());
  } catch (error) {
  	return Response.json({ error }, { status: 500 });
  }
}
