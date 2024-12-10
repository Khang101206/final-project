import { 
    FeaturedProperty,
    ImgItem,
    NameItem ,
    From,
    PriceItem,
    Score,
    Review,
    UserRate
 } from "./item.style";

const Item = ({name,price,rate,img})=>{
    return(
        <FeaturedProperty>
            <ImgItem src={img}></ImgItem>
            <NameItem>{name}</NameItem>
            <UserRate>
                <Score><div>{rate}</div></Score>
                <Review>(4895 reviews)</Review>
            </UserRate>
            <From>
                <div>From:</div>
                <PriceItem>{price}</PriceItem>
            </From>
        </FeaturedProperty>
    )
}

export default Item;