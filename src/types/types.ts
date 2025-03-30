export interface ICategory {
	id: number
	icon: {
		prefix: string,
		suffix: string
	}
	name: string
};

export interface ILocation {
	address: string,
	formattedAddress: string,
	country: string,
	locality: string,
	region: string
};

export interface IGeocodes {
	latitude: number,
	longitude: number,
};

export interface IRelatedPlace {
	categories: ICategory[],
	fsqId: string,
	name: string,
};

export interface IPlace {
	categories: ICategory[],
	name: string,
	closedBucket: string,
	fsq_id: string,
	location: ILocation,
	timezone: string,
	geocodes: {
		main: IGeocodes
	},
	link: string,
	relatedPlaces: {
		children: IRelatedPlace[]
	}
};

export interface IResponse {
	results: IPlace[]
};

export interface ICategoriesIds {
	landmarks: number,
	hotels: number,
	restaurants: number
};

export interface ICategoriesTitles {
	landmarks: string,
	hotels: string,
	restaurants: string
};

export interface ICity {
	name: string,
	country_name: string
};

export interface ITip {
	id: string,
	created_at: string,
	text: string
};