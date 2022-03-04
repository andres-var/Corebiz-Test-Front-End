
import "./NewSletter.scss";


const NewSletter = ({
	errors,
	register,
	onSubmit,
	isLoading,
}) => {
	return (
		<>
			<div id="NewSletter">
				<h3>¡Únete a nuestras novedades y promociones!</h3>

				<form onSubmit={onSubmit}>
					<div>
						<input
						// type="text"
							placeholder="Ingresa tu nombre"
							{...register("name", {
								maxLength : 15,
								required  : true,
								minLength : 3,
							})}
							className={errors?.name ? "error" : ""}
						/>
						<input
						// type="email"
							placeholder="Ingresa tu mail"
							{...register("email", {
								required  : true,
								maxLength : 30,
								pattern   : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
							})}
							className={errors?.email ? "error" : ""}
						/>
						<button
							type="submit"
							disabled={isLoading}
							className={isLoading ? "loading" : ""}
						>
							Suscribirme
						</button>
					</div>
				</form>
			</div>

		</>
	);
};

export default NewSletter;
