import React, { useState } from "react";

const Home = () => {
	const [tasks, setTasks] = useState([]);
	const [inputValue, setInputValue] = useState("");
	const [hovered, setHovered] = useState(null);

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			e.preventDefault(); // 🔴 evita pantalla en blanco

			if (inputValue.trim() !== "") {
				setTasks([...tasks, inputValue.trim()]);
				setInputValue("");
			}
		}
	};

	const deleteTask = (index) => {
		setTasks(tasks.filter((_, i) => i !== index));
	};

	return (
		<div className="container">
			<div className="row justify-content-center mt-5">
				<div className="col-12 col-md-8 col-lg-6">

					{/* TITLE 4GEEKS STYLE */}
					<h1
						className="text-center fw-light"
						style={{
							fontSize: "100px",
							color: "#EAD7D7"
						}}
					>
						todos
					</h1>

					{/* LIST */}
					<ul className="list-group shadow">

						{/* INPUT */}
						<li className="list-group-item">
							<input
								type="text"
								className="form-control border-0"
								placeholder="What needs to be done?"
								value={inputValue}
								onChange={(e) => setInputValue(e.target.value)}
								onKeyDown={handleKeyDown}
							/>
						</li>

						{/* EMPTY STATE */}
						{tasks.length === 0 ? (
							<li className="list-group-item text-muted">
								No hay tareas, añadir tareas
							</li>
						) : (
							tasks.map((task, index) => (
								<li
									key={index}
									className="list-group-item d-flex justify-content-between"
									onMouseEnter={() => setHovered(index)}
									onMouseLeave={() => setHovered(null)}
								>
									{task}

									{/* DELETE ON HOVER */}
									{hovered === index && (
										<span
											onClick={() => deleteTask(index)}
											style={{
												cursor: "pointer",
												color: "#cc9a9a"
											}}
										>
											✕
										</span>
									)}
								</li>
							))
						)}

						{/* COUNTER */}
						<li className="list-group-item text-muted small">
							{tasks.length} item{tasks.length !== 1 ? "s" : ""} left
						</li>

					</ul>
				</div>
			</div>
		</div>
	);
};

export default Home;