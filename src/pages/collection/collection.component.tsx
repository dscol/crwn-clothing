import { useSelector } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';
import './collection.styles.scss';

const CollectionPage = (props: any) => {
    const collection = useSelector(selectCollection(props.match.params.collectionId))
    const { title, items } = collection;

    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map((item: any) => 
                    <CollectionItem key={item.id} item={item} />
                )}
            </div>
        </div>
    )
}

export default CollectionPage;