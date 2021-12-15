import { RootState } from '../store/reducers/index';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const useTypesSelector: TypedUseSelectorHook<RootState> = useSelector;
