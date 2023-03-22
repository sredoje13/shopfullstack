
import excuteQuery from "lib/query"
export default async function handler(req,res){

  try {
     const valuuee=[
        req.body.id,
        req.body.name,
        req.body.price,
        req.body.email,
        req.body.adress]
      const result = await excuteQuery({
          query: "INSERT INTO emailtable (`id`,`name`,`price`,`email`,`adress`) VALUES(?)",
          values: [[valuuee]],
      });
      return res.json("exelent")  }
       catch ( error ) {
      console.log( error );
  }
  
}