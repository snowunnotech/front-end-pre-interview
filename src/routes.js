import BooksCards from "./components/BooksCards.vue"
import BooksDetail from "./components/BooksDetail.vue"
import AddNewBook from "./components/AddNewBook.vue"

export const routes =[
	{path: '/',component:BooksCards},
	{path: '/detail',component:BooksDetail},
	{path: '/add',component:AddNewBook},
]