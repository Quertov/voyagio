export interface ICategory {
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
	fsqId: string,
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