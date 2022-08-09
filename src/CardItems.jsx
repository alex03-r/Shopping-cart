

//{id, increme,  img, name, quantity, price, brand, describtion }

export const CardItems = (props) => {

    const { increme } = props;
    

    return (
        <div  className='card-container d-flex'>
            <img src={require(`./img/${props.img}`)} alt={props.name} className='img-Cart' />
            <div className='card-info'>
                <p className='h3 text-center' >{props.name}</p>
                <p className='quantity h4'> Quantity {props.quantity} </p>
                <p className='total h3'> Total: {props.totalPrice}  </p>
                <p className='ms-5'>Price: {props.price}</p>
                <p className='ms-5'>Brand: {props.brand}</p>
                <p className='ms-5'>Describtion: {props.describtion}</p> 
                <div className='d-flex justify-content-end' >
                    <button onClick={() => increme(props.id)} className='btn btn-primary btn-remove' >+</button>
                    <button className='btn btn-danger btn-remove' >-</button>
                </div>
            </div>
        </div>
    )
}
