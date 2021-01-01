import './menu-item.styles.scss'

interface IMenuItem {
    title: string,
    id: number,
    imageUrl: string,
    size?: string,
}

const MenuItem = ({ title, id, imageUrl, size }: IMenuItem) => {
    return (
        <div className={`${size} menu-item`}>
            <div 
                className='background-image' 
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem;