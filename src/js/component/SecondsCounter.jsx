import React from "react";

// Uso del componente personalizado.

function SecondsCounter(props){

	let valorTexto = props.seconds.toString();
	let cMiles = valorTexto[valorTexto.length-6];
	let dMiles = valorTexto[valorTexto.length-5];	
	let uMiles = valorTexto[valorTexto.length-4];	
	let centenas = valorTexto[valorTexto.length-3];
	let decenas = valorTexto[valorTexto.length-2];
	let unidades = valorTexto[valorTexto.length-1];

	console.log(centenas);
	return(
		<div>
			<div className="container mt-5">
				<div className="row mx-auto">
					<div className="d-flex justify-content-center">
						<h3>Contador de Segundos</h3>	
					</div>

					<div className="col col-12 d-flex align-items-center justify-content-center" style={{height: "100vh;"}}>
						<button type="button" className="btn btn-primary"><i class="fa fa-clock"></i></button>
						<button type="button" className="btn btn-primary">{cMiles == undefined ? 0 : cMiles}</button>
						<button type="button" className="btn btn-primary">{dMiles == undefined ? 0 : dMiles}</button>
						<button type="button" className="btn btn-primary">{uMiles == undefined ? 0 : uMiles}</button>
						<button type="button" className="btn btn-primary">{centenas == undefined ? 0 : centenas}</button>
						<button type="button" className="btn btn-primary">{decenas == undefined ? 0 : decenas}</button>
						<button type="button" className="btn btn-primary">{unidades == undefined ? 0 : unidades}</button>
					</div>
				</div>
			</div>	
		</div>	
)}

export default SecondsCounter;
