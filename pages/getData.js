import {table, minifyRecords} from './utils/Airtable'

export default async (req, res) => {  
    const records = await table.select({}).firstPage()
    const minifiedRecords = minifyRecords(records)
    res.statusCode = 200;
    res.json(minifiedRecords)
}
