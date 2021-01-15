import { addItem } from '../../redux/cart/cart.actions';

import { useDispatch } from 'react-redux';
import { AddButton, BackgroundImage, CollectionFooterContainer, CollectionItemContainer, NameContainer, PriceContainer } from './collection-item.styles';


const CollectionItem = ({ item }: any) => {
    const { name, price, imageUrl } = item
    const dispatch = useDispatch();

    return (
        <CollectionItemContainer>
            <BackgroundImage style={{backgroundImage: `url(${imageUrl})`}} />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton onClick={() => dispatch(addItem(item))} inverted>
                Add to cart
            </AddButton>
        </CollectionItemContainer>
    )
}

export default CollectionItem;