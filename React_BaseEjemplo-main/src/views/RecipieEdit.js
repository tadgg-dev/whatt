import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button, Form, Alert, Spinner } from "react-bootstrap";
import axios from "axios";

import { API_BASE } from "../constants";

const RecipeEditPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [formData, setFormData] = useState(id ? null : {});
  const [ingredients, setIngredients] = useState(id ? null :[] );
  const [error, setError] = useState(null);

  useEffect(() => {
    if(id) {
      axios
        .get(`${API_BASE}/recipies/${id}`)
        .then((recipe) => {
          setFormData({
            name: recipe?.data?.nombreReceta,
            description: recipe?.data?.descripcionReceta,
          });
        })
        .catch((error) => {
          setError(error?.response?.data);
        });
  
        axios
        .get(`${API_BASE}/recipies/ingredients/${id}`)
        .then((ingredientsList) => {
          setIngredients(ingredientsList.data);
        })
        .catch((error) => {
          setIngredients([]);
          setError(error?.response?.data);
        });
    }
  }, []);

  const navigate = useNavigate();
  const updateRecipie = () => {
    const id = searchParams.get("id");

    if(id) {
      axios
        .put(`${API_BASE}/recipies?id=${id}`, {
          ...formData,
          ingredients
        })
        .then((userData) => {
          navigate("/recipies");
        })
        .catch((error) => {
          setError(error?.response?.data);
        });
    } else {
      axios
        .post(`${API_BASE}/recipies`, {
          ...formData,
        })
        .then(() => {
          navigate("/recipies");
        })
        .catch((error) => {
          setError(error?.response?.data);
        });
    }
  };

  const handlerChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const updateIngredient = (index, event) => {
    let newValues = [];

    newValues = newValues.concat(ingredients);
    newValues[index] = event.target.value;

    setIngredients(newValues)
  }

  const addNewIngredient = () => {
    const idReceta = searchParams.get("id");
    axios
    .post(`${API_BASE}/recipies/ingredients/new?id=${idReceta}`)
    .then((newIngredient) => {
      let newValues = [];
      newValues = newValues.concat(ingredients);
      newValues.push(newIngredient.data);
      setIngredients(newValues);
    })
    .catch((error) => {
      setError(error?.response?.data);
    });
  }

  const deleteIngredient = (ingredient, index) => {
    const idReceta = searchParams.get("id");
    axios
      .delete(`${API_BASE}/recipies/ingredients?id=${ingredient.idIngrendientes}&idReceta=${idReceta}`)
      .then(() => {
        let newValues = [];
        newValues = newValues.concat(ingredients);
    
        newValues.splice(index, 1);
        setIngredients(newValues)
      })
      .catch((error) => {
        setError(error?.response?.data);
      });
  }

  return (
    <>
      {(!formData || !ingredients) && (
        <div className="receta-loading">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      {error && (
        <Alert
          key="login-error"
          variant="danger"
          onClose={() => setError(null)}
          dismissible
        >
          {error}
        </Alert>
      )}
      {formData && ingredients && (
        <Form className="formulario">
          <h1>Receta</h1>

          <div>
            <Form.Group class="mb-3">
              <Form.Label for="name">Nombre</Form.Label>
              <Form.Control
                placeholder="ingresa tu nombre de receta"
                defaultValue={formData?.name}
                onChange={handlerChange}
                name="name"
              />
            </Form.Group>

            <Form.Group class="mb-3">
              <Form.Label for="name">Descripcion</Form.Label>
              <Form.Control
                placeholder="ingresa descripcion"
                onChange={handlerChange}
                defaultValue={formData?.description}
                name="description"
              />
            </Form.Group>
          </div>
          {id && <div className="d-flex mb-3">
            <h2 className="text-start">Ingredientes</h2>
            <Button className="ingrediente-button" variant="success" type="button" onClick={addNewIngredient}>
                          Agregar
                        </Button>
          </div>}
          {
            ingredients?.map((ingredient, index) => {
                return (
                    <Form.Group class="mb-3 d-flex">
                        <Form.Control
                            placeholder="ingresa ingrediente"
                            onChange={(event) => updateIngredient(index, event)}
                            defaultValue={ingredient?.descripcionIngrediente}
                            name="description"
                        />
                        <Button className="ingrediente-button " variant="danger" type="button" onClick={() => deleteIngredient(ingredient, index)}>
                          Borrar
                        </Button>
                    </Form.Group>
                )
            })
          }
          <div>
            <Button variant="primary" type="button" onClick={updateRecipie}>
              {id ? "Editar" : 'Crear'}
            </Button>
          </div>
        </Form>
      )}
    </>
  );
};

export default RecipeEditPage;
