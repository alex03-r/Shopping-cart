

export const CardItems = (props) => {

    const { increme, drecreme, deleteItem } = props;

    return (
        <div className='card-container d-flex'>
            <img src={require(`../img/${props.img}`)} alt={props.name} className='img-Cart' />
            <div className='card-info'>
                <p className='h3 text-center' >{props.name}</p>
                <p className='quantity h4'> Quantity {props.quantity > 0 ? props.quantity : 1} </p>
                <p className='total h3'> Total: {props.totalPrice >= props.price ? props.totalPrice : props.price}  </p>
                <p className='ms-5'>Price: {props.price}</p>
                <p className='ms-5'>Brand: {props.brand}</p>
                <p className='ms-5'>Describtion: {props.describtion}</p>
                <div className='d-flex justify-content-end' >
                    <button onClick={() => increme(props.id)} className='btn btn-primary btn-action' >+</button>
                    <button onClick={() => drecreme(props.id)} className='btn btn-danger btn-action' >-</button>
                    <button onClick={() => deleteItem(props.id)} className='btn btn-danger  w-25'> Remove </button>
                </div>
            </div>
        </div>
    )
}
