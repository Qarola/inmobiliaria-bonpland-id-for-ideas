import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Card = ({estate}) =>{
    const {image, name, description} = estate
    return(
        <div className="flex flex-col shadow rounded-2xl w-[250px] justify-between items center">
            <div className="w-[100%] pb-6">
                <img className="w-[100%]" src={image}/>
                <div className="p-2">
                    <h1 className="font-bold">{name}</h1>
                    <p className="text-sm">{description}</p>
                </div>
            </div>
            <button className="flex p-2 pb-5 font-bold justify-start items-center">
                Más info
                <ArrowForwardIcon/>
            </button>
        </div>
    )
}

export default Card