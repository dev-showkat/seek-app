// store.js
import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import countryReducer from './slices/countrySlice';

const store = configureStore({
    reducer: {
        theme: themeReducer,
        country: countryReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;