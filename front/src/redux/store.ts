import { configureStore } from '@reduxjs/toolkit'
import InventoryModalReducer from './reducers/InventoryModalReducer'
import MenuModalReducer from './reducers/MenuModalReducer'

export const store = configureStore({
  reducer: {
    inventoryModal: InventoryModalReducer,
    menuModal: MenuModalReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
