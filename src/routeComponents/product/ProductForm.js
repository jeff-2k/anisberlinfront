function ProductForm(props) {
  return (
    <form className="mb-5" onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="productFormName">Produto</label>
        <input
          type="text"
          className="form-control"
          id="productFormName"
          name="name"
          onChange={props.handleChange}
          value={props.state.name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="productFormDescription">Descrição</label>
        <input
          type="text"
          className="form-control"
          id="productFormDescription"
          name="description"
          onChange={props.handleChange}
          value={props.state.description}
        />
      </div>



      <div className="form-row">
        <div className="form-group">
          <label htmlFor="productGlutenFree">Contém Glúten?</label>
          <input
            type="text"
            className="form-control"
            id="productGlutenFree"
            name="glutenFree"
            onChange={props.handleChange}
            value={props.state.glutenFree}
          />
        </div>

        <div className="form-group">
          <label htmlFor="productFormLactoseFree">Contém lactose?</label>
          <input
            type="text"
            className="form-control"
            id="productFormLactoseFree"
            name="lactoseFree"
            onChange={props.handleChange}
            value={props.state.lactoseFree}
          />
        </div>

        <div className="form-group">
          <label htmlFor="productFormSugarFree">Contém açúcar?</label>
          <input
            type="text"
            className="form-control"
            id="productFormSugarFree"
            name="sugarFree"
            onChange={props.handleChange}
            value={props.state.sugarFree}
          />
        </div>

        <div className="form-group">
          <label htmlFor="productFormCaseinFree">Contém Caseína?</label>
          <input
            type="text"
            className="form-control"
            id="productFormCaseinFree"
            name="caseinFree"
            onChange={props.handleChange}
            value={props.state.caseinFree}
          />
        </div>

        <div className="form-group">
          <label htmlFor="productFormVegan">Vegetariano?</label>
          <input
            type="text"
            className="form-control"
            id="productFormVegan"
            name="vegan"
            onChange={props.handleChange}
            value={props.state.vegan}
          />
        </div>
        
      </div>
      <div className="form-row">
        <div className="form-group col">
          <label htmlFor="productFormPrice">Preço</label>
          <input
            type="text"
            className="form-control"
            id="productFormPrice"
            name="price"
            onChange={props.handleChange}
            value={props.state.price}
          />
        </div>

        <div className="form-group">
          <label htmlFor="productFormImage">Imagem</label>
          <input
            type="file"
            className="form-control"
            id="productFormImage"
            name="image_url"
            onChange={props.handleChange}
          />
        </div>

      </div>
      <hr />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default ProductForm;
