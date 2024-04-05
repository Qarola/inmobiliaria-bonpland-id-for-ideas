import {estates} from '../../../data/estates.ts'
import Card from './Card/Card'

const List = () =>{
    return(
        <div className="flex flex-wrap justify-center items-start gap-4 p-10">
            {estates && estates.map(estate =>(
                <Card estate={estate}/>
            ))}
        </div>
    )
}

export default List