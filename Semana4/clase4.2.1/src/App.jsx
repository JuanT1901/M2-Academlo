import { useEffect, useState } from "react";
import "./App.css";
import { BASE_URL, EMPTY_FROM_VALUES } from "./constants/cars";
import axios from "axios";
import Modal from "./components/Modal";
import Header from "./components/Header";
import { useForm } from "react-hook-form";
import CarList from "./components/CarList";

function App() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [cars, setCars] = useState([]);
  const [idCarToEdit, setIdCarToEdit] = useState(null);

  const { handleSubmit, register, reset, formState} = useForm();
  const { errors } = formState;

  const submit = (data) => {
    idCarToEdit 
    ? updateCar(data)
    : createCar(data);
  };

  const handleOpenModal = () => {
    setIsShowModal(true);
  };

  const handleClosedModal = () => {
    setIsShowModal(false);
    reset(EMPTY_FROM_VALUES);
    setIdCarToEdit(null);
  };

  const updateCar = (data) => {
    axios
      .put(`${BASE_URL}/cars/${idCarToEdit}/`, data)
      .then(() => {
        getAllCars()
        handleClosedModal();
      })
      .catch((err) => console.log(err))
  }

  const createCar = (data) => {
    axios
      .post(`${BASE_URL}/cars/`, data)
      .then(() => {
        handleClosedModal();
        getAllCars();
      })
      .catch((err) => console.log(err));
  };

  const deleteCar = (id) => {
    axios
      .delete(`${BASE_URL}/cars/${id}/`)
      .then(() => getAllCars())
      .catch((err) => console.log(err));
  };

  const getAllCars = () => {
    axios
      .get(`${BASE_URL}/cars/`)
      .then(({ data }) => setCars(data))
      .catch((err) => console.log(err));
  };

  const handleClickUpdate = (carToUpdate) => {
    handleOpenModal();
    reset(carToUpdate);
    setIdCarToEdit(carToUpdate.id);
  };

  useEffect(() => {
    getAllCars();
  }, []);

  return (
    <main className="min-h-screen">
      <Header handleOpenModal={handleOpenModal} />
      <Modal
        isShowModal={isShowModal}
        handleClosedModal={handleClosedModal}
        handleSubmit={handleSubmit}
        submit={submit}
        register={register}
        idCarToEdit={idCarToEdit}
        errors={errors}
      />
      <CarList
        cars={cars}
        deleteCar={deleteCar}
        handleClickUpdate={handleClickUpdate}
      />
    </main>
  );
}

export default App;
