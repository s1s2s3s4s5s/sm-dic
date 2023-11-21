const X_RapidAPI_KEY = "764d290df7msh71c363c3c9ed388p143c12jsn08e608baa86a"

export const Thesaurus = async ({ word }: { word: string }) => {
	const url = `https://thesaurus-by-api-ninjas.p.rapidapi.com/v1/thesaurus?word=${word}`

  const headers = {
		'X-RapidAPI-Key': X_RapidAPI_KEY,
		'X-RapidAPI-Host': 'thesaurus-by-api-ninjas.p.rapidapi.com',
	}

	try {
		const response = await fetch(url, { headers: headers })
		const result = await response.json()
		return result 
	} catch (error) {
		console.error(error)
	}
}

export const Dictionary = async ({ word }: { word: string }) => {
	const url = `https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${word}`

  const headers = {
		'X-RapidAPI-Key': X_RapidAPI_KEY,
		'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com',
	}

	try {
		const response = await fetch(url, { headers: headers })
		const result = await response.json()
		return result 
	} catch (error) {
		console.error(error)
	}
}

export const RandomQuote = async () => {
	const url = `https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes`

  const headers = {
		'X-RapidAPI-Key': X_RapidAPI_KEY,
		'X-RapidAPI-Host': 'quotes-by-api-ninjas.p.rapidapi.com',
	}

	try {
		const response = await fetch(url, { headers: headers })
		const result = await response.json()
		return result 
	} catch (error) {
		console.error(error)
	}
}