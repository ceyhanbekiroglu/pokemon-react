import React from "react"

export default function PokemonList({ pokemon }) {
	return (
		<div>
			{pokemon.map((p) => (
				<div key={p}>{p.slice(0, 1).toUpperCase() + p.slice(1, p.length)}</div>
			))}
		</div>
	)
}
