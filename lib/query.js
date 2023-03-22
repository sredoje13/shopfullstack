    import mysql from 'serverless-mysql';
    const db = mysql({
      config: {
        password:'f6a889f3',
        user:"b0f1c2966b63d2",
        database:"heroku_8eb1a8ee3b9243a",
        host:"eu-cdbr-west-03.cleardb.net",
      }
    });
    export default async function excuteQuery({ query, values }) {
      try {
        const results = await db.query(query, values);
        await db.end();
        return results;
      } catch (error) {
        return { error };
      }
    }