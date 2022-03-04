import {useForm} from "react-hook-form";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import NewSletter        from "./NewSletter";
import { instanceAxios } from "Helpers";
import { useState }      from "react";

const NewSletterContainer = () => {

	const [ isLoading, setIsLoading ] = useState(false);

	const { register, handleSubmit, reset ,formState : { errors } } = useForm({
		defaultValues : {
			email : "",
			name  : "",
		},
	});

	const onSubmit = async (data) => {
		setIsLoading(true);

		const res = await instanceAxios({
			method : "post",
			url    : "/newsletter",
			data   : data,
		});

		if (res.status === 200) {

			toast("Subscripción completada", {
				autoClose    : 2000,
				pauseOnHover : true,
				draggable    : true,
				progress     : undefined,
				onClose      : () => {
					setIsLoading(false)
					reset()
				},
				theme     	  : "dark",
			});

		}
	};

	return (
		<NewSletter
			errors={errors}
			register={register}
			isLoading={isLoading}
			onSubmit={handleSubmit(onSubmit)}
		/>
	);
};

export default NewSletterContainer;
