const NewProduct = () => {
  return (
    <div className='row justify-content-center mt-5'>
      <div className='col-md-8'>
        <div className='card'>
          <div className='card-body'>
            <h2 className='text-center mb-4 font-weigth-bold'>
              Agregar nuevo producto
            </h2>
            <form>
              <div className='form-group'>
                <label>Nombre</label>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Ingresa el nombre del producto'
                  name='name-product'
                />
              </div>
              <div className='form-group'>
                <label>Precio</label>
                <input
                  type='number'
                  className='form-control'
                  placeholder='Ingresa el precio del producto'
                  name='price'
                />
              </div>
              <button
                type='submit'
                className='btn btn-primary font-weigth-bold text-uppercase d-block w-100'
              >
                Agregar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewProduct
