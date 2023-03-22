import excuteQuery from "lib/query"
export default async function handler(req,res){
    const itemid=req.body.id
    try {
       const valuuee=[req.body.note, req.body.newqty]
        const result = await excuteQuery({
            query: 'UPDATE boot SET `note`=?, `newqty`=? WHERE id=?',
            values: [...valuuee, itemid],
        });
        res.status(200).json("good job")
    } catch ( error ) {
        console.log( error );
    }
       
}
