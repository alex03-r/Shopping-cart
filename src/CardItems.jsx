

export const CardItems = ({ id, img, name, quantity, price, brand, describtion }) => {
    return (
        <div key={id} className='card-container d-flex'>
            <img src={require(`./img/${img}`)} className='img-Cart' />
            <div className='card-info'>
                <p className='h3 text-center' >{name}</p>
                <p className='quantity h4'> Quantity {quantity} </p>
                <p className='total h3'> Total: {price}  </p>
                <p className='ms-5'>Price: {price}</p>
                <p className='ms-5'>Brand: {brand}</p>
                <p className='ms-5'>Describtion: {describtion}</p>
                <div className='d-flex justify-content-end' >
                    <button className='btn btn-primary btn-remove' >+</button>
                    <button className='btn btn-danger btn-remove' >-</button>
                </div>
            </div>
        </div>
    )
}
