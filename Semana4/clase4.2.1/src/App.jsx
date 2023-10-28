import { useEffect, useState } from 'react'
import './App.css'
import { BASE_URL } from './constants/cars';
import axios from 'axios';
import Modal from './components/Modal';
import Header from './components/Header';
import { useForm } from 'react-hook-form';

function App() {
  const [isShowModal, setIsShowModal] = useState(false)

  const { handleSubmit, register } = useForm();

  const submit = (data) => {
    console.log(data )
  };

  const handleOpenModal = () => {
    setIsShowModal(true);
  }

  const handleClosedModal = () => {
    setIsShowModal(false);
  }

  useEffect(() => {
    axios
      .get(`${BASE_URL}/cars/`)
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err))
  }, []);

  return (
    <main className='min-h-screen'>
      <Header handleOpenModal={handleOpenModal} />
      <Modal isShowModal={isShowModal} handleClosedModal={handleClosedModal} handleSubmit={handleSubmit} submit={submit} register={register}/>
    </main>
  )
}

export default App
