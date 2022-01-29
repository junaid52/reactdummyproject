import Card from './Card';
const CardList = (props) => {
    
    const newDataArray = props.dataArray.map((element) => {
        return <Card key={element.id} title={element.name} description={element.description} variants={element.variants} imgUrl={element.image} />
    })
   
    return (
        
            newDataArray
        
    )
}
export default CardList;