import Car from "./Car";

const CarList = ({ cars, deleteCar, handleClickUpdate }) => {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,_270px)] justify-center max-w-[1000px] mx-auto gap-5 py-10">
      {cars.map((car) => (
        <Car
          key={car.id}
          carInfo={car}
          deleteCar={deleteCar}
          handleClickUpdate={handleClickUpdate}
        />
      ))}
    </section>
  );
};
export default CarList;
