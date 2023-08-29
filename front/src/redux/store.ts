import { configureStore } from '@reduxjs/toolkit'
import MenuModalReducer from './reducers/MenuModalReducer'
import InventoryReducer from './reducers/InventoryReducer';

export const store = configureStore({
  reducer: {
    menuModal: MenuModalReducer,
    inventory: InventoryReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
