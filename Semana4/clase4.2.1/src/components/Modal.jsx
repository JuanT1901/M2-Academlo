import { IconSquareRoundedXFilled } from "@tabler/icons-react";

const Modal = ({
  isShowModal,
  handleClosedModal,
  handleSubmit,
  register,
  submit,
  idCarToEdit,
  errors,
}) => {
  return (
    <section
      className={`fixed top-0 bottom-0 left-0 right-0 bg-black/30 flex justify-center items-center px-3 transition-all duration-500 ${
        isShowModal ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-white p-3 rounded-md grid gap-3 w-[min(100%,_270px)] relative"
      >
        <h2 className="text-center text-lg font-semibold">
          {idCarToEdit ? "Editar auto" : "Crear auto"}
        </h2>
        <button
          onClick={handleClosedModal}
          type="button"
          className="text-red-500 absolute right-2 top-2 hover:text-red-600 transition-colors"
        >
          <IconSquareRoundedXFilled />
        </button>
        <div className="grid gap-1">
          <label className="font-light" htmlFor="Brand">
            Marca
          </label>
          <input
            className="outline-none border px-2 py-1 rounded-sm"
            id="brand"
            type="text"
            {...register("brand", { 
              required: {
                value: true,
                message: "Este campo es requerido"
              } })}
          />
          {errors.brand && (
            <span className="text-xs text-red-500">
              {errors.brand.message}
            </span>
          )}
        </div>
        <div className="grid gap-1">
          <label className="font-light" htmlFor="model">
            Modelo
          </label>
          <input
            className="outline-none border px-2 py-1 rounded-sm"
            id="model"
            type="text"
            {...register("model")}
          />
        </div>
        <div className="grid gap-1">
          <label className="font-light" htmlFor="color">
            Color
          </label>
          <input
            className="outline-none border px-2 py-1 rounded-sm"
            id="color"
            type="text"
            {...register("color")}
          />
        </div>
        <div className="grid gap-1">
          <label className="font-light" htmlFor="year">
            Año
          </label>
          <input
            className="outline-none border px-2 py-1 rounded-sm"
            id="year"
            type="number"
            {...register("year")}
          />
        </div>
        <div className="grid gap-1">
          <label className="font-light" htmlFor="price">
            Price
          </label>
          <input
            className="outline-none border px-2 py-1 rounded-sm"
            id="price"
            type="text"
            {...register("price")}
          />
        </div>
        <button
          className="bg-green-400 p-2 px-4 uppercase font-semibold rounded-sm"
          type="submit"
        >
          {idCarToEdit ? "Guardar" : "Crear"}
        </button>
      </form>
    </section>
  );
};
export default Modal;
