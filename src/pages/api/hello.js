import excuteQuery from "lib/query";

export default async function hendler (req,res){
    try {
       
      const result = await excuteQuery({
          query: 'SELECT *FROM boot ',
          values: [],
      });
      res.status(200).json({result:result})
  } catch ( error ) {
      console.log( error );
  }
  
  
  };