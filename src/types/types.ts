interface ICategories {
	name: string
};

interface ILocation {
	address: string,
	formattedAddress: string,
	contry: string,
	locality: string,
	region: string
};

interface IGeocodes {
	latitude: number,
	longtitude: number,
};

interface IRelatedPlace {
	categories: ICategories[],
	fsqId: string,
	name: string,
};

export interface IPlace {
	categories: ICategories[],
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