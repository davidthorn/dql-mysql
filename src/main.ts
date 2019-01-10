import { connectionPromise } from './connection';
import { promise } from './promise';
import { Query } from 'mysql';
import { TableField } from './types/TableColum';


const app = async () => {

    const connection = await connectionPromise.catch(() => {
        console.log('error happened')
        throw new Error('error happened')
    })

    const d = `
    CREATE TABLE IF NOT EXISTS people.others (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        author Int NOT NULL
        )
    `
    connection.query(d)
    const othersColumns$ = promise<{error:  any , result: any , fields: any}>((resolve) => {
        connection.query('show columns in others' , (error, result, fields) => {
            resolve({
                error: error,
                result: result,
                fields
            })
        })
    })

    const othersColumns = await othersColumns$.then((i):TableField[] => { return i.result.map(l => { 
        const field: TableField = {
            name: l.Field,
            default: l.Default,
            extra: l.Extra,
            isNUll: l.Null === 'NO' ? false: true,
            key: l.Key,
            type: l.Type
        }
        return field
     }) 
    })
    console.log(othersColumns)

    const showTables: Query = connection.query("show tables" , (error, results, fields) => {
        console.log(results)
        console.log(fields)
    })

    showTables.on('error' , (error) => {
        console.log(error)
    })
    showTables.on('result' , (row, index) => {
        console.log(row)
    })

    showTables.on('packet' , (packet) => {
        console.log(packet)
    })

    showTables.on('end' , () => {
        console.log('end')
    })

    showTables.on('fields' , (fields) => {
        console.log(fields)
    })
        

}

app().then(() => {}).catch(error => {
    //console.log(error)
})
