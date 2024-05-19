import {configureStore, Store} from "@reduxjs/toolkit";
import reducers from "./reducers";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import localStorage from "redux-persist/es/storage";

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store: Store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

export type State = typeof store.getState;
export type RootState = ReturnType<State>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;