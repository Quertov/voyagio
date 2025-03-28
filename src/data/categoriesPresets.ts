import { ICategoriesIds } from "@/types/types";

export const categoryId: ICategoriesIds = {
	landmarks: 16000,
	hotels: 19014,
	restaurants: 13000
};

export const categoryTexts: Record<string, { title: string, placeholder: string }> = {
	landmarks: {
		title: "Один крок до подорожі",
		placeholder: "Визначне місце, памʼятка, площа і т.д."
	},
	hotels: {
		title: "Зупиніться в чудовому місці",
		placeholder: "Назва готелю або місце призначення"
	},
	restaurants: {
		title: "Знайдіть місця, де можна поїсти",
		placeholder: "Ресторан, кафе, бар або місце призначення"
	}
};

export const categoryName: Record<number, string> = {
	16000: "Визначні місця",
	19014: "Готелі",
	13000: "Ресторани"
};